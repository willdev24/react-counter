import React, {useState, useEffect} from "react";

import "./Comtent.css"

const Couter = ({titulo})=>{
   const [contador, setContador] = useState(0)

   useEffect(()=>{
console.log('renderisou')
   },[])

function adicao(id){
 
    if(id == 0){
        let cont = contador + 1
       
        setContador(cont)
    }

    if(id == 1){
        let cont = contador - 1
        setContador(cont)
    }
    
}

    return(
    <div className="contador"> 
    
        <span>{contador}</span>
       
       <article className="mm"> 
        <button onClick={()=>adicao(0)}>+</button>
        <button onClick={()=>adicao(1)}>-</button>
       </article>
       
    </div>

    )

}






export default Couter