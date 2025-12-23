import React from "react";

export function Login() {
    return (
        <main className="mx-auto p-4 bg-light">
            <h2>Public:</h2>
            Name: Mystery Player! <br/>
            Watch code: 237984793950 <br/>
            Friends: none :(  Followers: only the wumpus :( <br/>
            Rank: &lt;CurrentSessionRank&gt;<br/>
            Highscore: &lt;CurrentSessionHighscore&gt;<br/>

            <h2>
                Login to manage your account details and sink your progress to an existing account!
            </h2>
            <form method="get" action="account.html">
                <label htmlFor="user">Username or email:</label>
                <input type="text" id="user" placeholder="Username or email" required/><br/>
                <label htmlFor="Password">Password:</label>
                <input type="password" id="Password" placeholder="Enter your password" required/><br/>
                <button type="submit">Login</button>
            </form>
            Or sign in with one of these:<br/>
            <a>Google</a> <a>Facebook</a> <a>Apple</a><br/>
            <h2>
                Or sign up for a new Account!
            </h2>
            <form method="get" action="account.html">
                <label htmlFor="userRegister">Email Address:</label>
                <input type="text" id="userRegister" placeholder="somebody.cares@domain.com" required/><br/>
                <label htmlFor="crePassword">Create a Password:</label>
                <input type="password" id="crePassword" placeholder="Enter a password" required/><br/>
                <label htmlFor="ConfPassword">Confirm your password:</label>
                <input type="password" id="confPassword" placeholder="Confirm your password" required/><br/>
                <button type="submit">Create Account</button>
            </form>
        </main>
    );
}