import React, {useState} from "react";

import "./Comtent.css"


const Couter = ({titulo})=>{
 
    
const [contador, setContador] = useState(0)


function menos(){
    setContador(452)
  
     }
     
     function mais(){
    setContador(contador)
     
     }

    return(
    <div className="contador"> 
    
        <span>{contador}</span>
       
       <article className="mm"> 
        <button onClick={()=>mais()}>+</button>
        <button onClick={()=>menos()}>-</button>
       </article>
       
    </div>

    )


}





export default Couter