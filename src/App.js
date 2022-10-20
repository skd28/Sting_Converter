
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';

function App() {
  const [Mode,setmode] = useState('dark');
  const [alert ,setAlert] = useState(null);

  const showAlert = (message,type) =>
  {
          setAlert({
            msg:message,
            type:type
          })
         setTimeout(()=>{
setAlert(null);
         },1500);
  }
  const toggleMode = () =>{
    if(Mode==='light')
    {
      setmode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else {
      setmode ('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
    {/* <Navbar titile="TextUtils" aboutText="About TextUtils"/>
    <Navbar/> */}
    <Navbar titile="TextUtils" mode={Mode}  toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    <TextFrom heading="Enter the text to analyee below" mode={Mode}  />
    {/* <About/> */}
    </div>
    </>
       
  );
}

export default App;
