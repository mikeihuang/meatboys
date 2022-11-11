////////////////////////////////////////////////////////////////////////
////////////////////////////  Meat Boys  ///////////////////////////////
////////////////////////////////////////////////////////////////////////
//Note: Please include p5, p5.play, p5.dom, p5.sound to run this game.//

/////////////////////////// Music Soundtrack ///////////////////////////
//Wave Racer - Streamers
//Maxo - Crush~
//Giraffage & Viceroy - Impression Of You (feat. Patrick Baker)
//tofubeats - STAKEHOLDER
//Deon Custom - Bliss
////////////////////////////////////////////////////////////////////////

/////////////////////////// Navigation Notes ///////////////////////////
//Main Title Screen **camera position x at windowWidth/2
//Menu Selection Screen **camera position x at windowWidth+windowWidth/2
//Chatting Menu Screen **camera position x at windowWidth*2+windowWidth/2
//Salt it Screen **camera position x at windowWidth*3+windowWidth/2
//Fry it Screen **camera position x at windowWidth*4+windowWidth/2
//Eat it Screen **camera position x at windowWidth*5+windowWidth/2
//Strip it Screen **camera position x at windowWidth*6+windowWidth/2
////////////////////////////////////////////////////////////////////////

//Global Variables

//IMAGES
var titleBgImg, titleBgGradient, menuBgImg;
var loadingImg;
var chatBgImg;
var convoBearImg01, convoBearImg02, convoBearImg03;
var convoJockImg01, convoJockImg02, convoJockImg03;
var convoTwinkImg01, convoTwinkImg02, convoTwinkImg03;
var saltLoadImg, fryLoadImg, eatLoadImg;
var saltItScreenBg,fryItScreenBg,fryItScreenFire,eatItScreenBg;
var forkImg,knifeImg;
var meatEatAnimation;

var saltConvoImg01,saltConvoImg02,saltConvoImg03,saltConvoImg04;
var fryConvoImg01,fryConvoImg02,fryConvoImg03;
var eatConvoImg01,eatConvoImg02,eatConvoImg03,eatConvoImg04,eatConvoImg05,eatConvoImg06,eatConvoImg07;
var convoOffline;

var timerImg, completeBarImg, timesupText;
var score000Img, score033Img, score066Img, score100Img;

var titleBanner;
var meatSaltImg;
var saltBottleImg;
var fireSwitchImg;
var convoArrowImg;
var sparkleSmall,sparkleBig;
var buttonStart,buttonNext, buttonCook;

//RESPONSIVE CALC
var buttonSizeW, buttonSizeH;
var scaledHeight;
var scaledP5playElement;

//SOUNDS
var buttonClickSound, buttonBackSound;
var textReceive, textSentSingle, textSentMulti;
var bgm01, bgm02, bgm03, bgm04, bgm05;
var saltSound;
var dingSound;
var moan01,moan02,moan03,moan04, clearThroat;
var mic;
var knifeSound;
var timeTick;

//VIDEO
var stripVideo;

//ANIMATIONS
var bannerComingDown, meatComingDown, meatRotation;
var sparkleFade1, sparkleFade2, sparkleFade3, sparkleFade4;
var loadingComingDown;
var saltComingDown, fryComingDown, eatComingDown;
var timerShake;

//GAME ELEMENTS COUNTS & TIMES
var completeStatus; //Completion Bar Grey Rect height value
var clickCountStatus; //Record how many clicks to complete a task
var clockCountdown; //Clock rotating, this is a DEGREE
var micImg; //Mic Instruction if the volume is too low
var mouseHoverAppImg;

//BOOLEAN TO CALL SECTIONS IN DRAW LOOP
var inTitleScreen;
var inChatRoom;
var bearConvo, twinkConvo, jockConvo;
var bearConvoYes, bearConvoNo;
var twinkConvoYes, twinkConvoNo;
var jockConvoYes, jockConvoNo;
var saltItScreen, fryItScreen, eatItScreen;
var saltItFailed, fryItFailed, eatItFailed, nothingFailed;
var stripItScreen;

var timeIsUp;
var fireIsOn;

