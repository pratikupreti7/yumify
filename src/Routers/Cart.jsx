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
                  {item.item.name}, Count: {item.count}, Price: {(item.item.price / 1400).toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  

export default Cart;
