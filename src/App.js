import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import FormValidation from './form';
import FormData from './form/FormData';
import Test from './form/Test';
import Webs from './stripe/Webs';


function App() {

  const [item,setItem] = useState([])

  const fetchData = (d) => {  //call back func
    // console.log(d,'donnnn');
    setItem([d])
  }

  // console.log(item,"frrr");


  return (
    <div className="App">
      
      {/* <Test /> */}
      <Router>
        <Routes>
        <Route path='/' element={ <Webs/>}/>
          <Route path='/form' element={ <FormValidation  fetchData={fetchData}/>}/>
          <Route path='/formdata' element={<FormData item={item}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
