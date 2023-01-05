import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";


const Form = () => {
    
    const [name, setName]= useState ("");
    const [password, setPassword] = useState("");
    const [errorName , setErrorName]= useState ("");


    const handleValidation = (e)=>{
        e.preventDefault ();
        setErrorName("");
        
        if(!name.trimStart()){
            return setErrorName('ingresa el Nombre')
        }
        if(password === "252525"){
            return alert("welcome")
        }
 
    } 
    
    
    return (
    <>
        <form onSubmit={handleValidation}>
            <div className="mb-3">
                <label  className="form-label">Nombre:</label>
                <Input 
                type="text"
                onChange={(e) => setName(e.target.value)} 
                className="form-control" 
                placeholder="Ingrese Nombre"
                value={name}
                />
                {
                errorName ? <span style={{color: 'red'}}>Debes Ingresar tu nombre</span>  : null
                }
            </div>
            <div className="mb-3">
                <label  className="form-label">Password</label>
                <Input 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control" 
                placeholder="Ingrese una contraseña"
                value={password}
                />
            </div>
                {
                    password === "252525"?(
                        <Button  text="Ingresar"/>
                    ):null
                }
              
        </form>
    </>
    );
}
export default Form;
