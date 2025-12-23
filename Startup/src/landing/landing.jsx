import React from "react";

export function Landing() {
    return (
        <main className="mx-auto p-4 bg-light">
            <h2>Welcome to the Dungeon!</h2>
            <p>
                <span>Delver's Domain<sup>&trade;</sup></span> is an attempt to create a cooperative
                Roguelike game and an environment and briliant community around it.
            </p>
            <p>
                Hop into a gaming session, join a friend, chat for bit, or watch a public attempt below! If you have feedback<br/>
                on features or improvements you'd like to see in the game, please let me know at<br/>
                (I don't care about feedback yet)@delversdomain.click!
            </p>

            <div className="row row-cols-1 row-cols-md-3 g-3">
                <div className="col">
                    <a href="play.html" className="btn btn-outline-dark card h-100" style={{backgroundImage:"url('/Sword.ico')"}}>
                        <div className="card-body text-light text-darken-bg">
                            Play
                        </div>
                    </a>
                </div>
                <div className="col">
                    <a href="play.html" className="btn btn-outline-dark card h-100" style={{backgroundImage:"url('/Bottle.ico')"}}>
                        <div className="card-body text-light text-darken-bg">
                            Chat
                        </div>
                    </a>
                </div>
                <div className="col">
                    <a href="play.html" className="btn btn-outline-dark card h-100" style={{backgroundImage:"url('/Camera.ico')"}}>
                        <div className="card-body text-light text-darken-bg">
                            Watch
                        </div>
                    </a>
                </div>
              </div>
            
        </main>
    );
}