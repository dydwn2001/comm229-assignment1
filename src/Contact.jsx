import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [emailAdress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  function handelSubmit(e) {

    e.preventDefault();
    navigate("/");
  }
  return (
    
    <div>
      <p>please leave your contact</p>
      <form onSubmit={(e)=>{handelSubmit(e)}}>
        <label>
          Firstname: 
        <input type="text" 
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
        required ></input>
        </label><br/>
          <label>
          Lastname: 
        <input type="text" 
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        required ></input>
        </label><br/>
        <label>
          Email: 
        <input 
        type="email" 
        value={emailAdress} 
        onChange={(e) => setEmailAddress(e.target.value)} 
        placeholder="emailid@gmail.com"
        required
      />
      </label><br/>
       <label>
          Contact number: 
        <input 
        type="tel" 
        value={contactNumber} 
        onChange={(e) => setContactNumber(e.target.value)} 
        placeholder="416-232-3122"
        required
      /><br/>
       <label>
          Message: 
        <textarea 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required ></textarea>
        </label><br/>
      </label>
      <button type="submit">submit</button>
      </form>
      <p>{firstname} {lastname} {emailAdress}</p>
    </div>
  )
}