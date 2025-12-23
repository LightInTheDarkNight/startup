import React from "react";

export function Account() {
    return (
        <main className="mx-auto p-4 bg-light">
            <h2>Public:</h2>
            Name: &lt;YourName&gt; <br/>
            Watch code: 1238678 <br/>
            Friends: 4 Followers: 6 <br/>
            Rank: <span className="player-rank">Rougish Clown</span><br/>
            Highscore: <span className="player-rank">-40000</span> <br/>

            <h2>
                Account Information:
            </h2>
            Username: &lt;YourUserName&gt;<br/>
            Email: &lt;Email&gt;<br/><br/>
            <form>
                <label for="newEmail">New Email:</label>
                <input type="text" id="newEmail" placeholder="Enter your new email address" required/><br/>
                <button type="submit">Submit and Confirm</button>
            </form><br/>
            <form method="get" action="account.html">
                <label for="curPassword">Current password:</label>
                <input type="password" id="newPassword" placeholder="Enter your current password" required/><br/>
                <label for="newPassword">New password:</label>
                <input type="password" id="newPassword" placeholder="Enter your new password" required/><br/>
                <label for="confPassword">Confirm your new password:</label>
                <input type="password" id="confPassword" placeholder="Confirm your new password" required/><br/>
                <button type="submit">Change Passord</button>
            </form>
            <h2>
                Settings:
            </h2>
            <h3>
                Privacy
            </h3>
            <p>
                Gobbledygook about not selling your info and who can see your birthday
            </p>
        </main>
    );
}