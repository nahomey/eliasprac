import Button from "@mui/material/Button";
import './App.css';
import {useState} from "react"

function App()
{
  const [firstName,setFirstName]=useState(""),
  const [lastName,setLastName]=useState(""),
  const [email,setEmail]=useState(""),
  const [age,setAge]=useState(0),
  return (<div className="App" >

    <h1>Log in form</h1>
    <label>first name</label>
    <input type="text" placeholder="enter name" onChange={(event)=>setFirstName(event.target.value)}/>
    <label>last name</label>
    <input type="text" placeholder="enter name" onChange={(event)=>setLastName(event.target.value)} />
    <label>email</label>
    <input type="text" placeholder="enter email" onChange={(event)=>setEmail(event.target.value)} />
    <label>age</label>
    <input type="number" placeholder="enter number" onChange={(event)=>setAge(event.target.value)} />
    <Button variant="button">submit</Button>
  </div>
  );
}

export default App;