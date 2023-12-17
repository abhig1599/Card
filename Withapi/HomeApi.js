import axios from 'axios'
import React, { useState } from 'react'


const Home = () => {
const [users, setusers] = useState([])
const getUsers = async()=>{
  const {data} = await axios.get("https://picsum.photos/v2/list")
  setusers(data)
  console.log(data)
}
  return (
    <div >
        <div className='flex justify-center'>
            <button className='m-5 p-5 bg-green-500 text-xl font-bold rounded-lg'>
                Create
            </button>
        </div>
      <div className=''>
        <ul>
        {users.map((e,i)=>{
          return<div>
            <div className="card">
      <div className="profile-pic">
        <img
          key={i} 
          src={e.download_url}
          alt="Profile Pic"
        />
      </div>

      <div className="details">
        <div className="content">
          <h2>{e.author}</h2>
          <p className="tag">Size:{e.height}x{e.width}</p>
          <p className="about">
            {e.id} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            minima provident esse hic
          </p>
        </div>

        <div className="buttons">
          <div className="social">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-github"></i>
          </div>
          <a href="#" className="link">
            View <i className="fa-solid fa-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </div>
          </div>
        })}
        </ul>
      </div>
    </div>
  )
}
export default Home
