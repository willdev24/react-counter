import React, {useState} from "react";

import "./Comtent.css"

let cont = 0
const Couter = ({titulo})=>{
 
const [contador, setContador] = useState(0)

function adicao(id){
 
    if(id == 0){
        cont = cont + 1
       const dados = cont
        setContador(dados)
    }

    if(id == 1){
        cont = cont - 1
       const dados = cont
       if(dados <= 0 ) 
        setContador(dados)
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