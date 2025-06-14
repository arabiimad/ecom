import { Link, NavLink, useNavigate } from "react-router-dom";
import classes from "./Navbar.module.css";
import person from "../../../assets/person.svg";
import cart from "../../../assets/cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState,AppDispatch } from "../../../store/redux-store";
import { useEffect } from "react";
import { restoreUser } from "../../../store/auth-slice";
import {isTokenExpired} from "../../../Services/decodeToken"
export default function Navbar() {
  // Utiliser le hook `useNavigate` pour la redirection
  const navigate = useNavigate();

  // Récupérer l'utilisateur depuis le store Redux
  const user = useSelector((state: RootState) => state.auth.user);
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!user) {
      // Restaurer l'utilisateur si ce n'est pas encore fait
      dispatch(restoreUser());
    }
  }, [dispatch, user]);

  // Gérer la redirection en fonction de l'état de connexion
  const handleProfileClick = async () => {
    if (user) {
      navigate("/myAccount");
    } else if (token && !isTokenExpired(token)) {
      await dispatch(restoreUser());
      navigate("/myAccount");
    } else {
      navigate("/auth");
    }
  };

  return (
    <nav className={classes.nav}>
      <Link to="/" className={classes.link}>
        <h1 className={classes.h1}>
          Denta<span className={classes.rgb}>Shop</span>
        </h1>
      </Link>
      <div className={classes.navMenu}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${classes.active} ${classes.link} ${classes.navItem}`
              : `${classes.link} ${classes.navItem}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${classes.active} ${classes.link} ${classes.navItem}`
              : `${classes.link} ${classes.navItem}`
          }
          to="/shop"
        >
          Boutique
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${classes.active} ${classes.link} ${classes.navItem}`
              : `${classes.link} ${classes.navItem}`
          }
          to="/about"
        >
          À propos
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${classes.active} ${classes.link} ${classes.navItem}`
              : `${classes.link} ${classes.navItem}`
          }
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${classes.active} ${classes.link} ${classes.navItem}`
              : `${classes.link} ${classes.navItem}`
          }
          to="/blog"
        >
          Articles
        </NavLink>

        {user && (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${classes.active} ${classes.link} ${classes.navItem}`
              : `${classes.link} ${classes.navItem}`
          }
          to="/orders"
        >
          Orders
        </NavLink>
      )}

        {/* Lien vers le profil utilisateur */}
        <div onClick={handleProfileClick} className={`${classes.link} ${classes.auth}`}>
          <img className={classes.icon} src={person} alt="person icon" />
        </div>

        {/* Lien vers le panier */}
        <Link className={`${classes.link} ${classes.cart}`} to="/cart">
          <img className={classes.icon} src={cart} alt="cart icon" />
        </Link>
      </div>
    </nav>
  );
}


