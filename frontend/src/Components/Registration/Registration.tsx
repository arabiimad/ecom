import classes from "./Registration.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/redux-store";
import { register } from "../../store/auth-slice";
import { uiActions } from "../../store/ui-slice";
import { NavLink , useNavigate} from "react-router-dom";

export default function Registration() {
  const dispatch = useDispatch<AppDispatch>();
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [houseNumber, setHouseNumber] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const navigate = useNavigate();

  const handleInputChange = async(
    e: ChangeEvent<HTMLInputElement>,
    setValue: (value: string) => void
  ) => {
    setValue(e.target.value);
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    if (!firstname || !lastname || !email || !password || !street || !houseNumber || !zipCode) {
      dispatch(
        uiActions.addNotification({
          type: "error",
          title: "Please fill all fields correctly",
        })
      );
      setTimeout(() => {
        dispatch(uiActions.removeNotification());
      }, 2000);
      return;
    }

    if (!email.includes("@") || !email.endsWith(".com")) {
      dispatch(
        uiActions.addNotification({
          type: "error",
          title: "Please enter a valid email address",
        })
      );
      setTimeout(() => {
        dispatch(uiActions.removeNotification());
      }, 2000);
      return;
    }

    if (password.length < 8) {
      dispatch(
        uiActions.addNotification({
          type: "error",
          title: "Password must be at least 8 characters long",
        })
      );
      setTimeout(() => {
        dispatch(uiActions.removeNotification());
      }, 2000);
      return;
    }

    try{
      const response = await dispatch(register({
      firstname,
      lastname,
      email,
      password,
      address: { // Fixed this part
        street,
        houseNumber,
        zipCode,
      },
    })).unwrap();
    

    dispatch(
      uiActions.addNotification({
        type: "success",
        title: "User Registered Successfully",
      })
    );
    setTimeout(() => {
      dispatch(uiActions.removeNotification());
    }, 2000);

    navigate("/myAccount");
  }catch (error) {
    console.error("Registration failed:", error);
  }
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Registration</h1>
      <Card className={classes.formContainer}>
        <h2>Welcome! Please fill in the form to register.</h2>
        <form onSubmit={submitHandler}>
          <fieldset className={classes.fieldset}>
            <label htmlFor="firstname">First Name*</label>
            <input
              value={firstname}
              placeholder="Enter your first name"
              type="text"
              id="firstname"
              onChange={(e) => handleInputChange(e, setFirstname)}
            />
          </fieldset>
          <fieldset className={classes.fieldset}>
            <label htmlFor="lastname">Last Name*</label>
            <input
              value={lastname}
              placeholder="Enter your last name"
              type="text"
              id="lastname"
              onChange={(e) => handleInputChange(e, setLastname)}
            />
          </fieldset>
          <fieldset className={classes.fieldset}>
            <label htmlFor="Email">Email*</label>
            <input
              value={email}
              placeholder="eg: johndoe@gmail.com"
              type="email"
              id="Email"
              onChange={(e) => handleInputChange(e, setEmail)}
            />
          </fieldset>
          <fieldset className={classes.fieldset}>
            <label htmlFor="password">Password* (min 8 characters)</label>
            <input
              value={password}
              placeholder="Enter password"
              type="password"
              id="password"
              onChange={(e) => handleInputChange(e, setPassword)}
            />
          </fieldset>
          <fieldset className={classes.fieldset}>
            <label htmlFor="street">Street*</label>
            <input
              value={street}
              placeholder="Enter your street"
              type="text"
              id="street"
              onChange={(e) => handleInputChange(e, setStreet)}
            />
          </fieldset>
          <fieldset className={classes.fieldset}>
            <label htmlFor="houseNumber">House Number*</label>
            <input
              value={houseNumber}
              placeholder="Enter your house number"
              type="text"
              id="houseNumber"
              onChange={(e) => handleInputChange(e, setHouseNumber)}
            />
          </fieldset>
          <fieldset className={classes.fieldset}>
            <label htmlFor="zipCode">Zip Code*</label>
            <input
              value={zipCode}
              placeholder="Enter your zip code"
              type="text"
              id="zipCode"
              onChange={(e) => handleInputChange(e, setZipCode)}
            />
          </fieldset>
          <Button type="submit" className={classes.submitBtn}>
            Register
          </Button>
        </form>
        <div className={classes.loginContainer}>
          <p>Already have an account?</p>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${classes.active} ${classes.link}` : `${classes.link}`
            }
            to="/auth"
          >
            Login here
          </NavLink>
        </div>
      </Card>
    </div>
  );
}
