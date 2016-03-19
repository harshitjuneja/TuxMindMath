var game = new Phaser.Game(640, 520, Phaser.AUTO, 'gamingArea', {
    preload: preload,
    create: create,
    update: update
});

var monster;
var check, vtimer;
var next, bg, next1, next2, next3;
var s2, zero, zero1, eight;
var one, two, three, four, five, six, seven, eight, nine, mul, zero, equalto, ques;
var bubble1, ins1, ins, tux, gameQues;
var t, test, s, o, level = 1;
var mul_prob, five_prob, zero_prob, equalto_prob, ques_prob;
var i0, i1, i2, i3, i4, i5, i6, i7, i8, i9;
var a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0;
var x, y, count = 0,
    coll_d;
var verify, checker = 0;
var usrAns = [];
var finalQ, unit, tens, life_lost = 0;
var heart1, heart2, heart3;
var saveTux;

function preload() {
    game.load.image('mul50', 'assets/mulby50.png');
    game.load.image('next', 'assets/start_50_50.gif');
    game.load.image('sky', 'assets/sky.png');
    game.load.image('tux', 'assets/penguin.png');
    game.load.image('s1', 'assets/step1.gif');
    game.load.image('s2', 'assets/step2.gif');
    game.load.image('s3', 'assets/step3.gif');
    game.load.image('0', 'assets/0.gif');
    game.load.image('1', 'assets/1.gif');
    game.load.image('2', 'assets/2.gif');
    game.load.image('3', 'assets/3.gif');
    game.load.image('4', 'assets/4.gif');
    game.load.image('5', 'assets/5.gif');
    game.load.image('6', 'assets/6.gif');
    game.load.image('7', 'assets/7.gif');
    game.load.image('8', 'assets/8.gif');
    game.load.image('9', 'assets/9.gif');
    game.load.image('mul', 'assets/mul.gif');
    game.load.image('devide', 'assets/devide.gif');
    game.load.image('equals', 'assets/=.gif');
    game.load.image('ques', 'assets/ques.png');
    game.load.image('play', 'assets/play.png');
    game.load.image('st1', 'assets/st1.gif');
    game.load.image('st2', 'assets/st2.png');
    game.load.image('instructions', 'assets/instructions.png');

    game.load.image('bg', 'assets/mountain.png');
    game.load.image('savetux', 'assets/saveme.png');
    game.load.spritesheet('monster', 'assets/monster.png', 100, 100);
    
    game.load.image('bmb', 'assets/bomb.gif');
    game.load.image('tbmb', 'assets/t_bomb.gif');
    game.load.image('boom', 'assets/boom.gif');
    game.load.image('heart', 'assets/heart.gif');

    game.load.image('gQuote', 'assets/gQuote.png');
    game.load.image('colldetect', 'assets/colld.gif');
    game.load.image('check', 'assets/check.png');

}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE); // start phaser's arcade physics
    bg = game.add.sprite(0, 0, 'mul50');
    next = game.add.sprite(560, 440, 'next');
    next.inputEnabled = true;
    next.events.onInputUp.add(load_ques);

    saveTux = game.add.group();
    saveTux.create(410, 350, 'savetux');
    saveTux.enableBody = true;

    monster = game.add.sprite(20, 400, 'monster');
    game.physics.arcade.enable(monster);
}

function load_ques() {
    bg.destroy();
    next.destroy();
    game.add.sprite(0, 0, 'sky');

    one = game.add.sprite(30, 250, '1');
    six = game.add.sprite(110, 250, '6');
    mul = game.add.sprite(190, 250, 'mul');
    five = game.add.sprite(270, 250, '5');
    zero = game.add.sprite(350, 250, '0');
    equalto = game.add.sprite(430, 250, 'equals');
    ques = game.add.sprite(510, 250, 'ques');

    next1 = game.add.sprite(560, 440, 'next');
    next1.inputEnabled = true;
    next1.events.onInputUp.add(step1);
}

function moveup_demo() {

    game.physics.arcade.enable(one);
    one.body.collideWorldBounds = true;
    one.body.velocity.y = -100;

    game.physics.arcade.enable(six);
    six.body.collideWorldBounds = true;
    six.body.velocity.y = -95;

    game.physics.arcade.enable(mul);
    mul.body.collideWorldBounds = true;
    mul.body.velocity.y = -94;

    game.physics.arcade.enable(five);
    five.body.collideWorldBounds = true;
    five.body.velocity.y = -97;

    game.physics.arcade.enable(zero);
    zero.body.collideWorldBounds = true;
    zero.body.velocity.y = -97


    game.physics.arcade.enable(equalto);
    equalto.body.collideWorldBounds = true;
    equalto.body.velocity.y = -100;

    game.physics.arcade.enable(ques);
    ques.body.collideWorldBounds = true;
    ques.body.velocity.y = -110;
}

