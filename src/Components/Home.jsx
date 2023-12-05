import Card from "./Card/Card"
import { useState,useEffect, } from "react"

import '../css/home.css'


const cardData=[
    {
        name:"Virat kohli",
        email:"kohli@gmail.com",
        mobile:"876726289287",
        id:1
    },

    {
        name:"Rohit Sharma",
        email:"rohit@gmail.com",
        mobile:"876726289287",
        id:2
    }, {
        name:"Virat kohli",
        email:"kohli@gmail.com",
        mobile:"876726289287",
        id:3
    }, {
        name:"Rohit Sharma",
        email:"rohit@gmail.com",
        mobile:"876726289287",
        id:4
    }, {
        name:"Virat kohli",
        email:"kohli@gmail.com",
        mobile:"876726289287",
        id:5
    },
    {
        name:"Rohit Sharma",
        email:"rohit@gmail.com",
        mobile:"876726289287",
        id:6
    },
]




const Home=()=>{
    const [userData,setUserData]=useState([])


useEffect(()=>{
          fetchData();
},[])
 
// The async keyword is used to declare a function as asynchronous.
const fetchData=async()=>{
    // The await keyword is used inside an async function to pause the execution of the function until a promise is settled. 
      const data=await fetch("https://jsonplaceholder.typicode.com/users");

      const json = await data.json(); //essentially retrieves the JSON data from the response.
      setUserData(json);

      //  updating the state variable 
}


console.log(userData)
    return(
        <div className="home-div">
            <div className="heading">
                <h1>Home</h1>
            </div>
           <Card data={cardData}/>

           <div className="home-parent-div">

           {
                userData.map((res)=>(
                    <div className='demo-data-maping-div' key={res.name}>
                        <p>{res.name}</p>
                    </div>
                ))

            }
            </div>
        </div>
    )
}

export default Home