function preload()
{
 titleBgImg = loadImage("data/titleBg.png");
 titleBgGradient = loadAnimation("data/titleBgGradient01.png", "data/titleBgGradient12.png");
 menuBgImg = loadImage("data/menuBg.png");
 chatBgImg = loadImage("data/chatBg.png");
 loadingImg = loadImage("data/loading.png");
 saltLoadImg = loadImage("data/loadSalt.png");
 fryLoadImg = loadImage("data/loadFry.png");
 eatLoadImg = loadImage("data/loadEat.png");

 convoBearImg01 = loadImage("data/convoBear01.png");
 convoBearImg02 = loadImage("data/convoBear02.png");
 convoBearImg03 = loadImage("data/convoBear03.png");
 convoJockImg01 = loadImage("data/convoJock01.png");
 convoJockImg02 = loadImage("data/convoJock02.png");
 convoJockImg03 = loadImage("data/convoJock03.png");
 convoTwinkImg01 = loadImage("data/convoTwink01.png");
 convoTwinkImg02 = loadImage("data/convoTwink02.png");
 convoTwinkImg03 = loadImage("data/convoTwink03.png");

 convoOffline = loadImage("data/convoOffline.png");

 saltConvoImg01 = loadImage("data/saltConvo01.png");
 saltConvoImg02 = loadImage("data/saltConvo02.png");
 saltConvoImg03 = loadImage("data/saltConvo03.png");
 saltConvoImg04 = loadImage("data/saltConvo04.png");

 fryConvoImg01 = loadImage("data/fryConvo01.png");
 fryConvoImg02 = loadImage("data/fryConvo02.png");
 fryConvoImg03 = loadImage("data/fryConvo03.png");

 eatConvoImg01 = loadImage("data/eatConvo01.png");
 eatConvoImg02 = loadImage("data/eatConvo02.png");
 eatConvoImg03 = loadImage("data/eatConvo03.png");
 eatConvoImg04 = loadImage("data/eatConvo04.png");
 eatConvoImg05 = loadImage("data/eatConvo05.png");
 eatConvoImg06 = loadImage("data/eatConvo06.png");
 eatConvoImg07 = loadImage("data/eatConvo07.png");

 saltItScreenBg = loadImage("data/saltItScreen.png");
 fryItScreenBg = loadImage("data/fryItScreen.png");
 fryItScreenFire = loadImage("data/fryItScreenFire.png");
 eatItScreenBg = loadImage("data/eatItScreen.png");

 titleBanner = loadImage("data/titleBanner.png");
 meatSaltImg = loadImage("data/meatSalt.png");
 meatEatAnimation = loadAnimation("data/meatEat01.png", "data/meatEat51.png");
 meatEatAnimation.playing = false;
 fireSwitchImg = loadImage("data/fireSwitch.png");
 sparkleSmall = loadImage("data/sparkleSmall.png");
 sparkleBig = loadImage("data/sparkleBig.png");
 convoArrowImg = loadImage("data/convoSelectArrow.png");

 timerImg = loadImage("data/timerImg.png");
 timerShake = loadAnimation("data/timerShake01.png", "data/timerShake04.png");
 completeBarImg = loadImage("data/completeBarImg.png");
 threeStarImg = loadImage("data/threeStar.png");
 timesupText = loadImage("data/timesupText.png");
 saltBottleImg = loadImage("data/saltBottle.png");
 forkImg = loadImage("data/fork.png");
 knifeImg = loadImage("data/knife.png");
 micImg = loadImage("data/micImg.png");
 mouseHoverAppImg = loadImage("data/mouseHoverApp.png");

 score000Img = loadImage("data/score0.png");
 score033Img = loadImage("data/score33.png");
 score066Img = loadImage("data/score66.png");
 score100Img = loadImage("data/score100.png");

 buttonStart = loadImage("data/buttonStart.png");
 buttonNext = loadImage("data/buttonNext.png");
 buttonCook = loadImage("data/buttonCook.png");

 buttonClickSound = loadSound("data/buttonClickSound.mp3");
 buttonBackSound = loadSound("data/buttonBackSound.mp3");
 bgm01 = loadSound("data/bgm01.mp3");
 bgm02 = loadSound("data/bgm02.mp3");
 bgm03 = loadSound("data/bgm03.mp3");
 bgm04 = loadSound("data/bgm04.mp3");
 bgm05 = loadSound("data/bgm05.mp3");
 textReceive = loadSound("data/textReceive.mp3");
 textSentSingle = loadSound("data/textSentSingle.mp3");
 textSentMulti = loadSound("data/textSentMulti.mp3");
 saltSound = loadSound("data/salt.mp3");
 dingSound = loadSound("data/ding.mp3");
 knifeSound = loadSound("data/knife.mp3");
 timeTick = loadSound("data/timeTick.mp3");
 moan01 = loadSound("data/moan01.mp3");
 moan02 = loadSound("data/moan02.mp3");
 moan03 = loadSound("data/moan03.mp3");
 moan04 = loadSound("data/moan04.mp3");
 clearThroat = loadSound("data/clearThroat.mp3");

} //End of Preload

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function setup()
{
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  buttonSizeW = windowWidth/6.71;  //Setting default button size
  buttonSizeH = windowWidth/15.24;  //Setting default button size
  scaledHeight = windowWidth/1.77777; //Scaling windowHeight to 16:9
  scaledP5playElement = windowWidth/1920;


  ////////////////SETUP ANIMATION////////////////
  //bannerComingDown = 0-windowWidth/5; //Setting title banner animation
  bannerComingDown = windowWidth/5.7;
  //meatComingDown = 0-windowWidth/5;  //Setting title banner animation
  meatComingDown = windowWidth/6;
  loadingComingDown = 0-scaledHeight;  //Setting loading screen animation

  saltComingDown = 0;
  fryComingDown = 0;
  eatComingDown = 0;

  meatRotation = 0;  //Setting title banner animation
  sparkleFade1 = 255;
  sparkleFade2 = 125;
  sparkleFade3 = 50;
  sparkleFade4 = 175;

  ///////////////////SETUP Clock and Completion Status///////////////////
  completeStatus = windowWidth/3;
  clickCountStatus = 0;
  clockCountdown = 0;




  ////////////////SETUP BOOLEAN//////////////////
  inTitleScreen = true; //Goes to Main Title Screen **camera position x at 0
  inChatRoom = false; //Goes to Chatting Screen **camera position x at windowWidth*2+windowWidth/2
  bearConvo = false; //Sub Menu of Chatting Screen - Bear
  twinkConvo = false; //Sub Menu of Chatting Screen - Twink
  jockConvo = false; //Sub Menu of Chatting Screen - Jock
  bearConvoYes = false;
  bearConvoNo = false;
  twinkConvoYes = false;
  twinkConvoNo = false;
  jockConvoYes = false;
  jockConvoNo = false;

  saltItScreen = false; //Goes to Salt It Screen **camera position x at windowWidth*3+windowWidth/2
  fryItScreen = false; //Goes to Fry It Screen **camera position x at windowWidth*4+windowWidth/2
  eatItScreen = false; //Goes to Eat It Screen **camera position x at windowWidth*5+windowWidth/2
  stripItScreen = false; //Goes to Strip It Screen

  saltItFailed = false; //Shows up Score Board if failed
  fryItFailed = false; //Shows up Score Board if failed
  eatItFailed = false; //Shows up Score Board if failed
  nothingFailed = false; //Shows up Score Board if everything success!

  timeIsUp = false;
  fireIsOn = false;

  ////////////////SETUP BACKGROUND MUSIC//////////////////
  // Mimics the Autoplay Policy
  getAudioContext().suspend();
  // Play Audio
  bgm01.loop();





  ///Setup Video//////
  stripVideo = createVideo(['data/stripped.mp4']);
  stripVideo.hide();


} //End of Setup

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function draw()
{
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  ////////////////////////Title Screen/////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////

  background(255);
  if (inTitleScreen == true){
  push();
  imageMode(CENTER);
  translate(windowWidth/2,windowWidth/4.47);
  scale(scaledP5playElement,scaledP5playElement);
  animation(titleBgGradient,0,0); // Title Bg Gradient
  pop();
  imageMode(CORNER);
  image(titleBgImg,0,0,windowWidth,scaledHeight); // Title Bg

  imageMode(CENTER);
  image(buttonStart,windowWidth/2,scaledHeight/1.2,buttonSizeW,buttonSizeH);
  image(titleBanner,windowWidth/2,bannerComingDown,windowWidth/1.15,windowWidth/7.68);
  push();
  translate(windowWidth/2,meatComingDown);
  rotate(radians(meatRotation));
  image(meatSaltImg,0,0,windowWidth/4,windowWidth/4.7);
  pop();


  /////////////////////Banner Coming Down Animation/////////////////////
  // if (bannerComingDown < windowWidth/5.7)
  // {
  //   bannerComingDown = bannerComingDown +4;
  // }
  // if (meatComingDown < windowWidth/6)
  // {
  //   meatComingDown = meatComingDown +2.5;
  //   meatRotation = meatRotation+6.7;
  // }

  /////////////////////Sparkle Fade In & Out/////////////////////
  sparkleFading();

  }//inTitleScreen


  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  ////////////////////////Menu Selection Screen////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////


  imageMode(CORNER);
  image(menuBgImg,windowWidth,0,windowWidth,scaledHeight); // Menu Bg

  /////////////////////////////////////////////////////////////////Menu Mouse Hover Effect on buttons

  if ((camera.position.x >= windowWidth+windowWidth/2) && (camera.position.x < windowWidth*2+windowWidth/2) &&
  mouseX > windowWidth/1.25 && mouseX < windowWidth/1.026 &&
  mouseY > windowWidth/2.278 && mouseY < windowWidth/1.86)
  {
    fill(255,175);
    noStroke();
    rectMode(CENTER);
    rect(windowWidth+windowWidth/1.126,windowWidth/2.046,windowWidth/5.82,windowWidth/10.02);
  }

  if ((camera.position.x >= windowWidth+windowWidth/2) && (camera.position.x < windowWidth*2+windowWidth/2) &&
  mouseX > windowWidth/10.55 && mouseX < windowWidth/3.76 &&
  mouseY > windowWidth/3.63 && mouseY < windowWidth/2.43)
  {
    imageMode(CENTER);
    image(mouseHoverAppImg,windowWidth+windowWidth/5.505,windowWidth/3.213,windowWidth/10.546,windowWidth/10.546);
  }



  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  ////////////////////////In Chat Room Menu////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////



  if (inChatRoom == true)
  {

  image(chatBgImg,windowWidth*2,0,windowWidth,scaledHeight); //Chat Bg

  ////////////Mouse Hover Effect to Select Different Meat///////////////////////////
  if ((bearConvo == false) && (twinkConvo == false) && (jockConvo == false) &&
  mouseX > windowWidth/12.826 && mouseX < windowWidth/4.80 &&
  mouseY > windowWidth/6.7 && mouseY < windowWidth/3.63) //Bear
  {
    fill(255,175);
    noStroke();
    rectMode(CENTER);
    rect(windowWidth*2+windowWidth/7.09,windowWidth/4.704,windowWidth/7.923,windowWidth/7.926);
  }
  if ((bearConvo == false) && (twinkConvo == false) && (jockConvo == false) &&
  mouseX > windowWidth/4.80 && mouseX < windowWidth/2.9 &&
  mouseY > windowWidth/6.7 && mouseY < windowWidth/3.63) //Twink
  {
    fill(255,175);
    noStroke();
    rectMode(CENTER);
    rect(windowWidth*2+windowWidth/3.607,windowWidth/4.704,windowWidth/7.923,windowWidth/7.926);
  }
  if ((bearConvo == false) && (twinkConvo == false) && (jockConvo == false) &&
  mouseX > windowWidth/2.9 && mouseX < windowWidth/2.1 &&
  mouseY > windowWidth/6.7 && mouseY < windowWidth/3.63) //Jock
  {
    fill(255,175);
    noStroke();
    rectMode(CENTER);
    rect(windowWidth*2+windowWidth/2.42,windowWidth/4.704,windowWidth/7.923,windowWidth/7.926);
  }
  if ((bearConvo == false) && (twinkConvo == false) && (jockConvo == false) &&
  mouseX > windowWidth/12.826 && mouseX < windowWidth/4.80 &&
  mouseY > windowWidth/3.5 && mouseY < windowWidth/2.43) //Drag Queen
  {
    fill(255,175);
    noStroke();
    rectMode(CENTER);
    rect(windowWidth*2+windowWidth/7.09,windowWidth/2.867,windowWidth/7.923,windowWidth/7.926);
    imageMode(CENTER);
    image(convoOffline,windowWidth*2+windowWidth/1.32,windowWidth/7.82,windowWidth/2.8,windowWidth/8.8);
  }
  if ((bearConvo == false) && (twinkConvo == false) && (jockConvo == false) &&
  mouseX > windowWidth/4.80 && mouseX < windowWidth/2.9 &&
  mouseY > windowWidth/3.5 && mouseY < windowWidth/2.43) //Bull
  {
    fill(255,175);
    noStroke();
    rectMode(CENTER);
    rect(windowWidth*2+windowWidth/3.607,windowWidth/2.867,windowWidth/7.923,windowWidth/7.926);
    imageMode(CENTER);
    image(convoOffline,windowWidth*2+windowWidth/1.32,windowWidth/7.82,windowWidth/2.8,windowWidth/8.8);
  }
  if ((bearConvo == false) && (twinkConvo == false) && (jockConvo == false) &&
  mouseX > windowWidth/2.9 && mouseX < windowWidth/2.1 &&
  mouseY > windowWidth/3.5 && mouseY < windowWidth/2.43) //Cub
  {
    fill(255,175);
    noStroke();
    rectMode(CENTER);
    rect(windowWidth*2+windowWidth/2.42,windowWidth/2.867,windowWidth/7.923,windowWidth/7.926);
    imageMode(CENTER);
    image(convoOffline,windowWidth*2+windowWidth/1.32,windowWidth/7.82,windowWidth/2.8,windowWidth/8.8);
  }
  if ((bearConvo == false) && (twinkConvo == false) && (jockConvo == false) &&
  mouseX > windowWidth/12.826 && mouseX < windowWidth/4.80 &&
  mouseY > windowWidth/2.37 && mouseY < windowWidth/1.824) //Chub
  {
    fill(255,175);
    noStroke();
    rectMode(CENTER);
    rect(windowWidth*2+windowWidth/7.09,windowWidth/2.062,windowWidth/7.923,windowWidth/7.926);
    imageMode(CENTER);
    image(convoOffline,windowWidth*2+windowWidth/1.32,windowWidth/7.82,windowWidth/2.8,windowWidth/8.8);
  }
  if ((bearConvo == false) && (twinkConvo == false) && (jockConvo == false) &&
  mouseX > windowWidth/4.80 && mouseX < windowWidth/2.9 &&
  mouseY > windowWidth/2.37 && mouseY < windowWidth/1.824) //Twunk
  {
    fill(255,175);
    noStroke();
    rectMode(CENTER);
    rect(windowWidth*2+windowWidth/3.607,windowWidth/2.062,windowWidth/7.923,windowWidth/7.926);
    imageMode(CENTER);
    image(convoOffline,windowWidth*2+windowWidth/1.32,windowWidth/7.82,windowWidth/2.8,windowWidth/8.8);
  }
  if ((bearConvo == false) && (twinkConvo == false) && (jockConvo == false) &&
  mouseX > windowWidth/2.9 && mouseX < windowWidth/2.1 &&
  mouseY > windowWidth/2.37 && mouseY < windowWidth/1.824) //Wolf
  {
    fill(255,175);
    noStroke();
    rectMode(CENTER);
    rect(windowWidth*2+windowWidth/2.42,windowWidth/2.062,windowWidth/7.923,windowWidth/7.926);
    imageMode(CENTER);
    image(convoOffline,windowWidth*2+windowWidth/1.32,windowWidth/7.82,windowWidth/2.8,windowWidth/8.8);
  }









    if (bearConvo == true)
    {
      image(convoBearImg01,windowWidth*2,0,windowWidth,scaledHeight);
      if(mouseY > 0 && mouseY < windowWidth/5)
      {
        image(convoArrowImg, windowWidth*2+windowWidth/1.8, windowWidth/12.24, windowWidth/54.86, windowWidth/72);
      } else
      {
        image(convoArrowImg, windowWidth*2+windowWidth/1.8, windowWidth/4.02, windowWidth/54.86, windowWidth/72);
      }//End of convo arrow selection

      if (bearConvoYes == true)
      {
        image(convoBearImg02,windowWidth*2,0,windowWidth,scaledHeight);
      }
      if (bearConvoNo == true)
      {
        image(convoBearImg03,windowWidth*2,0,windowWidth,scaledHeight);
      }
    }//End of bearConvo
    if (twinkConvo == true)
    {
      image(convoTwinkImg01,windowWidth*2,0,windowWidth,scaledHeight);
      if(mouseY > 0 && mouseY < windowWidth/5)
      {
        image(convoArrowImg, windowWidth*2+windowWidth/1.8, windowWidth/12.24, windowWidth/54.86, windowWidth/72);
      } else
      {
        image(convoArrowImg, windowWidth*2+windowWidth/1.8, windowWidth/4.02, windowWidth/54.86, windowWidth/72);
      }//End of convo arrow selection

      if (twinkConvoYes == true)
      {
        image(convoTwinkImg02,windowWidth*2,0,windowWidth,scaledHeight);
      }
      if (twinkConvoNo == true)
      {
        image(convoTwinkImg03,windowWidth*2,0,windowWidth,scaledHeight);
      }
    }//End of twinkConvo
    if (jockConvo == true)
    {
      image(convoJockImg01,windowWidth*2,0,windowWidth,scaledHeight);
      if(mouseY > 0 && mouseY < windowWidth/5)
      {
        image(convoArrowImg, windowWidth*2+windowWidth/1.8, windowWidth/12.24, windowWidth/54.86, windowWidth/72);
      } else
      {
        image(convoArrowImg, windowWidth*2+windowWidth/1.8, windowWidth/4.02, windowWidth/54.86, windowWidth/72);
      }//End of convo arrow selection

      if (jockConvoYes == true)
      {
        image(convoJockImg02,windowWidth*2,0,windowWidth,scaledHeight);
      }
      if (jockConvoNo == true)
      {
        image(convoJockImg03,windowWidth*2,0,windowWidth,scaledHeight);
      }
    }//End of jockConvo
  }//End of inChatRoom
























  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////SALT IT////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

  if (saltItScreen == true)
  {
  imageMode(CORNER);
  image(saltItScreenBg,windowWidth*3,0,windowWidth,scaledHeight); //Salt It Bg
  setTimeout(saltItStart, 3000);
  clearTimeout(saltItStart);


  /////////Mouse Attached to a Salt Bottle///////////////
    if ((clickCountStatus < 50) && (timeIsUp == false) && (saltItFailed == false))
      {
      camera.off();
      imageMode(CENTER);
      image(saltBottleImg,mouseX,mouseY,windowWidth/4.59,windowWidth/4.90);
      camera.on();
      }


  //////Clock And Complete Bar on the left side///////
  clockAndCompleteBar();


  /////Meat Conversation/////
  if (clickCountStatus < 5)
  {
    imageMode(CORNER);
    image(saltConvoImg01,windowWidth*3+windowWidth/4.6,windowWidth/14.77,windowWidth/3.43,windowWidth/21.1);
  } else if (clickCountStatus > 5 && clickCountStatus < 20)
  {
    imageMode(CORNER);
    image(saltConvoImg02,windowWidth*3+windowWidth/4.6,windowWidth/14.77,windowWidth/3.86,windowWidth/21.1);
  } else if (clickCountStatus > 20 && clickCountStatus < 35)
  {
    imageMode(CORNER);
    image(saltConvoImg03,windowWidth*3+windowWidth/4.6,windowWidth/14.77,windowWidth/3.86,windowWidth/21.1);
  } else if (clickCountStatus > 35 && clickCountStatus < 45)
  {
    imageMode(CORNER);
    image(saltConvoImg04,windowWidth*3+windowWidth/4.6,windowWidth/14.77,windowWidth/3.37,windowWidth/21.1);
  }

  /////Click to have sparkles effect/////
  if ((mouseIsPressed) && (timeIsUp == false) && (clickCountStatus < 50))
  {
  camera.off();
  imageMode(CENTER);
  image(sparkleBig,mouseX+windowWidth/3,mouseY+windowWidth/10,windowWidth/3.66,windowWidth/5.09);
  image(sparkleSmall,mouseX-windowWidth/5,mouseY+windowWidth/6,windowWidth/9.95,windowWidth/8.38);
  image(sparkleBig,mouseX+windowWidth/2.5,mouseY-windowWidth/7,windowWidth/3.66,windowWidth/5.09);
  image(sparkleSmall,mouseX+windowWidth/8,mouseY-windowWidth/5,windowWidth/9.95,windowWidth/8.38);
  image(sparkleBig,mouseX-windowWidth/4,mouseY-windowWidth/4,windowWidth/3.66,windowWidth/5.09);
  camera.on();
  }

  //////Finish! Success!//////
  if (clickCountStatus == 50)
  {
    successThreeStar();
  }

  /////If Time Is Up/////
  if (timeIsUp == true)
  {
    timeIsUpFunc();
  }

  ////When Time is up and Player clicked NEXT button for score////
  if (saltItFailed == true)
  {
    imageMode(CORNER);
    image(score000Img,windowWidth*3,0,windowWidth,scaledHeight); //Show the score board
    sparkleFading();
  }

  /////Salt Loading Image/////
  imageMode(CORNER);
  image(saltLoadImg,windowWidth*3,saltComingDown,windowWidth,scaledHeight); //Salt It Loading Screen

  }//End of Salt it If True Statement






















  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////FRY IT////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

  if (fryItScreen == true)
  {
  imageMode(CORNER);
  image(fryItScreenBg,windowWidth*4,0,windowWidth,scaledHeight); //Fry It Bg
  setTimeout(fryItStart, 3000);
  clearTimeout(fryItStart);

  if (fireIsOn == true)
  {
    imageMode(CORNER);
    image(fryItScreenFire,windowWidth*4,0,windowWidth,scaledHeight);
  } //Draw Cooking Background with Fire


  //////Drawing Meat//////
  imageMode(CENTER);
  image(meatSaltImg,windowWidth*4+windowWidth/1.47,windowWidth/3.9,windowWidth/2.89,windowWidth/3.46);





  //////Draw Fire Switch & First Convo//////** If fireIsOn is true the micphone will be turn on
  if (fireIsOn == false)
  {
    imageMode(CENTER);
    image(fireSwitchImg,windowWidth*4+windowWidth/3.53,windowWidth/2.26,windowWidth/6.1,windowWidth/6.1);
    imageMode(CORNER);
    image(fryConvoImg01,windowWidth*4+windowWidth/4.6,windowWidth/14.77,windowWidth/2.87,windowWidth/12.88);
  }

  /////Draw 2nd convo/////////
  if ((fireIsOn == true) && (completeStatus <= windowWidth/3) && (completeStatus > windowWidth/5))
  {
    imageMode(CORNER);
    image(fryConvoImg02,windowWidth*4+windowWidth/4.6,windowWidth/14.77,windowWidth/2.66,windowWidth/12.88);
  }

  ////Draw 3rd convo//////
  if ((fireIsOn == true) && (completeStatus < windowWidth/5))
  {
    imageMode(CORNER);
    image(fryConvoImg03,windowWidth*4+windowWidth/4.6,windowWidth/14.77,windowWidth/3.06,windowWidth/12.88);
  }

  /////Draw Mic Level Bar//////
  if (fireIsOn == true)
  {
    fill(200);
    noStroke();
    rectMode(CENTER);
    rect(windowWidth*4+windowWidth/4,windowWidth/2.7,windowWidth/10,windowWidth/3);
    fill(255,35,169);
    rectMode(CORNER);
    rect(windowWidth*4+windowWidth/5,windowWidth/1.87,windowWidth/10,-constrain(micLevel*scaledHeight*2, 0, windowWidth/3));
    noFill();
    stroke(255);
    strokeWeight(windowWidth/96);
    rectMode(CENTER);
    rect(windowWidth*4+windowWidth/4,windowWidth/2.7,windowWidth/10,windowWidth/3);

    imageMode(CENTER);
    image(micImg,windowWidth*4+windowWidth/4,scaledHeight/1.15,windowWidth/26.66,windowWidth/16.27);
  }

  /////////////Game Elements///////////
  clockAndCompleteBar();

  if ((timeIsUp == false) && (completeStatus > 1))
  {
    micLevel = mic.getLevel();
    if (micLevel > 0.3)
    { completeStatus = completeStatus - windowWidth/150;
      print("Oh Wow, Your Blow Job level is " + round(micLevel*100) + ". Can you do better?");
    }
  }

  //////Finish! Success!//////
  if (completeStatus < 1 )
  {
    successThreeStar();
  }

  /////If Time Is Up/////
  if (timeIsUp == true)
  {
    timeIsUpFunc();
  }

  ////When Time is up and Player clicked NEXT button for score////
  if (fryItFailed == true)
  {
    imageMode(CORNER);
    image(score033Img,windowWidth*4,0,windowWidth,scaledHeight); //Show the score board
    sparkleFading();
  }

  /////Fry Loading Image/////
  imageMode(CORNER);
  image(fryLoadImg,windowWidth*4,fryComingDown,windowWidth,scaledHeight); //Fry It Loading Screen

  } //End of Fry It Screen True


















  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////EAT IT////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

  if (eatItScreen == true)
  {
  imageMode(CORNER);
  image(eatItScreenBg,windowWidth*5,0,windowWidth,scaledHeight); //Eat It Bg
  setTimeout(eatItStart, 3000);
  clearTimeout(eatItStart);

  /////Draw Meat Animation/////
  imageMode(CENTER);
  push();
  translate(windowWidth*5+windowWidth/1.7,windowWidth/3.58);
  scale(scaledP5playElement,scaledP5playElement);
  animation(meatEatAnimation,0,0);
  pop();




  /////////Mouse Attached to Fork & Knife///////////////
  if ((clickCountStatus < 50) && (timeIsUp == false) && (eatItFailed == false))
  {
  camera.off();
  imageMode(CENTER);
  if(mouseIsPressed)
    {
      image(forkImg,mouseX-windowWidth/8,mouseY+windowWidth/38,windowWidth/4.5,windowWidth/9.55);
      image(knifeImg,mouseX+windowWidth/8,mouseY+windowWidth/38,windowWidth/4.156,windowWidth/9.796);
    } else
    {
      image(forkImg,mouseX-windowWidth/5,mouseY,windowWidth/4.5,windowWidth/9.55);
      image(knifeImg,mouseX+windowWidth/5,mouseY,windowWidth/4.156,windowWidth/9.796);
    }
    camera.on();
  }

  //////Clock And Complete Bar on the left side///////
  clockAndCompleteBar();



  /////Meat Conversation/////
  if (clickCountStatus < 6) //////// 1st convo
  {
    imageMode(CORNER);
    image(eatConvoImg01,windowWidth*5+windowWidth/4.6,windowWidth/14.77,windowWidth/3.142,windowWidth/21.33);
  }
  if (clickCountStatus > 6 && clickCountStatus < 16) //////// 2nd convo
  {
    imageMode(CORNER);
    image(eatConvoImg04,windowWidth*5+windowWidth/4.6,windowWidth/14.77,windowWidth/2.92,windowWidth/12.8);
  }
  if (clickCountStatus > 16 && clickCountStatus < 21) //////// 3rd convo
  {
    imageMode(CORNER);
    image(eatConvoImg02,windowWidth*5+windowWidth/4.6,windowWidth/14.77,windowWidth/7.9,windowWidth/20.87);
  }
  if (clickCountStatus > 21 && clickCountStatus < 26) //////// 4th convo
  {
    imageMode(CORNER);
    image(eatConvoImg03,windowWidth*5+windowWidth/4.6,windowWidth/14.77,windowWidth/5,windowWidth/20.87);
  }
  if (clickCountStatus > 26 && clickCountStatus < 39) //////// 5th convo
  {
    imageMode(CORNER);
    image(eatConvoImg05,windowWidth*5+windowWidth/4.6,windowWidth/14.77,windowWidth/3.46,windowWidth/12.8);
  }
  if (clickCountStatus > 39 && clickCountStatus < 48) //////// 6th convo
  {
    imageMode(CORNER);
    image(eatConvoImg06,windowWidth*5+windowWidth/4.6,windowWidth/14.77,windowWidth/2.9,windowWidth/12.8);
  }
  if (clickCountStatus > 48) //////// 6th convo
  {
    imageMode(CORNER);
    image(eatConvoImg07,windowWidth*5+windowWidth/4.6,windowWidth/14.77,windowWidth/5,windowWidth/20.87);
    sparkleFading();
  }


  //////Finish! Success!//////
  if (clickCountStatus == 50)
  {
    successThreeStar();
  }

  /////If Time Is Up/////
  if (timeIsUp == true)
  {
    timeIsUpFunc();
  }

  ////When Time is up and Player clicked NEXT button for score////
  if (eatItFailed == true)
  {
    imageMode(CORNER);
    image(score066Img,windowWidth*5,0,windowWidth,scaledHeight); //Show the score board
    sparkleFading();
  }


  /////When successfully cleared all stages and system gives you final score/////
  if (nothingFailed == true)
  {
    imageMode(CORNER);
    image(score100Img,windowWidth*5,0,windowWidth,scaledHeight); //Show the score board
    sparkleFading();
  }


  /////Eat Loading Image/////
  imageMode(CORNER);
  image(eatLoadImg,windowWidth*5,eatComingDown,windowWidth,scaledHeight); //Eat It Loading Screen

  } //End of eatItScreen is true!



















  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////STRIP IT///////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

  if (stripItScreen == true)
  {
    push();
    translate(windowWidth*6,0);
    scale(windowWidth/960,windowWidth/960);
    imageMode(CORNER);
    image(stripVideo,0,0);
    pop();

    if (stripVideo.time() > 17  )
    {
    camera.off();
    imageMode(CENTER);
    image(buttonCook,windowWidth/1.1,windowWidth/2,buttonSizeW,buttonSizeH);
    camera.on();
    }

    if (stripVideo.time() > 19  )
    {
      stripVideo.pause();
    }

  }



  /////////////////////Mouse Press Sparkle Effect/////////////////////
  if (mouseIsPressed)
  {
    camera.off();
    imageMode(CENTER);
    image(sparkleSmall,mouseX,mouseY,windowWidth/9.95,windowWidth/8.38);
    camera.on();
  }



  /////////////////////Pretty Scene Transition Effect/////////////////////
  camera.off();
  imageMode(CORNER);
  image(loadingImg,0,loadingComingDown,windowWidth,scaledHeight); //Transition Screen
  if(loadingComingDown > (0-scaledHeight)) {loadingComingDown -= 40;}
  camera.on();




} //End of Draw Loop

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function mouseReleased()
{

  ////////////////////////If Press Start Screen////////////////////////
  if ((camera.position.x <= windowWidth/2) &&
  mouseX > windowWidth/2.45 && mouseX < windowWidth/1.69 &&
  mouseY > windowWidth/2.3 && mouseY < windowWidth/1.88)
  {
    buttonClickSound.play();
    camera.position.x = windowWidth+windowWidth/2;
    inTitleScreen = false;
    transitionEffect = true;
    loadingComingDown = 0;
  }

  ////////////////////////If Press Back To Title Screen////////////////////////
  if ((camera.position.x >= windowWidth+windowWidth/2) && (camera.position.x < windowWidth*2+windowWidth/2) &&
  mouseX > windowWidth/1.25 && mouseX < windowWidth/1.026 &&
  mouseY > windowWidth/2.278 && mouseY < windowWidth/1.86)
  {
    buttonClickSound.play();
    camera.position.x = windowWidth/2;
    inTitleScreen = true;
    loadingComingDown = 0;
  }

  ////////////////////////If Press Meat & Greet////////////////////////
  if ((camera.position.x >= windowWidth+windowWidth/2) && (camera.position.x < windowWidth*2+windowWidth/2) &&
  mouseX > windowWidth/10.55 && mouseX < windowWidth/3.76 &&
  mouseY > windowWidth/3.63 && mouseY < windowWidth/2.43)
  {
    bgm01.stop();
    bgm02.loop();
    buttonClickSound.play();
    camera.position.x = windowWidth*2+windowWidth/2;
    inChatRoom = true;
    loadingComingDown = 0;
  }

  ////////////////////////////If Press Back to Menu From Chat Main Screen////////////////////////////
  if ((inChatRoom == true) && (bearConvo == false) && (twinkConvo == false) && (jockConvo == false) &&
  mouseX > windowWidth/1.2 && mouseX < windowWidth/1.024 &&
  mouseY > windowWidth/2.133 && mouseY < windowWidth/1.86)
  {
    bgm02.stop();
    bgm01.loop();
    buttonClickSound.play();
    camera.position.x = windowWidth+windowWidth/2;
    inChatRoom = false;
    loadingComingDown = 0;
  }

  ////////////////////If chatting with Bear and want to go back to main chatting screen////////////////////
  if ((inChatRoom == true) && (bearConvo == true) &&
  mouseX > windowWidth/12.826 && mouseX < windowWidth/6.53 &&
  mouseY > windowWidth/13.27 && mouseY < windowWidth/7.16)
  {
    bearConvo = false;
    bearConvoYes = false;
    bearConvoNo = false;
    buttonBackSound.play();
  }
  ////////////////////If chatting with Twink and want to go back to main chatting screen////////////////////
  if ((inChatRoom == true) && (twinkConvo == true) &&
  mouseX > windowWidth/12.826 && mouseX < windowWidth/6.53 &&
  mouseY > windowWidth/13.27 && mouseY < windowWidth/7.16)
  {
    twinkConvo = false;
    twinkConvoYes = false;
    twinkConvoNo = false;
    buttonBackSound.play();
  }
  ////////////////////If chatting with Jock and want to go back to main chatting screen////////////////////
  if ((inChatRoom == true) && (jockConvo == true) &&
  mouseX > windowWidth/12.826 && mouseX < windowWidth/6.53 &&
  mouseY > windowWidth/13.27 && mouseY < windowWidth/7.16)
  {
    jockConvo = false;
    jockConvoYes = false;
    jockConvoNo = false;
    buttonBackSound.play();
  }

  ////////////////////////////////////////////////////////////////////////
  ///////////////////////////////Bear Chat///////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  if ((inChatRoom == true) && (bearConvo == false) && (twinkConvo == false) && (jockConvo == false) &&
  mouseX > windowWidth/12.826 && mouseX < windowWidth/4.80 &&
  mouseY > windowWidth/6.7 && mouseY < windowWidth/3.63)
  {
    bearConvo = true;
    textReceive.play();
  }

  if((inChatRoom == true) && (bearConvo == true) && (bearConvoYes == false) && (bearConvoNo == false) &&
  mouseX > windowWidth/2 &&
  mouseY > 0 && mouseY < windowWidth/5)
  {
    bearConvoYes = true;
    textSentMulti.play();
  }
  if((inChatRoom == true) && (bearConvo == true) && (bearConvoYes == false) && (bearConvoNo == false) &&
  mouseX > windowWidth/2 &&
  mouseY > windowWidth/5)
  {
    bearConvoNo = true;
    textSentSingle.play();
  }

  ///////////////////////////Hit COOK from bearConvoYes///////////////////////////
  if((inChatRoom == true) && (bearConvo == true) && (bearConvoYes == true) && (bearConvoNo == false) &&
  mouseX > windowWidth/1.2 && mouseX < windowWidth/1.024 &&
  mouseY > windowWidth/2.133 && mouseY < windowWidth/1.86)
  {
    //LET'S START COOKING!!
    bgm02.stop();
    buttonClickSound.play();
    camera.position.x = windowWidth*6+windowWidth/2;
    stripItScreen = true;
    stripVideo.play();
    inChatRoom = false;
    bearConvo = false;
    bearConvoYes = false;
    loadingComingDown = 0;
  }

  ///////////////////////////Hit BACK from bearConvoNo///////////////////////////
  if((inChatRoom == true) && (bearConvo == true) && (bearConvoYes == false) && (bearConvoNo == true) &&
  mouseX > windowWidth/1.2 && mouseX < windowWidth/1.024 &&
  mouseY > windowWidth/2.133 && mouseY < windowWidth/1.86)
  {
    bearConvo = false;
    bearConvoNo = false;
    buttonBackSound.play();
    loadingComingDown = 0;
  }

  ////////////////////////////////////////////////////////////////////////
  ///////////////////////////////Twink Chat///////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  if ((inChatRoom == true) && (bearConvo == false) && (twinkConvo == false) && (jockConvo == false) &&
  mouseX > windowWidth/4.80 && mouseX < windowWidth/2.9 &&
  mouseY > windowWidth/6.7 && mouseY < windowWidth/3.63)
  {
    twinkConvo = true;
    textReceive.play();
  }
  if((inChatRoom == true) && (twinkConvo == true) && (twinkConvoYes == false) && (twinkConvoNo == false) &&
  mouseX > windowWidth/2 &&
  mouseY > 0 && mouseY < windowWidth/5)
  {
    twinkConvoYes = true;
    textSentMulti.play();
  }
  if((inChatRoom == true) && (twinkConvo == true) && (twinkConvoYes == false) && (twinkConvoNo == false) &&
  mouseX > windowWidth/2 &&
  mouseY > windowWidth/5)
  {
    twinkConvoNo = true;
    textSentMulti.play();
  }


  ///////////////////////////Hit COOK from twinkConvoYes///////////////////////////
  if((inChatRoom == true) && (twinkConvo == true) && (twinkConvoYes == true) && (twinkConvoNo == false) &&
  mouseX > windowWidth/1.2 && mouseX < windowWidth/1.024 &&
  mouseY > windowWidth/2.133 && mouseY < windowWidth/1.86)
  {
    //LET'S START COOKING!!
    bgm02.stop();
    buttonClickSound.play();
    camera.position.x = windowWidth*6+windowWidth/2;
    stripItScreen = true;
    stripVideo.play();
    inChatRoom = false;
    twinkConvo = false;
    twinkConvoYes = false;
    loadingComingDown = 0;
  }

  ///////////////////////////Hit BACK from twinkConvoNo///////////////////////////
  if((inChatRoom == true) && (twinkConvo == true) && (twinkConvoYes == false) && (twinkConvoNo == true) &&
  mouseX > windowWidth/1.2 && mouseX < windowWidth/1.024 &&
  mouseY > windowWidth/2.133 && mouseY < windowWidth/1.86)
  {
    twinkConvo = false;
    twinkConvoNo = false;
    buttonBackSound.play();
    loadingComingDown = 0;
  }

  ////////////////////////////////////////////////////////////////////////
  ///////////////////////////////Jock Chat///////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  if ((inChatRoom == true) && (bearConvo == false) && (twinkConvo == false) && (jockConvo == false) &&
  mouseX > windowWidth/2.9 && mouseX < windowWidth/2.1 &&
  mouseY > windowWidth/6.7 && mouseY < windowWidth/3.63)
  {
    jockConvo = true;
    textReceive.play();
  }
  if((inChatRoom == true) && (jockConvo == true) && (jockConvoYes == false) && (jockConvoNo == false) &&
  mouseX > windowWidth/2 &&
  mouseY > 0 && mouseY < windowWidth/5)
  {
    jockConvoYes = true;
    textSentMulti.play();
  }
  if((inChatRoom == true) && (jockConvo == true) && (jockConvoYes == false) && (jockConvoNo == false) &&
  mouseX > windowWidth/2 &&
  mouseY > windowWidth/5)
  {
    jockConvoNo = true;
    textSentMulti.play();
  }

  ///////////////////////////Hit COOK from jockConvoYes///////////////////////////
  if((inChatRoom == true) && (jockConvo == true) && (jockConvoYes == true) && (jockConvoNo == false) &&
  mouseX > windowWidth/1.2 && mouseX < windowWidth/1.024 &&
  mouseY > windowWidth/2.133 && mouseY < windowWidth/1.86)
  {
    //LET'S START COOKING!!
    bgm02.stop();
    buttonClickSound.play();
    camera.position.x = windowWidth*6+windowWidth/2;
    stripItScreen = true;
    stripVideo.play();
    inChatRoom = false;
    jockConvo = false;
    jockConvoYes = false;
    loadingComingDown = 0;
  }

  ///////////////////////////Hit BACK from jockConvoNo///////////////////////////
  if((inChatRoom == true) && (jockConvo == true) && (jockConvoYes == false) && (jockConvoNo == true) &&
  mouseX > windowWidth/1.2 && mouseX < windowWidth/1.024 &&
  mouseY > windowWidth/2.133 && mouseY < windowWidth/1.86)
  {
    jockConvo = false;
    jockConvoNo = false;
    buttonBackSound.play();
    loadingComingDown = 0;
  }







  ////////////////////////////////////////////////////////////////////////
  ///////////////////////////////Salt It//////////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  if((saltItScreen == true) && (timeIsUp == false))
  {
    if(completeStatus > 1)
    {
    completeStatus = completeStatus - windowWidth/150;
    saltSound.play();
    clickCountStatus++;
    print("Shake It Baby! Shake it "+clickCountStatus+" times to turn me on...");
    }

  if (clickCountStatus == 2)
  {moan01.play();}
  if (clickCountStatus == 6)
  {moan01.play();}
  if (clickCountStatus == 21)
  {moan02.play();}
  if (clickCountStatus == 36)
  {moan01.play();}
  if (clickCountStatus == 50)
  {dingSound.play();}

  }//End of if salt it screen is true

  //////////////////////////////If Success in Salt It Stage and press NEXT button

  if((saltItScreen == true) && (clickCountStatus == 50) &&
  mouseX > windowWidth/1.2 && mouseX < windowWidth/1.024 &&
  mouseY > windowWidth/2.133 && mouseY < windowWidth/1.86)
  {
    dingSound.stop();
    buttonClickSound.play();
    timeTick.play();
    camera.position.x = windowWidth*4+windowWidth/2;
    saltItScreen = false;
    fryItScreen = true;
    timeIsUp = false;
    resetGameElementsWhenSuccess();
    loadingComingDown = 0;
  }

  //////////////////////////////If Time's Up in Salt it Stage and press NEXT button to show Score

  if((saltItScreen == true) && (timeIsUp == true) && (saltItFailed == false) &&
  mouseX > windowWidth/1.2 && mouseX < windowWidth/1.024 &&
  mouseY > windowWidth/2.133 && mouseY < windowWidth/1.86)
  {
    dingSound.stop();
    buttonClickSound.play();
    bgm04.loop();
    clearThroat.play();
    saltItFailed = true; //Show the Score Board
    loadingComingDown = 0;
  }

  ////////////If Shown Score in Salt It and press button to return to main title screen

  if ((saltItFailed == true) &&
  mouseX > 0 && mouseX < windowWidth/1.2 &&
  mouseY > windowWidth/2.14 && mouseY < scaledHeight)
  {
    // buttonClickSound.play();
    // bgm04.stop();
    // bgm01.loop();
    // camera.position.x = windowWidth/2;
    // loadingComingDown = 0;
    reinitializeOriginalValues ();
  }











  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////Fry It//////////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  if((fryItScreen == true) && (timeIsUp == false))
  {
    //Turn on The Microphone
    mic = new p5.AudioIn()
    mic.start();

    //Turn on the fire
    if ((fireIsOn == false) && mouseX > windowWidth/5 && mouseX < windowWidth/2.73 &&
    mouseY > windowWidth/2.78 && mouseY < windowWidth/1.90)
    {
      fireIsOn = true;
      moan02.play();
    }

    ///Male Moan when mouseReleased onFire
    if (fireIsOn == true)
    { moan02.play(); }

  } //End of if fry it screen is true && time is not up


  //////////If Success
  if ((fryItScreen == true) && (completeStatus < 1 ) && (fryItFailed == false) &&
  mouseX > windowWidth/1.2 && mouseX < windowWidth/1.024 &&
  mouseY > windowWidth/2.133 && mouseY < windowWidth/1.86)
  {
    buttonClickSound.play();
    timeTick.play();
    camera.position.x = windowWidth*5+windowWidth/2;
    fryItScreen = false;
    eatItScreen = true;
    timeIsUp = false;
    resetGameElementsWhenSuccess();
    loadingComingDown = 0;
  }


  /////////If Time is up
  if((fryItScreen == true) && (timeIsUp == true) &&
  //(fryItFailed == false) &&
  mouseX > windowWidth/1.2 && mouseX < windowWidth/1.024 &&
  mouseY > windowWidth/2.133 && mouseY < windowWidth/1.86)
  {
    buttonClickSound.play();
    bgm04.loop();
    clearThroat.play();
    fryItFailed = true; //Show the Score Board
    loadingComingDown = 0;
  }


  ////////////If Shown Score in Fry It and press button to return to main title screen

  if ((fryItFailed == true) &&
  mouseX > 0 && mouseX < windowWidth/1.2 &&
  mouseY > windowWidth/2.14 && mouseY < scaledHeight)
  {
    // buttonClickSound.play();
    // bgm04.stop();
    // bgm01.loop();
    // camera.position.x = windowWidth/2;
    // loadingComingDown = 0;
    reinitializeOriginalValues();
  }














  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////Eat It//////////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  if((eatItScreen == true) && (timeIsUp == false))
  {
    if(completeStatus > 1)
    {
    completeStatus = completeStatus - windowWidth/150;
    knifeSound.play();
    clickCountStatus++;
    print("Lick me, taste me, eat me up "+clickCountStatus+" times to devour me...");
    }

  //Male Moaning Sound

  if (clickCountStatus == 2)
  {moan02.play();}
  if (clickCountStatus == 7)
  {moan01.play();}
  if (clickCountStatus == 17)
  {moan03.play();}
  if (clickCountStatus == 22)
  {moan02.play();}
  if (clickCountStatus == 27)
  {moan01.play();}
  if (clickCountStatus == 40)
  {moan03.play();}
  if (clickCountStatus == 49)
  {moan04.play();}
  if (clickCountStatus == 50)
  {dingSound.play();}


  }//End of if EAT it screen is true and Time is not up


  ////////Mouseclick Eating Meat Animation
  if ((eatItScreen == true) && (timeIsUp == false) && (meatEatAnimation.getFrame() < 50) )
  {
  meatEatAnimation.nextFrame();
  }


  //////////If Success
  if ((eatItScreen == true) && (completeStatus < 1 ) && (eatItFailed == false) && (nothingFailed == false) &&
  mouseX > windowWidth/1.2 && mouseX < windowWidth/1.024 &&
  mouseY > windowWidth/2.133 && mouseY < windowWidth/1.86)
  {
    clickCountStatus = 0; //This is to prevent ding sound from ringing again!
    buttonClickSound.play();
    bgm03.stop();
    bgm05.loop();
    nothingFailed = true; //Show 100 Score Board
    loadingComingDown = 0;
  }


  /////////If Time is up
  if((eatItScreen == true) && (timeIsUp == true) && (eatItFailed == false) && (nothingFailed == false) &&
  mouseX > windowWidth/1.2 && mouseX < windowWidth/1.024 &&
  mouseY > windowWidth/2.133 && mouseY < windowWidth/1.86)
  {
    clickCountStatus = 0; //This is to prevent ding sound from ringing again!
    buttonClickSound.play();
    bgm04.loop();
    clearThroat.play();
    eatItFailed = true; //Show 66 Score Board
    loadingComingDown = 0;
  }


  ////////////If Shown Score in NOTHING Failed and press button to return to main title screen

  if ((nothingFailed == true) &&
  mouseX > 0 && mouseX < windowWidth/1.2 &&
  mouseY > windowWidth/2.14 && mouseY < scaledHeight)
  {
    // buttonClickSound.play();
    // bgm05.stop();
    // bgm01.loop();
    // camera.position.x = windowWidth/2;
    // loadingComingDown = 0;
    reinitializeOriginalValues();
  }



  ////////////If Shown Score in Fry It Failed and press button to return to main title screen

  if ((eatItFailed == true) &&
  mouseX > 0 && mouseX < windowWidth/1.2 &&
  mouseY > windowWidth/2.14 && mouseY < scaledHeight)
  {
    // buttonClickSound.play();
    // bgm04.stop();
    // bgm01.loop();
    // camera.position.x = windowWidth/2;
    // loadingComingDown = 0;
    reinitializeOriginalValues();
  }
















  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////Strip It////////////////////////////////
  ////////////////////////////////////////////////////////////////////////


  if ((stripItScreen == true) && (stripVideo.time() > 17)) //Click to go to Salt It Screen
  {
    stripVideo.stop();
    buttonClickSound.play();
    bgm03.loop();
    timeTick.play();
    camera.position.x = windowWidth*3+windowWidth/2;
    saltItScreen = true;
    stripItScreen = false;
    loadingComingDown = 0;
  }



