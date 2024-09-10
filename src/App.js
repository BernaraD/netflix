import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/userSlice";



function App() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                //Logged in
                dispatch(
                    login({
                    uid: userAuth.uid,
                    email: userAuth.email
                }))
                console.log(userAuth)
            } else {
                //Logged out
                dispatch(logout())
            }
        })

        //Clean up function
        return unsubscribe;

    }, [dispatch])


    return (
        <div className="app">
            <Router>
                { !user ? (
                    <Login path="/login"/>
                ) : (
                    <Routes>
                        <Route path="/profile" element={ <ProfileScreen/> }/>
                        <Route exact path="/" element={ <HomeScreen/> }/>
                        <Route path="/" element={ <h1>Wow</h1> }/>
                        {/*<Route path="/contact" element={<Contact/>}/>*/ }
                    </Routes>
                ) }
                ) }
            </Router>
        </div>
    );
}

export default App;
