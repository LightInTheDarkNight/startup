import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes, Link, useMatch } from 'react-router-dom';
import { Account } from './account/account';
import { Chat } from './community/chat/chat';
import { Friends } from './community/friends/friends';
import { Landing } from './landing/landing';
import { Leaderboards } from './community/leaderboards/leaderboards';
import { Login } from './login/login';
import { Play } from './play/play';
import { Button, Nav, Navbar, NavDropdown, } from 'react-bootstrap';
// import {Navbar} from 'react-bootstrap/Navbar';

export default function App() {
  return (
    <BrowserRouter>
    <div className="body m-0">
        <div className="sticky-top m-0 p-0" >
            <NavHeader />
        </div>
        <div id="main-container" className='bg-secondary'>
            <Routes>
                <Route path='/' element={<Landing />} exact />
                <Route path='/account' element={<Account />} />
                <Route path='/community/'>
                    <Route path='chat' element={<Chat />} />
                    <Route path='friends' element={<Friends />} />
                    <Route path='leaderboards' element={<Leaderboards />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/play' element={<Play />} />
            </Routes>
        </div>
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
    </BrowserRouter>
  );
}

function NavHeader() {
    const match = useMatch('/community/*');
    return(
        <header>
            <Navbar variant='dark' bg='dark' className="p-0 position-relative bg-dark" >
                <div className="container-fluid p-0" style={{height:'66px'}}>
                    <img src="/Banner_Option_Preview.jpeg" className="object-fit-lg-cover object-fit-none border-dark position-absolute" alt="Dungeon Doors" style={{height:'100%', width:'100%', filter:'brightness(50%)', zIndex: 2}} />
                    <Navbar.Brand className="m-0 stretched-link" as={NavLink} to='/' style={{padding:'0.5rem 1rem', zIndex: 8}}>Delvers Domain</Navbar.Brand>
                </div>
            </Navbar>
            <Navbar className='nav-underline' id='MainNav' collapseOnSelect expand='sm' bg='dark' data-bs-theme='dark'>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" aria-label="Toggle navigation"/>
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className='me-auto mb-2 mb-lg-0'>
                            <Nav.Link as={NavLink} to='/' end aria-current='page'>
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to='/play'>
                                Play
                            </Nav.Link>
                            <NavDropdown title='Community' aria-expanded='false' active={!!match}>
                                <NavDropdown.Item as={NavLink} to='/community/leaderboards'>
                                        Leaderboards
                                </NavDropdown.Item>
                                <NavDropdown.ItemText>
                                    Social:
                                </NavDropdown.ItemText>
                                <NavDropdown.Item as={NavLink} to='/community/chat' className='ps-4'>
                                    Chat
                                </NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to='/community/friends' className='ps-4'>
                                    Friends
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                <Button as={Link} to='/login' variant='outline-primary' className='my-2 my-sm-0 d-flex'>Login/Account</Button>
            </Navbar>
        </header>
    );
}