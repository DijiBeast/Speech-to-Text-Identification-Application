x = 0;
y = 0;
drawCircle = "";
drawRect = "";
var SpeechRec = window.webkitSpeechRecognition;
var recognition = new SpeechRec();

function start()
{
    document.getElementById("status").innerHTML = "System is listening, please speak!";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    console.log("it has been started");
    var content = event.results[0][0].transcript;
    console.log(content);


document.getElementById("content").innerHTML = "The speech has been recognized as" + content;
if (content == "circle")
{
    x = math.floor(Math.random() * 900);
    y = math.floor(Math.random() * 600);
    document.getElementById("status").innerHTML = "Started drawing circle";
    drawCircle = "set";
}

if (content == "rectangle")
{
    x = math.floor(Math.random() * 900);
    y = math.floor(Math.random() * 600);
    document.getElementById("status").innerHTML = "Started drawing rectangle";
    drawRect = "set";
}
}

function setup()
{
    canvas = createCanvas(900, 600);
}

function draw()
{
    if (drawCircle == "set")
{
    radius = math.floor(Math.random() * 100);
    circle(x,y,radius);
    document.getElementById("status").innerHTML = "Circle is drawn";
    drawCircle = "";
}

if (drawRect == "set")
{
    circle(x,y,70,50);
    document.getElementById("status").innerHTML = "Rectangle is drawn";
    drawRect = "";
}
}
