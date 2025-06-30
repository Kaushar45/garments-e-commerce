import React from "react";

const Signup = () => {
  return (
    <form
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
      }}
    >
      <h1>User Signup</h1>
      <input required placeholder="Username" name="Username" type="email" />
      <input required placeholder="Email" name="email" type="email" />
      <input required placeholder="Full Name" name="fullName" type="text" />
      <input
        required
        placeholder="Phone Number"
        name="phoneNumber"
        type="tel"
      />
      <input required placeholder="Password" name="password" type="password" />
    </form>
  );
};

export default Signup;
