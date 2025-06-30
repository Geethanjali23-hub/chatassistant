
/*import React, { useState, useEffect } from 'react';
import chatbotContent from '../chatbotContent';
import ChatMessage from './ChatMessage';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.type === 'user') {
      setMessages(prev => [...prev, { text: chatbotContent.greeting, type: 'bot' }]);
      setTimeout(() => {
        setCurrentOptions(chatbotContent.options);
      }, 500);
    }
  }, [messages]);

  const formatResponse = (text) => {
    if (!text) return '';

    // Split by newlines and trim each line
    const lines = text.split('\n').map(line => line.trim());

    let formattedLines = [];
    let indentLevel = 0;

    lines.forEach((line, index) => {
      if (!line) return; // Skip empty lines

      // Reset indent for new sections (e.g., numbered items)
      if (/^\d+\.\s/.test(line)) {
        indentLevel = 0;
        formattedLines.push(`- ${line.replace(/^\d+\.\s/, '').trim()}`);
      }
      // Handle bullet points or key-value pairs
      else if (/^[\•\-\*]\s/.test(line) || line.includes(': ')) {
        if (line.includes(': ')) {
          const [key, value] = line.split(': ');
          formattedLines.push(`${'  '.repeat(indentLevel)}- ${key.trim()}: ${value.trim()}`);
        } else {
          formattedLines.push(`${'  '.repeat(indentLevel)}- ${line.replace(/^[\•\-\*]\s/, '').trim()}`);
        }
        indentLevel = 1; // Increase indent for sub-items
      }
      // Handle sub-items (indented content after a colon or dash)
      else if (lines[index - 1]?.includes(':') || lines[index - 1]?.startsWith('-')) {
        formattedLines.push(`${'  '.repeat(indentLevel + 1)}${line.trim()}`);
      }
      // Plain text (reset indent if it’s a new paragraph-like line)
      else {
        indentLevel = 0;
        formattedLines.push(line.trim());
      }
    });

    return formattedLines.join('\n');
  };

  const handleOptionClick = (option) => {
    if (option.features) {
      setMessages(prev => [
        ...prev,
        { text: option.name, type: 'user' },
        { text: `Select a feature from ${option.name}:`, type: 'bot' }
      ]);
      setCurrentOptions(option.features);
    } else {
      const formattedDetails = formatResponse(option.details);
      setMessages(prev => [
        ...prev,
        { text: option.name, type: 'user' },
        { text: formattedDetails, type: 'bot' }
      ]);
      setCurrentOptions([]); // Still clear sub-options for leaf nodes
    }
  };

  const handleSend = () => {
    if (inputValue.trim() === '') return;
    setMessages([...messages, { text: inputValue.trim(), type: 'user' }]);
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleBack = () => {
    // Reset chat by clearing messages and resetting to initial options
    setMessages([]);
    setCurrentOptions(chatbotContent.options);
    setInputValue('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>HouseofCompanies Chatbot</h1>
      <div style={{
        border: '1px solid #ccc',
        padding: '10px',
        minHeight: '400px',
        maxHeight: '400px',
        overflowY: 'auto',
        background: '#f9f9f9'
      }}>
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
      </div>

    
      {messages.length > 0 && (
        <button
          onClick={handleBack}
          style={{
            margin: '10px 0',
            padding: '5px 10px',
            background: '#1E3A8A', // Deep blue color
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          ← Back
        </button>
      )}

      
      <div style={{ marginTop: '10px' }}>
        {currentOptions.map((option, index) => (
          <button
            key={index}
            style={{
              margin: '5px',
              padding: '10px',
              background: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            onClick={() => handleOptionClick(option)}
          >
            {option.name}
          </button>
        ))}
      </div>

      
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          style={{ flex: 1, padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: '10px',
            background: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBot;*/


