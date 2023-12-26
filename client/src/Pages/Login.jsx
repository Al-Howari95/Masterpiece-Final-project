import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import GoolgeSignInButton from "../Component/GoogleSignup"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      // Basic validation
      if (!email || !password || !confirm) {
        setError("All fields are required");
        return;
      }

      if (!email.includes("@")) {
        setError("Invalid email address");
        return;
      }

      if (password !== confirm) {
        setError("Password and Confirm Password do not match");
        return;
      }

      // Password strength validation
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
      if (!password.match(passwordRegex)) {
        setError(
          "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character."
        );
        return;
      }

      // Clear any previous error
      setError("");
      const response = await axios.post(`http://127.0.0.1:3001/login`,{
        email: email,
        password: password
      });
      Cookies.set("accessToken",response.data.accessToken)
      console.log("Server Response:", response);
      sessionStorage.setItem('role',1);
      
      if(response.status == 200){
        if(response.data.value.id== undefined){
          throw new Error("Cheack");
        }
        console.log(response.data.value.id)
      // console.log("I am here ",response.data[0].id);
      

      console.log(response.data.value.accessToken)
      // Use SweetAlert2 directly without creating a separate instance
      const result = await Swal.fire({
        icon: 'success',
        title: 'Successfully logged in',
        text: `Welcome To Clean Wave`,
        showConfirmButton: true,
        // timer: 5000, // Set a timer for 5 seconds (adjust as needed)
        // confirmButtonText: 'OK',
      });

      if (result.isConfirmed) {
        // Redirect to the home page or perform any other action
        window.location.href = "/";
      }
    }else{
      throw new Error("osama");
    }

    } catch (error) {
      
      alert("An error occurred while logging in: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div id="CCo" className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">
                Welcome to CleanWave, <span className="text-blue-500">Login</span>
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
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
                    type="password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-700"
                    placeholder="Confirm Password"
                  /> 
                   {error && <p style={{ color: "red" }}>{error}</p>}
                  <label
                    htmlFor="confirmPassword" id="Email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Confirm password
                  </label> 
                  <br></br>
                  <br></br>
                  <div className="relative">
                    <p className="text-gray-600 text-sm mb-2 ml-6">
                      Don't have an account?{" "}
                      <Link
                        to="/Registration"
                        className="text-blue-500 hover:underline"
                      >
                        Click here to sign up.
                      </Link>
                    </p> <br></br>
                  </div>
                </div>
                <GoolgeSignInButton/>
                

                <div className="relative">
                  <button
                    onClick={handleLogin}
                    className="bn632-hover bn28"
                    id="button"
                  >
                    Login
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

export default Login;
