import classes from "./DashBoard.module.css";
import SideBar from './SideBar';
import HamBurger from './HamBurger';
import TotalShops from './TotalShops';
import {useEffect,useState} from 'react'
const axios = require("axios");


export default function DashBoard(props) {
  const [usersData, setUsersData] = useState([])
  const [productsData, setProductsData] = useState(null)
  const [ordersData, setOrdersData] = useState(null)
  // const [myOrdersData, setMyOrdersData] = useState(null)

  useEffect(() => {
    (async()=>{
      const { data } = await axios.get("https://assessment.api.vweb.app/users");
      setUsersData(()=>{return data})
    })()
  }, [])
  

  const pathSetter = async(path) => {
    
      const { data } = await axios.get("https://assessment.api.vweb.app/"+path);
    
    if(path==="users"){
      setUsersData(()=>{return data})
      setProductsData(()=>{return null})
      setOrdersData(()=>{return null})

      // console.log(usersData)
    }else if(path==="products"){
      setProductsData(()=>{return data})
      setOrdersData(()=>{return null})
      setUsersData(()=>{return null})

    }else if(path==="orders"){
      const id = localStorage.getItem("userid")//This id will be 
      id = id.replaceAll('"','')
      console.log(id)
      data=data.filter((item)=>item.user_id === +id)//here we convert string to integer
      setOrdersData(()=>{return data})
      
      setUsersData(()=>{return null})
      setProductsData(()=>{return null})
      // console.log(ordersData)
    }
  }
  return (
    <div className={classes.dashboard}>
      {/* <HamBurger/> */}
        <SideBar pathSetter={pathSetter} />
        <TotalShops usersData={usersData} productsData={productsData} ordersData={ordersData} hamburgerHandler={props.hamburgerHandler} />
    </div>
  );
}
