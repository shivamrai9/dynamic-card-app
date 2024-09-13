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

      <div
        className={`${viewMode === 'grid' ? 'grid grid-cols-3 gap-8' : 'space-y-4'
          } h-full overflow-auto no-scrollbar`}
      >
        {currentCards.map(card => (
          <>{
            viewMode === "list" ?
              <div key={card.id} className="">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl border shadow-sm shadow-indigo-100 bg-white  p-4">
                    <div className="flex items-center gap-4">
                      <img
                        alt=""
                        src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726099200&semt=ais_hybrid"
                        className="size-16 rounded-full object-cover"
                      />

                      <div>
                        <h3 className="font-bold text-xl">{card.title}</h3>
                        <div className="text-ellipsis overflow-hidden h-12">
                          <p className="font-medium mb-1">{card.body}</p>
                        </div>
                        <div className="flow-root">
                          <p className="text-gray-400 font-semibold">Mon, 21 Dec 2020 14:57 GMT</p>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div>
                    <button
                     onClick={() => handleRemoveCard(card.id)}
                      className="inline-block rounded-full shadow-lg p-1 bg-white  text-red-500 hover:text-red-700  active:text-red-500"
                    >
                      <svg fill="none" viewBox="0 0 15 15" height="3em" width="3em" >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M11.782 4.032a.575.575 0 10-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 00-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 00.814.814L7.5 8.313l3.469 3.469a.575.575 0 00.813-.814L8.313 7.5l3.469-3.468z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

              </div>
              :
              <div key={card.id} className=" rounded-lg px-6 py-1 pb-4 shadow-lg shadow-indigo-100 bg-white flex flex-col items-end">
                {
                  viewMode === "grid" ?
                    <button
                      onClick={() => handleRemoveCard(card.id)}
                      className=" text-red-600 font-bold text-xl rounded-full flex items-center justify-center self-end"
                    >
                      <svg fill="none" viewBox="0 0 15 15" height="1.2em" width="1.2em" >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M11.782 4.032a.575.575 0 10-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 00-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 00.814.814L7.5 8.313l3.469 3.469a.575.575 0 00.813-.814L8.313 7.5l3.469-3.468z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button> : ""
                }
                <div className="mb-2">

                  <dl>
                    <div className="text-ellipsis overflow-hidden">
                      <dt className="font-bold text-xl mb-1">{card.title}</dt>
                    </div>
                    <div className="text-ellipsis overflow-hidden h-12">
                      <dd className="font-medium mb-1">{card.body}</dd>
                    </div>
                    <p className="text-gray-400 font-semibold">Mon, 21 Dec 2020 14:57 GMT</p>
                  </dl>
                </div>
                {
                  viewMode === "grid" ?

                    <img
                      alt=""
                      src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726099200&semt=ais_hybrid"
                      className="h-36 w-full rounded-md object-cover"
                    /> : ""
                }
              </div>}
          </>
        ))}
      </div>
    </>
  );
};

export default CardsList;
