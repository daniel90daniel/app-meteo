import { ADD_LOCATION, DELETE_LOCATION } from './types';

export const addLocation = (city) => (
  {
    type: ADD_LOCATION,
    city: city
  }
);

export const deleteLocation = (city) => (
  {
    type: DELETE_LOCATION,
    city: city
  }
);