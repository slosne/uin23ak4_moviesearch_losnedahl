import React from "react";

export default function Layout({ children }) {
  return (
    <div className="main-container">
      <header>
        <h1>Movie List</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
