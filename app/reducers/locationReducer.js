import { ADD_LOCATION, DELETE_LOCATION } from '../actions/types';

const initialState = {
  locationList: [{ city: 'London'},{ city: 'Turin'},{ city: 'Rome'}]
}

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOCATION:
      return {
        ...state,
        locationList: state.locationList.concat({
          city: action.city
        })
      };
    case DELETE_LOCATION:
      return {
        ...state,
        locationList: state.locationList.filter((item) =>
          item.city !== action.city)
      };
    default:
      return state;
  }
}

export default locationReducer;