import axios from "axios";

export const filterCar = "";

export const getCars = (driver, date, time, capacity) => {
  console.log(driver, date, time, capacity);
  return (dispatch) => {
    dispatch({
      type: filterCar,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios
      .get(
        `http://localhost:3001/filtercar?driver=${driver}&date=${date}&time=${time}&capacity=${capacity}`
      )
      .then((response) => {
        dispatch({
          type: filterCar,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(error.message);
        dispatch({
          type: filterCar,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
