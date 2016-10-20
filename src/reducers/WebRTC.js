import { webRTC as webRTCTypes } from '../actions/Types';

const initWebRTCState = {
  stream: null,
  vidSrc: '',
  vidFilter: '',
  vidStyle: {},
  vidElement: null,
  canvasElement: null,
  filterSlider: 0.2,
  photos: [],
  webRCTAlertOpen: false,
  webRTCError: '',
};

export default function WebRTC(state = initWebRTCState, action) {
  switch (action.type) {
    case webRTCTypes.setStream:
      return {
        ...state,
        stream: action.value,
      };
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
    case webRTCTypes.setVidElement:
      return {
        ...state,
        vidElement: action.value,
      };
    case webRTCTypes.setCanvasElement:
      return {
        ...state,
        canvasElement: action.value,
      };
    case webRTCTypes.setFilterSlider:
      return {
        ...state,
        filterSlider: action.value,
      };
    case webRTCTypes.addPhoto:
      return {
        ...state,
        photos: [...state.photos, action.value],
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
