import React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  return (
    <div className="global-wrapper">
      <header className="global-header">
       <div className="flex justify-center align-center space-x-4  ">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          </div>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;