const INITIAL_STATE = {
  loading: true,
  success: [],
  failure: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_CURRENCY_ATTEMPT':
      return {
        ...state,
        success: {},
        failure: false,
        loading: false,
      };

    case 'ADD_CURRENCY_SUCCESS':
      return {
        ...state,
        success: action.data,
        failure: false,
        loading: false,
      };

    case 'ADD_CURRENCY_FAIL':
      return {
        ...state,
        success: {},
        failure: true,
        loading: true,
      };
    default:
      return state;
  }
};
