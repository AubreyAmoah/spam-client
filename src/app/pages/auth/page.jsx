"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "@/app/context/ThemeContext";
import PasswordInput from "@/app/(components)/PassowredInput";
import EmailInput from "@/app/(components)/EmailInput";
import UsernameInput from "@/app/(components)/UsernameInput";
import Hint from "@/app/(components)/Hint";
import Button from "@/app/(components)/CustomButton";
import { faSignIn, faUser } from "@fortawesome/free-solid-svg-icons";
import CustomInput from "@/app/(components)/CustomInput";
import axios from "axios";
import toast from "react-hot-toast";

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function isStrongPassword(password) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

export default function Home() {
  const { dark } = useContext(ThemeContext);
  const [hint, setHint] = useState("All hints will show up here");
  const [hintVisibility, setHintVisibility] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [signUpDisabled, setSignUpDisabled] = useState(true);
  const [signInDisabled, setSignInDisabled] = useState(true);

  const [signupCredentials, setSignupCredential] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [signinCredentials, setSigninCredential] = useState({
    username: "",
    password: "",
  });

  // Function to toggle between sign in and signup
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
    setHintVisibility(false);
  };

  //validate Signup fields
  const validateSignUp = () => {
    if (signupCredentials.email === "") {
      setHintVisibility(true);
      return setHint("Email field must not be empty");
    }

    if (signupCredentials.username === "") {
      setHintVisibility(true);
      return setHint("Username field must not be empty");
    }

    if (signupCredentials.password === "") {
      setHintVisibility(true);
      return setHint("Password field must not be empty");
    }

    if (
      signupCredentials.email !== "" &&
      signupCredentials.password !== "" &&
      signupCredentials.username !== ""
    ) {
      setSignUpDisabled(false);
    } else {
      setSignUpDisabled(true);
    }

    setHintVisibility(false);
  };

  const validateSignIn = () => {
    if (signinCredentials.username === "") {
      return setHint("Email/Username field must not be empty");
    }

    if (signinCredentials.password === "") {
      return setHint("Password field must not be empty");
    }

    if (signinCredentials.username && signinCredentials.password) {
      setSignInDisabled(false);
    }

    setHintVisibility(false);
  };

  const handleEmailChange = (email) => {
    setSignupCredential((prev) => ({ ...prev, email }));
    validateSignUp();
  };

  const handleUsernameChange = (username) => {
    setSignupCredential((prev) => ({ ...prev, username }));
    validateSignUp();
  };

  const handlePasswordChange = (password) => {
    setSignupCredential((prev) => ({ ...prev, password }));
    validateSignUp();
  };

  const handleUsernameSigninChange = (username) => {
    setSigninCredential((prev) => ({ ...prev, username }));
    validateSignIn();
  };

  const handlePasswordSigninChange = (password) => {
    setSigninCredential((prev) => ({ ...prev, password }));
    validateSignIn();
  };

  const handleSignIn = async () => {
    validateSignIn();
    try {
      await axios.post(`http://localhost:5500/auth/signin`, signinCredentials);

      toast.success("Signin sucessful");
      setHintVisibility(false);
      setSigninCredential({ username: "", password: "" });
    } catch (error) {
      console.error(error);
      return toast.error(error.response.data.message || "Server Error");
    }
  };

  const handleSignUp = async () => {
    validateSignUp();
    if (!isValidEmail(signupCredentials.email)) {
      setHintVisibility(true);
      return setHint("Must be a valid Email");
    }

    try {
      const res = await axios.post(
        `http://localhost:5500/auth/signup`,
        signupCredentials
      );

      if (res.status === 201) {
        toast.success("Registeration Successful ou can signin now");
        toggleSignIn();
        setHintVisibility(false);
        setSignupCredential({ email: "", username: "", password: "" });
      }
    } catch (error) {
      console.log(error);
      return toast.error(error.response.data.message || "Server Error");
    }
  };

  return (
    <div
      className={`flex gap-4 max-[900px]:flex-col h-screen w-screen overflow-auto p-5 text-sm ${
        dark ? `bg-black text-zinc-50` : `bg-zinc-50 text-black`
      }`}
    >
      <div className={`flex flex-col gap-4 w-1/2 max-[900px]:w-full`}>
        <Image
          className="mt-6"
          alt="Image"
          src={"/4868537.jpg"}
          height={50}
          width={50}
        />

        {isSignIn ? (
          <>
            {" "}
            <h1 className="text-base font-bold">Sign in</h1>
            <p className={`text-xs font-light`}>
              Log in to start making data-driven decisions for better learning
              outcomes.
            </p>
            <Hint message={hint} shown={hintVisibility} />
            <CustomInput
              onChange={handleUsernameSigninChange}
              value={signinCredentials.email}
              type={"text"}
              placeholder={"Enter Username or Email"}
              icon={faUser}
            />
            <PasswordInput
              value={signinCredentials.password}
              onChange={handlePasswordSigninChange}
              placeholder={"Enter Your Password"}
            />
            <Button
              onClick={handleSignIn}
              icon={<FontAwesomeIcon icon={faSignIn} />}
              children={"Sigin"}
              disabled={signInDisabled}
            />
            <p className={`text-xs font-light`}>
              Do not have an Account{" "}
              <button
                onClick={toggleSignIn}
                className="text-base text-blue-600"
              >
                Sign Up Now
              </button>
            </p>
          </>
        ) : (
          <>
            {" "}
            <h1 className="text-base font-bold">Get Started</h1>
            <p className={`text-xs font-light`}>
              Create an account to monitor and enhance student performance with
              ease. Start making data-driven decisions for better learning
              outcomes.
            </p>
            <Hint message={hint} shown={hintVisibility} />
            <EmailInput
              value={signupCredentials.email}
              onChange={handleEmailChange}
            />
            <UsernameInput
              value={signupCredentials.username}
              onChange={handleUsernameChange}
            />
            <PasswordInput
              value={signupCredentials.password}
              onChange={handlePasswordChange}
              placeholder={"Enter Your Password"}
            />
            <Button
              onClick={handleSignUp}
              icon={<FontAwesomeIcon icon={faSignIn} />}
              children={"Signup"}
              disabled={signUpDisabled}
            />
            <p className={`text-xs font-light`}>
              Already have an account?{" "}
              <button
                onClick={toggleSignIn}
                className="text-base text-blue-600"
              >
                Sign In
              </button>
            </p>
          </>
        )}
      </div>
      <div className="w-1/2 max-[900px]:w-full flex flex-col items-center justify-center">
        {isSignIn ? <Image src={"/standing.svg"} alt="image" width={400} height={950} /> : <Image src={"/standing-2.svg"} alt="image" width={400} height={950} />}
      </div>
    </div>
  );
}
