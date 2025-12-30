import React from "react";
import './play.css';
import { Button, ButtonGroup, FloatingLabel, Form, InputGroup, Stack, ToggleButton, ToggleButtonGroup } from "react-bootstrap";

const playerClasses=[
    {name: 'Swordsman', range: 'melee-long', magic: false, },
    {name: 'Cloak', range: 'melee-short', magic: false, },
    {name: 'Mage', range: 'ranged', magic: true, },
];

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
                        <Form method='get' action='/play' className='mb-1 text-center'>
                            <PlayerClassRadios />
                            <InputGroup>
                                <FloatingLabel label='Join a Game:' controlId='joinID'>
                                    <Form.Control type='text' placeholder='Join Code:' name='gameID' required/>
                                </FloatingLabel>
                                <Button type='submit' name='doWhat' value='join'>Go</Button>
                            </InputGroup>
                        </Form>
                        <p>Or</p>
                        <Form method='get' action='/play' className='mb-1'>
                            <InputGroup>
                                <FloatingLabel label='Watch a Game:' controlId='watchID'>
                                    <Form.Control type='text' placeholder='watchCode' name='gameID' required/>
                                </FloatingLabel>
                                <Button type='submit' name='doWhat' value='watch'>Go</Button>
                            </InputGroup>
                        </Form>
                        <span>Or</span>
                        <p>Start a new game:</p>
                        <Form method="get" className="text-center" action="/play">
                            <h2>Game Settings:</h2>
                            <h4>Difficulty</h4>
                            <span>Low <input id="difficulty" type="range" min='1' max='10' name='difficulty'/> High</span>
                            <h4>Character</h4>
                            <PlayerClassRadios newGame />
                            <Button type="submit" name='doWhat' value='start'>Play!</Button>
                        </Form>
                    </Stack>
                </div>
            </main>
    );
}

function PlayerClassRadios({newGame}) {
    let game = newGame? 'new' : 'existing';
    return (
        <ToggleButtonGroup aria-label="Character type select" type='radio' name='character'
          defaultValue={JSON.stringify(playerClasses[0])} className='mb-3 d-block'>
            {playerClasses.map((option, i) => (
                <ToggleButton key={i} id={`${option.name}-button-${game}`} 
                    variant='outline-primary' value={JSON.stringify(option)}>
                    {option.name}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    )
}