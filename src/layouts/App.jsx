import React from "react";
import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";

function App({ children, className }) {
  return (
    <main className={`font-semibold font-inter pt-24 pb-20 ${className}`}>
      <Navbar />
      <div className="flex-col flexc">{children}</div>
      <Footer />
    </main>
  );
}

export default App;