// prevent default
return false;

} //End of mouseReleased

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function saltItStart ()
{
  if(saltComingDown > (0-scaledHeight)) {saltComingDown -= 40;}
} //End of saltItStart

function fryItStart ()
{
  if(fryComingDown > (0-scaledHeight)) {fryComingDown -= 40;}
} //End of fryItStart

function eatItStart ()
{
  if(eatComingDown > (0-scaledHeight)) {eatComingDown -= 40;}
} //End of eatItStart

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function successThreeStar ()
{
  timeTick.stop();
  camera.off();
  imageMode(CENTER);
  image(threeStarImg,windowWidth/2,scaledHeight/2.05,windowWidth/1.47,windowWidth/6.44);
  image(buttonNext,windowWidth/1.1,windowWidth/2,buttonSizeW,buttonSizeH);
  camera.on();
}

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function timeIsUpFunc ()
{
  bgm03.stop();
  camera.off();
  fill(0,150);
  noStroke();
  rectMode(CORNER);
  rect(0,0,windowWidth,scaledHeight);
  imageMode(CENTER);
  image(timesupText,windowWidth/2,scaledHeight/2,windowWidth/1.08,windowWidth/4.43);
  image(buttonNext,windowWidth/1.1,windowWidth/2,buttonSizeW,buttonSizeH);
  camera.on();
}

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function sparkleFading ()
{
  camera.off();
  tint(255,sparkleFade1);
  image(sparkleSmall,windowWidth/6,scaledHeight/1.35,windowWidth/9.95,windowWidth/8.38);
  tint(255,sparkleFade2);
  image(sparkleSmall,windowWidth/4,scaledHeight/8,windowWidth/9.95,windowWidth/8.38);
  tint(255,sparkleFade3);
  image(sparkleSmall,windowWidth/1.05,scaledHeight/10,windowWidth/9.95,windowWidth/8.38);
  tint(255,sparkleFade4);
  image(sparkleSmall,windowWidth/25,scaledHeight/2.3,windowWidth/9.95,windowWidth/8.38);
  tint(255,sparkleFade1);
  image(sparkleSmall,windowWidth/1.2,scaledHeight/1.8,windowWidth/9.95,windowWidth/8.38);
  tint(255,sparkleFade2);
  image(sparkleSmall,windowWidth/1.5,scaledHeight/1.2,windowWidth/9.95,windowWidth/8.38);
  tint(255,sparkleFade3);
  image(sparkleSmall,windowWidth/3.3,scaledHeight/1.7,windowWidth/9.95,windowWidth/8.38);
  tint(255,sparkleFade4);
  image(sparkleSmall,windowWidth/1.05,scaledHeight/1.3,windowWidth/9.95,windowWidth/8.38);
  tint(255,sparkleFade1);
  image(sparkleSmall,windowWidth/1.6,scaledHeight/20,windowWidth/9.95,windowWidth/8.38);
  tint(255,sparkleFade3);
  image(sparkleSmall,windowWidth/18,scaledHeight/1.08,windowWidth/9.95,windowWidth/8.38);
  noTint();
  camera.on();
  if (sparkleFade1 > 0) {sparkleFade1 -= 10;} else {sparkleFade1 = 255;}
  if (sparkleFade2 > 0) {sparkleFade2 -= 12;} else {sparkleFade2 = 255;}
  if (sparkleFade3 > 0) {sparkleFade3 -= 8;} else {sparkleFade3 = 255;}
  if (sparkleFade4 > 0) {sparkleFade4 -= 5;} else {sparkleFade4 = 255;}
}


