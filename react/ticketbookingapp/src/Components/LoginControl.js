import React, { useState } from "react";
import Guest from "./Guest";
import User from "./User";

function LoginControl() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div style={{ textAlign: "center" }}>

            <h1>Ticket Booking App</h1>

            {isLoggedIn ? <User /> : <Guest />}

            <br />

            {
                isLoggedIn
                    ? <button onClick={handleLogout}>Logout</button>
                    : <button onClick={handleLogin}>Login</button>
            }

        </div>
    );
}

export default LoginControl;