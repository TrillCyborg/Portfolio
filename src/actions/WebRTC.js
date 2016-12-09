import { webRTC } from './Types';

const setStream = stream => ({ type: webRTC.setStream, value: stream });
const setVidSrc = src => ({ type: webRTC.setVidSrc, value: src });
const setVidFilter = filter => ({ type: webRTC.setVidFilter, value: filter });
const setVidStyle = style => ({ type: webRTC.setVidStyle, value: style });
const setVidElement = element => ({ type: webRTC.setVidElement, value: element });
const setCanvasElement = element => ({ type: webRTC.setCanvasElement, value: element });
const setFilterSlider = num => ({ type: webRTC.setFilterSlider, value: num });
const addPhoto = photoObj => ({ type: webRTC.addPhoto, value: photoObj });
const toggleWebRCTAlert = () => ({ type: webRTC.toggleWebRCTAlert });
const setWebRTCError = error => ({ type: webRTC.setWebRTCError, value: error });

export {
  setStream,
  setVidSrc,
  setVidFilter,
  setVidStyle,
  setVidElement,
  setCanvasElement,
  setFilterSlider,
  addPhoto,
  toggleWebRCTAlert,
  setWebRTCError,
};
