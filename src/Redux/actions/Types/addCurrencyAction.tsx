
// Add Currency
export const addCurrencyAction = submittedData => {
  return async dispatch => {
    try {
      console.log('ADD All Currency ====> ', JSON.stringify(submittedData));
      dispatch({
        type: 'ADD_CURRENCY_SUCCESS',
        data: submittedData,
      });
    } catch (err) {
      if (err) {
        console.log('ADD CURRENCY Error', {err});
        dispatch({type: 'ADD_CURRENCY_FAIL', data: 'Get error'});
      }
    }
  };
};
