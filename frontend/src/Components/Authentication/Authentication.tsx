import classes from "./Authentication.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch ,  RootState  } from "../../store/redux-store";
import { login } from "../../store/auth-slice"; // L'action de login doit être importée
import { uiActions } from "../../store/ui-slice";
import { NavLink, useNavigate } from "react-router-dom";

export default function Authentication() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { error, user } = useSelector((state: RootState) => state.auth); // Sélection de l'état d'authentification

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const emailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (
      email.length === 0 ||
      !email.includes("@") ||
      !email.endsWith(".com") ||
      password.length < 8
    ) {
      if (
        email.length === 0 ||
        !email.includes("@") ||
        !email.endsWith(".com")
      ) {
        dispatch(
          uiActions.addNotification({
            type: "error",
            title: "Please enter a valid Email",
          })
        );
      }
      if (password.length < 8) {
        dispatch(
          uiActions.addNotification({
            type: "error",
            title: "Please enter a valid password (minimum 8 characters)",
          })
        );
      }
      setTimeout(() => {
        dispatch(uiActions.removeNotification());
      }, 2000);
    } else {
      dispatch(login({ email, password })); // Dispatch de l'action login avec les informations de connexion
    }
  };

  // Redirection après une connexion réussie
  if (user) {
    navigate("/myAccount"); // Redirige vers le tableau de bord si l'utilisateur est connecté
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Login</h1>
      <Card className={classes.formContainer}>
        <h2>
          Welcome! Please <span className={classes.red}>Login</span> to make any
          purchase.
        </h2>
        <form onSubmit={submitHandler}>
          <fieldset className={classes.fieldset}>
            <label htmlFor="Email">Email*</label>
            <input
              value={email}
              placeholder="eg: johndoe@gmail.com"
              type="email"
              id="Email"
              onChange={emailChange}
            />
          </fieldset>
          <fieldset className={classes.fieldset}>
            <label htmlFor="password">Password* (min 8 characters)</label>
            <input
              value={password}
              placeholder="Enter password"
              onChange={passwordChange}
              type="password" // Changement du type de texte en mot de passe
              id="password"
            />
          </fieldset>
          <Button type="submit" className={classes.submitBtn}>
            Login
          </Button>
        </form>
        {error && <p className={classes.error}>{error}</p>}
        <div className={classes.registerContainer}>
          <p>Don't have an account?</p>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${classes.active} ${classes.link}` : `${classes.link}`
            }
            to="/register"
          >
            Register here
          </NavLink>
        </div>
      </Card>
    </div>
  );
}
