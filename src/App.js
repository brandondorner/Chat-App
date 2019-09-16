import React from 'react';
import Chatkit from '@pusher/chatkit'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'



const tokenProvider = new Chatkit.TokenProvider({
    url:
    "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/f6564c8b-612a-4605-bd88-06e0b7e86486/token"
})

const chatManager = new Chatkit.ChatManager({
    instanceLocator: 'v1:us1:f6564c8b-612a-4605-bd88-06e0b7e86486',
    userId: 'test',
    tokenProvider: tokenProvider,
})

chatManager
  .connect()
  .then(currentUser => {
    currentUser.subscribeToRoomMultipart({
        roomId: currentUser.rooms[0].id,
        hooks: {
          onMessage: message => {
            console.log("Received message:", message)
          }
        }
      });
    console.log("Connected as user ", currentUser);
  })
  .catch(error => {
    console.error("error:", error);
  });



  
  

class App extends React.Component {

    render() {
        return (
            <div className="app">
                <RoomList />
                <MessageList />
                <NewRoomForm />
                <SendMessageForm />
            </div>
        );
    }
}

export default App
