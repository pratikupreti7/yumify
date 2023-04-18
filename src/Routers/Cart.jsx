import { useSelector } from "react-redux";

const Cart = () => {
    const cart = useSelector((store) => store.cart.items);
  
    // Group cart items by restaurant id and item name
    const groupedCartItems = {};
  
    cart.forEach((cartItem) => {
      const { restId, name } = cartItem;
  
      if (!groupedCartItems[restId]) {
        groupedCartItems[restId] = {};
      }
  
      if (!groupedCartItems[restId][name]) {
        groupedCartItems[restId][name] = {
          item: cartItem,
          count: 0,
        };
      }
  
      groupedCartItems[restId][name].count += 1;
    });
  
    return (
      <div>
        <h1 className="text-2xl text-center p-2 m-2">Cart</h1>
        <div className="text-center p-2 m-2">
          Total Items: {cart.length}
        </div>
  
        {Object.keys(groupedCartItems).map((restId) => (
          <div key={restId}>
            <h2>Restaurant Name: {restId}</h2>
            <ul>
              {Object.values(groupedCartItems[restId]).map((item) => (
                <li key={item.item.id}>
                  {item.item.name}, Count: {item.count}, Price: {(item.item.price / 7000).toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  

export default Cart;

// import { useSelector, useDispatch } from "react-redux";
// import { clearCart, clearItem } from "../store/cartSlice";

// const Cart = () => {
//   const cart = useSelector((store) => store.cart.items);
//   const dispatch = useDispatch();

//   // Group cart items by restaurant id and item name
//   const groupedCartItems = {};

//   cart.forEach((cartItem) => {
//     const { restId, name } = cartItem;

//     if (!groupedCartItems[restId]) {
//       groupedCartItems[restId] = {};
//     }

//     if (!groupedCartItems[restId][name]) {
//       groupedCartItems[restId][name] = {
//         item: cartItem,
//         count: 0,
//       };
//     }

//     groupedCartItems[restId][name].count += 1;
//   });

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   const handleClearItem = () => {
//     dispatch(clearItem());
//   };

//   const handleIncrement = (restId, name) => {
//     const index = cart.findIndex(
//       (item) => item.restId === restId && item.name === name
//     );
//     dispatch(addItem(cart[index]));
//   };

//   const handleDecrement = (restId, name) => {
//     const index = cart.findIndex(
//       (item) => item.restId === restId && item.name === name
//     );
//     dispatch(removeItem(index));
//   };

//   return (
//     <div>
//       <h1 className="text-2xl text-center p-2 m-2">Cart</h1>
//       <div className="text-center p-2 m-2">
//         Total Items: {cart.length}
//         <button onClick={handleClearCart}>Clear Cart</button>
//       </div>

//       {Object.keys(groupedCartItems).map((restId) => (
//         <div key={restId}>
//           <h2>Restaurant Name: {restId}</h2>
//           <ul>
//             {Object.values(groupedCartItems[restId]).map((item) => (
//               <li key={item.item.id}>
//                 {item.item.name}, Count: {item.count}, Price: {(item.item.price / 7000).toFixed(2)}
//                 <button onClick={() => handleIncrement(restId, item.item.name)}>+</button>
//                 <button onClick={() => handleDecrement(restId, item.item.name)}>-</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}

//       {cart.length > 0 && (
//         <div className="text-center p-2 m-2">
//           <button onClick={handleClearItem}>Remove Last Item</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;



