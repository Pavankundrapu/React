import React,{useContext} from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Profile(){

  const {User} = useContext(ThemeContext);

    if(!User)  return<div>Please enter the details of the user</div>
    return<div>the user name is {User.username} and password is {User.password}</div>
    
}

export default Profile