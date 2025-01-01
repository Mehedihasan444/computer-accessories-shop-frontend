import { useState } from 'react';
import { BsFillSendArrowUpFill } from "react-icons/bs";
import useAxiosPublic from '../../Hooks/useAxiosPublic';
const ChatMessage = ({ message, isUser }) => (
    <div className={`chat ${isUser ? 'chat-end' : 'chat-start'}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img
                    alt="Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
            </div>
        </div>
        <div className="chat-header">
            {isUser ? 'You' : 'AI Assistant'}
            <time className="text-xs opacity-50">{new Date().toLocaleTimeString()}</time>
        </div>
        <div className="chat-bubble">{message}</div>
        <div className="chat-footer opacity-50">
            {isUser ? 'Delivered' : 'AI Response'}
        </div>
    </div>
);

const AiChatBot = () => {
    const [chatMessages, setChatMessages] = useState([]);
    const axiosPublic = useAxiosPublic();
    const [value, setValue] = useState('');
    const addToChat = (message, isUser) => {
        setChatMessages(prev => [...prev, { message, isUser, id: Date.now() }]);
    };

    const handleAiChat = async (e) => {
        e.preventDefault();
        const userPrompt = e.currentTarget.prompt.value;

        // Add user message
        addToChat(userPrompt, true);

        // Get AI response
        const data = { prompt: userPrompt };
        const res = await axiosPublic.post('/ai-chat', data);

        // Add AI response
        addToChat(res.data, false);
        setValue('');
        // Clear input
        e.currentTarget.reset();
    };

    return (
        <div className=" w-full flex flex-col justify-end">
            <div className="flex-1 overflow-y-auto p-4">
                {chatMessages.map((msg) => (
                    <ChatMessage
                        key={msg.id}
                        message={msg.message}
                        isUser={msg.isUser}
                    />
                ))}
            </div>

            <div className="flex justify-center items-end mt-10 w-full">
                <div className="w-full max-w-5xl mx-auto">
                    <div className="label">
                        <span className="label-text">Write your query here...</span>
                    </div>
                    <form onSubmit={handleAiChat}>
                        <label className="input input-bordered flex items-center gap-2 input-lg w-full">
                            <input
                                type="text"
                                name='prompt'
                                className="grow"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                placeholder="Enter your prompt here"
                            />
                            <button type='submit'>
                                <BsFillSendArrowUpFill />
                            </button>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AiChatBot;