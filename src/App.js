import React from 'react';

import Couter from './Contente';

import './App.css';

function App() {
const [page, setPage] = useState()

const handlechangePage =()=>{
  setPage(page)}


 return(
        <>
          <button onClick={() => handlechangePage('albuns')}>álbum </button> // corrigir erro aq
          <button onClick={() => handlechangePage('counter')}>counter</button>

            <Couter titulo=" ola mundo" />
          
          </> 
              )
  
}

export default App;
