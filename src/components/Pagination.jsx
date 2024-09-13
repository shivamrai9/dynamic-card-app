import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/action';

const Pagination = () => {
  const dispatch = useDispatch();
  const { cards, currentPage } = useSelector(state => state.cards);

  const cardsPerPage = 6;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
  };

  return (
    <nav className="mt-4 text-white">
      <ul className="flex justify-center space-x-2">
        {/* <li key="previous">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`block size-8 rounded-full text-center leading-8 text-gray-900 bg-gray-400 hover:bg-gray-500 ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
             <svg
      viewBox="0 0 384 512"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256l262.7 131.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z" />
    </svg>
          </button>
        </li> */}

        {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => (
          <li key={i + 1}>
            <button
              onClick={() => dispatch(setPage(i + 1))} 
              className={`block size-8 rounded-full text-center leading-8 text-gray-900 ${currentPage === i + 1 ? 'bg-white text-gray-800' : 'bg-gray-400'
                }`}
            >
              {i + 1}
            </button>
          </li>
        ))}

        <li key="next">
          <button onClick={handleNext}
            disabled={currentPage === totalPages}
            className=" size-8 inline-block rounded-full hover:size-9 text-center bg-transparent text-gray-400"
          >
            <svg
              viewBox="0 0 384 512"
              fill="currentColor"
              height="1.3em"
              width="1.3em"
            >
              <path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4c-15.8 7.9-22.2 27.1-14.3 42.9s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;