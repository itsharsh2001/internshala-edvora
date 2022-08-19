import React from 'react'
const axios = require("axios");
import { useEffect, useState } from "react";

export const Data = () => {
  const [usersData, setUsersData] = useState([])
  const [productsData, setProductsData] = useState([])
  const [ordersData, setOrdersData] = useState([])
  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get("https://assessment.api.vweb.app/users");
  //     setData(data)
  //     console.log(data);
  //   })();
  // }, []);
  const submitHandler = async(path) => {
    const { data } = await axios.get("https://assessment.api.vweb.app/"+path);
    if(path==="users"){
      setUsersData(data)
      setProductsData([])
      setOrdersData([])
    }else if(path==="products"){
      setProductsData(data)
      setOrdersData([])
      setUsersData([])
    }else if(path==="orders"){
      setOrdersData(data)
      setUsersData([])
      setProductsData([])
    }
  }
  return (
    <div>
      <button onClick={()=>submitHandler("users")}>Users</button>
      <button onClick={()=>submitHandler("products")}>Products</button>
      <button onClick={()=>submitHandler("orders")}>Orders</button>


      {usersData && usersData.map((item,i)=>{
      return(<>
        <li>{item.user_id}</li>
        <li>{item.name}</li>
      </>
      )
    })}
      {productsData && productsData.map((item,i)=>{
      return(<>
        <li>{item.product_id}</li>
        <li>{item.name}</li>
        <li>{item.stock}</li>
        <li>{item.selling_price}</li>
      </>
      )
    })}
      {ordersData && ordersData.map((item,i)=>{
      return(<>
        <li>{item.order_id}</li>
        <li>{item.product_id}</li>
        <li>{item.quantity}</li>
        <li>{item.user_id}</li>
        <li>{item.order_date}</li>
      </>
      )
    })}
    </div>
  )
}
