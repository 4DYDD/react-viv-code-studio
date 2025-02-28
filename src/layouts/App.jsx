import React from "react";
import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";

function App({ children, className }) {
  return (
    <main className={`font-semibold font-inter ${className}`}>
      <Navbar />
      <div className="flex-col p-5 pt-20 flexc">{children}</div>
      <Footer />
    </main>
  );
}

export default App;
