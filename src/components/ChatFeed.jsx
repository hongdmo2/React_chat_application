import MessageForm from './MessageForm';//we need three different componenets, MyMessage, TheirMessage, and MessageForm 
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
//in the chatengine doc, it shows exctly what I can modify. like customizing UI part
//Also having access to alot of unctions and api calls to manage the chat application
//Also handling event hooks so that one can do some actions once something happens.
//for example you can do something on connect like play a sound or or do an animation also on the fail auth on new chat on new message we're going to use the on
//new message hook that's going to allow us to put a sound notification once somebody sends a message

const ChatFeed = (props) => { 
    const {  activeChat, userName, messages,chats } = props;// {} where destructuring, this is where to structure something from props. we can put'em just in (props)part but
                                                            //also need to use generic pops later.

    const chat = chats && chats[activeChat]; //const chat if chats exist, find chats[activeChat], looking for active chat.

    const renderReadReceipts = (message, isMyMessage) => {
        return chat.people.map((person, index) => person.last_read === message.id && (
            <div 
                key= {`read_${index}`}
                className="read-receipt"
                style={{
                    float: isMyMessage ? 'right' : 'left',
                    backgroundImage: `url(${person?.person?.avatar})`
                }}
            />
        ))

    }

    const renderMessages = () => { //creating new functional compoenent which is going to be used for generating messages, renderMessages.
        const keys = Object.keys(messages); //fetch all of our messages, keys are just IDs of specific messages

        return keys.map((key, index) => { //render our messages
            const message = messages[key]; //one specific message is const message and that is equal to messages and then we dynamically take the message with specific key that want to loop over
            const lastMessageKey = index === 0 ? null : keys[index - 1]; // if this is the last messages to sent, simply check if the index is 0, then return nulll.
                                                                         // if there are messages, make sure to find the last message
            const isMyMessage = userName === message.sender.username; // if this is my message, user name 

            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {
                            isMyMessage
                            ? <MyMessage message={message} />
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }


                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            );
        })
    }
    
    if (!chat) return 'Loading...';

    return ( // what props are we getting from chatfeed
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{ height: '100px' }} />
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    );
}

export default ChatFeed;
