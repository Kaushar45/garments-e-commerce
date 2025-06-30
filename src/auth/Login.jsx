import React from "react";

const Login = () => {
  return (
    <form
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
      }}
    >
      <h1>User Login</h1>
      <input required placeholder="Username" name="Username" type="email" />
      <input required placeholder="Password" name="password" type="password" />
    </form>
  );
};

export default Login;
