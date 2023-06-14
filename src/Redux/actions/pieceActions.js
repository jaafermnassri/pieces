import axios from "axios";
import {
  GET_ALL_PIECES_LOADING,
  GET_ALL_PIECES_SUCCESS,
  GET_ALL_PIECES_FAIL,
  DELETE_PIECE_FAIL,
  DELETE_PIECE_SUCCESS,
  DETAIL_PIECE_FAIL,
  DETAIL_PIECE_SUCCESS,
  ADD_PIECE_SUCCESS,
  ADD_PIECE_FAIL,
  EDIT_PIECE_SUCCESS,
  EDIT_PIECE_FAIL,
  SEARCH_PIECES_LOADING,
  SEARCH_PIECES_SUCCESS,
  SEARCH_PIECES_FAIL,
  SEARCHE_PIECES_LOADING,
  SEARCHE_PIECES_SUCCESS,
  SEARCHE_PIECES_FAIL,
} from "../consts/pieceConsts";


 //add new dorm
 export const addPiece = (newPiece,navigate) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.post(
      `http://localhost:5050/api/pieces/addpiece`,
      newPiece,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    dispatch({ type: ADD_PIECE_SUCCESS, payload: res.data });
    dispatch(getAllPieces());
    navigate(`/`);
  } catch (error) {
    dispatch({ type: ADD_PIECE_FAIL, payload: error });
    console.dir(error);
    alert(error.response.data.msg);
  }
}


// delete dorm
export const deletePiece = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.delete(`http://localhost:5050/api/pieces/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: DELETE_PIECE_SUCCESS, payload: res.data });
    dispatch(getAllPieces());
    
  } catch (error) {
    dispatch({ type: DELETE_PIECE_FAIL, payload: error });
  }
};
//details
// detail one piece
export const detailsPiece = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.get(`http://localhost:5050/api/pieces/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
     dispatch({ type: DETAIL_PIECE_SUCCESS, payload: res.data });
    
  } catch (error) {
    dispatch({ type: DETAIL_PIECE_FAIL, payload: error });
    console.log(error)
  }}

//update
export const editPiece = (id,editedPiece, navigate) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.put(
      `http://localhost:5050/api/pieces/${id}`,
      editedPiece,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: EDIT_PIECE_SUCCESS, payload: res.data });
    dispatch(getAllPieces());
    navigate("/");
  } catch (error) {
    dispatch({ type: EDIT_PIECE_FAIL, payload: error });
    console.log(error);
  }
};

//get all foyers
export const getAllPieces = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({ type: GET_ALL_PIECES_LOADING });
  try {
    const res = await axios.get("http://localhost:5050/api/pieces/",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: GET_ALL_PIECES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_ALL_PIECES_FAIL, payload: error });
    
  }
};
//search by name 
// export const searchFoyer = (fullname) => async (dispatch) => {
//   // const token = localStorage.getItem("token");
//   dispatch({ type: SEARCH_FOYERS_LOADING });
//   try {
//     const res = await axios.get(`http://localhost:5005/api/foyers/search/?fullname=${fullname}`,{
//       // headers: {
//       //   Authorization: `Bearer ${token}`,
//       // },
//     });
//     dispatch({ type: SEARCH_FOYERS_SUCCESS, payload: res.data });
//   } catch (error) {
//     dispatch({ type: SEARCH_FOYERS_FAIL, payload: error });
//   }
// };
// // search by adresse
// export const searcheFoyer = (adresse) => async (dispatch) => {
//   // const token = localStorage.getItem("token");
//   dispatch({ type: SEARCHE_FOYERS_LOADING });
//   try {
//     const res = await axios.get(`http://localhost:5005/api/foyers/searche/?adresse=${adresse}`,{
//       // headers: {
//       //   Authorization: `Bearer ${token}`,
//       // },
//     });
//     dispatch({ type: SEARCHE_FOYERS_SUCCESS, payload: res.data });
//   } catch (error) {
//     dispatch({ type: SEARCHE_FOYERS_FAIL, payload: error });
//   }
// };