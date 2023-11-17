import React, { useState } from 'react';
import './App.css';
import Swal from 'sweetalert2';



function App() {
  const [message] = useState("HELLO WORLD");

  const handleKNOWMEClick = () => {
    Swal.fire({
      title: 'CPE499 React JS',
      text: '6304515 Jareeporn Sutthinui',
      icon: 'info'
    })
  };

  const handleCONTACTClick = () => {
    Swal.fire({
      title: 'Are you Sure?',
      text: 'CLICK Confirm to get my social media',
      icon: 'question',
      showCancelButton:true,
      confirmButtonText:'Yes,of course',
      cancelButtonText:'nah! I dont wanna to know'
    }).then((result) => {
      if(result.isConfirmed){
        Swal.fire("this is my social media",'IG:ntynutt and FB:Jareeporn Sutthinui','success')
      }
    })
  };

  const handleWHATISYOURNAME = () => {
    Swal.fire({
      title: 'Enter your name',
      input: 'text',
      inputLabel: 'Name',
      inputPlaceholder: 'Enter your name',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'you need to enter your name!! i wanna know you!'
        }
      }
    }) .then((result) => {
      if (result.isConfirmed) {
        Swal.fire(`Hello ${result.value}!`);
      }
    });


  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>

        <button onClick={handleKNOWMEClick}>CLICK IF U WANNA KNOW ME</button>
        <br></br>
        <button onClick={handleCONTACTClick}>CLICK TO CONTACT ME</button>
        <br></br>
        <button onClick={handleWHATISYOURNAME}>WHAT IS YOUR NAME?</button>
        
      </header>
    </div>
  );
}

export default App;