function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.center();

    canvas = createCanvas(500, 500);
    canvas.position(video.x, video.y);
    canvas.parent(video);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("Model Loaded");
}
function gotPoses(results) {
    if(results.length > 0) {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX + " Nose Y = " + noseY);
    }
}