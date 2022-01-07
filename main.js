
difference=0;
leftWristX=0;
rightWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialized!');
}
function gotPoses(results)
 { if(results.length > 0)
     { console.log(results);
            leftWristX = results[0].pose.leftWrist.x;
             rightWristX = results[0].pose.rightWrist.x;
              difference = floor(leftWristX - rightWristX);
 console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
 }
 }
    function draw(){
        background('#969A97');
        document.getElementById("square_side").innerHTML="Width and Height of a square will be = "+difference+"px";
        textSize(difference);
        fill("F90093");
        text('Peter',50,400);
}