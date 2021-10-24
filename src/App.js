/*
install dependencies 
npm install @ant-design/icons axios react-chat-engine
and start using them.
*/

import { ChatEngine } from 'react-chat-engine'; 
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css'; // import App.css

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="63dffddd-a5c9-4078-808b-0fc94d84584a"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}

        
        />
    );
}
export default App;
