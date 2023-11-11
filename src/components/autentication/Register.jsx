import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Alert } from "@mui/material";

const Register = () => {
  const { authWithGoogle, register } = useAuthContext();
  const [email, SetEmail] = useState();
  const [password, SetPassword] = useState();
  const [error, SetError] = useState();

  async function handleSumbit() {
    try {
      await register(email, password);
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
      {error && <Alert severity="error">{error}</Alert>}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          width: "300px",
        }}
      >
        <h1 style={{ color: "rgb(20 26 31)" }}>Login to your account</h1>
        <p style={{ color: "rgb(171 104 0)" }}>Don't have an account?</p>
        <p style={{ color: "rgb(171 104 0)", fontWeight: 700 }}>Sign Up Free</p>

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
        <p
          style={{
            marginTop: "10px",
            color: "#101418",
          }}
        >
          Remember me
        </p>
        <p style={{ color: "#101418" }}>Forgot password?</p>
        <button
          onClick={handleSumbit}
          style={{
            background: "rgb(9 32 130)",
            border: "none",
            width: "300px",
            height: "40px",
            margin: "15px auto",
            borderRadius: "15px",
          }}
        >
          Login with email
        </button>
        <button
          onClick={() => authWithGoogle()}
          style={{
            background: "rgb(9 32 130)",
            borderRadius: "15px",
            border: "none",
            height: "40px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <GoogleIcon sx={{ marginLeft: "5px", color: "rgb(9 41 15)" }} /> */}
          Signin with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
