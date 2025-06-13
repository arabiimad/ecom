import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/redux-store";
import { updateUser } from "../../store/auth-slice";
import { uiActions } from "../../store/ui-slice";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from './UpdateUser.module.css';
import { useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate(); 
  console.log(user?.id)

  const [firstname, setFirstname] = useState(user?.firstname || "");
  const [lastname, setLastname] = useState(user?.lastname || "");
  const [street, setStreet] = useState(user?.address?.street || "");
  const [houseNumber, setHouseNumber] = useState(user?.address?.houseNumber || "");
  const [zipCode, setZipCode] = useState(user?.address?.zipCode || "");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, setValue: (value: string) => void) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    try {
      const result = await dispatch(
        updateUser({
          id: user?.id || '',
          firstname,
          lastname,
          email: user?.email || '', // Email remains unchanged
          address: {
            street,
            houseNumber,
            zipCode,
          },
        })
      ).unwrap();
  
      console.log("Update result:", result);
  
      dispatch(
        uiActions.addNotification({
          type: "success",
          title: "User details updated successfully!",
        })
      );
  
      navigate("/myAccount");
    } catch (error) {
      console.error("Update failed:", error);
      dispatch(
        uiActions.addNotification({
          type: "error",
          title: "Failed to update user details.",
        })
      );
    } finally {
      setTimeout(() => {
        dispatch(uiActions.removeNotification());
      }, 2000);
    }
  };
  

  return (
    <div className={styles.container}>
      <h1>Update User Details</h1>
      <Card>
        <form onSubmit={handleSubmit}>
        <h2>Welcome! Please fill in the form to update your details.</h2>
          <fieldset>
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={(e) => handleInputChange(e, setFirstname)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={(e) => handleInputChange(e, setLastname)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={user?.email || ''}
              readOnly // Email is now read-only
            />
          </fieldset>
          <fieldset>
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              value={street}
              onChange={(e) => handleInputChange(e, setStreet)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="houseNumber">House Number</label>
            <input
              type="text"
              id="houseNumber"
              value={houseNumber}
              onChange={(e) => handleInputChange(e, setHouseNumber)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="zipCode">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              value={zipCode}
              onChange={(e) => handleInputChange(e, setZipCode)}
            />
          </fieldset>
          <Button type="submit">Update Details</Button>
        </form>
      </Card>
    </div>
  );
};

export default UpdateUser;
