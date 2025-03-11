import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Info, X } from 'lucide-react';
import '../../styles/Chatbot.css';

// Mock chatbot responses
const mockResponses = {
  'hello': 'Hello! I\'m your PCOS AI assistant. How can I help you today?',
  'hi': 'Hi there! I\'m here to answer your PCOS-related questions. What would you like to know?',
  'pcos': 'PCOS (Polycystic Ovary Syndrome) is a hormonal disorder common among women of reproductive age...',
  'symptoms': 'Common PCOS symptoms include irregular periods, heavy bleeding, excess hair growth, acne...',
  'treatment': 'PCOS treatment typically focuses on managing concerns such as infertility, hirsutism, acne...',
  'diet': 'A PCOS-friendly diet typically includes high-fiber foods, lean protein, anti-inflammatory foods...',
  'exercise': 'Regular exercise helps improve insulin resistance and reduce inflammation...',
  'insulin resistance': 'Insulin resistance is when cells in your body don\'t respond well to insulin...',
  'fertility': 'PCOS is one of the most common causes of female infertility...',
  'medication': 'Medications for PCOS may include birth control pills, metformin, anti-androgens, and fertility medications...'
};

// Suggested questions
const suggestedQuestions = [
  'What is PCOS?',
  'What are common PCOS symptoms?',
  'How is PCOS treated?',
  'What diet is best for PCOS?',
  'How does exercise help PCOS?',
  'What is insulin resistance?',
  'Can PCOS affect fertility?',
  'What medications help with PCOS?'
];

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! I\'m your PCOS AI assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Generate bot response
    setTimeout(() => {
      let botResponse = 'I\'m not sure about that. Could you try asking something else about PCOS?';
      
      // Check for keywords in the input
      const lowercaseInput = input.toLowerCase();
      
      for (const [keyword, response] of Object.entries(mockResponses)) {
        if (lowercaseInput.includes(keyword)) {
          botResponse = response;
          break;
        }
      }
      
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
    
    setInput('');
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleSuggestedQuestion = (question) => {
    setInput(question);
    
    // Focus the input after setting the question
    const inputElement = document.getElementById('chat-input');
    if (inputElement) {
      inputElement.focus();
    }
  };
  
  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <div className="chatbot-title">
          <Bot size={24} />
          <h1>PCOS AI Assistant</h1>
        </div>
        <button 
          className="info-button"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <X size={20} /> : <Info size={20} />}
        </button>
      </div>
      
      {showInfo && (
        <div className="chatbot-info">
          <h3>About this AI Assistant</h3>
          <p>
            This AI assistant provides general information about PCOS (Polycystic Ovary Syndrome)...
          </p>
          <p>
            <strong>Note:</strong> This assistant provides educational information only...
          </p>
        </div>
      )}
      
      <div className="chatbot-messages">
        {messages.map(message => (
          <div 
            key={message.id} 
            className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            <div className="message-avatar">
              {message.sender === 'user' ? <User size={20} /> : <Bot size={20} />}
            </div>
            <div className="message-content">
              <div className="message-text">{message.text}</div>
              <div className="message-time">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="suggested-questions">
        <h4>Suggested Questions</h4>
        <div className="questions-container">
          {suggestedQuestions.map((question, index) => (
            <button 
              key={index} 
              className="question-chip"
              onClick={() => handleSuggestedQuestion(question)}
            >
              {question}
            </button>
          ))}
        </div>
      </div>
      
      <div className="chatbot-input">
        <textarea
          id="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your question about PCOS..."
          rows={1}
        />
        <button 
          className="send-button"
          onClick={handleSendMessage}
          disabled={!input.trim()}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
