import React from "react";
import { useParams } from "react-router-dom";

function User() 
{
  const {id} = useParams()
  return (
    <>
      <div className="text-center m-4 text-white text-3xl bg-orange-700 p-4">
      User: {id} 
      </div>
    </>
  )
}

export default User;