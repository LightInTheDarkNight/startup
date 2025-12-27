import React from "react";
import { Button, Stack, Form, FloatingLabel } from "react-bootstrap";
import { } from "react-router-dom";
import './play.css';

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
                            <label htmlFor="HP">Health: </label>
                            <progress id="HP" max="100" value="75"></progress><br/>
                            <label htmlFor="MP">Magic: </label>
                            <progress id="MP" max="100" value="75"></progress>
                        </li>
                        <li className="gamebar-item" style={{backgroundColor:'transparent'}}>
                            <div className="btn-group dropstart">
                                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                  <img src="/settings.svg"/>
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
                    <Stack className='p-3 m-1 justify-content-center align-items-center text-light'>
                        <Form className='d-flex mb-1 g-3'>
                            <FloatingLabel label='Join a Game:' controlId='joinID'>
                                <Form.Control type='text' placeholder='Join Code:' required/>
                            </FloatingLabel>
                            <Button type='submit' variant='primary'>Go</Button>
                        </Form>
                        <p>Or</p>
                        <Form className='d-flex mb-1 g-3'>
                            <FloatingLabel label='Watch a Game:' controlId='watchID'>
                                <Form.Control type='text' placeholder='watchCode' required/>
                            </FloatingLabel>
                            <Button type='submit' variant='primary'>Go</Button>
                        </Form>
                        <span>Or</span>
                        <p>Start a new game:</p>
                        <form method="get" className="text-center" action="play.html">
                            <h2>Game Settings:</h2>
                            <p></p>
                            <h4>Difficulty</h4>
                            <span>Low <input id="difficulty" type="range" min='1' max='10'/> High</span>
                            
                            <h4>Character</h4>
                            <div className="btn-group d-flex" role="group" aria-label="Basic radio toggle button group">
                                
                                <input id="char1" type="radio" className="btn-check" name="character" value="swordsman" autoComplete="off" defaultChecked/>
                                <label className="btn btn-outline-primary" htmlFor="char1">Swordsman</label>

                                <input id="char2" type="radio" className="btn-check" name="character" value="cloak" autoComplete="off"/>
                                <label className="btn btn-outline-primary" htmlFor="char2">Cloak</label>
                              
                                <input id="char3" type="radio" className="btn-check" name="character" value="mage" autoComplete="off"/>
                                <label className="btn btn-outline-primary" htmlFor="char3">Mage</label>
                            </div>
                            <br/>
                            <button type="submit" className="btn btn-primary">Play!</button>
                        </form>
                    </Stack>
                    {/* <div id="game-start-settings" className="position-relative p-3 m-0 d-flex flex-column justify-content-center align-items-center text-light" style={{top:0, left:0, width:'100%', height:'100%'}}>
                        
                    </div> */}
                    
                </div>
            </main>
    );
}