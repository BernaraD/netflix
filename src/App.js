import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeScreen from "./components/HomeScreen";
import Login from "./components/Login";

function App() {

    const user = null;

    return (
        <div className="app">
            <Router>
                {!user ? (
                    <Login path="/login"/>
                ) : (
                    <Routes>
                        <Route exact path="/" element={<HomeScreen/>}/>
                        <Route path="/" element={<h1>Wow</h1>}/>
                        {/*<Route path="/contact" element={<Contact/>}/>*/}
                    </Routes>
                )}
            </Router>
        </div>
    );
}

export default App;
