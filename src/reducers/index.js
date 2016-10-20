import { combineReducers } from 'redux';
import App from './App';
import WebRTC from './WebRTC';

export default combineReducers({
  app: App,
  webRTC: WebRTC,
});
