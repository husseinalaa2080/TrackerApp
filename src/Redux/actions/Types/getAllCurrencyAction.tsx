import axios from "axios";

var oldData = [];

// Call All Currency
export const getAllCurrencyAction = (refresh = false) => {
  return async (dispatch) => {
    let defaultData = [];
    let apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`;

    return axios({
      method: "get",
      url: apiUrl,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    }).then((response) => {
      if (response.status === 200) {
        defaultData = response.data;
        if (!refresh) {
          oldData = [...oldData, ...defaultData];
        } else {
          oldData = [...defaultData];
        }

        console.log("GET All Media ====> ", JSON.stringify(oldData.length));

        dispatch({
          type: "GET_CURRENCY_SUCCESS",
          data: oldData,
        });
      }
    });
  };
};