function moveup_ques() {
    game.physics.arcade.enable(o);
    o.body.collideWorldBounds = true;
    o.body.velocity.y = -100
    game.physics.arcade.enable(t);
    t.body.collideWorldBounds = true;
    t.body.velocity.y = -100;
    game.physics.arcade.enable(mul_prob);
    mul_prob.body.collideWorldBounds = true;
    mul_prob.body.velocity.y = -90;
    game.physics.arcade.enable(five_prob);
    five_prob.body.collideWorldBounds = true;
    five_prob.body.velocity.y = -87;
    game.physics.arcade.enable(zero_prob);
    zero_prob.body.collideWorldBounds = true;
    zero_prob.body.velocity.y = -85;
    game.physics.arcade.enable(equalto_prob);
    equalto_prob.body.collideWorldBounds = true;
    equalto_prob.body.velocity.y = -89;
    game.physics.arcade.enable(ques_prob);
    ques_prob.body.collideWorldBounds = true;
    ques_prob.body.velocity.y = -90;
}

function step1() {
    next1.destroy();
    moveup_demo();

    

    vtimer = game.time.create(8000, false);
    vtimer.add(3000, next_steps);
    vtimer.add(4000, put8);
    vtimer.start();
}

function next_steps() {


    tux = game.add.sprite(400, 395, 'tux');
    bubble1 = game.add.sprite(480, 310, 's1');
    ins1 = game.add.sprite(30, 73, 'st1');

    next2 = game.add.sprite(560, 440, 'next');
    next2.inputEnabled = true;
    next2.events.onInputUp.add(step2);

}

function put8() {
    eight = game.add.sprite(75, 250, '8');
    vtimer.stop();
}


function step2() {
    next2.destroy();
    ins1.destroy();
    bubble1.destroy();
    st2 = game.add.sprite(70, 175, 'st2');
    s2 = game.add.sprite(480, 310, 's2');

    zero = game.add.sprite(75, 330, '0');
    zero1 = game.add.sprite(75, 410, '0');

    next3 = game.add.sprite(560, 440, 'next');
    next3.inputEnabled = true;
    next3.events.onInputUp.add(game_intro);
}

function game_intro() {
    next3.destroy();
    st2.destroy();
    s2.destroy();
    zero.destroy();
    zero1.destroy();
    tux.destroy();
    ins = game.add.sprite(0, 0, 'instructions');
    play = game.add.sprite(500, 440, 'play');
    play.inputEnabled = true;
    play.events.onInputUp.add(setGame);

}

function input_create() {
    key0 = game.input.keyboard.addKey(Phaser.Keyboard.ZERO);
    key0.onDown.add(add0, this);
    key1 = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    key1.onDown.add(add1, this);
    key2 = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
    key2.onDown.add(add2, this);
    key3 = game.input.keyboard.addKey(Phaser.Keyboard.THREE);
    key3.onDown.add(add3, this);
    key4 = game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
    key4.onDown.add(add4, this);
    key5 = game.input.keyboard.addKey(Phaser.Keyboard.FIVE);
    key5.onDown.add(add5, this);
    key6 = game.input.keyboard.addKey(Phaser.Keyboard.SIX);
    key6.onDown.add(add6, this);
    key7 = game.input.keyboard.addKey(Phaser.Keyboard.SEVEN);
    key7.onDown.add(add7, this);
    key8 = game.input.keyboard.addKey(Phaser.Keyboard.EIGHT);
    key8.onDown.add(add8, this);
    key9 = game.input.keyboard.addKey(Phaser.Keyboard.NINE);
    key9.onDown.add(add9, this);
}

function add0() {
    if (count > 0) {
        x += 80;
        i0 = game.add.sprite(x, y, '0');

    } else i0 = game.add.sprite(x, y, '0');

    usrAns[count] = 0;
    count++;
    a++;
}

function add1() {


    if (count > 0) {
        x += 80;
        i1 = game.add.sprite(x, y, '1');
    } else i1 = game.add.sprite(x, y, '1');

    usrAns[count] = 1;
    count++;
    b++;
}

function add2() {


    if (count > 0) {
        x += 80;
        i2 = game.add.sprite(x, y, '2');
    } else i2 = game.add.sprite(x, y, '2');

    usrAns[count] = 2;
    count++;
    c++;
}

function add3() {
    if (count > 0) {
        x += 80;
        i3 = game.add.sprite(x, y, '3');
    } else i3 = game.add.sprite(x, y, '3');

    usrAns[count] = 3;
    count++;
    d++;

}

