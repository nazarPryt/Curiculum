import React from 'react';
import './App.css';
import Main from "./Main/Main";
import ContactMe from "./ContactMe/ContactMe";
import Footer from "./Footer/Footer";
import Skills from "./Skills/Skills";
import MyWorks from "./MyWorks/MyWorks";

function App() {
    return (
        <div>
            <Main/>
            <Skills/>
            <MyWorks/>
            <ContactMe/>
            <Footer/>
        </div>
    );
}

export default App;
