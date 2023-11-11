import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  const { signIn } = useAuthContext();
  const [email, SetEmail] = useState();
  const [password, SetPassword] = useState();
  const [error, SetError] = useState();

  async function handleSignInSumbit() {
    try {
      await signIn(email, password);
    } catch (error) {
      SetError(error.massage);
    }
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          width: "300px",
        }}
      >
        <h1 style={{ color: "rgb(20 26 31)" }}>Login to your account</h1>

        <input
          onChange={(e) => SetEmail(e.target.value)}
          style={{
            height: "40px",
            marginTop: "15px",
            borderRadius: "15px",
            border: "none",
            outline: "none",
          }}
          type="email"
          placeholder="Email address"
        />
        <input
          onChange={(e) => SetPassword(e.target.value)}
          style={{
            height: "40px",
            marginTop: "15px",
            borderRadius: "15px",
            border: "none",
            outline: "none",
          }}
          type="password"
          placeholder="Password"
        />

        <button
          onClick={handleSignInSumbit}
          style={{
            marginTop: "20px",
            background: "#0d540d",
            borderRadius: "15px",
            border: "none",
            height: "40px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Sign in
        </button>
        <Box>
          You have an account?
          <Link to="/register">Зарегистрируйтесь сейчас.</Link>
        </Box>
      </div>
    </div>
  );
};

export default Login;
