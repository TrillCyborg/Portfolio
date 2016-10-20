import { webRTC } from './Types';

const setVidSrc = src => ({ type: webRTC.setVidSrc, value: src });
const setVidFilter = filter => ({ type: webRTC.setVidFilter, value: filter });
const setVidStyle = style => ({ type: webRTC.setVidStyle, value: style });
const setFilterSlider = num => ({ type: webRTC.setFilterSlider, value: num });
const toggleWebRCTAlert = () => ({ type: webRTC.toggleWebRCTAlert });
const setWebRTCError = error => ({ type: webRTC.setWebRTCError, value: error });

export {
  setVidSrc,
  setVidFilter,
  setVidStyle,
  setFilterSlider,
  toggleWebRCTAlert,
  setWebRTCError,
};
