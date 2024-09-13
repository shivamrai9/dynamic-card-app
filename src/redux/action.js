export const SET_CARDS = 'SET_CARDS';
export const SET_LOADING = 'SET_LOADING';
export const REMOVE_CARD = 'REMOVE_CARD';
export const TOGGLE_VIEW = 'TOGGLE_VIEW';
export const SET_PAGE = 'SET_PAGE';
export const UPDATE_FEEDBACK = 'UPDATE_FEEDBACK';
export const RESET_FEEDBACK = 'RESET_FEEDBACK';

export const setCards = (cards) => ({ type: SET_CARDS, payload: cards });
export const setLoading = (loading) => ({ type: SET_LOADING, payload: loading });
export const removeCard = (cardId) => ({ type: REMOVE_CARD, payload: cardId });
export const toggleView = () => ({ type: TOGGLE_VIEW });
export const setPage = (page) => ({ type: SET_PAGE, payload: page });
export const updateFeedback = (feedback) => ({ type: UPDATE_FEEDBACK, payload: feedback });
export const resetFeedback = () => ({ type: RESET_FEEDBACK });
