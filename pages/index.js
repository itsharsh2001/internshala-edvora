import  DashBoard  from "../components/DashBoard";
import  HamBurger  from "../components/HamBurger";
import { useState, useEffect } from "react";
import classes from "./dashboard.module.css";
import Router from "next/router";
const axios = require("axios");

export default function Home() {
  const [hamburger, setHamburger] = useState(false);
  useEffect(() => {
    const id = localStorage.getItem("userid")
    if(!id)Router.push("/signin")
  }, [])
  
  const hamburgerHandler = () => {
    setHamburger(() => {
      return !hamburger;
    });
  };

  return (
    <>
      {/* <Data/> */}
      {hamburger && <HamBurger  hamburgerHandler={hamburgerHandler} />}
      <div className={classes.background}>
        <DashBoard hamburgerHandler={hamburgerHandler} />
      </div>
    </>
  );
}
