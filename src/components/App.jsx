import React from 'react';
import Main from './Main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function App() {
  return (<div>
     <MuiThemeProvider>
        <Main />
    </MuiThemeProvider>
  </div>);
}
