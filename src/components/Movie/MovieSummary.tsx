import React, { useState } from 'react';
import './UserInput.css';

interface UserInputProps {
  onSendMessage: (message: string) => void;
}

const UserInput: React.FC<UserInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form className="user-input-form" onSubmit={handleFormSubmit}>
      <input
        className="user-input-input"
        type="text"
        value={message}
        onChange={handleInputChange}
        placeholder="Type your script text..."
      />
      <button className="user-input-button" type="submit">
        Generate
      </button>
    </form>
  );
};

export default UserInput;
