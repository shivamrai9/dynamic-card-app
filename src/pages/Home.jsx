import React from 'react'
import CardsList from '../components/CardList'
import { toggleView } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import FeedbackForm from '../components/FeedbackForm';
import Pagination from '../components/Pagination';


const Home = () => {
    const dispatch = useDispatch();
    const { viewMode } = useSelector(state => state.cards);
    console.log(viewMode, "viewmode")
    const handleToggleView = () => {
        dispatch(toggleView());
    };

    return (
        <>
            <section class="bg-gray-300">
                <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <section class="relative flex h-32 bg-gray-200 rounded-e-3xl shadow-md lg:col-span-5 lg:h-full xl:col-span-3 flex-col items-center gap-3 pt-14 px-14">

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
                                        <h3 className="text-2xl font-bold mb-3">View Toggle</h3>
                                        <div className="flex items-center justify-center ">
                                            <button
                                                className={`rounded-s-lg py-2 px-4 text-center font-bold ${viewMode === 'list' ? 'bg-green-300 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                    }`}
                                                onClick={handleToggleView}
                                            >
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    height="2em"
                                                    width="2em"
                                                >
                                                    <path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H18.8zM8 11h12v2H8zm0 5h12v2H8z" />
                                                </svg>
                                            </button>
                                            <button
                                                className={`rounded-e-lg py-2 px-4 text-center font-bold ${viewMode === 'grid' ? 'bg-green-300 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                    }`}
                                                onClick={handleToggleView}
                                            >
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    height="2em"
                                                    width="2em"
                                                >
                                                    <path d="M10 7h4v4h-4zm6 0h4v4h-4zM4 7h4v4H4zm6 6h4v4h-4zm6 0h4v4h-4zM4 13h4v4H4z" />
                                                </svg>
                                            </button>
                                        </div>
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
                        className="flex flex-col items-center justify-start px-3 py-3  xl:col-span-9 bg-gray-300"
                    >
                        <div className="max-w-xl lg:max-w-5xl w-full h-[600px]">
                            <CardsList />
                            <Pagination />
                        </div>
                    </main>

                </div>
            </section>

            <FeedbackForm />
        </>
    )
}

export default Home
