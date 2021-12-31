import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { SubsContext } from '../contexts/subsContext';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const SubsPage = props => {
  const context = useContext(SubsContext)
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailAgain, setEmailAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  
  
  

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      backgroundColor: "rgb(204, 204, 0)",
    },
    media: { height: 300 },
  }));

  const register = () => {
    if (email.length > 0 && email === emailAgain) {
      context.register(Name, email);
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
      <h2>Sub Now!</h2>
      <p>You must register a Name and Email </p>
      <input value={Name} placeholder="Name" onChange={e => {
        setName(e.target.value);
      }}></input><br />
      <input value={email} type="email" placeholder="Email" onChange={e => {
        setEmail(e.target.value);
      }}></input><br />
      <input value={emailAgain} type="email" placeholder="Email again" onChange={e => {
        setEmailAgain(e.target.value);
      }}></input><br />
      {/* Login web form  */}
      <button>Register</button>
    </Card>
  );
};

export default SubsPage;