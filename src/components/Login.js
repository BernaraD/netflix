import "./Login.css"
import {useState} from "react";
import SignUpScreen from "./SignUpScreen";

function Login() {

    const [signIn, setSignIn] = useState(false);


    return (
        <div className="loginScreen">

            <div className="loginScreen_background">
                <img
                    className="loginScreen__logo"
                    src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
                    alt="netflix-logo"
                />
                <button className="loginScreen__button" onClick={() => setSignIn(true)}>Sign In</button>

                <div className="loginScreen_gradient"/>
            </div>

            <div className={"loginScreen_body"}>
                {signIn ? (
                    <SignUpScreen />
                ) : (
                    <>
                        <h1>Unlimited films, TV programmes and more</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership</h3>

                        <div className="loginScreen_input">
                            <form action="">
                                <input type="email" placeholder="Email address"/>
                                <button className="loginScreen__getStarted" onClick={() => setSignIn(true)}>Get Started
                                </button>
                            </form>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

export default Login;