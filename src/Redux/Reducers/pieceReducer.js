import {
    ADD_FOYER_SUCCESS,
    DELETE_PIECE_FAIL,
    DETAIL_PIECE_FAIL,
    DETAIL_PIECE_SUCCESS,
    GET_ALL_PIECES_FAIL,
    GET_ALL_PIECES_LOADING,
    GET_ALL_PIECES_SUCCESS,
    SEARCH_PIECES_FAIL,
    SEARCH_PIECES_LOADING,
    SEARCH_PIECES_SUCCESS,
    SEARCHE_PIECES_FAIL,
    SEARCHE_PIECES_LOADING,
    SEARCHE_PIECES_SUCCESS,
  } from "../consts/pieceConsts";
  
  const initialstate = {
    loading: false,
    searched : [],
    pieces: [],
    onePiece: {},
    errors: null,
  };
  export const pieceReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
      case GET_ALL_PIECES_LOADING:
        return { ...state, loading: true };
  
      case GET_ALL_PIECES_SUCCESS:
        return {
          ...state,
          pieces: payload,
          loading: false,
        };
      case GET_ALL_PIECES_FAIL:
        return { ...state, errors: payload, loading: false };
      case DELETE_PIECE_FAIL:
        return { ...state, errors: payload, loading: false };
  
      case DETAIL_PIECE_SUCCESS:
        return { ...state, onePiece: payload, loading: false };
  
      case DETAIL_PIECE_FAIL:
        return { ...state, errors: payload, loading: false };
      case SEARCH_PIECES_LOADING:
        return { ...state, loading: true };
      case SEARCH_PIECES_SUCCESS:
        return { ...state,  pieces: payload, loading: false };
      case SEARCH_PIECES_FAIL:
        return { ...state, errors: payload, loading: false };
        case SEARCHE_PIECES_LOADING:
          return { ...state, loading: true };
        case SEARCHE_PIECES_SUCCESS:
          return { ...state,  pieces: payload, loading: false };
        case SEARCHE_PIECES_FAIL:
          return { ...state, errors: payload, loading: false };
  
      default:
        return state;
    }
  };
  