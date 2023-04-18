import React from 'react'
import DataList from './DataList/DataList'
import Search from './Search/Search'
import { useState,useEffect } from 'react'
import ShimmerUI from './ShimmerUI/ShimmerUI'




const App = () => {
  const [inputSearch,setInputSearch]=useState('')
  const [resdata,setResData]=useState([])
  const [filteredresData,setresFilteredData]=useState([])


  const handleChange = (e) => {
    e.preventDefault();
    const searchValue=e.target.value
    setInputSearch(searchValue);


    if (searchValue.trim().length > 0) {
      const data = resdata.filter((item) =>
        item.data.name.toLowerCase().includes(searchValue.trim().toLowerCase())
      );
      setresFilteredData(data);
    } else {
      setresFilteredData(resdata);
    }
  };

  const handleCuisineSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    setInputSearch(searchValue);

    if (searchValue.trim().length > 0) {
      const data = resdata.filter((item) =>
        item.data.cuisines.includes(searchValue.trim().toLowerCase())
      );
      setresFilteredData(data);
    } else {
      setresFilteredData(resdata);
    }
  };



  const clearBtn=()=>{
      setInputSearch('')
      setresFilteredData(resdata)
  }
  
  useEffect(() => {
      getResturants()
  }, [])

  async function  getResturants(){
   const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING")
   const json =await data.json()
   console.log(json)
   const restaurants = json?.data?.cards[2]?.data?.data?.cards;
   setResData(restaurants)
   setresFilteredData(restaurants)
  }


  // not render
  if(!resdata) return null;
  return (resdata.length===0)? <ShimmerUI />: (
    
    <>
        <Search value={inputSearch} changeInput={e=>setInputSearch(e.target.value)}  handleChange={handleChange} clearBtn={clearBtn} handleCuisineSearch={handleCuisineSearch}/>
        <DataList resData={filteredresData}  />
    </>
  )
}

export default App