/*
install dependencies 
npm install @ant-design/icons axios react-chat-engine
and start using them.
*/

import { ChatEngine } from 'react-chat-engine'; 
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css'; // import App.css

const App = () => {  // functional component. 
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine // Actual component. Pass different props to it and based on the props that you pass, it is going to behave differently.
            height="100vh"   // in this case height, chat app to be our entire project set 100vh
            projectID="63dffddd-a5c9-4078-808b-0fc94d84584a"   // project ID this is String which came from ChatEngine.io website after created the project
            userName={localStorage.getItem('username')}        //you can put the specific username after created NewUser in the ChatEngine at this point npm start and chat works
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>} // render own commponent create our own component ChatFeed .. all the props coming from the Engine, ...chatAppProps
            /*
            goto ChatEngine and signup for the account.
            *

        
        />
    );
}
export default App; //ES6 has Default export, which is the value that will be imported from the module, if you use the simple import statement 'import X from 'module''  
                    //x is the name that will be given locally to the variable assigned to contain the value, and it does not have to be named like the origin export. T
                    //There can be only one default export.
                    //export default only one
                    //export named, multiples
                    //실제로 페이지로 한 page 를 그리는 부분에서 여러개를 보내느경우는 없음, 그래서 페이지를 그리는 부분에서는 export default
                    //모듈처럼 함수를 묶어논 부분엔 export 를 사용
