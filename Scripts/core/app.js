// app.ts by Mike Roe #200166222 hosted on Microsoft Azure
// IIFE - Immediately Invoked Function Expression
(function () {
    var canvas;
    var canvasWidth;
    var canvasHeight;
    var canvasHalfWidth;
    var canvasHalfHeight;
    var stage;
    var DiceLabel1;
    var DiceLabel2;
    var Dice1;
    var Dice2;
    var DiceImg1;
    var DiceImg2;
    var rollButton;
    /**
     *
     * @method Start
     * @returns void
     */
    function Start() {
        canvas = document.getElementById("canvas");
        canvasWidth = parseInt(canvas.getAttribute("width"));
        canvasHeight = parseInt(canvas.getAttribute("height"));
        canvasHalfWidth = canvasWidth * 0.5;
        canvasHalfHeight = canvasHeight * 0.5;
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        stage.enableMouseOver(20);
        Main(); // call the main function
    }
    /**
     * @method Update
     * @returns void
     */
    function Update(event) {
        stage.update();
    }
    /**
     * @method Main
     * @returns void
     */
    function Main() {
        DiceLabel1 = new objects.Label("Dice 1", "18px", "Verdana", "#000000", canvasHalfWidth - 130, canvasHalfHeight + 90, true);
        stage.addChild(DiceLabel1);
        DiceLabel2 = new objects.Label("Dice 2", "18px", "Verdana", "#000000", canvasHalfWidth + 130, canvasHalfHeight + 90, true);
        stage.addChild(DiceLabel2);
        // DiceImg1 = new objects.Bitmap("./Assets/images/rollButton.png", true, 150, 40, canvasHalfWidth, canvasHalfHeight + 150);
        // stage.addChild(DiceImg1);
        Dice1 = new objects.Button("./Assets/images/blank.png", true, 150, 40, canvasHalfWidth - 150, canvasHalfHeight - 130);
        stage.addChild(Dice1);
        Dice2 = new objects.Button("./Assets/images/blank.png", true, 150, 40, canvasHalfWidth + 100, canvasHalfHeight - 130);
        stage.addChild(Dice2);
        rollButton = new objects.Button("./Assets/images/rollButton.png", true, 150, 40, canvasHalfWidth, canvasHalfHeight + 150);
        stage.addChild(rollButton);
        rollButton.on("click", function (event) {
            (Math.floor(Math.random() * 6) + 1);
            DiceLabel1.text = "";
            DiceLabel2.text = "";
        });
    }
    // window binding events
    window.onload = Start;
})();
//# sourceMappingURL=app.js.map