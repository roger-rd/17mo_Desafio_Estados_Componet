import React from "react";



const Input = ({type,placeholder,onChange}) => {
    return ( 
        <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
       
        />
     );
}
 
export default Input;