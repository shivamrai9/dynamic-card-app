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
    if (feedback.firstName && feedback.lastName && feedback.email && feedback.message) {
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
      <section class="bg-gray-200 hidden flex  fixed inset-0 items-center justify-start bg-opacity-50 z-50" id="feedback-form">
        <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section class="relative flex h-32 bg-gray-200 rounded-e-3xl  lg:col-span-5 lg:h-full xl:col-span-3 flex-col items-center gap-3 pt-14 px-14">

            <div class="rounded-xl w-full shadow-xl  p-3 bg-white">
              <div class="flex items-center gap-4">
                <img
                  alt=""
                  src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726099200&semt=ais_hybrid"
                  class="size-16 rounded-full object-cover"
                />

                <div>
                  <h3 class="text-2xl font-bold">Hi Reader,</h3>

                  <div class="flow-root">
                    <ul class="-m-1 flex flex-wrap">
                      <li class="p-1 leading-none">
                        <a href="#" class="text-xs font-medium text-gray-300">Here's your News!</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="rounded-xl w-full shadow-xl  p-3 bg-white">
              <div class=" items-center gap-4 text-center">

                <div>
                  <div className=" text-center">
                    <h3 className="text-2xl font-bold mb-3">Have a Feedback?</h3>
                    <button className="w-full  py-4 font-bold bg-green-300 rounded-lg" onClick={() => document.getElementById('feedback-form').classList.toggle('hidden')} >We're Listning!</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <main
            className="flex flex-col items-start justify-start px-3 py-3  xl:col-span-9 bg-gray-200"
          >
            <div className="max-w-xl lg:max-w-5xl w-full h-svh">
              <div className="rounded-lg p-8 h-full  lg:col-span-3 lg:p-12">
                <div className=" max-w-lg text-start mb-5">
                  <h1 className="text-2xl font-bold sm:text-3xl">Thank you so mush for taking the time!</h1>

                  <p className="text-gray-500">
                    Please provide the  below details!
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="" htmlFor="firstName">First Name:</label>
                      <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="First Name"
                        type="text"
                        id="firstName"

                        name="firstName"
                        value={feedback.firstName}
                        onChange={handleChange}
                      />
                    </div>

                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="" htmlFor="lastName">Last Name:</label>
                      <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Last Name"
                        type="text"
                        id="lastName"

                        name="lastName"
                        value={feedback.lastName}
                        onChange={handleChange}
                      />
                    </div>

                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="mb-2">
                      <label className="block mb-1">Email:</label>
                      <input
                        type="email"
                        name="email"
                        value={feedback.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      />
                    </div>

                  </div>

                  <div>
                    <label className="" htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      value={feedback.message}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Message"
                      rows="8"
                    />
                  </div>

                  <div className="mt-4">
                    <button type="submit" className="w-1/4  py-4 font-bold bg-green-300 rounded-lg text-white"  >Submit Feedback</button>

                  </div>

                  {error && <p className="text-red-500 mt-2">{error}</p>}
                </form>
              </div>
            </div>
          </main>

        </div>
      </section>
    </>
  );
};

export default FeedbackForm;
