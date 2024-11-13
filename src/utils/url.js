export default function getQueryParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return decodeURIComponent(urlParams.get(param));
  }
  