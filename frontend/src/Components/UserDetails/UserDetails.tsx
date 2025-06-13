import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/redux-store";
import { restoreUser, logout } from "../../store/auth-slice";
import { useNavigate } from "react-router-dom";
import { uiActions } from "../../store/ui-slice";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./UserDetails.module.css";
import person from "../../assets/person.svg"; // Ajoutez votre image ici

const UserDetails = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (!user) {
      // Restaurer l'utilisateur si ce n'est pas encore fait
      dispatch(restoreUser());
    }
  }, [dispatch, user]);

  // Affichez un message de chargement si les données sont encore en cours de récupération
  if (loading) {
    return <div className={styles.container}>Loading...</div>;
  }

  // Redirigez vers /auth si l'utilisateur n'est pas connecté
  if (!user) {
    navigate("/auth");
    return null;
  }

  const handleLogout = () => {
    dispatch(logout());
    dispatch(
      uiActions.addNotification({
        type: "success",
        title: "Logged out successfully!",
      })
    );
    navigate("/");
  };

  const handleEditDetails = () => {
    navigate("/update"); 
  };

  return (
    <div className={styles.container}>
      <h1>User Details</h1>
      <Card>
        <div className={styles.profileContainer}>
          <div className={styles.profileImage}>
            <img className={styles.icon} src={person} alt="user icon" />
          </div>
          <div className={styles.details}>
            <p><strong>First Name:</strong> {user?.firstname || 'N/A'}</p>
            <p><strong>Last Name:</strong> {user?.lastname || 'N/A'}</p>
            <p><strong>Email:</strong> {user?.email || 'N/A'}</p>
            <p><strong>Address:</strong></p>
            <p>{user?.address?.street || 'N/A'}, {user?.address?.houseNumber || 'N/A'}, {user?.address?.zipCode || 'N/A'}</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button onClick={handleEditDetails} className={styles.modifButton}>Edit Details</Button>
          <Button onClick={handleLogout} className={styles.logoutButton}>Logout</Button>
        </div>
      </Card>
    </div>
  );
};

export default UserDetails;
