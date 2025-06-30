/*import React from 'react';

function ChatMessage({ message }) {
    const isUser = message.type === 'user';

    return (
        <div style={{
            display: 'flex',
            justifyContent: isUser ? 'flex-end' : 'flex-start',
            margin: '10px 0'
        }}>
            <div style={{
                maxWidth: '80%',
                padding: '10px',
                borderRadius: '15px',
                backgroundColor: isUser ? '#d1e7dd' : '#f8d7da',
                textAlign: 'left',
                wordWrap: 'break-word'
            }}>
                {message.text}
            </div>
        </div>
    );
}

export default ChatMessage;
*/
// src/components/ChatMessage.js

/*
import React from 'react';

const ChatMessage = ({ message }) => {
  return (
    <div
      style={{
        margin: '10px 0',
        padding: '10px',
        background: message.type === 'bot' ? '#e0f7fa' : '#fce4ec',
        borderRadius: '5px',
      }}
    >
      {message.text.split('\n').map((line, index) => (
        <div key={index} style={{ margin: '2px 0' }}>
          {line}
        </div>
      ))}
    </div>
  );
};

export default ChatMessage;
*/

// src/components/ChatMessage.js
// src/components/ChatMessage.js



/*import React from 'react';

const ChatMessage = ({ message, onOptionClick }) => {
  return (
    <div
      style={{
        margin: '10px 0',
        padding: '10px',
        background: message.type === 'bot' ? '#e0f7fa' : message.type === 'options' ? '#e0f7fa' : '#fce4ec',
        borderRadius: '5px',
      }}
    >
      {message.type === 'options' ? (
        <div>
          {message.text && <div style={{ marginBottom: '10px' }}>{message.text}</div>}
          {message.options && message.options.map((option, index) => (
            <button
              key={index}
              style={{
                margin: '5px',
                padding: '8px 15px',
                background: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                display: 'block' // Stack buttons vertically
              }}
              onClick={() => onOptionClick(option)}
            >
              {option.name}
            </button>
          ))}
        </div>
      ) : (
        message.text.split('\n').map((line, index) => (
          <div key={index} style={{ margin: '2px 0' }}>
            {line}
          </div>
        ))
      )}
    </div>
  );
};

export default ChatMessage;*/

/*import React from 'react';

const ChatMessage = ({ message, onOptionClick }) => {
  return (
    <div
      style={{
        margin: '10px 0',
        padding: '10px',
        background: message.type === 'bot' ? '#e0f7fa' : message.type === 'options' ? '#e0f7fa' : '#fce4ec',
        borderRadius: '5px',
      }}
    >
      {message.type === 'options' ? (
        <div>
          {message.text && <div style={{ marginBottom: '10px' }}>{message.text}</div>}
          {message.options && message.options.map((option, index) => (
            <button
              key={index}
              style={{
                margin: '5px',
                padding: '8px 15px',
                background: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                display: 'block' // Stack buttons vertically
              }}
              onClick={() => onOptionClick(option)}
            >
              {option.name}
            </button>
          ))}
        </div>
      ) : (
        message.text.split('\n').map((line, index) => (
          <div key={index} style={{ margin: '2px 0' }}>
            {line}
          </div>
        ))
      )}
    </div>
  );
};

export default ChatMessage;*/

/*import React from 'react';

const ChatMessage = ({ message, onOptionClick }) => {
  const renderMessage = () => {
    if (message.type === 'options' && message.options) {
      return (
        <div>
          {message.text && <div style={{ marginBottom: '10px' }}>{message.text}</div>}
          {message.options.map((option, index) => (
            <button
              key={index}
              style={{
                margin: '5px',
                padding: '8px 15px',
                background: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                display: 'block' // Stack buttons vertically
              }}
              onClick={() => onOptionClick(option)}
            >
              {option.name}
            </button>
          ))}
        </div>
      );
    } else if (message.type === 'bot' && message.isHtml) {
      // Render HTML content using dangerouslySetInnerHTML
      return <div dangerouslySetInnerHTML={{ __html: message.text }} />;
    } else {
      // Render plain text for user messages and non-HTML bot messages
      return message.text.split('\n').map((line, index) => (
        <div key={index} style={{ margin: '2px 0' }}>
          {line}
        </div>
      ));
    }
  };

  return (
    <div
      style={{
        margin: '10px 0',
        padding: '10px',
        background: message.type === 'bot' ? '#e0f7fa' : message.type === 'options' ? '#e0f7fa' : '#fce4ec',
        borderRadius: '5px',
      }}
    >
      {renderMessage()}
    </div>
  );
};

export default ChatMessage;
*/

