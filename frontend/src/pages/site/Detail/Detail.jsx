import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { BASE_URL } from '../../../config/config'

const Detail = () => {
 const {id}=useParams()
const [data, setData] = useState([])
   
    useEffect(() => {
        axios.get(`${BASE_URL}${id}`)
        .then((res) => {
            setData(res.data);
          console.log(res.data)
  
        })
       
    }, []);
  return (
    <div className=' container d-flex py-5 gap-5 '>
      <div className="col-6"><img   className='img-fluid w-75' src={data.image} alt="" /></div>
      <div className="col-6 d-flex flex-column justify-content-center ">
      
      <h2>{data.title} </h2>
      <h3>{data.price} $</h3>
      <p>{data.description}</p>
      </div>

    </div>
  )
}

export default Detail