/*
import React, { useState, useEffect } from 'react';
import chatbotContent from '../chatbotContent';
import ChatMessage from './ChatMessage';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.type === 'user') {
      setMessages(prev => [...prev, { text: chatbotContent.greeting, type: 'bot' }]);
      setTimeout(() => {
        setCurrentOptions(chatbotContent.options);
        setMessages(prev => [
          ...prev,
          { text: 'Select an option:', type: 'options', options: chatbotContent.options }
        ]);
      }, 500);
    }
  }, [messages]);

  const formatResponse = (text) => {
    if (!text) return '';

    // Split by newlines and trim each line
    const lines = text.split('\n').map(line => line.trim());

    let formattedLines = [];
    let indentLevel = 0;

    lines.forEach((line, index) => {
      if (!line) return; // Skip empty lines

      // Reset indent for new sections (e.g., numbered items)
      if (/^\d+\.\s/.test(line)) {
        indentLevel = 0;
        formattedLines.push(`- ${line.replace(/^\d+\.\s/, '').trim()}`);
      }
      // Handle bullet points or key-value pairs
      else if (/^[\•\-\*]\s/.test(line) || line.includes(': ')) {
        if (line.includes(': ')) {
          const [key, value] = line.split(': ');
          formattedLines.push(`${'  '.repeat(indentLevel)}- ${key.trim()}: ${value.trim()}`);
        } else {
          formattedLines.push(`${'  '.repeat(indentLevel)}- ${line.replace(/^[\•\-\*]\s/, '').trim()}`);
        }
        indentLevel = 1; // Increase indent for sub-items
      }
      // Handle sub-items (indented content after a colon or dash)
      else if (lines[index - 1]?.includes(':') || lines[index - 1]?.startsWith('-')) {
        formattedLines.push(`${'  '.repeat(indentLevel + 1)}${line.trim()}`);
      }
      // Plain text (reset indent if it’s a new paragraph-like line)
      else {
        indentLevel = 0;
        formattedLines.push(line.trim());
      }
    });

    return formattedLines.join('\n');
  };

  const handleOptionClick = (option) => {
    if (option.features) {
      setMessages(prev => [
        ...prev,
        { text: option.name, type: 'user' },
        { text: `Select a feature from ${option.name}:`, type: 'options', options: option.features }
      ]);
      setCurrentOptions(option.features);
    } else {
      const formattedDetails = formatResponse(option.details);
      setMessages(prev => [
        ...prev,
        { text: option.name, type: 'user' },
        { text: formattedDetails, type: 'bot' }
      ]);
      setCurrentOptions([]); // Clear sub-options for leaf nodes
    }
  };

  const handleSend = () => {
    if (inputValue.trim() === '') return;
    setMessages([...messages, { text: inputValue.trim(), type: 'user' }]);
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleBack = () => {
    // Reset chat by clearing messages and resetting to initial options
    setMessages([]);
    setCurrentOptions(chatbotContent.options);
    setInputValue('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1> Chat Assistant</h1>
      <div style={{
        border: '1px solid #ccc',
        padding: '10px',
        minHeight: '400px',
        maxHeight: '400px',
        overflowY: 'auto',
        background: '#f9f9f9'
      }}>
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} onOptionClick={handleOptionClick} />
        ))}
      </div>

      
      {messages.length > 0 && (
        <button
          onClick={handleBack}
          style={{
            margin: '10px 0',
            padding: '5px 10px',
            background: '#1E3A8A', // Deep blue color
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          ← Back
        </button>
      )}

      
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          style={{ flex: 1, padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: '10px',
            background: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBot;*/

