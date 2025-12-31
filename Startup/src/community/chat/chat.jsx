import React, { useState } from "react";
import { Button, Form, } from "react-bootstrap";
import { FriendList } from '../friends/friends.jsx';
import './chat.css';

let currentUser = 'me';
let messageList = [
    {sender: 'John Cena', receiver: 'me', content: 'All of the stuff!!',},
    {sender: 'me', receiver: 'John Cena', content: 'Alll offf theee stuffff\nand some more\nand some moreee',},
    {sender: 'Adam Sandler', receiver: 'me', content: 'should only show if I push a button',},
];
export let friendList = [
    {name: 'Billy Bob Sue', online: true, lastOnline: '12/24/2025 4:56 pm', pictureURL: '', level: 24, favoriteClass: 'Swordsman', lastGame: {score: 1234567890, playerClass: 'Swordsman'},},
    {name: 'John Cena', online: true, lastOnline: '12/24/2025 4:56 pm', pictureURL: '', level: 24, favoriteClass: 'Swordsman', lastGame: {score: 1234567890, playerClass: 'Swordsman'},},
    {name: 'Leroy Jenkins', online: false, lastOnline: '12/24/2025 4:56 pm', pictureURL: '', level: 24, favoriteClass: 'Swordsman', lastGame: {score: 1234567890, playerClass: 'Swordsman'},},
    {name: 'Adam Sandler', online: false, lastOnline: '12/24/2025 4:56 pm', pictureURL: '', level: 24, favoriteClass: 'Swordsman', lastGame: {score: 1234567890, playerClass: 'Swordsman'},},
];

export function Chat() {
    const [selectedFriend, selectFriend] = useState('John Cena');
    return (
        <main className="mx-auto p-4 bg-light">
            <div className="container-md d-flex flex-column gap-3 align-items-center mx-auto">
                <h1>Your Chats:</h1>
                <div id="chat-list-and-window" className="d-flex flex-row flex-sm-wrap w-100">
                    <FriendList friends={friendList} selectedFriend={selectedFriend} selectFriend={selectFriend}/>
                    <ChatView messages={messageList} selectedFriend={selectedFriend} />
                </div>
                <Button variant='primary' className='d-block my-2 btn-lg'>+New Chat</Button>
            </div>
        </main>
    );
}

function ChatView({messages, selectedFriend}){
    return (
        <div id='chat-view' className='flex-grow-1 border rounded'>
            {messages.filter((message)=> message.sender==selectedFriend || message.receiver==selectedFriend)
              .map( (messageI, i) => <ChatMessage message={messageI} key={i}/> )}
            <hr/>
            <Form method="get" action="#" className="d-flex my-1">
                <Form.Control type='text' id='newMessage' placeholder='Type your message here' className="flex-grow-1 border rounded-5 px-3 mx-1 text-wrap" required/>
                <Button type='submit' variant='primary' className='rounded-circle m-1'>Up</Button>
            </Form>
        </div>
    )
}

function ChatMessage({message}){
    let origin_class = message.sender == currentUser? 'cm-self' : 'cm-other';
    return(
        <div className={"chat-bubble " + origin_class}>
            <div className={"chat-tip-container " + origin_class}/>
            <div className={"chat-message " + origin_class}>
                {message.content.split('\n').map((line, i) => 
                    <span key = {i}>
                        {line}<br />
                    </span>
                )}
            </div>
        </div>
    )
}