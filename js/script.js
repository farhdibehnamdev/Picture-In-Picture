const btn = document.querySelector(".btnStart");
const videoElm = document.querySelector(".video");

function enterPictureInPicture() {
  videoElm.requestPictureInPicture().then((pictureInPictureWindow) => {});
}

(async function () {
  let captureStream = null;

  try {
    captureStream = await navigator.mediaDevices.getDisplayMedia();
    videoElm.srcObject = captureStream;
  } catch (err) {
    console.log("Error : " + err);
  }
})();

btn.addEventListener("click", enterPictureInPicture);
