x = 0;
y=0;
draw_circle = "";
draw_rect = "";

var SpeechRecognitnion = window.webkitSpeechRecognition;

var recognition = new SpeechRecognitnion();

function start() {
    document.getElementById("status").innerHTML = "System is listening please Speak";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognised as:" + content;
    if(content = 'circle')
    {
        x = math.floor(Math.random() * 900);
        y = math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing circle";
        draw_rect = "set";
    }
    if(content = "rectangle")
    {
        x = math.floor(Math.random() * 900);
        y = math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle";
        draw_rect = "set";
    }
    }

    function setup() {
        canvas = createCanvas(900, 600);
    }
   
    function draw() {
        if(draw_circle == "set")
        {
            radius = Math.floor(Math.random() * 100);
            circle(x,y,radius);
            document.getElementById("status").innerHTML = "Circle is drawn";
            draw_circle = "";
        }
        if (draw_rect == "set")
        {
            rect(x,y,70,50);
            document.getElementById("status").innerHTML = "Rectangle is draw.";
            draw_rect = "";
        }
    }