import React from "react";
import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";

function App({ children, className }) {
  return (
    <main className={`font-semibold font-inter py-18`}>
      <Navbar />
      <div className={`flex-col flexc ${className}`}>{children}</div>
      <Footer />
    </main>
  );
}

export default App;
