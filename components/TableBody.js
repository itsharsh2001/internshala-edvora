import classes from "./TableBody.module.css";

export default function TableBody(props) {
  return (
    <div className={classes.tablewrapper}>
      {props.usersData && (
        <section className={classes.heading1}>
          <h4>User ID</h4>
          <h4>User Name</h4>
        </section>
        
      )}

      {props.usersData &&
        props.usersData.map((item, i) => {
          return (
            <>
              <section key={i} className={classes.table1}>
                <h4>{item.user_id}</h4>
                <h4>{item.name}</h4>
              </section>
            </>
          );
        })}
      {props.productsData && (
        <section className={classes.heading2}>
          <h4>Product ID</h4>
          <h4>Name</h4>
          <h4>Stock</h4>
          <h4>Selling Price</h4>
        </section>
      )}
      {props.productsData &&
        props.productsData.map((item, i) => {
          return (
            <>
              <section key={i} className={classes.table2}>
                <h4>{item.product_id}</h4>
                <h4>{item.name}</h4>
                <h4>{item.stock}</h4>
                <h4>{item.selling_price}</h4>
              </section>
            </>
          );
        })}
      {props.ordersData && (
        <section className={classes.heading3}>
          <h4>Order ID</h4>
          <h4>Product ID</h4>
          <h4>Quantity</h4>
          <h4>User ID</h4>
          <h4>Order Date</h4>
        </section>
      )}
      {props.ordersData &&
        props.ordersData.map((item, i) => {
          return (
            <>
              <section key={i} className={classes.table3}>
                <h4>{item.order_id}</h4>
                <h4>{item.product_id}</h4>
                <h4>{item.quantity}</h4>
                <h4>{item.user_id}</h4>
                <h4>{item.order_date}</h4>
              </section>
            </>
          );
        })}
    </div>
  );
}
