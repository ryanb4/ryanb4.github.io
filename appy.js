var app = document.getElementById('app');

var app2 = document.getElementById('app2');

var typewriter2 = new Typewriter(app2, {
    autostart: true
});


typewriter2.typeString('HELLO').start();





var typewriter = new Typewriter(app, {
    autostart: true
});


typewriter
    .typeString('<strong><span style="font-size:20px;"><span style="color: #7289da;"><span style="letter-spacing: 5px;">HELLO</span></span></span></strong>')
    .pauseFor(1000)
    .typeString('<br>')
    .typeString('<br>')
    .typeString('I\'m Ryan,')
    .pauseFor(500)
    .typeString('<span style="color: #7289da;"> Computer Science</span> Student')
    .pauseFor(250)
    .typeString('<br>')
    .typeString('at the University of North Carolina')
    .pauseFor(250)
    .typeString('<br>')
    .typeString('<span style="color: #7289da;">Chaepl Hill</span>')
    .pauseFor(2500)
    .deleteChars(11)
    .typeString('<strong><span style="color: #7289da;">Chapel Hill</span></strong>')
    .start();


    
    