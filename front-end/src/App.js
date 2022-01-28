import Button from "@mui/material/Button";
import './App.css';

function App()
{
  return (<div className="App" >

    <h1>Log in form</h1>
    <label>first name</label>
    <input type="text" placeholder="enter name" />
    <label>last name</label>
    <input type="text" placeholder="enter name" />
    <label>email</label>
    <input type="text" placeholder="enter email" />
    <label>age</label>
    <input type="number" placeholder="enter number" />
    <Button variant="button">submit</Button>




  </div>
  );
}

export default App;