import React, { useState } from "react";
import { Stack, ButtonGroup, Form, Button } from "react-bootstrap";
import './friends.css';

export let friendList = [
    {name: 'Billy Bob Sue', online: true, lastOnline: '12/24/2025 4:56 pm', pictureURL: null, level: 68, favoriteClass: 'Swordsman', lastGame: {score: 1234567890, playerClass: 'Swordsman'},},
    {name: 'John Cena', online: true, lastOnline: '12/24/2025 4:56 pm', pictureURL: '/Banner_Option_Preview.jpeg', level: 16, favoriteClass: 'Mage', lastGame: {score: 5645, playerClass: 'Lance'},},
    {name: 'Leroy Jenkins', online: false, lastOnline: '12/24/2025 4:56 pm', pictureURL: null, level: 24, favoriteClass: 'Cloak', lastGame: {score: 67560, playerClass: 'Swordsman'},},
    {name: 'Adam Sandler', online: false, lastOnline: '12/24/2025 5:00 pm', pictureURL: null, level: 20, favoriteClass: 'Swordsman', lastGame: {score: 12345, playerClass: 'Cloak'},},
];

export function Friends() {
    const [selectedFriend, selectFriend] = useState(friendList[0]);
    return (
        <main className="mx-auto p-4 bg-light">
            <div className="container-md d-flex flex-column gap-3 align-items-center justify-content-center mx-auto">
                <h1>Your Friends:</h1>
                <SwitchAndContent>
                    <FriendList friends={friendList} selectedFriend={selectedFriend} selectFriend={selectFriend}/>
                    <ProfileSummary selectedFriend={selectedFriend} />
                </SwitchAndContent>
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
                  active={friend===selectedFriend} onClick={() => selectFriend(friend)}>
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

function ProfileSummary({selectedFriend}) {
    return (
        <ViewerWindow className='w-auto'>
            <div className='w-100 text-center'>
                <ProfilePic pictureURL={selectedFriend.pictureURL} />
                <h5>{selectedFriend.name}</h5>
            </div>
            [Status message/bio blip]<br/>
            Last online: { selectedFriend.online ? 'Now' : selectedFriend.lastOnline }<br/>
            Level {selectedFriend.level}<br/>
            Most Recent Score: {selectedFriend.lastGame.score}<br/>
            Favorite class to play: {selectedFriend.favoriteClass}<br/>
        </ViewerWindow>
    )
}

function ProfilePic({pictureURL}){
    if(!pictureURL){
        return (<svg xmlns="http://www.w3.org/2000/svg" width='2rem' height='2rem' fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
        )
    }
    return (<img src={pictureURL} id='friend_profile_pic'/>)
}

export function ViewerWindow({children, className, ...props}) {
    return (
        <div {...props} className={'border rounded p-3 ' + className}>{children}</div>
    )
}

export function SwitchAndContent({children, className, ...props}) {
    return (
        <div {...props} className={'d-flex flex-row flex-sm-wrap justify-content-center w-100' + (className? className : '')}>{children}</div>
    )
}