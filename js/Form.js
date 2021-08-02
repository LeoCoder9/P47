class Form {

    constructor() {
        this.singlePlrButtom = createButton("SinglePlayer");
        this.multiPlrButtom = createButton("MultiPlayer");

        this.howToPlayButton = createButton("How to play?")
        

        this.Info =  createElement('h2');
        this.greetings = createElement('h2');
        this.name = null
    }


    display() {
        fill("white")
  
        var title = createElement('h1');
        title.html("KNIGHT QUEST");
        title.position(width / 2 + -120, 20);

        var play = createElement('h2');
        play.html("PLAY NOW:");
        play.position(width / 2 + -60, 160);

        let col = color(109, 78, 37);
        
       
        this.singlePlrButtom.position(width / 2 + -150, 360);
        this.singlePlrButtom.size(120, 50)
        this.singlePlrButtom.style('background-color', col);
        
        this.singlePlrButtom.mouseOver(() => {
         this.singlePlrButtom.style('background-color', '#4ec91a');
         this.singlePlrButtom.size(130, 55); })

         this.singlePlrButtom.mouseOut(() => {
        this.singlePlrButtom.style('background-color', col);
        this.singlePlrButtom.size(120, 50); })
   
        
         
        
        this.multiPlrButtom.position(width / 2 + 50, 360);
        this.multiPlrButtom.size(120, 50)
        this.multiPlrButtom.style('background-color', col);

        this.multiPlrButtom.mouseOver(() => {
        this.multiPlrButtom.style('background-color', '#4ec91a');
        this.multiPlrButtom.size(130, 55); })


        this.multiPlrButtom.mouseOut(() => {
        this.multiPlrButtom.style('background-color', col);
        this.multiPlrButtom.size(120, 50); })
       
    

        this.howToPlayButton.position(width/2 + -41, 460);
        this.howToPlayButton.size(110, 25)
        this.howToPlayButton.style('background-color', col);

        
        this.howToPlayButton.mouseOver(() => {
        this.howToPlayButton.style('background-color', '#4ec91a');
        this.howToPlayButton.size(120, 35); })
    
    
        this.howToPlayButton.mouseOut(() => {
        this.howToPlayButton.style('background-color', col);
        this.howToPlayButton.size(110, 25); })


        this.howToPlayButton.mousePressed(()=>{
            click.play()
            background(endbg)
            this.howToPlayButton.hide()
            this.singlePlrButtom.hide()
            this.multiPlrButtom.hide()
            play.hide()

            var controlsTitle = createElement('h1')
            controlsTitle.position(width / 2 + -500, 100);
            controlsTitle.html("Controls:");

            var EtoThrowSword = createElement('h2')
            EtoThrowSword.position(width / 2 + -600, 150);
            EtoThrowSword.html("To throw your sword, press 'E'.");

            var HowToJump = createElement('h2')
            HowToJump.position(width / 2 + -600, 200);
            HowToJump.html("To jump, press 'space' on your keyboard, obviously.");

            var storyTitle = createElement('h1')
            storyTitle.position(width / 2 + 280, 100);
            storyTitle.html("Story:");

            var storyInfo = createElement('h2')
            storyInfo.position(width / 2 + 200, 150);
            storyInfo.html("You are the kingdom's greatest, most brave knight, the king sent you on a mission; travel far to find the princess guarded by a fearsome dragon. But before you even reach the dragon your journey there will be dangerous, many creatures will be waiting...");

            var rules = createElement('h1')
            rules.position(width / 2 + -500, 300);
            rules.html("Rules:");

            
            var levelsinfo = createElement('h2')
            levelsinfo.position(width / 2 + -600, 350);
            levelsinfo.html("In total there are 6 levels. Level 6 is where you reach the dragon.");

            var levelsinfo2 = createElement('h2')
            levelsinfo2.position(width / 2 + -600, 400);
            levelsinfo2.html("In each level you will encounter more and different creatures, so it gets harder.");

            var levelsinfo3 = createElement('h2')
            levelsinfo3.position(width / 2 + -600, 450);
            levelsinfo3.html("To get to the next level, you need kills, (e.g. 10 kills for level 2) .");

            var livesinfo = createElement('h2')
            livesinfo.position(width / 2 + -600, 500);
            livesinfo.html("You have " + lives + " lives but once your lives have ran out, GAME OVER! (you can retry though..)");

            var returnButton = createButton(" 🢀 Return 🢀")
            returnButton.position(width/2 + 500, 500)
            returnButton.size(150, 55)
            returnButton.style('background-color', col);

               
            returnButton.mouseOver(() => {
             returnButton.style('background-color', '#4ec91a');
             returnButton.size(170, 65); })
        
        
             returnButton.mouseOut(() => {
            returnButton.style('background-color', col);
            returnButton.size(150, 55); })

            returnButton.mousePressed(()=>{
                background(startbg)
                click.play()

                returnButton.hide()
                levelsinfo.hide()
                levelsinfo2.hide()
                levelsinfo3.hide()
                livesinfo.hide()
                rules.hide()
                storyInfo.hide()
                storyTitle.hide()
                HowToJump.hide()
                EtoThrowSword.hide()
                controlsTitle.hide()

                this.singlePlrButtom.show()
                this.multiPlrButtom.show()
                play.show()
                this.howToPlayButton.show()
            })
        })


        this.singlePlrButtom.mousePressed(() => {
            play.hide();
            this.howToPlayButton.hide()

            click.play()

            this.multiPlrButtom.hide();
            this.singlePlrButtom.hide();

            var singlePlrTitle = createElement('h2');
            singlePlrTitle.position(width / 2 + -60, 160);
            singlePlrTitle.html("Getting ready...");

            var singleName = createInput("Input Name");

            singleName.position(width / 2 + -65, 360);
            singleName.size(150, 30)
            singleName.style('background-color', col)

            var singlePlayButton = createButton("PLAY");
            singlePlayButton.position( 740, 455);
            singlePlayButton.size(90, 25)

       
            singlePlayButton.mouseOver(() => {
            singlePlayButton.style('background-color', '#4ec91a');
            singlePlayButton.size(100, 35); })
       
            singlePlayButton.mouseOut(() => {
            singlePlayButton.style('background-color', '#E5E5E5');
            singlePlayButton.size(90, 25); })
        
    
           

            singlePlayButton.mousePressed(() => {
                gameState = "PLAY";
                this.name = singleName.value()
                singlePlayButton.hide();
                singleName.hide();
                singlePlrTitle.hide();

                click.play()

                var menuButton = createButton("Return to menu")
                menuButton.position(width/2 + -51, 15)
                menuButton.size(110, 25)
                menuButton.style('background-color', col);
                
        
                   

                voice.play()
                this.greetings.html("Greetings, " + this.name);
                this.greetings.position(width / 2 + -98, 160);

               
                this.Info.html("Press 'S' to start");
                this.Info.position(width / 2 + -65, 250);
            }

            )


        }

        )

    }
  
    hide(){
      this.Info.hide()
     this.greetings.hide()
    }
    

}

    //REVENGE OF THE BLOCKS                        Getting started!                     waiting for more player...

        //PLAY:                    ------->         input name(       )   if muti -->        welcome (chosen name)

//SINGLEPLAYER,  MULTIPLAYER                          play