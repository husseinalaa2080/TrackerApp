import React from 'react';

import AppNavigation from './src/navigation/AppNavigation';
import {Provider as ReduxProvider} from 'react-redux';
import store from './src/Redux/store';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <AppNavigation />
    </ReduxProvider>
  );
};

export default App;
