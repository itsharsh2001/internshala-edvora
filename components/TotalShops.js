import classes from "./TotalShops.module.css";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchField from "./SearchField";
import RedButton from "./RedButton";
import TableBody from "./TableBody";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import { useState } from "react";

export default function TotalShops(props) {

  const router = useRouter();

  const logoutButtonHandler = () => {
    localStorage.removeItem("username")
    localStorage.removeItem("userid")
    router.push("/signin")
  };
 

  return (
    <div className={classes.totalshops}>
      <nav>
        <div>
          {/* <SearchField
            onChange={inputHandler}
            placeholder="Search by any order parameter..."
          />
          <RedButton>Search</RedButton> */}
        </div>
        <div>
          <RedButton className={classes.add} onClick={logoutButtonHandler}>
            Logout
          </RedButton>
          {/* <SettingsIcon className={classes.settings} /> */}
        </div>
      </nav>
      <nav className={classes.hamburger}>
        <MenuIcon
          onClick={props.hamburgerHandler}
          className={classes.settings}
        />
        <img src="/without_tagline.png" alt="Logo" />
        <SettingsIcon className={classes.settings} />
      </nav>
      {/* <TableHeader/> */}
      <TableBody usersData={props.usersData} productsData={props.productsData} ordersData={props.ordersData} />
    </div>
  );
}