function add4() {
    if (count > 0) {
        x += 80;
        i4 = game.add.sprite(x, y, '4');
    } else i4 = game.add.sprite(x, y, '4');

    usrAns[count] = 4;
    count++;
    e++;
}

function add5() {
    if (count > 0) {
        x += 80;
        i5 = game.add.sprite(x, y, '5');
    } else i5 = game.add.sprite(x, y, '5');

    usrAns[count] = 5;
    count++;
    f++;
}

function add6() {
    if (count > 0) {
        x += 80;
        i6 = game.add.sprite(x, y, '6');
    } else i6 = game.add.sprite(x, y, '6');

    usrAns[count] = 6;
    count++;
    g++;
}

function add7() {
    if (count > 0) {
        x += 80;
        i7 = game.add.sprite(x, y, '7');
    } else i7 = game.add.sprite(x, y, '7');

    usrAns[count] = 7;
    count++;
    h++;
}

function add8() {
    if (count > 0) {
        x += 80;
        i8 = game.add.sprite(x, y, '8');
    } else i8 = game.add.sprite(x, y, '8');

    usrAns[count] = 8;
    count++;
    j++;
}

function add9() {
    if (count > 0) {
        x += 80;
        i9 = game.add.sprite(x, y, '9');
    } else i9 = game.add.sprite(x, y, '9');

    usrAns[count] = 9;
    count++;
    k++;
}

function check_ans() {
    var true_ans = [];
    var finalAns = finalQ * 50;
    var ones_place = finalAns % 10;
    var tens_place = [(finalAns - ones_place) / 10] % 10;
    var hund_place = [
        [finalAns - [(tens_place * 10) + (ones_place)]] / 100
    ] % 10;
    var th_place = [finalAns - [(hund_place * 100) + (tens_place * 10) + (ones_place)]] / 1000;

    if (finalQ < 2) {
        checker = 0;
        true_ans[0] = tens_place;
        true_ans[1] = ones_place;

        console.log("true_ans = " + true_ans);

        console.log("usrAns = " + usrAns);

        for (var i = 0; i < 2; i++) {
            if (true_ans[i] == usrAns[i]) {
                checker++;
            }
        }

        if (checker == 2) {
            level++;
            console.log("level =" + level);
            remaining_life();

        } else {
            ++life_lost;
            console.log("life_lost =" + life_lost);

            if (life_lost == 1) heart1.destroy();
            else if (life_lost == 2) heart2.destroy();
            else if (life_lost == 3) {
                heart3.destroy();
                game_over();
            }

            remaining_life();
        }

    } else if (finalQ >= 2 && finalQ < 20) {
        checker = 0;
        true_ans[0] = hund_place;
        true_ans[1] = tens_place;
        true_ans[2] = ones_place;

        console.log("true_ans = " + true_ans);

        console.log("usrAns = " + usrAns);
        for (var i = 0; i < 3; i++) {
            if (true_ans[i] == usrAns[i]) {
                checker++;
            }
        }

        if (checker == 3) {
            level++;
            console.log("level =" + level);
            remaining_life();
        } else {

            ++life_lost;

            console.log("life_lost =" + life_lost);
            if (life_lost == 1){ heart1.destroy();
            }
            else if (life_lost == 2) heart2.destroy();
            else if (life_lost == 3) {
                heart3.destroy();
                game_over();
            }
            remaining_life();
        }
    } else {
        checker = 0;
        true_ans[0] = th_place;
        true_ans[1] = hund_place;
        true_ans[2] = tens_place;
        true_ans[3] = ones_place;

        console.log("true_ans = " + true_ans);

        console.log("usrAns = " + usrAns);

        for (var i = 0; i < 4; i++) {
            if (true_ans[i] == usrAns[i]) {
                checker++;
            }
        }

        if (checker == 4) {
            level++;
            console.log("level =" + level);
            remaining_life();
        } else {
            ++life_lost;
            console.log("life_lost =" + life_lost);
            if (life_lost == 1){ heart1.kill();
            }
            else if (life_lost == 2) heart2.destroy();
            else if (life_lost == 3) {
                heart3.destroy();
                game_over();
            }
            remaining_life();
        }
    }
}

