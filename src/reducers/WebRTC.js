import { webRTC as webRTCTypes } from '../actions/Types';

const initWebRTCState = {
  vidSrc: '',
  vidFilter: '',
  vidStyle: {},
  filterSlider: 0.2,
  webRCTAlertOpen: false,
  webRTCError: '',
};

export default function WebRTC(state = initWebRTCState, action) {
  switch (action.type) {
    case webRTCTypes.setVidSrc:
      return {
        ...state,
        vidSrc: action.value,
      };
    case webRTCTypes.setVidFilter:
      return {
        ...state,
        vidFilter: action.value,
      };
    case webRTCTypes.setVidStyle:
      return {
        ...state,
        vidStyle: action.value,
      };
    case webRTCTypes.setFilterSlider:
      return {
        ...state,
        filterSlider: action.value,
      };
    case webRTCTypes.toggleWebRCTAlert:
      return {
        ...state,
        webRCTAlertOpen: !state.webRCTAlertOpen,
      };
    case webRTCTypes.setWebRTCError:
      return {
        ...state,
        webRTCError: action.value,
      };
    default:
      return state;
  }
}