/*import React from 'react';

function ChatMessage({ message, onOptionClick }) {
  if (!message) return null;

  if (message.type === 'options' && message.options) {
    return (
      <div style={{ margin: '10px 0', padding: '10px', background: message.type === 'bot' ? '#e0f7fa' : '#f0f0f0', borderRadius: '5px' }}>
        <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>{message.text}</p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px', // Space between buttons
          width: '100%',
          boxSizing: 'border-box'
        }}>
          {message.options.map((option, index) => (
            <button
              key={index}
              style={{
                padding: '10px',
                background: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                textAlign: 'center',
                flex: '1 1 calc(33.33% - 10px)', // Approx 1/3 width minus gap
                minWidth: '150px', // Minimum width to prevent shrinking
                boxSizing: 'border-box'
              }}
              onClick={() => onOptionClick(option)}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ margin: '10px 0', padding: '10px', background: message.type === 'bot' ? '#e0f7fa' : '#f0f0f0', borderRadius: '5px' }}>
      <p style={{ margin: 0 }}>
        {message.isHtml ? (
          <span dangerouslySetInnerHTML={{ __html: message.text }} />
        ) : (
          message.text
        )}
      </p>
    </div>
  );
}

export default ChatMessage;
*/
/*import React from 'react';

function ChatMessage({ message, onOptionClick }) {
  if (!message) return null;

  if (message.type === 'options' && message.options) {
    return (
      <div style={{ margin: '10px 0', padding: '10px', background: message.type === 'bot' ? '#e0f7fa' : '#f0f0f0', borderRadius: '5px' }}>
        <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>{message.text}</p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          {message.options.map((option, index) => (
            <button
              key={index}
              style={{
                padding: '10px',
                background: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                textAlign: 'center',
                flex: option.name === 'Tax' ? '0 0 75px' : '1 1 calc(33.33% - 10px)', // Fixed width for Tax
                minWidth: option.name === 'Tax' ? '75px' : '150px',
                height: '40px',
                boxSizing: 'border-box',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
              onClick={() => onOptionClick(option)}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ margin: '10px 0', padding: '10px', background: message.type === 'bot' ? '#e0f7fa' : '#f0f0f0', borderRadius: '5px' }}>
      <p style={{ margin: 0 }}>
        {message.isHtml ? (
          <span dangerouslySetInnerHTML={{ __html: message.text }} />
        ) : (
          message.text
        )}
      </p>
    </div>
  );
}

export default ChatMessage;
*/
import React from 'react';

function ChatMessage({ message, onOptionClick }) {
  if (!message) return null;

  if (message.type === 'options' && message.options) {
    return (
      <div style={{ margin: '10px 0', padding: '10px', background: message.type === 'bot' ? '#e0f7fa' : '#f0f0f0', borderRadius: '5px' }}>
        <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>{message.text}</p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          {message.options.map((option, index) => (
            <button
              key={index}
              style={{
                padding: '10px',
                background: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                textAlign: 'center',
                height: '40px', // Consistent height
                boxSizing: 'border-box',
                whiteSpace: 'nowrap', // Prevent text wrapping within button
                overflow: 'hidden', // Hide overflow
                textOverflow: 'ellipsis', // Ellipsis for long text
                minWidth: option.name === 'Tax' ? '75px' : '0', // Minimum width only for Tax
                width: 'auto' // Allow width to adjust to content
              }}
              onClick={() => onOptionClick(option)}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ margin: '10px 0', padding: '10px', background: message.type === 'bot' ? '#e0f7fa' : '#f0f0f0', borderRadius: '5px' }}>
      <p style={{ margin: 0 }}>
        {message.isHtml ? (
          <span dangerouslySetInnerHTML={{ __html: message.text }} />
        ) : (
          message.text
        )}
      </p>
    </div>
  );
}

export default ChatMessage;