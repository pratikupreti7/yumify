import {useState,useEffect} from 'react'
const useResturant = (id) => {
  const [resturant,setResturant]=useState(null)

  // & Fetch API for resturant data
  useEffect(() => {
    async function getResInfo(){
        const data= await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId='+id)
        const json=await data.json()
        console.log(json)
        setResturant(json)
     }

    getResInfo()
 
},[id])

  //& Get data for a specific resturant from API
  return (
    resturant
  )
}

export default useResturant


