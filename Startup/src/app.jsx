import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './app.css';
// import {Navbar} from 'react-bootstrap/Navbar';

export default function App() {
  return (
    <div className="body bg-secondary">
        <NavHeader />
        <div id="main-container" >Page displays here</div>
        <footer>
            <div className="bg-dark my-0 text-light py-3 px-4">
                Created by AJ Boyd, a Consumate Nerd and Honorary Genius (because he's not smart enough).
                <a className="icon-link position-absolute end-0 mx-3" target="_blank" href="https://github.com/LightInTheDarkNight/startup.git">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"/>
                    </svg>
                    Github Repository
                </a>
            </div>
        </footer>
    </div>
  );
}

function NavHeader() {
    return(
        <div className="sticky-top m-0 p-0" style={{top:0}}>
            <header>
                
                <nav className="navbar bg-dark p-0 position-relative" data-bs-theme="dark" >
                    <div className="container-fluid p-0" style={{height:'66px'}}>
                        <img src="/Banner_Option_Preview.jpeg" className="object-fit-lg-cover object-fit-none border position-absolute" alt="Dungeon Doors" style={{height:'100%', width:'100%', filter:'brightness(50%)', zIndex: 2}} />
                        <a className="navbar-brand m-0 stretched-link" href="index.html" style={{padding:'0.5rem 1rem', zIndex: 8}}>Delvers Domain</a>
                    </div>
                    
                </nav>
                <nav className="navbar nav-underline navbar-expand-sm bg-dark" data-bs-theme="dark">
                    <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="play.html">Play</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" dataBsToggle="dropdown" ariaExpanded="false">
                            Community
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="leaderboards.html">Leaderboards</a></li>
                                <li className="dropdown-item-text">Social:</li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="friends.html"><span className="placeholder col-1 invisible"></span>Friends</a></li>
                                <li><a className="dropdown-item" href="chat.html"><span className="placeholder col-1 invisible"></span>Chat</a></li>
                            </ul>
                        </li>
                        </ul>
                    </div>

                    <div className="d-flex" role="login">
                        <a className="nav-link" href="login.html"><button className="btn btn-outline-primary my-2 my-sm-0">Login/Account</button> </a>
                    </div>
                    </div>
                </nav>

                
            </header>
        </div>
    );
}