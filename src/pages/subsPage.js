import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const SubsPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  
  
  

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      backgroundColor: "rgb(204, 204, 0)",
    },
    media: { height: 300 },
  }));

  const register = () => {
    if (password.length > 0 && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
  }

  const { from } = props.location.state || { from: { pathname: "/" } };
  const classes = useStyles();


  if (registered === true) {
    return <Redirect to="./login" />;
  }

  return (
    <Card className={classes.root} variant="outlined">
      <h2>Sign Up Now!</h2>
      <p>You must register a username and password to log in </p>
      <input value={userName} placeholder="Name" onChange={e => {
        setUserName(e.target.value);
      }}></input><br />
      <input value={password} type="password" placeholder="Your email" onChange={e => {
        setPassword(e.target.value);
      }}></input><br />
      <input value={passwordAgain} type="email" placeholder="Your email again" onChange={e => {
        setPasswordAgain(e.target.value);
      }}></input><br />
      {/* Login web form  */}
      <button onClick={register}>Register</button>
    </Card>
  );
};

export default SubsPage;