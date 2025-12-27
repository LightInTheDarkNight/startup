import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';

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

            <Row xs='1' md='3'>
                <Col>
                    <Card as={ Link } to='/play' className='btn btn-outline-dark h-100' style={{backgroundImage:"url('/Sword.ico')"}}>
                        <Card.Body className='text-light text-darken-bg'>
                            Play
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card as={ Link } to='/chat' className='btn btn-outline-dark h-100' style={{backgroundImage:"url('/Bottle.ico')"}}>
                        <Card.Body className='text-light text-darken-bg'>
                            Chat
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card as={ Link } to='/play' className='btn btn-outline-dark h-100' style={{backgroundImage:"url('/Camera.ico')"}}>
                        <Card.Body className='text-light text-darken-bg'>
                            Watch
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </main>
    );
}