import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/muiTheme';
import Routes from './Routes';
import Store from './store/Store';

injectTapEventPlugin();

const Main = () => (
  <Provider store={Store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Routes />
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById('main'));