////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function clockAndCompleteBar ()
{
  camera.off();
  imageMode(CENTER);
  image(timerImg,windowWidth/10,windowWidth/10,windowWidth/7,windowWidth/7);
  image(completeBarImg,windowWidth/10,windowWidth/2.7,windowWidth/10,windowWidth/3);

  //////Complete Bar//////
  fill(200);
  noStroke();
  rectMode(CORNER);
  rect(windowWidth/19,windowWidth/4.8,windowWidth/10,completeStatus);
  noFill();
  stroke(255);
  strokeWeight(windowWidth/96);
  rectMode(CENTER);
  rect(windowWidth/10,windowWidth/2.7,windowWidth/10,windowWidth/3);

  //////Clock Handle///////
  noFill();
  stroke(255);
  if (clockCountdown > 180)
  {
    push();
    imageMode(CENTER);
    translate(windowWidth/10,windowWidth/10);
    scale(scaledP5playElement,scaledP5playElement);
    animation(timerShake,0,0); // Title Bg Gradient
    pop();
  }
  strokeWeight(windowWidth/128);
  push();
  translate(windowWidth/10,windowWidth/10);
  rotate(radians(clockCountdown));
  line(0,0,0,-(windowWidth/21.5));
  pop();

  if ((clockCountdown < 360) && (completeStatus > 1))
  {clockCountdown = clockCountdown+0.2;}
  else if (clockCountdown > 360)
  {
    print( "Sorry! Time's Up Bitches!" );
    timeIsUp = true;
  }
  camera.on();
}

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function resetGameElementsWhenSuccess () //Run once when mouseReleased!
{
  clickCountStatus = 0;
  clockCountdown = 0;
  completeStatus = windowWidth/3;
}

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function reinitializeOriginalValues () //This function includes function resetGameElementsWhenSuccess
{

  //////////////*******REFRESH PAGE IN CASE ANYTHING FAILS*****///////////////
  window.location.reload();

  // ////////////////SETUP ANIMATION////////////////
  // bannerComingDown = 0-windowWidth/5; //Setting title banner animation
  // meatComingDown = 0-windowWidth/5;  //Setting title banner animation
  // loadingComingDown = 0-scaledHeight;  //Setting loading screen animation

  // meatEatAnimation.changeFrame(0); //Reset Meat Eat Animation

  // saltComingDown = 0;
  // fryComingDown = 0;
  // eatComingDown = 0;

  // meatRotation = 0;  //Setting title banner animation
  // sparkleFade1 = 255;
  // sparkleFade2 = 125;
  // sparkleFade3 = 50;
  // sparkleFade4 = 175;

  // ///////////////////SETUP Clock and Completion Status///////////////////
  // completeStatus = windowWidth/3;
  // clickCountStatus = 0;
  // clockCountdown = 0;

  // ////////////////SETUP BOOLEAN//////////////////
  // inTitleScreen = true; //Goes to Main Title Screen **camera position x at 0
  // inChatRoom = false; //Goes to Chatting Screen **camera position x at windowWidth*2+windowWidth/2
  // bearConvo = false; //Sub Menu of Chatting Screen - Bear
  // twinkConvo = false; //Sub Menu of Chatting Screen - Twink
  // jockConvo = false; //Sub Menu of Chatting Screen - Jock
  // bearConvoYes = false;
  // bearConvoNo = false;
  // twinkConvoYes = false;
  // twinkConvoNo = false;
  // jockConvoYes = false;
  // jockConvoNo = false;

  // saltItScreen = false; //Goes to Salt It Screen **camera position x at windowWidth*3+windowWidth/2
  // fryItScreen = false; //Goes to Fry It Screen **camera position x at windowWidth*4+windowWidth/2
  // eatItScreen = false; //Goes to Eat It Screen **camera position x at windowWidth*5+windowWidth/2
  // stripItScreen = false;

  // saltItFailed = false; //Shows up Score Board if failed
  // fryItFailed = false; //Shows up Score Board if failed
  // eatItFailed = false; //Shows up Score Board if failed
  // nothingFailed = false; //Shows up Score Board if everything success!

  // timeIsUp = false;
  // fireIsOn = false;


  // stripVideo.stop();
}
