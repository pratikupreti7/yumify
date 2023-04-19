// import { useDispatch, useSelector } from "react-redux";
// import { clearCart } from "../helper/cartSlice";

// const Cart = () => {
//   const cart = useSelector((store) => store.cart.items);
//   const dispatch = useDispatch();

//   // Group cart items by restaurant id and item name
//   const groupedCartItems = {};
//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

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

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-semibold text-center p-4 bg-white shadow-sm">
//         Your Cart
//       </h1>
//       <div className="container mx-auto py-4">
//         <div className="flex justify-end">
//           {/* Clear cart button */}
//           <button
//             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300"
//             onClick={handleClearCart}
//           >
//             Clear Cart
//           </button>
//         </div>

//         {Object.keys(groupedCartItems).map((restId) => (
//           <div
//             key={restId}
//             className="bg-white rounded-md shadow-sm my-4 py-4 px-8"
//           >
//             <h2 className="text-xl font-medium mb-4">{restId}</h2>
//             <ul>
//               {Object.values(groupedCartItems[restId]).map((item) => (
//                 <li key={item.item.id} className="flex justify-between py-2">
//                   <div>
//                     <p className="font-medium">{item.item.name}</p>
//                     <p className="text-gray-500 text-sm">
//                       {item.item.description}
//                     </p>
//                     <p className="text-gray-500 text-sm">
//                       Price: ${(item.item.price / 1400).toFixed(2)}
//                     </p>
//                   </div>
//                   <div className="flex items-center">
//                     <p className="text-sm font-medium mr-2">{item.count}</p>
//                     <button className="bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-700 transition-colors duration-300">
//                       Remove
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cart;

import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItem,addItem } from '../helper/cartSlice';
import noimage from '../img/noimage.jpeg'
const Cart = () => {
  
const cart = useSelector((store) => store.cart.items);
const dispatch = useDispatch();

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

const handleClearCart = () => {
dispatch(clearCart());
};

const handleRemoveItem = (item) => {
dispatch(removeItem(item));
};

return (
<div className="p-4">
<h1 className="m-4 text-teal-500 text-3xl text-center font-semibold">Cart</h1>
 

  <div className="mt-4 mb-40  flex flex-col justify-center items-center">
    {/* Cart items */}
    {/* { const url=`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${dish.cloudinaryImageId}`} */}

     {/* Clear cart button */}
  {
    (cart.length>0)?<div className='w-2/3 flex justify-end'><button
    className=" bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 mt-4"
    onClick={handleClearCart}
  > Clear Cart
  </button></div>
   :<div className=' px-4 py-2 flex justify-center text-xl text-center'> No item in cart 😲 </div>
  }
    {
    Object.keys(groupedCartItems).map((restId) => (
               
      <div key={restId} className="mb-8 w-2/3">
        {/* <h2 className="text-lg font-semibold">Restaurant Name: {restId}</h2> */}
        <ul className="divide-y divide-gray-300 mt-8">
          {Object.values(groupedCartItems[restId]).map((item) => (
            <li key={item.item.id} className="py-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  
                {item?.item?.cloudinaryImageId? <img
                    src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item?.item?.cloudinaryImageId}`}
                    alt={"Not Found"}
                    className="w-16 h-16 rounded-lg object-cover"
                  />:<img src={noimage} className="w-16 h-16 rounded-lg object-cover" alt={"Empty"}/>
                }
                      
                   
                </div>
                <div className="ml-4">
                  <h3 className="text-md font-medium">{item.item.name}</h3>
                  <p className="text-gray-500">${((item.item.price)/1400).toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center">
                <button
                  className="rounded-full bg-teal-500 text-white w-6 h-6 flex items-center justify-center"
                  onClick={() => handleRemoveItem(item.item)}
                >
                  <span className="text-sm font-medium">-</span>
                </button>
                <span className="text-lg mx-2">{item.count}</span>
                <button
                  className="rounded-full bg-teal-500 text-white w-6 h-6 flex items-center justify-center"
                  onClick={() => dispatch(addItem(item.item))}
                >
                  <span className="text-sm font-medium">+</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>
);
};

export default Cart;