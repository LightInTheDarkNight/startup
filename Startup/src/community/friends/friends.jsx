import React from "react";
import { Stack, ButtonGroup, Form, Button } from "react-bootstrap";

export function Friends() {
    return (
        <main className="mx-auto p-4 bg-light">
            <div className="container-md d-flex flex-column gap-3 align-items-center mx-auto">
                <h1>Your Friends:</h1>
                <div className="w-100 p-0 m-0 border rounded">
                    <div className="btn-group-vertical w-50" role="group" aria-label="Vertical button group">
                        <div className="btn-group dropend">
                            <button type="button" className="btn btn-secondary dropdown-toggle d-flex justify-content-between align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <div className="d-inline">
                                    <span className="User Status">Your Status: Online</span>
                                    <a href="#" className="btn btn-link disabled text-light" tabIndex="-1" role="button" aria-disabled="true">Edit</a>
                                </div>
                            </button>
                            <ul className="dropdown-menu right-half">
                                <li className="dropdown-item">
                                    Online
                                </li>
                                <li className="dropdown-item">
                                    Offline
                                </li>
                                <li className="dropdown-item">
                                    Do Not Disturb
                                </li>
                            </ul>
                        </div>
                        <div className="btn-group dropend ">
                            <button type="button" className="btn btn-secondary dropdown-toggle d-flex justify-content-between align-items-center text-start" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <div className="d-inline">
                                    <span className="Friend Name">Billy Bob Sue</span><br/>Status: <span className="Status">Online!</span>
                                </div>
                            </button>
                            <ul className="dropdown-menu right-half">
                                <li className="dropdown-item-text">
                                    Render Profile info.<br/>
                                    [Profile Picture]<br/>
                                    Last online:<br/>
                                    [Status message/bio blip]<br/>
                                    Level<br/>
                                    Most Recent Score: 23947284<br/>
                                    Favorite class to play: Swordsman<br/>
                                </li>
                            </ul>
                        </div>
                        <div className="btn-group dropend">
                            <button type="button" className="btn btn-secondary dropdown-toggle d-flex justify-content-between align-items-center text-start" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <div className="d-inline">
                                        <span className="Friend Name">John Cena</span><br/>Status: <span className="Status">Online!</span>
                                </div>
                            </button>
                            <ul className="dropdown-menu right-half">
                                <li className="dropdown-item-text">
                                    Render Profile info.<br/>
                                    [Profile Picture]<br/>
                                    Last online:<br/>
                                    [Status message/bio blip]<br/>
                                    Level<br/>
                                    Most Recent Score: 23947284<br/>
                                    Favorite class to play: Swordsman<br/>
                                </li>
                            </ul>
                        </div>
                        <div className="btn-group dropend">
                            <button type="button" className="btn btn-secondary dropdown-toggle d-flex justify-content-between align-items-center text-start" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <div className="d-inline">
                                    <span className="Friend Name">Leroy Jenkins</span><br/>Status: <span className="Status">Offline</span>
                                </div>
                            </button>
                            <ul className="dropdown-menu right-half">
                                <li className="dropdown-item-text">
                                    Render Profile info.<br/>
                                    [Profile Picture]<br/>
                                    Last online:<br/>
                                    [Status message/bio blip]<br/>
                                    Level<br/>
                                    Most Recent Score: 23947284<br/>
                                    Favorite class to play: Swordsman<br/>
                                </li>
                            </ul>
                        </div>
                        <div className="btn-group dropend">
                            <button type="button" className="btn btn-secondary dropdown-toggle d-flex justify-content-between align-items-center text-start" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <div className="d-inline">
                                    <span className="Friend Name">Adam Sandler</span><br/>Status: <span className="Status">Offline</span>
                                </div>
                            </button>
                            <ul className="dropdown-menu right-half">
                                <li className="dropdown-item-text">
                                    Render Profile info.<br/>
                                    [Profile Picture]<br/>
                                    Last online:<br/>
                                    [Status message/bio blip]<br/>
                                    Level<br/>
                                    Most Recent Score: 23947284<br/>
                                    Favorite class to play: Swordsman<br/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button type="button d-block my-2" className="btn btn-primary btn-lg">+Add Friends!</button>
            </div>
            
        </main>
    );
}

export function FriendList({friends, selectedFriend, selectFriend}){
    return( 
        <ButtonGroup id="chat-list" className='p-0 m-0 h-100' vertical>
            <SelfButton/>
            {friends.map((friend, idx) => 
                <Stack as={Button} key={idx} variant='secondary' direction='horizontal' gap={3}
                  active={friend.name===selectedFriend} onClick={() => selectFriend(friend.name)}>
                    <div className="friend-name">{friend.name}: </div>
                    <div className="ms-auto status">{friend.online ? 'Online' : 'Offline'}</div>
                    <div className='right-arrow' />
                </Stack>
            )}
        </ButtonGroup>
    );
}

function SelfButton(){
    return (
        <Form as={ButtonGroup} className='flex-fill d-flex bg-secondary'>
            <Button variant='secondary' className='btn-disabled'>Your Status: </Button>
            <div className='d-inline flex-fill'/>
            <Form.Select id='currentStatus' className="btn btn-secondary rounded-start-0 rounded-bottom-0 text-light text-start border-0 ms-auto ps-3" style={{width:'6rem'}}>
                <option value='online'>Online</option>
                <option value='offline'>Offline</option>
                <option value='do-not-disturb'>Do Not Disturb</option>
            </Form.Select>
        </Form>
    );
}