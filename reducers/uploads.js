import {FETCH_UPLOADS_COMMIT, FETCH_UPLOADS, ADD_UPLOAD} from '../actions';

export default function uploads(state = [], action) {
  switch (action.type) {
    case FETCH_UPLOADS:
      return state;
    case FETCH_UPLOADS_COMMIT:
      return [...action.payload];
    case ADD_UPLOAD:
      return [...state, action.payload];
    default:
      return state;
  }
}
