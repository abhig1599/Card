import axios from 'axios'
import React, { useState } from 'react'
import Cart from './cart/Cart'


const Home = () => {
const [users, setusers] = useState([])
const getUsers = async()=>{
  const {data} = await axios.get("https://picsum.photos/v2/list")
  setusers(data)
  console.log(data)
}
  return (
    <div>
        <div className='flex justify-center'>
            <button className='m-5 p-5 bg-green-500 text-xl font-bold rounded-lg text-white' onClick={getUsers}>
                Create
            </button>
        </div>
        <div>
        {users.map((elem,i)=>{
        return <Cart name={elem.author} Link={elem.download_url} width={elem.width} height={elem.height} />
        // <div>
        //   {/* this is to print the name of the author */}
        //   <h1 key={i}>{elem.author}</h1>
        //   {/* this is to print the image of the api */}
        // <img className='border-spacing-2 m-3 inline-block justify-center align-middle rounded border-8 '
        //  key={i} 
        //  src={elem.download_url}
        //  width={300}
        //  height={300}
        //  />
         
        //  </div>
      })}

        </div>
        
    </div>
  )
}
export default Home
