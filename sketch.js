//Naming variables
var SantaChristmas, SantaChristmasImage;
var NewYear, NewYearImage;
var song;
var fireWorks;

function preload()
{
    SantaChristmasImage = loadAnimation('ChristmasSanta1.png', 'ChristmasSanta2.png');
    NewYearImage = loadAnimation('2021-0.png', '2021-0.png', '2021-0.png', '2021-1.png', '2021-1.png', '2021-1.png', '2021-2.png', '2021-2.png', '2021-2.png', '2021-3.png', '2021-3.png', '2021-3.png', '2021-4.png', '2021-4.png', '2021-4.png', '2021-5.png', '2021-5.png', '2021-5.png', '2021-6.png', '2021-6.png', '2021-6.png', '2021-7.png', '2021-7.png', '2021-7.png', '2021-8.png', '2021-8.png', '2021-8.png', '2021-9.png', '2021-9.png', '2021-9.png', '2021-10.png', '2021-10.png', '2021-10.png', '2021-11.png', '2021-11.png', '2021-11.png', '2021-12.png', '2021-12.png', '2021-12.png', '2021-13.png', '2021-14.png', '2021-15.png', '2021-15.png', '2021-15.png', '2021-15.png', '2021-15.png');
    song = loadSound('y2mate.com - Happy New Year 2020  Happy New Year Songs 2020  Top Happy New Year Songs Playlist 2020-[AudioTrimmer.com].mp3');
    fireWorks = createImg('fireworks_gif.gif');
}


function setup()
{
    let canvas = createCanvas(560, 600);

    song.loop();
    
    //Creating sprites
    SantaChristmas = createSprite(100, 520);
    SantaChristmas.addAnimation("wink", SantaChristmasImage);
    SantaChristmas.scale = 0.3;
    SantaChristmas = createSprite(450, 520);
    SantaChristmas.addAnimation("wink", SantaChristmasImage);
    SantaChristmas.scale = 0.3;


    NewYear = createSprite(280, 295);
    NewYear.addAnimation("animation", NewYearImage);
}


function draw()
{
    background('#F61F1F');
    fireWorks.position(176, 446);
    fireWorks.size(200, 150);

    fill('turquoise');
    textSize(20);
    text('BY-ABHINAV MISHRA', 350, 50)
    

    drawSprites();
}