# Vanilla-JavaScript-Stopwatch

As I am currently learning Javasript I wanted to focus on building some projects to practice on functionality.

<strong> What I learned making this project </strong>

CSS gradient border

The first problem I ran into was actually as CSS issue. This was the first time that I was attempting to have a gradient effect within css, and I wanted to use it on my border. 
I noticed that 

***
Border-radius: 80px;
border: 9px solid;
    border-image: linear-gradient(45deg, purple, orange) 1;
***
  
When I applied this demo I realised that my border radius was removed. Through further research I found that it was not possible to use the border-image and border-radius property at the same time. From searching on Stack overflow, it was explained that a pseudo class would have to be used to achieve both. I learned that I could use the border-image property, as well as images allows gradients as borders. Border-radius isn't supported with border-image. 

Instead I used this code to achieve a gradient border:
border: double 4px transparent;
  border-radius: 80px;
  background-image: linear-gradient(white, white), radial-gradient(circle at top left, #f00,#3020ff);
  background-origin: border-box;
  background-clip: content-box, border-box;


 Structuring HTML to correspond with JS

I searched a tutorial to help me along this project as I knew the html code structure would be important to how the JavaScript responded e.g. the event listeners. At first I separated each time reference with a <span> however I realised that there was no need for this extra step as I could use *.innerText* property in JavaScript and separate them by using ternary operators 

Initial HTML code:

      

**
<p> <span id="seconds">00</span>: <span id="mins">00</span>:<span id="hours">00</span>
**

Changed HTML code:

**
<div class="time>00:00:00</div>

**
Calculating time 

Throughout implementing the different time methods, I learned about a new operator of remainder/modulus. Modulus returns the remainders of two intergers that have been divided. It is used to limit the range of an outcome and to have consistent results. 

I found this blog site which helped clarify how to use the remainder operator which I applied to my code :


functiontoDaysMinutesSeconds(totalSeconds)
{
Const seconds =Math.floor(totalSeconds %60);
Const minutes =Math.floor((totalSeconds %3600)/60);
Const hours =Math.floor((totalSeconds %(3600*24))/3600);
Const days =Math.floor(totalSeconds /(3600*24));

From <https://bobbyhadz.com/blog/javascript-convert-seconds-to-days-hours-minutes-seconds> 

