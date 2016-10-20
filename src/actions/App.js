import { app } from './Types';

const toggleAppMenu = () => ({ type: app.toggleAppMenu });
const setAppMenuAnchorEl = anchor => ({ type: app.setAppMenuAnchorEl, value: anchor });

export {
  toggleAppMenu,
  setAppMenuAnchorEl,
};
