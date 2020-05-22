// -----> 2020.04.28
// Frames Per Second
function frames(minutes, fps) {

  let result = minutes * fps * 60
  return result;

}
show(frames(10, 1));    // 600
show(frames(0, 1));     // 0
show(frames(30000, 1)); // 1800000
show(frames(2500, 3));  // 450000
