import { filterCar } from "../actions/carAction";

const initialState = {
  getCarsListResult: false,
  getCarsListLoading: false,
  getCarsListError: false,
};

const cars = (state = initialState, action) => {
  switch (action.type) {
    case filterCar:
      return {
        ...state,
        getCarsListResult: action.payload.data,
        getCarsListLoading: action.payload.loading,
        getCarsListError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
export default cars;
