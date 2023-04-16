const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureButton = document.getElementById('snap');
let image;

// Access the user's camera
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
    video.play();
  })
  .catch((err) => {
    console.error('Error accessing camera', err);
  });

// Capture an image and save it

captureButton.addEventListener('click', () => {
  setTimeout(function () {
    location.href = '/Showroom/MonaLisa/monalisa.html';
  }, 1000);
});
