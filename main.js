function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
    myModel=ml5.imageClassifier('MobileNet', modelLoaded)
}
function modelLoaded(){
    console.log("loaded")
}

function draw(){
    image(video,0,0,300,300)
    myModel.classify(video, gotResult);
    
    
}
var prev=""
function gotResult(error, results){
    if(error){console.log(error)}
else{
    if((results[0].confidence>0.5)&&(prev !=results[0].label))
        {
            console.log(results)
            prev=results[0].label
            var synth=window.speechSynthesis
            saythis="I detected "+results[0].label
            var UtterThis=new SpeechSynthesisUtterance(saythis);
            synth.speak(UtterThis)
            document.getElementById("result_object_name").innerHTML=results[0].label
            document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3)
        
    
    
}    
    
}
}