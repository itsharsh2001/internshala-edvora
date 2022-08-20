import classes from "./HamBurger.module.css";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import GridViewIcon from "@mui/icons-material/GridView";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ArticleIcon from "@mui/icons-material/Article";
import { useState } from "react";

export default function HamBurger(props) {
  
  return (
    <div className={classes.hamburger}>
      <section>
        <CloseIcon
          onClick={props.hamburgerHandler}
          style={{
            color: "var(--white)",
            fontSize: "30px",
            marginLeft: "15.0%",
            marginTop: "10%",
          }}
        />
        {/* <img src="/without_tagline.png" alt="logo" /> */}
        <h4 >
          <span></span>
          <GridViewIcon style={{ color: "var(--white)", marginRight: "5%" }} />
          Users
        </h4>
        <h4 >
          <span></span>
          <AddIcon style={{ color: "var(--white)", marginRight: "5%" }} />
          Products
        </h4>
        <h4 >
          <span></span>
          <SummarizeIcon style={{ color: "var(--white)", marginRight: "5%" }} />
          Orders
        </h4>
      </section>
      <span>
        <img src="/rightimage.png" alt="profile photo" />
        <h6>Web Developer</h6>
        <p>-Harsh</p>
      </span>
    </div>
  );
}
