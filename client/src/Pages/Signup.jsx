import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const hendleSignUp = async (e) => {
    e.preventDefault();

    // Validation
    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    } else{
        setError("");
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters.");
      return;
    }   else {
        setError("");
    }
    if(!validateFirstName(firstname))
    {
    setError("First Nmae must be at least 6 number.");
      return;
    }else {
       setError("");
    }

    if(!validateLastName(lastname))
    {
    setError("Last Name must be at least 6 number.");
      return;
    }else {
       setError("");
    }
   
   

    try {
      const response = await axios.post("http://localhost:5000/register", {
        "email": email,
        "first_name": firstname,
        "last_name": lastname,
        "password": password,
        "phone": phone
      });

      console.log(response.status)
      if (response.status === 201) {
        alert("Sign Up successful!");
       
      }
     
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setError("Email is already taken. Please use a different email.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };
  const validateFirstName = (firstname) => {
    return /^[A-Za-z\s]+$/.test(firstname);
  };
  
  const validateLastName = (lastname) => {
    return /^[A-Za-z\s]+$/.test(lastname);
  };
  
  

  

  return (
    <div className="p-20 bg-image bg-[50%] bg-cover}" style={{ backgroundImage: "url(https://miro.medium.com/v2/resize:fit:1126/1*ELBnrKVFj1M-CaD3G-jVtA.jpeg)", height: "400px" }}>
      <div className="flex justify-center items-center h-screen ">
        <div className="bg-white px-20 py-5 rounded-lg shadow-xl backdrop-filter backdrop-blur-lg">
          <h2 className="font-bold text-2xl mb-5 text-center">Sign Up </h2>
          <div className="grid grid-cols-2 gap-4 ">
            <input
              className="w-full p-2 border rounded-md"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              type="text"
              required
            />
            <input
              className="w-full p-2 border rounded-md"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              type="text"
              required
            />
          </div>
          <input
            className="w-full p-2 border rounded-md mt-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
          />
          <input
            className="w-full p-2 border rounded-md mt-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            required
          />
          <div>
            <input
              className="w-full p-2 border rounded-md mt-4"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              id="phone"
              name="phone"
            //   pattern="[0-9]{2}-[0-9]{3}-[0-9]{4}"
              placeholder="Enter phone number (e.g. 78-956-6789)"
            //   title="Phone number must be in the format 12-345-6789"
              required
            />
          </div>
          <button
            className="w-full p-2 bg-teal-600 text-white rounded-3xl mt-4 "
            onClick={hendleSignUp}
          >
            Sign up
          </button>
          {error && !error.email && !error.password && (
            <p className="text-red-600 mt-2">{error}</p>
          )}
          <button className=" mt-4  focus:outline-none text-blaxk  border-0 py-3 px-12 w-40 font-bold text-sm cursor-pointer transition-all duration-300  ">
            {" "}
            ot Log in
          </button>
          <div className="flex justify-center">
            <button className="p-2 mx-3 text-blue-500">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="p-2 mx-3 text-blue-500">
              <i className="fab fa-twitter"></i>
            </button>
            <button className="p-2 mx-3 text-blue-500">
              <i className="fab fa-google"></i>
            </button>
            <button className="p-2 mx-3 text-blue-500">
              <i className="fab fa-github"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
