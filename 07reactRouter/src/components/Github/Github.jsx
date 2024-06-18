import React, { useEffect, useState } from "react";

export default function Github()
{  const [data,setData] = useState([]);
   useEffect(()=>{
    fetch('https://api.github.com/users/pavankundrapu')
    .then(res => res.json())
    .then(data=>{
      setData(data);
    })
   },[])

  return(
    <>
     <div className="text-center m-4 bg-orange-700 text-white p-4 text-3xl">Github followers: {data.followers} 
     </div>
     <div className="">
      <img src={data.avatar_url} alt="Git Picture" />
      </div>
    </>
   
  )
}