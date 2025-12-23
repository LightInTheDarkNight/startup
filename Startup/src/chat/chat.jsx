import React from "react";

export function Chat() {
    return (
        <main className="mx-auto p-4 bg-light">
            <div className="container-md d-flex flex-column gap-3 align-items-center mx-auto">
                <h1>Your Chats:</h1>
                <div id="chat-list-and-window" className="d-flex flex-row flex-sm-wrap border rounded w-100">
                    <div id="chat-list" className="p-0 m-0">
                        <div className="btn-group-vertical h-100" role="group" aria-label="Vertical button group">
                            <div className="btn-group dropend flex-fill">
                                <button type="button" className="btn btn-secondary dropdown-toggle d-flex align-items-center rounded-end-0" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                    <div className="d-inline-flex flex-grow-1 justify-content-between">
                                        <span className="User Status">Your Status: Online</span>
                                        <span style={{flex:1}}></span><a href="#">Edit</a>
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
                            <div className="btn-group dropend flex-fill">
                                <button type="button" className="btn btn-secondary dropdown-toggle d-flex justify-content-between align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                    <div className="d-inline">
                                        <span className="Friend Name">Billy Bob Sue</span>: <span className="Status">Online!</span>
                                    </div>
                                </button>
                            </div>
                            <div className="btn-group dropend flex-fill">
                                <button type="button" className="btn btn-secondary dropdown-toggle d-flex justify-content-between align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                    <div className="d-inline">
                                            <span className="Friend Name">John Cena</span>: <span className="Status">Online!</span>
                                    </div>
                                </button>
                            </div>
                            <div className="btn-group dropend flex-fill">
                                <button type="button" className="btn btn-secondary dropdown-toggle d-flex justify-content-between align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                    <div className="d-inline">
                                        <span className="Friend Name">Leroy Jenkins</span>: <span className="Status">Offline</span>
                                    </div>
                                </button>
                            </div>
                            <div className="btn-group dropend flex-fill">
                                <button type="button" className="btn btn-secondary dropdown-toggle d-flex justify-content-between align-items-center rounded-end-0" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                    <div className="d-inline">
                                        <span className="Friend Name">Adam Sandler</span>: <span className="Status">Offline</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="vr"></div>
                    <div id="chat-view" className="flex-grow-1 border-start-0 rounded-3">
                        <div className="chat-bubble">
                            <div className="chat-tip-container cm-other">
                                {/* <!--div className="curve"></div--> */}
                            </div>
                            <div className="chat-message cm-other">
                                Alll offf theee stuffff<br/>
                            </div>
                        </div>
                        
                        <div className="chat-bubble cm-self">
                            <div className="chat-tip-container cm-self"></div>
                            <div className="chat-message cm-self">Alll offf theee stuffff<br/>and some more<br/>and some moreeeeeeeeee</div>
                        </div>
                        
                        <hr/>
                        <form method="get" action="#" className="d-flex mb-1">
                            <input type="text" id="jCode" placeholder="type your message here" className="flex-grow-1 border rounded-5 px-3 m-1" required/>
                            <button type="submit" className="btn btn-primary rounded-circle m-1 ">Up</button>
                        </form>
                    </div>
                </div>
                <button type="button d-block my-2" className="btn btn-primary btn-lg">+New Chat</button>
            </div>
            {/* Your Status: Online
            <ul>
                <li>
                    <span className="Friend Name">Billy Bob Sue</span> - <span className="Status">Online!</span>
                    <p>
                        Oh cool! I didn't know you read Sanderson's books too!....<br/>
                        Just Now
                    </p>
                </li>
                <li>
                    <span className="Friend Name">John Cena</span> - <span className="Status">Online!</span>
                    <p>
                        You: Why haven't you responded yet? Is my outfit that bad?<br/>
                        5 mins ago
                    </p>
                </li>
                <li>
                    <span className="Friend Name">Leroy Jenkins</span> - <span className="Status">Offline</span>
                    <p>
                        You: That was the dumbest idea ever. Why on earth would you....<br/>
                        1 week ago
                    </p>
                </li>
                <li>
                    <span className="Friend Name">Adam Sandler</span> - <span className="Status">Offline</span>
                    <p>
                        I'm probably not going to be on here for a while.<br/>
                        2 months ago
                    </p>
                </li>
            </ul> */}
        </main>
    );
}