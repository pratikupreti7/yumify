import {useState,useEffect} from 'react'

const useMenu = (id) => {
    const [menuDetails, setMenuDetails] = useState(null)

    useEffect(() => {
        async function getmenuDetails(){
            const data=await fetch(
                "https://www.swiggy.com/dapi/menu/quick?menuId="+id+"&categories=true"
            )
            const json=await data.json()
            setMenuDetails(json)
        }

        getmenuDetails();
    }, [id])

     


    
  return (
    menuDetails
  )
}

export default useMenu
