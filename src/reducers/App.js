import { app as appTypes } from '../actions/Types';

const initAppState = {
  appMenuOpen: false,
  appMenuAnchorEl: {},
};

export default function App(state = initAppState, action) {
  switch (action.type) {
    case appTypes.toggleAppMenu:
      return {
        ...state,
        appMenuOpen: !state.appMenuOpen,
      };
    case appTypes.setAppMenuAnchorEl:
      return {
        ...state,
        appMenuAnchorEl: action.value,
      };
    default:
      return state;
  }
}
