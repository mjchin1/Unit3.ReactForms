import {useState} from 'react'
import Authenticate from './Authenticate'

export default function SignUpForm({setToken, setCurrentUserName}) {
    const [username, setUsername] = useState("")
    const [password, setPassword]= useState("")
    const [error, setError] = useState(null)
    

    async function handleSubmit(event) {
        event.preventDefault(); 
        try{ 
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', { 
                method: "POST",
                body: JSON.stringify({username, password})
            });
            const result = await response.json();
            console.log(result);
            setToken(result.token)
            setCurrentUserName(username)
            setUsername("")
            setPassword("")
            
            
          

        } catch(error){
            setError(error.message);
        }
        
    }

    return (
        <div className="signUp">
            <h2>Sign Up!</h2>
            <div className="errorMessage">
            {error && <p>{error}</p>}
            {password.length===8 ? "Your password is the correct length.":"Please choose an 8-character password."}
            </div>

            <form onSubmit={handleSubmit}>
                
                <label>
                    Username:<input value={username} onChange={(event) => setUsername(event.target.value)}/>
                </label>
                <label>
                    Password:<input value={password} onChange={(event) => setPassword(event.target.value)}/>
                </label>
                <button className="submitButton">Submit</button>
            </form>
            
        </div>

    )

}