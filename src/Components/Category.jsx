import React, { useEffect } from 'react'
import { getData } from '../context/DataContext'
import {Link} from "react-router-dom"
const Category = () => {
  const { categoryOnlyData } = getData()



  return (
    <div className='bg-[#101829] h-[110px]'>
      <div className='max-w-7xl mx-auto gap-4 flex  items-center justify-around py-7 px-4 '>
        {
          categoryOnlyData.map((item, index) => {
            return <div key={index} className='mt-3'>

              <Link to={`/products`}> <button className='uppercase bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer'>{item}</button>
              </Link>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Category