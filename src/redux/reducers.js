import { 
    SET_CARDS, SET_LOADING, REMOVE_CARD, TOGGLE_VIEW, 
    SET_PAGE, UPDATE_FEEDBACK, RESET_FEEDBACK 
  } from './action';


  
  const initialState = {
    cards: [],
    currentPage: 1,
    isLoading: true,
    viewMode: 'list',
    feedback: {
      firstName: '',
      lastName:'',
      email: '',
      message: ''
    }
  };
  
  const cardsReducer = (state = initialState, action) => {
    switch(action.type) {
      case SET_CARDS:
        return { ...state, cards: action.payload };
      case SET_LOADING:
        return { ...state, isLoading: action.payload };
      case REMOVE_CARD:
        return {
          ...state,
          cards: state.cards.filter(card => card.id !== action.payload)
        };
      case TOGGLE_VIEW:
        return { ...state, viewMode: state.viewMode === 'grid' ? 'list' : 'grid' };
      case SET_PAGE:
        return { ...state, currentPage: action.payload };
      case UPDATE_FEEDBACK:
        return { ...state, feedback: { ...state.feedback, ...action.payload }};
      case RESET_FEEDBACK:
        return { ...state, feedback: { name: '', email: '', message: '' }};
      default:
        return state;
    }
  };
  
  export default cardsReducer;
  