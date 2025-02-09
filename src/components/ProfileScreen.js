import React from 'react';
import "./ProfileScreen.css";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {

    const user = useSelector( selectUser );

    return (
        <div className="profileScreen">
            <Nav/>

            <div className="profileScreen__body">
                <h1>Edit Profile</h1>

                <div className="profileScreen__info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                         alt="netflix-avatar"
                    />
                    <div className="profileScreen__details">
                        <h2>Email: { user.email }</h2>
                        <div className="profileScreen__plans">

                        </div>

                        <button className="profileScreen__signOut"
                                onClick={ () => auth.signOut() }>Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;