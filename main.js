noseY = 0;
noseX = 0;

function preload(){
s = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup(){
canvas = createCanvas(450, 450);
cam = createCapture(VIDEO);
canvas.center();
cam.size(450, 450);
cam.hide();
pose = ml5.poseNet(cam, modelloaded);
pose.on('pose', gotPoses);
}

function draw(){
image(cam, 0, 0, 450, 450);
fill(255, 0, 0);
stroke(255, 0, 0);
image(s, noseX - 15, noseY - 15, 50, 50);
}

function take_snapshot(){
save("ClownNose.jpeg");
}

function modelloaded(){
console.log("PoseNet Is Loaded");
}

function gotPoses(results)
{
if(results.length > 0){
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;

console.log("nose x = " + noseX);
console.log("nose y = " + noseY);
}
}


