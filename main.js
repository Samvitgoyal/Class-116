var nosey= 0;
var nosex= 0;

function preload(){
    clown_nose= loadImage("https://i.postimg.cc/3w0d6Qgz/img.png");
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotposes);

}

function Takesnapshot(){
 save("Image.png");


}
 
function draw(){
image(video,0,0,300,300);
fill("#32a8a2");
stroke("#3236a8");

image(clown_nose,nosex,nosey,30,30);

}

function modelLoaded(){
    console.log("poseNet is Intialized");
    
}

function gotposes(results){
if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x-15;
    nosey=results[0].pose.nose.y-15;
    console.log("nosex= "+nosex);
    console.log("nosey= "+nosey);
  
}
}