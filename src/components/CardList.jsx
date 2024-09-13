import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCard, setLoading, setCards, toggleView, setPage } from '../redux/action';
import { fetchPosts } from '../utils.js/api';
import Pagination from './Pagination';

const CardsList = () => {
    const dispatch = useDispatch();
    const { cards, isLoading, currentPage, viewMode } = useSelector(state => state.cards);
    console.log(viewMode)

    useEffect(() => {
      const loadCards = async () => {
        dispatch(setLoading(true));
        const posts = await fetchPosts();
        dispatch(setCards(posts));
        setTimeout(() => {
          dispatch(setLoading(false));
        }, 5000);
      };

      loadCards();
    }, [dispatch]);

    const handleRemoveCard = (cardId) => {
      console.log(cardId)
      dispatch(removeCard(cardId));
    };

    

    if (isLoading) {
      return <div className="text-center">Loading...</div>;
    }

    const cardsPerPage = 6;
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <>
      <div className="container mx-auto p-4 ">
      {currentCards.map(card => (

      
        <div key={card.id} className="relative flex items-center bg-white p-6 rounded-lg shadow-md mb-4">
          <div className="">
            <img
              src='https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726099200&semt=ais_hybrid'
              alt="Card Image"
              className="w-16 h-16 object-cover rounded-full"
            />
          </div>

          {/* Text Content */}
          <div className="w-3/4 pl-4">
            <h3 className="text-xl font-semibold ">{card.title}</h3>
            <p className="text-gray-700">{card.body}</p>
            <p className="text-gray-400 font-semibold">Mon, 21 Dec 2020 14:57 GMT</p>
          </div>

          {/* Delete Button */}
          <button
            onClick={() => handleRemoveCard(card.id)} 
            className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center"
          >X
          </button>
        </div>
        ))}
      </div>
  
  </>
    );
};

export default CardsList;
