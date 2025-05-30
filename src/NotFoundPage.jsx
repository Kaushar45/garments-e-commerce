import React from "react";

function NotFoundPage() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          color: "white",
          textDecoration: "none",
          border: "none",
          borderRadius: "5px",
        }}
      >
        <a href="/"> Back To Home</a>
      </button>
    </div>
  );
}

export default NotFoundPage;