/*import React, { useState, useEffect, useRef } from 'react';
import chatbotContent from '../chatbotContent';
import ChatMessage from './ChatMessage';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.type === 'user') {
      setMessages(prev => [...prev, { text: chatbotContent.greeting, type: 'bot' }]);
      setTimeout(() => {
        setCurrentOptions(chatbotContent.options);
        setMessages(prev => [
          ...prev,
          { text: 'Select an option:', type: 'options', options: chatbotContent.options }
        ]);
      }, 500);
    } else if (lastMessage && lastMessage.type === 'options') {
      scrollToBottom();
    }
  }, [messages]);

  const formatResponse = (text) => {
    if (!text) return '';

    // Split by newlines and trim each line
    const lines = text.split('\n').map(line => line.trim());

    let formattedLines = [];
    let indentLevel = 0;

    lines.forEach((line, index) => {
      if (!line) return; // Skip empty lines

      // Reset indent for new sections (e.g., numbered items)
      if (/^\d+\.\s/.test(line)) {
        indentLevel = 0;
        formattedLines.push(`- ${line.replace(/^\d+\.\s/, '').trim()}`);
      }
      // Handle bullet points or key-value pairs
      else if (/^[\•\-\*]\s/.test(line) || line.includes(': ')) {
        if (line.includes(': ')) {
          const [key, value] = line.split(': ');
          formattedLines.push(`${'  '.repeat(indentLevel)}- ${key.trim()}: ${value.trim()}`);
        } else {
          formattedLines.push(`${'  '.repeat(indentLevel)}- ${line.replace(/^[\•\-\*]\s/, '').trim()}`);
        }
        indentLevel = 1; // Increase indent for sub-items
      }
      // Handle sub-items (indented content after a colon or dash)
      else if (lines[index - 1]?.includes(':') || lines[index - 1]?.startsWith('-')) {
        formattedLines.push(`${'  '.repeat(indentLevel + 1)}${line.trim()}`);
      }
      // Plain text (reset indent if it’s a new paragraph-like line)
      else {
        indentLevel = 0;
        formattedLines.push(line.trim());
      }
    });

    return formattedLines.join('\n');
  };

  const handleOptionClick = (option) => {
    if (option.features) {
      setMessages(prev => [
        ...prev,
        { text: option.name, type: 'user' },
        { text: `Select a feature from ${option.name}:`, type: 'options', options: option.features }
      ]);
      setCurrentOptions(option.features);
    } else {
      const formattedDetails = formatResponse(option.details);
      setMessages(prev => [
        ...prev,
        { text: option.name, type: 'user' },
        { text: formattedDetails, type: 'bot' }
      ]);
      setCurrentOptions([]); // Clear sub-options for leaf nodes
    }
    // Scroll only after a user message
    setTimeout(() => {
      const lastUserIndex = messages.findLastIndex(msg => msg.type === 'user');
      if (lastUserIndex >= 0) scrollToBottom();
    }, 0);
  };

  const handleSend = () => {
    if (inputValue.trim() === '') return;
    setMessages([...messages, { text: inputValue.trim(), type: 'user' }]);
    setInputValue('');
    setTimeout(scrollToBottom, 0);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleBack = () => {
    // Reset chat by clearing messages and resetting to initial options
    setMessages([]);
    setCurrentOptions(chatbotContent.options);
    setInputValue('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1> Chat Assistant</h1>
      <div style={{
        border: '1px solid #ccc',
        padding: '10px',
        minHeight: '400px',
        maxHeight: '400px',
        overflowY: 'auto',
        background: '#f9f9f9'
      }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <ChatMessage message={msg} onOptionClick={handleOptionClick} />
            {msg.type === 'user' && index === messages.findLastIndex(m => m.type === 'user') && <div ref={messagesEndRef} />}
          </div>
        ))}
      </div>

      
      {messages.length > 0 && (
        <button
          onClick={handleBack}
          style={{
            margin: '10px 0',
            padding: '5px 10px',
            background: '#1E3A8A', // Deep blue color
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          ← Back
        </button>
      )}

      
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          style={{ flex: 1, padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: '10px',
            background: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBot; */

