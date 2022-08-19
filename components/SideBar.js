import classes from "./SideBar.module.css";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import GridViewIcon from "@mui/icons-material/GridView";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ArticleIcon from "@mui/icons-material/Article";
import Link from "next/link";
export default function SideBar(props) {
  const pathHandler = (path) => {
    props.pathSetter(path)
  }
  return (
    <div className={classes.sidebar}>
      <section>
        <img src="/without_tagline.png" alt="logo" />
        <h4 onClick={()=>pathHandler("users")}>
          <span></span>
          <GridViewIcon
            style={{ color: "var(--dashboard_red)", marginRight: "5%" }}
          />
          Users
        </h4>

        <h4 onClick={()=>pathHandler("products")}>
          <span></span>
          <AddIcon
            style={{ color: "var(--dashboard_red)", marginRight: "5%" }}
          />
          Products
        </h4>
        <h4 onClick={()=>pathHandler("orders")}>
          <span></span>
          <SummarizeIcon
            style={{ color: "var(--dashboard_red)", marginRight: "5%" }}
          />
          My Orders
        </h4>
        {/* <h4 onClick={()=>pathHandler("orders")}>
          <span></span>
          <AddIcon
            style={{ color: "var(--dashboard_red)", marginRight: "5%" }}
          />
          My Orders
        </h4> */}
      </section>
      <span>
        <img src="/rightimage.png" alt="profile photo" />
        <h6>Web Developer</h6>
        <p>-Harsh</p>
      </span>
    </div>
  );
}