function remaining_life() {
    if (life_lost < 3){ 
        s.kill();
        monster.kill();
    o.kill();
    t.kill();
   mul_prob.kill();
    five_prob.kill();
    zero_prob.kill();
    equalto_prob.kill();
    ques_prob.kill();
    if(a>0){
        for(var i=0;i<a;i++)
        i0.kill();
    }
    if(b>0){
        for(var i=0;i<b;i++)
        i1.kill();
    }
    if(c>0){
        for(var i=0;i<c;i++)
        i2.kill();
    }
    if(d>0){
        for(var i=0;i<d;i++)
        i3.kill();
    }
    if(e>0){
        for(var i=0;i<e;i++)
        i4.kill();
    }
    if(f>0){
        for(var i=0;i<f;i++)
        i5.kill();
    }
    if(g>0){
        for(var i=0;i<g;i++)
        i6.kill();
    }
    if(h>0){
        for(var i=0;i<h;i++)
        i7.kill();
    }
    if(j>0){
        for(var i=0;i<j;i++)
        i8.kill();
    }
    if(k>0){
        for(var i=0;i<k;i++)
        i9.kill();
    }
   
        gameBegins();
    }
    else game_over();
}

function game_over() {
    game.add.text(150, 260, 'GAME OVER', {
        font: "50px Arial",
        fill: "green"
    });
}

function answergenerator() {
    moveup_ques();
    game.add.sprite(50, 119.5, 'gQuote');
    x = 150, y = 210;
    input_create();

    verify = game.add.sprite(560, 440, 'next');
    verify.inputEnabled = true;
    verify.events.onInputUp.add(check_ans);
}

function questionGenerator() {
    gameQues = Math.random() * 90;
    finalQ = Math.round(gameQues);
    unit = finalQ % 10;
    tens = (finalQ - unit) / 10;
    console.log(tens);
    console.log(unit);
    console.log(finalQ);

    monster.animations.add('walking', [0, 1, 2, 3, 4, 5, 6], 10, true, true);
    monster.animations.play('walking');
    monster.body.velocity.x = 10;


    switch (unit) {
        case 0:
            o = game.add.sprite(110, 250, '0');
            break;
        case 1:
            o = game.add.sprite(110, 250, '1');
            break;
        case 2:
            o = game.add.sprite(110, 250, '2');
            break;
        case 3:
            o = game.add.sprite(110, 250, '3');
            break;
        case 4:
            o = game.add.sprite(110, 250, '4');
            break;
        case 5:
            o = game.add.sprite(110, 250, '5');
            break;
        case 6:
            o = game.add.sprite(110, 250, '6');
            break;
        case 7:
            o = game.add.sprite(110, 250, '7');
            break;
        case 8:
            o = game.add.sprite(110, 250, '8');
            break;
        case 9:
            o = game.add.sprite(110, 250, '9');
            break;

    }

    switch (tens) {
        case 0:
            t = game.add.sprite(30, 250, '0');
            break;
        case 1:
            t = game.add.sprite(30, 250, '1');
            break;
        case 2:
            t = game.add.sprite(30, 250, '2');
            break;
        case 3:
            t = game.add.sprite(30, 250, '3');
            break;
        case 4:
            t = game.add.sprite(30, 250, '4');
            break;
        case 5:
            t = game.add.sprite(30, 250, '5');
            break;
        case 6:
            t = game.add.sprite(30, 250, '6');
            break;
        case 7:
            t = game.add.sprite(30, 250, '7');
            break;
        case 8:
            t = game.add.sprite(30, 250, '8');
            break;
        case 9:
            t = game.add.sprite(30, 250, '9');
            break;
    }

    mul_prob = game.add.sprite(190, 250, 'mul');
    five_prob = game.add.sprite(270, 250, '5');
    zero_prob = game.add.sprite(350, 250, '0');
    equalto_prob = game.add.sprite(430, 250, 'equals');
    ques_prob = game.add.sprite(510, 250, 'ques');
    answergenerator();
}


function setGame() {
    play.destroy();
    ins.destroy();
    game.add.sprite(0, 0, 'bg');

    heart1 = game.add.sprite(10, 150, 'heart');
    heart2 = game.add.sprite(10, 200, 'heart');
    heart3 = game.add.sprite(10, 250, 'heart');

    gameBegins();
}

function gameBegins() {
    count=0;
    a,b,c,d,e,f,g,h,j,k=0;
    saveTux = game.add.group();
    saveTux.enableBody = true;
    s = saveTux.create(410, 350, 'savetux');
    s.body.setImmovable = true;

    monster = game.add.sprite(20, 400, 'monster');
    game.physics.arcade.enable(monster);
    monster.body.collideWorldBounds = true;
    



    questionGenerator();
}


function update() {

    console.log("update");

    if (game.physics.arcade.collide(saveTux, monster)) {

        ++life_lost;
        console.log("life_lost = " + life_lost);

        if (life_lost == 1){ heart1.destroy();
            remaining_life();
            
        }
        else if (life_lost == 2) {
            
            heart1.destroy();
            heart2.destroy();
            remaining_life();
        } else if (life_lost == 3) {

            heart1.destroy();
            heart2.destroy();
            heart3.destroy();
            game_over();


        }
    }
}