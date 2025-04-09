import React, {useState } from 'react';


import Couter from './Contente'
import Altest from './Albb';

import './App.css';

function App() {
const [page, setPage] = useState()

 const handlechangePage =()=>{
  setPage(page)}


  const Page = page? <


     return(
      
            <>
            
            <button onClick={ () => handlechangePage('impa')}> IMPA</button>
            <button onClick={ () => handlechangePage('pá')}> PA</button>
            
            <Couter titulo=" ola mundo" />
            <Altest/>
            </>        
              )
  
}

export default App;
