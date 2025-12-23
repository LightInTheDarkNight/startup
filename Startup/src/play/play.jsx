import React from "react";

export function Play() {
    return (
        <main className="mx-auto px-4 bg-light">
                <div id="game-container" className="mt-4">
                    {/* Game */}
                    <canvas id="game" style={{width:'320px', height:'450px', border:'solid thin black'}}></canvas>
                    <ul id="gamebar">
                        <li className="gamebar-item">
                            Score: <span id="score">0</span>
                        </li>
                        <li className="gamebar-item">
                            <label for="HP">Health: </label>
                            <progress id="HP" max="100" value="75"></progress><br/>
                            <label for="MP">Magic: </label>
                            <progress id="MP" max="100" value="75"></progress>
                        </li>
                        <li className="gamebar-item" style={{backgroundColor:'transparent'}}>
                            <div className="btn-group dropstart">
                                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                  <img src="Assets/settings.svg"/>
                                </button>
                                <ul className="dropdown-menu">
                                  {/* Dropdown menu links */}
                                  <li>
                                    Settings
                                  </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="game-start-container" className="position-relative p-0 mt-0" style={{height:'100%', minHeight:'450px'}}>
                    <img src="Assets/gateOption.jpeg" className="position-absolute p-0 m-0 object-fit-cover" style={{top:0, left:0, width:'100%', height:'100%', filter:'brightness(40%)'}}/>
                    <div id="game-start-settings" className="position-relative p-3 m-0 d-flex flex-column justify-content-center align-items-center text-light" style={{top:0, left:0, width:'100%', height:'100%'}}>
                        <form method="get" action="play.html" className="d-flex mb-1">
                            <div className="form-floating">
                                <input type="text" id="jCode" placeholder="Join Code" className="form-control" required/>
                                <label for="jCode" className="text-dark">Join a Game:</label>
                            </div>
                            <button type="submit" className="btn btn-primary ">Go</button>
                        </form>
                        <p>Or</p>
                        <form method="get" action="play.html" className="d-flex mb-1">
                            <div className="form-floating">
                                <input type="text" id="wCode" placeholder="Watch Code" className="form-control" required/>
                                <label for="wCode" className="text-dark">Watch a Game:</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Go</button>
                        </form>
                        <span>Or</span>
                        <p>Start a new game:</p>
                        <form method="get" className="text-center" action="play.html">
                            <h2>Game Settings:</h2>
                            <p></p>
                            <h4>Difficulty</h4>
                            <span>Low <input id="difficulty" type="range" min='1' max='10'/> High</span>
                            
                            <h4>Character</h4>
                            <div className="btn-group d-flex" role="group" aria-label="Basic radio toggle button group">
                                
                                <input id="char1" type="radio" className="btn-check" name="character" value="swordsman" autocomplete="off" checked/>
                                <label className="btn btn-outline-primary" for="char1">Swordsman</label>

                                <input id="char2" type="radio" className="btn-check" name="character" value="cloak" autocomplete="off"/>
                                <label className="btn btn-outline-primary" for="char2">Cloak</label>
                              
                                <input id="char3" type="radio" className="btn-check" name="character" value="mage" autocomplete="off"/>
                                <label className="btn btn-outline-primary" for="char3">Mage</label>
                            </div>
                            <br/>
                            <button type="submit" className="btn btn-primary">Play!</button>
                        </form>
                    </div>
                    
                </div>
            </main>
    );
}