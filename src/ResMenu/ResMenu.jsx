
import { useSelector } from 'react-redux';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ShimmerUI from '../ShimmerUI/ShimmerUI';
import useResturant from '../hooks/useResturant';
import useMenu from '../hooks/useMenu';
import { addItem,removeItem } from '../helper/cartSlice';
import { useDispatch } from 'react-redux';
import noimage from '../img/noimage.jpeg'

const ResMenu = () => {
  const [itemCounts, setItemCounts] = useState({});



  const cartItems=useSelector(store=>store.cart.items)
    console.log(cartItems)
  const { id } = useParams();
  const resturant = useResturant(id);
  const menu = useMenu(id)?.data?.menu?.items;

  const dishNamesByCategory = menu
    ? Object.values(menu).reduce((acc, dish) => {
        if (!acc[dish.category]) {
          acc[dish.category] = [];
        }
        acc[dish.category].push(dish);
        return acc;
      }, {})
    : {};

    
    
    
    const categoryRef = useRef(null);
  const categories = Object.keys(dishNamesByCategory);
 
  
  const defaultCategory = categories?.length > 0 ? categories[0] : null;
  const [activeCategory, setActiveCategory] = useState(null);
  
  useEffect(() => {
    setActiveCategory(defaultCategory);
  }, [defaultCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const categoryElement = document.getElementById(category);
    categoryElement?.scrollIntoView();
  };
  
  const dispatch=useDispatch()
 

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    setItemCounts({ ...itemCounts, [item.id]: (itemCounts[item.id] || 0) + 1 });
  };
  
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
    setItemCounts({ ...itemCounts, [item.id]: itemCounts[item.id] - 1 });
  };
  
  // restaurant data
  const name = resturant?.data?.cards[0]?.card?.card?.info?.name;
  const city = resturant?.data?.cards[0]?.card?.card?.info?.city;
  const image = resturant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId;

  
  return !resturant ? (
    <ShimmerUI />
  ) : (
    <>
      <h2 className="text-white text-center pt-10 text-4xl bg-teal-500 h-32 m-0 mt-2">Menu</h2>
  
      <div className="flex mb-48 w-full">
        {/* First div: Info about Restaurant */}
        <div className="bg-teal-500 w-1/3 p-4 h-auto">
          <div className="w-2/3  border-2 border-white hover:border-white-500 hover:border-4 transition-all duration-300 ease-in-out rounded-lg shadow-lg p-6 ml-12 mt-2">
            <h2 className="text-3xl text-white mb-6 font-semibold">{name}</h2>
            <img
              className="border-2 border-white m-0 mb-6 w-full h-64 object-cover transition-all duration-300 ease-in-out transform hover:scale-95 rounded"
              src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' + image}
              alt=""
            />
            <h2 className="text-white text-xl font-medium">{city}</h2>
            
          </div>
         
        </div>

  
        {/* 2nd div: Menu */}
        <div className="mb-48 w-2/3 flex flex-col items-center justify-center">
        <div className="flex flex-wrap bg-teal-500 w-full h-full p-4" ref={categoryRef}>
            {categories.map((category) => (
              <button
                key={category}
                className={`text-l m-2 w-42 h-10 bg hover:bg-teal-700 hover:text text-white py-2 px-4 rounded ${
                  activeCategory === category ? 'bg-teal-700' : 'bg-teal-500'
                } transition-all duration-200 ease-in-out`}

                onClick={() => activeCategory && handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>


          <div className="w-4/5">
            {/* Menu Items */}
            {Object.keys(dishNamesByCategory).map((category) => {
          
              return (
                <div
                  id={category}
                  className={`flex flex-col items-center justify-center ${activeCategory === category ? '' : 'hidden'}`}
                  key={category}
                >
                  <h2 className="text-2xl mb-4">{category}</h2>
                  {dishNamesByCategory[category].map((dish) => {
                    const url=`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${dish.cloudinaryImageId}`
                         
                    return (
                      <div
                        className="bg-white m-2 p-4 border-2 border-teal-500 w-full flex flex-col justify-between transition-all duration-300 ease-in-out transform hover:scale-95 rounded-lg shadow-md"
                        key={dish.name}
                      >
                        <div className="flex justify-between">
                        <div className="text-2xl font-semibold mb-2">{dish?.name}</div>
                           {url? <div className='w-36'>
                              
                              <img src={url} alt="" />
                            </div>
                            : <div className='w-36'>
                              
                              <img src={noimage}  alt={"Empty"}/>
                          </div>}
                        </div>
                        <div className="flex flex-wrap text-l mb-2">{dish.description}</div>
                        
                        <div className="flex justify-between items-center">
                        <div className="text-lg font-medium">${((dish.price)/1400).toFixed(2)}</div>
                        {dish.price > 0 ? (
                                  itemCounts[dish.id] && itemCounts[dish.id] > 0 ? (
                                  <div className="flex items-center">
                                    <button
                                      onClick={() => handleRemoveItem(dish)}
                                      className="w-[50px] bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-l transition-all duration-200 ease-in-out"
                                    >
                                      -
                                    </button>
                                    <div className="w-[50px] bg-white text-teal-500 text-center py-2 px-4 border-teal-500 border-t-2 border-b-2">{itemCounts[dish.id]}</div>
                                    <button
                                      onClick={() => handleAddItem(dish)}
                                      className="w-[50px] bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-r transition-all duration-200 ease-in-out"
                                    >
                                      +
                                    </button>
                                  </div>
                                ) : (
                                  <button
                                    onClick={() => handleAddItem(dish)}
                                    className="w-[150px] bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded transition-all duration-200 ease-in-out"
                                  >
                                    Add
                                  </button>
                                )
                              ) : (
                                <button className="text-gray-500">Currently Not Available</button>
                              )}

                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      );
    
   

};

export default ResMenu;
