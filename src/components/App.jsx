import React from 'react';
import { Provider } from 'react-redux'
import Main from './Main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { store } from '../store';


export default function App() {
  return (<div>
     <MuiThemeProvider>
       <Provider store={store}>
        <Main />
      </Provider>
    </MuiThemeProvider>
  </div>);
}
