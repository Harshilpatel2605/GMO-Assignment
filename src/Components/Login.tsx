import '../Styles/login.css'
import TextField from "@mui/material/TextField";
import {useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!name || !number || !email) {
      alert("All fields are necessary !");
    } else {
      // Validate phone Number format
      const phoneRegex = /^[0-9]+$/;
      if (number.length != 10) {
        alert("Please enter a valid Phone Number.");
        return;
      } else if (!phoneRegex.test(number)) {
        alert("Please enter a valid phone number.");
        return;
      }
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
      // Create an object to store user details
      const userDetails = {
        name: name,
        number: number,
        email: email,
      };

      // Store the object in local storage
      localStorage.setItem("userDetails", JSON.stringify(userDetails));

      // Optionally, display a message or perform additional actions
      alert("User details saved successfully!");

      navigate('/secondpage');
    }
  };
  return (
    <div className='login'>
      <h1 className="heading">User Details</h1>
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          className="input"
          id="name"
          label="Name"
          variant="outlined"
          margin="dense"
          sx={{ width: "300px",marginTop:"10px" ,marginBottom: "5px", marginLeft:"400px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br/>
        <TextField
          className="input"
          id="number"
          label="Phone Number"
          variant="outlined"
          margin="dense"
          sx={{ width: "300px", marginBottom: "5px", marginLeft:"400px" }}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        /><br/>
        <TextField
          className="input"
          id="email"
          label="Email"
          variant="outlined"
          margin="dense"
          sx={{ width: "300px", marginBottom: "20px", marginLeft:"400px" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            marginTop: "20px",
            display: "block",
            marginLeft: "300px",
            marginRight: "auto",
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Login;