/*import React, { useState, useEffect, useRef } from 'react';
import chatbotContent from '../chatbotContent';
import ChatMessage from './ChatMessage';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.type === 'user') {
      setMessages(prev => [...prev, { text: chatbotContent.greeting, type: 'bot' }]);
      setTimeout(() => {
        setCurrentOptions(chatbotContent.options);
        setMessages(prev => [
          ...prev,
          { text: 'Select an option:', type: 'options', options: chatbotContent.options }
        ]);
      }, 500);
    } else if (lastMessage && lastMessage.type === 'options') {
      scrollToBottom();
    }
  }, [messages]);

  const formatResponse = (text) => {
    if (!text) return '';

    // Split by newlines and trim each line
    const lines = text.split('\n').map(line => line.trim());

    let formattedLines = [];
    let indentLevel = 0;

    lines.forEach((line, index) => {
      if (!line) return; // Skip empty lines

      // Reset indent for new sections (e.g., numbered items)
      if (/^\d+\.\s/.test(line)) {
        indentLevel = 0;
        formattedLines.push(`- ${line.replace(/^\d+\.\s/, '').trim()}`);
      }
      // Handle bullet points or key-value pairs
      else if (/^[\•\-\*]\s/.test(line) || line.includes(': ')) {
        if (line.includes(': ')) {
          const [key, value] = line.split(': ');
          formattedLines.push(`${'  '.repeat(indentLevel)}- ${key.trim()}: ${value.trim()}`);
        } else {
          formattedLines.push(`${'  '.repeat(indentLevel)}- ${line.replace(/^[\•\-\*]\s/, '').trim()}`);
        }
        indentLevel = 1; // Increase indent for sub-items
      }
      // Handle sub-items (indented content after a colon or dash)
      else if (lines[index - 1]?.includes(':') || lines[index - 1]?.startsWith('-')) {
        formattedLines.push(`${'  '.repeat(indentLevel + 1)}${line.trim()}`);
      }
      // Plain text (reset indent if it’s a new paragraph-like line)
      else {
        indentLevel = 0;
        formattedLines.push(line.trim());
      }
    });

    return formattedLines.join('\n');
  };

  const handleOptionClick = (option) => {
    if (option.features) {
      setMessages(prev => [
        ...prev,
        { text: option.name, type: 'user' },
        { text: `Select a feature from ${option.name}:`, type: 'options', options: option.features }
      ]);
      setCurrentOptions(option.features);
    } else {
      const formattedDetails = formatResponse(option.details);
      setMessages(prev => [
        ...prev,
        { text: option.name, type: 'user' },
        { text: formattedDetails, type: 'bot', isHtml: true } // Flag to indicate HTML content
      ]);
      setCurrentOptions([]); // Clear sub-options for leaf nodes
    }
    // Scroll only after a user message
    setTimeout(() => {
      const lastUserIndex = messages.findLastIndex(msg => msg.type === 'user');
      if (lastUserIndex >= 0) scrollToBottom();
    }, 0);
  };

  const handleSend = () => {
    if (inputValue.trim() === '') return;
    setMessages([...messages, { text: inputValue.trim(), type: 'user' }]);
    setInputValue('');
    setTimeout(scrollToBottom, 0);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleBack = () => {
    // Reset chat by clearing messages and resetting to initial options
    setMessages([]);
    setCurrentOptions(chatbotContent.options);
    setInputValue('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Chat Assistant</h1>
      <div style={{
        border: '1px solid #ccc',
        padding: '10px',
        minHeight: '400px',
        maxHeight: '400px',
        overflowY: 'auto',
        background: '#f9f9f9'
      }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <ChatMessage message={msg} onOptionClick={handleOptionClick} />
            {msg.type === 'user' && index === messages.findLastIndex(m => m.type === 'user') && <div ref={messagesEndRef} />}
          </div>
        ))}
      </div>

      {messages.length > 0 && (
        <button
          onClick={handleBack}
          style={{
            margin: '10px 0',
            padding: '5px 10px',
            background: '#1E3A8A',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          ← Back
        </button>
      )}

      <div style={{ display: 'flex', marginTop: '10px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          style={{ flex: 1, padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: '10px',
            background: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBot; 
*/
import React, { useState, useEffect, useRef } from 'react';
import chatbotContent from '../chatbotContent';
import ChatMessage from './ChatMessage';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.type === 'user') {
      setMessages(prev => [...prev, { text: chatbotContent.greeting, type: 'bot' }]);
      setTimeout(() => {
        setCurrentOptions(chatbotContent.options);
        setMessages(prev => [
          ...prev,
          { text: 'Select an option:', type: 'options', options: chatbotContent.options }
        ]);
      }, 500);
    } else if (lastMessage && lastMessage.type === 'options') {
      scrollToBottom();
    }
  }, [messages]);

  const formatResponse = (text) => {
    if (!text) return '';

    const lines = text.split('\n').map(line => line.trim());

    let formattedLines = [];
    let indentLevel = 0;

    lines.forEach((line, index) => {
      if (!line) return;

      if (/^\d+\.\s/.test(line)) {
        indentLevel = 0;
        formattedLines.push(`- ${line.replace(/^\d+\.\s/, '').trim()}`);
      } else if (/^[\•\-\*]\s/.test(line) || line.includes(': ')) {
        if (line.includes(': ')) {
          const [key, value] = line.split(': ');
          formattedLines.push(`${'  '.repeat(indentLevel)}- ${key.trim()}: ${value.trim()}`);
        } else {
          formattedLines.push(`${'  '.repeat(indentLevel)}- ${line.replace(/^[\•\-\*]\s/, '').trim()}`);
        }
        indentLevel = 1;
      } else if (lines[index - 1]?.includes(':') || lines[index - 1]?.startsWith('-')) {
        formattedLines.push(`${'  '.repeat(indentLevel + 1)}${line.trim()}`);
      } else {
        indentLevel = 0;
        formattedLines.push(line.trim());
      }
    });

    return formattedLines.join('\n');
  };

  const handleOptionClick = (option) => {
    if (option.features) {
      setMessages(prev => [
        ...prev,
        { text: option.name, type: 'user' },
        { text: `Select a feature from ${option.name}:`, type: 'options', options: option.features }
      ]);
      setCurrentOptions(option.features);
    } else {
      const formattedDetails = formatResponse(option.details);
      setMessages(prev => [
        ...prev,
        { text: option.name, type: 'user' },
        { text: formattedDetails, type: 'bot', isHtml: true }
      ]);
      setCurrentOptions([]);
    }
    setTimeout(() => {
      const lastUserIndex = messages.findLastIndex(msg => msg.type === 'user');
      if (lastUserIndex >= 0) scrollToBottom();
    }, 0);
  };

  const handleSend = () => {
    if (inputValue.trim() === '') return;
    setMessages([...messages, { text: inputValue.trim(), type: 'user' }]);
    setInputValue('');
    setTimeout(scrollToBottom, 0);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleBack = () => {
    setMessages([]);
    setCurrentOptions(chatbotContent.options);
    setInputValue('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', boxSizing: 'border-box' }}>
      <h1>Chat Assistant</h1>
      <div style={{
        border: '1px solid #ccc',
        padding: '10px',
        minHeight: '400px',
        maxHeight: '400px',
        overflowY: 'auto',
        background: '#f9f9f9',
        boxSizing: 'border-box'
      }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <ChatMessage message={msg} onOptionClick={handleOptionClick} />
            {msg.type === 'user' && index === messages.findLastIndex(m => m.type === 'user') && <div ref={messagesEndRef} />}
          </div>
        ))}
      </div>

      {messages.length > 0 && (
        <button
          onClick={handleBack}
          style={{
            margin: '10px 0',
            padding: '5px 10px',
            background: '#1E3A8A',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            width: '100%',
            boxSizing: 'border-box'
          }}
        >
          ← Back
        </button>
      )}

      <div style={{ display: 'flex', marginTop: '10px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          style={{ flex: 1, padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: '10px',
            background: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBot;