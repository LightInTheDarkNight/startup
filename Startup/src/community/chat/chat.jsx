import React, { useState } from "react";
import { Button, Form, Stack, } from "react-bootstrap";
import { FriendList, friendList, SwitchAndContent, ViewerWindow } from '../friends/friends.jsx';
import './chat.css';

let currentUser = 'me';
let messageList = [
    {sender: 'John Cena', receiver: 'me', content: 'All of the stuff!!',},
    {sender: 'me', receiver: 'John Cena', content: 'Alll offf theee stuffff\nand some more\nand some moreee',},
    {sender: 'Adam Sandler', receiver: 'me', content: 'should only show if I push a button',},
];


export function Chat() {
    const [selectedFriend, selectFriend] = useState(friendList[0]);
    return (
        <main className="mx-auto p-4 bg-light">
            <div className="container-md d-flex flex-column gap-3 align-items-center mx-auto">
                <h1>Your Chats:</h1>
                <SwitchAndContent id="chat-list-and-window">
                    <FriendList friends={friendList} selectedFriend={selectedFriend} selectFriend={selectFriend}/>
                    <ChatView messages={messageList} selectedFriend={selectedFriend} />
                </SwitchAndContent>
                <Button variant='primary' className='d-block my-2 btn-lg'>+New Chat</Button>
            </div>
        </main>
    );
}

function ChatView({messages, selectedFriend}){
    return (
        <ViewerWindow id='chat-view' className='flex-fill'>
            {messages.filter((message)=> message.sender==selectedFriend.name || message.receiver==selectedFriend.name)
              .map( (messageI, i) => <ChatMessage message={messageI} key={i}/> )}
            <hr/>
            <Form method="get" action="#" className="d-flex my-1">
                <Form.Control type='text' id='newMessage' placeholder='Type your message here' className="flex-grow-1 border rounded-5 px-3 mx-1 text-wrap" required/>
                <Button type='submit' variant='primary' className='rounded-circle m-1'>Up</Button>
            </Form>
        </ViewerWindow>
    )
}

function ChatMessage({message}){
    const origin_class = message.sender == currentUser? ' cm-self' : '';
    return(
        <Stack direction='horizontal' gap={0} className={"chat-bubble align-items-end" + origin_class}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className={"chat-tip" + origin_class}>
                <rect className="chat-tip-background"/>
                <circle className="chat-tip-curve"/>
            </svg>
            <div className={"chat-message " + origin_class}>
                {message.content}
            </div>
        </Stack>
    )
}