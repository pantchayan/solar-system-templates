// DAT GUI
let gui = new dat.GUI({ width: 400 });
const cameraFolder = gui.addFolder("Camera");
const cameraPositionFolder = cameraFolder.addFolder("Camera position");
cameraPositionFolder.add(camera.position, "z", -100, 100);
cameraPositionFolder.add(camera.position, "y", -100, 100);
cameraPositionFolder.add(camera.position, "x", -100, 100);
const cameraRotationFolder = cameraFolder.addFolder("Camera rotation");
cameraRotationFolder.add(camera.rotation, "z", -6.28, 6.28);
cameraRotationFolder.add(camera.rotation, "y", -6.28, 6.28);
cameraRotationFolder.add(camera.rotation, "x", -6.28, 6.28);
cameraFolder.open();

// Camera Move
document.addEventListener("mousewheel", (e) => {
  camera.position.x -= e.deltaY * 0.005;
  // prevent scrolling beyond a min/max value
  camera.position.clampScalar(mode == 1 ? -50 : -70, 10);
});
