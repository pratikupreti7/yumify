import React from 'react'
import DataCard from '../DataCard/DataCard'
import './styles.css'
import NoItem from '../NoItem/NoItem'
import { Link } from 'react-router-dom'
const DataList = (props) => {
    const {resData}=props

  return (resData.length===0)? <NoItem/>: (
  
    <div className="data-list my-10 ">
        
        {resData.map((item) => (
           
           <Link className="link" to={"/resturant/"+item.data.id} key={item.data.id}>
            
               <DataCard  data={item}  />
           
            </Link>

        
        ))}
  
     </div>
  )
}

export default DataList 
