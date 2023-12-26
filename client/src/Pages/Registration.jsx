import { useEffect } from "react";
import React, { useState } from "react";
import Swal from 'sweetalert2';
import axios from "axios";
import GoolgeSignInButton from "../Component/GoogleSignup"


const Registration = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\W).{8,}$/;
    return passwordRegex.test(password);
  };

  const validatephone_number = (phone_number) => {
    return /^07\d{8}$/.test(phone_number);
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    // Perform input validation
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (!validatephone_number(phone_number)) {
      setError("Please enter a valid phone number");
      return;
    }

    try {
      // Send the data to the server using Axios or another method
      const response = await axios.post("http://127.0.0.1:3001/register", {
        username: username,
        email: email,
        password: password,
        phone_number: phone_number,
      });

      // Handle the response as per your application's needs
    // Use SweetAlert2 directly without creating a separate instance
    const result = await Swal.fire({
      icon: 'success',
      title: 'Successfully logged in',
      text: `Go To Login Page `,
      showConfirmButton: true,
      timer: 5000, // Set a timer for 5 seconds (adjust as needed)
      confirmButtonText: 'OK',
    });

    if (result.isConfirmed) {
      // Redirect to the home page or perform any other action
      window.location.href = "/Login";
    }
    } catch (error) {
      setError("An error occurred during registration: " + error.message);
    }
  };

  const handleGoogleRegistration = async () => {
    // Implement Google Sign Up logic here
    // You can use a library like Firebase Authentication for Google Sign Up
    try {
      // Example using Firebase Authentication
      // const googleProvider = new firebase.auth.GoogleAuthProvider();
      // const result = await firebase.auth().signInWithPopup(googleProvider);
      // const user = result.user;
      // console.log(user);

      // Redirect or perform additional actions after Google Sign Up
    } catch (error) {
      setError("An error occurred during Google Sign Up: " + error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div id="CCo" className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">
                Welcome to CleanWave, <span className="text-blue-500">Sign Up</span>
              </h1>                  
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="relative">
                  <input
                    autoComplete="off"
                    id="username"
                    name="username"
                    onChange={(e) => setUserName(e.target.value)}
                    value={username}
                    type="text"
                    placeholder="Ahmad"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-700"
                    
                  />
                  <label
                    htmlFor="email" id="Email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
UserName                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-700"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email" id="Email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-700"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password" id="Email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={(e) => setphone_number(e.target.value)}
                    value={phone_number}
                    type="phone number"
                    placeholder="00962700000000"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-700"
                  />
                  {error && <p style={{ color: "red" }}>{error}</p>}
                  <label
                    htmlFor="confirmPassword" id="Email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                 Phone Number
                  </label>

                  <br></br>
                  <br></br>
   
                </div>
                <GoolgeSignInButton/>
              
                <div className="relative">
                  <button
                    onClick={handleRegistration}
                    className="bn632-hover bn28"
                    id="button"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

