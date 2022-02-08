function start(){
    navigator.mediaDevices.getUserMedia({ audio: true});
   classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/9L_oiw_Ho/model.json", modelReady)
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error){
        console.error(error)
    }

    else{
        console.log(results)
        document.getElementById("animal").innerHTML=results[0].label;
        p= results[0].confidence * 100;
        document.getElementById("accu").innerHTML= p.toFixed(2) + "%"
    }
}