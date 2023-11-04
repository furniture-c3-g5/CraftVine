import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cookies, setCookie] = useCookies(['token']);

  const handleSignIn = async () => {
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      const response = await axios.post("YOUR_API_ENDPOINT", {
        email: email,
        password: password,
      });

      // Assuming the API returns a token
      const token = response.data.token;

      // Set the token in a cookie
      setCookie('token', token, { path: '/' });

      // Handle successful sign-in, e.g., redirect or show a success message
      console.log("Sign-in successful:", response.data);
    } catch (error) {
      // Delay the error message and handle it
      setTimeout(() => {
        console.error("Sign-in error:", error);
        setError("Sign-in failed. Please check your credentials.");
      }, 300);
    }
  };

  return (
    <div className="p-20 bg-image bg-[50%] bg-cover" style={{backgroundImage: 'url(https://miro.medium.com/v2/resize:fit:1126/1*ELBnrKVFj1M-CaD3G-jVtA.jpeg)', height: '400px'}}>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white px-20 py-5 rounded-lg shadow-xl backdrop-filter backdrop-blur-lg">

          <h2 className="font-bold text-2xl mb-5 text-center">SignIn</h2>

          <div>
            <input
              className="w-full p-2 border rounded-md mt-4"
              placeholder="Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full p-2 border rounded-md mt-4"
              placeholder="Password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 transition delay-150 duration-300 ease-in-out">{error}</p>}
          <br/><br/>
          <button
            onClick={handleSignIn}
            className="w-full p-2 bg-teal-600 text-white rounded-3xl mt-4"
          >
            SignIn
          </button>
          <br/><br/>
          <p className="text-center text-sm text-gray-500">Don't have an account yet?
            <a href="#!"
              className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Sign up
            </a>.
          </p>
          <br/>
          <a href="#" className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT PASSWORD?</a>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
