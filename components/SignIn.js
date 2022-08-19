import React from "react";
import {useState} from "react"
import classes from "./SignIn.module.css";
const axios = require("axios");
import { useRouter } from 'next/router'

export const SignIn = () => {
  const router = useRouter()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const loginHandlerButton = async () => {
    const { data } = await axios.get("https://assessment.api.vweb.app/users");

    data.map((item, i) => {
        if(item.name==email.trim() &&item.user_id==password.trim()){
            // console.log("BHot bdiya")
            localStorage.setItem('username', JSON.stringify(email.trim()));
            localStorage.setItem('userid', JSON.stringify(password.trim()));
            router.push("/")
        }
    });
};

  return (
    <div className={classes.signin}>
      <main>
        <img src="/without_tagline.png" alt="Logo" />
        <h3>Sign In</h3>
        <label htmlFor="email">User Name</label>
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          placeholder="Your User Name"
        />
        <section>
          <label htmlFor="password">User ID</label>
          {/* <p>Forget ID?</p> */}
        </section>
        <input
          type="number"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          placeholder="Your User ID"
        />

        <button onClick={loginHandlerButton}>Sign In</button>
      </main>
      <img
        className={classes.rightimage}
        src="/rightimage.png"
        alt="Banner Image"
      />
    </div>
  );
};
