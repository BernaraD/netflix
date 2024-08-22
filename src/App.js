import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeScreen from "./components/HomeScreen";
import Login from "./components/Login";
import { auth } from "./firebase";

function App() {

    const user = null;

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                //Logged In
                console.log("userAuth", userAuth)
            } else {
                //Logged out
            }
        })
    }, [])

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
