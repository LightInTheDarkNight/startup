import React, { useState } from "react";
import { Button, Stack, Form, ButtonGroup} from "react-bootstrap";
import './chat.css';

let currentUser = 'me';
let messageList = [
    {sender: 'John Cena', content: 'All of the stuff!!', receiver: 'me'},
    {sender: 'me', content: 'Alll offf theee stuffff\nand some more\nand some moreee', receiver: 'John Cena'}
];
let friendList = [
    {name: 'Billy Bob Sue', online: true},
    {name: 'John Cena', online: true},
    {name: 'Leroy Jenkins', online: false},
    {name: 'Adam Sandler', online: false},
];

export function Chat() {
    const [openChat, switchChat] = useState('John Cena');
    return (
        <main className="mx-auto p-4 bg-light">
            <div className="container-md d-flex flex-column gap-3 align-items-center mx-auto">
                <h1>Your Chats:</h1>
                <div id="chat-list-and-window" className="d-flex flex-row flex-sm-wrap border rounded w-100">
                    <FriendList friends={friendList} />
                    <div className="vr"></div>
                    <ChatView messages={messageList} />
                </div>
                <Button variant='primary' className='d-block my-2 btn-lg'>+New Chat</Button>
            </div>
        </main>
    );
}

function ChatView({messages}){
    let i=0;
    let rendered = messages.map( messageI => <ChatMessage message={messageI} key={i++}/> );
    return (
        <div id='chat-view' className='flex-grow-1 border-start-0 rounded-3'>
            {rendered}
            <hr/>
            <Form method="get" action="#" className="d-flex my-1">
                <Form.Control type='text' id='newMessage' placeholder='Type your message here' className="flex-grow-1 border rounded-5 px-3 mx-1 text-wrap" required/>
                <Button type='submit' variant='primary' className='rounded-circle m-1'>Up</Button>
            </Form>
        </div>
    )
}

function ChatMessage({message}){
    let origin_class = 'cm-self';
    if(message.sender != currentUser){
        origin_class = 'cm-other';
    }
    let i=0;
    let lines = message.content.split('\n').map(line => 
        <span key = {i++}>
            {line}<br />
        </span>
    );
    return(
        <div className={"chat-bubble " + origin_class}>
            <div className={"chat-tip-container " + origin_class}/>
            <div className={"chat-message " + origin_class}>
                {lines}
            </div>
        </div>
    )
}

function FriendList({friends}){
    let friendEntries = friends.map(friend => 
        <div className="btn-group dropend flex-fill" key={friend.name}>
            <Button variant='secondary' className='dropdown-toggle d-flex justify-content-between align-items-center gap-3'>
                <Stack direction='horizontal' className='w-100' gap={3}>
                    <div className="Friend Name">{friend.name}: </div><div className="ms-auto Status">{friend.online ? 'Online' : 'Offline'}</div>
                </Stack>
            </Button>
        </div>
    )
    return( 
        <div id="chat-list" className="p-0 m-0">
            <ButtonGroup className='h-100' vertical>
                <SelfButton/>
                {friendEntries}
            </ButtonGroup>
        </div>
    );
}

function SelfButton(){
    return (
        <Form as={ButtonGroup} className='flex-fill d-flex'>
            <Button variant='secondary' className='btn-disabled'>Your Status: </Button>
            <div className='d-inline flex-fill bg-secondary'/>
            <Form.Select id='currentStatus' className="rounded-0 bg-secondary text-light border-0 ms-auto" style={{width:'6rem'}}>
                <option value='online'>Online</option>
                <option value='offline'>Offline</option>
                <option value='do-not-disturb'>Do Not Disturb</option>
            </Form.Select>
        </Form>
    );
}