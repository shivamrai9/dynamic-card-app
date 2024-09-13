import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/action';

const Pagination = () => {
  const dispatch = useDispatch();
  // const { cards, currentPage } = useSelector(state => state.card);
  const { cards, currentPage } = useSelector(state => state.cards);
  console.log(currentPage,"pagination")

  const cardsPerPage = 6;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(cards.length / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
const number = currentPage ;
  return (
    <nav className="mt-4 text-white">
      <ul className="flex justify-center space-x-2">
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => dispatch(setPage(number))}
              className={`px-4 py-2 rounded ${number === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
