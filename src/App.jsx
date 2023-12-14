import { useState } from 'react'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'
import './App.css'

function App() {
  const [token, setToken] = useState(null);
  const [currentUserName, setCurrentUserName] = useState(""); 
 
  return (
    <>
     <SignUpForm setCurrentUserName={setCurrentUserName} token={token} setToken={setToken} />
     <Authenticate currentUserName={currentUserName} token={token} setToken={setToken}/>
    </>
  )
}

export default App
