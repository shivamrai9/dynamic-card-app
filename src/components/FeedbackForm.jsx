import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFeedback, resetFeedback } from '../redux/action';

const FeedbackForm = () => {
  const dispatch = useDispatch();
  const feedback = useSelector(state => state.cards.feedback);
  console.log(feedback)
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.name && feedback.email && feedback.message) {
      dispatch(resetFeedback());
      setError('');
      alert('Feedback Submitted');
    } else {
      setError('All fields are required');
    }
  };

  const handleChange = (e) => {
    dispatch(updateFeedback({ [e.target.name]: e.target.value }));
  };

  return (
    <>
        <form 
      id="feedback-form" 
      className="hidden p-4 border rounded mt-4 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onSubmit={handleSubmit}
    >
      <div className="mb-2">
        <label className="block mb-1">Name:</label>
        <input 
          type="text" 
          name="name" 
          value={feedback.name} 
          onChange={handleChange} 
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Email:</label>
        <input 
          type="email" 
          name="email" 
          value={feedback.email} 
          onChange={handleChange} 
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Message:</label>
        <textarea 
          name="message" 
          value={feedback.message} 
          onChange={handleChange} 
          className="border p-2 w-full"
        />
      </div>
      <button 
        type="submit" 
        className="p-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
    </>
  );
};

export default FeedbackForm;
