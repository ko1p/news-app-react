import React from 'react';
import './App.css';
import HeaderCover from "./components/HeaderCover";
import Preloader from "./components/Preloader";
import NoArticles from "./components/NoArticles";
import Results from "./components/Results";
import Author from "./components/Author";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

function App() {
  return (
      <main className="page">
        <HeaderCover />
        <Preloader />
        <NoArticles />
        <Results />
        <Author />
        <Footer />
        <Popup />
      </main>
  );
}

export default App;
