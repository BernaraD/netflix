import "./SignUpScreen.css";
import { useRef } from "react";
import { auth } from "../firebase";

function SignUpScreen() {
    const emailRef = useRef( null )
    const passwordRef = useRef( null )


    const register = (e) => {
        e.preventDefault()

        auth
            .createUserWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            )
            .then( (authUser) => {
                console.log( authUser )
            } )
            .catch( (error) => {
                alert( error.message )
            } )

        console.log( "registered" )
    }

    const signIn = (e) => {
        e.preventDefault()
        console.log( 'signedIn up' )

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then( (authUser) => {
            console.log( authUser )
        } ).catch( (error) => {
            alert( error.message )
        } )
    }

    return (
        <div className="signupScreen">

            <form>
                <h1>Sign In</h1>
                <input ref={ emailRef } type="email" placeholder="Email Address"/>
                <input ref={ passwordRef } type="password" placeholder="Password"/>
                <button type="submit" onClick={ signIn }>Submit</button>
                <h4>
                    <span className="signupScreen__gray">New to Netflix?</span>
                    <span className="signupScreen__link" onClick={ register }>Sign up now.</span></h4>
            </form>


        </div>
    )
}

export default SignUpScreen