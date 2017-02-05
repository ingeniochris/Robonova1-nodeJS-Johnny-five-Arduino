var express = require('express.io');
var app = express().http().io();
var five = require ("johnny-five");





//Se inicia el servidor
              app.use(express.static("public"));

              app.get("/",function(req,res)
              {   
                  res.render("index");
                
              });app.listen(8080);



var board = new five.Board();
var servo_A,servo_B,servo_C,servo_D,servo_E,servo_F,servo_G,servo_H,servo_I,servo_J,servo_K,servo_L,servo_M,servo_N,servo_O,servo_P,servo_Q;
board.on("ready", function() 
{

///  Asociar pines  digitales de Arduino 
servo_A = new five.Servo({pin: 14});
servo_B = new five.Servo({pin: 15});
servo_C = new five.Servo({pin: 16});
servo_D = new five.Servo({pin: 17});
servo_E = new five.Servo({pin: 18});
servo_F = new five.Servo({pin: 19});
servo_G = new five.Servo({pin: 20});
servo_H = new five.Servo({pin: 28});
servo_I = new five.Servo({pin: 48});
servo_J = new five.Servo({pin: 46});
servo_K = new five.Servo({pin: 44});
servo_L = new five.Servo({pin: 42});
servo_M = new five.Servo({pin: 40});
servo_N = new five.Servo({pin: 38});
servo_O = new five.Servo({pin: 34});
servo_P = new five.Servo({pin: 32});
servo_Q = new five.Servo({pin: 30});

// Asociar los servo motores al Repl 
          board.repl.inject(
  {
          servoA: servo_A,
          servoB: servo_B,
          servoC: servo_C,
          servoD: servo_D,
          servoE: servo_E,
          servoF: servo_F,
          servoG: servo_G,
          servoH: servo_H,
          servoI: servo_I,
          servoJ: servo_J,
          servoK: servo_K,
          servoL: servo_L,
          servoM: servo_M,
          servoN: servo_N,
          servoO: servo_O,
          servoP: servo_P,
          servoQ: servo_Q,

  });



  var inicio = 0;
  var rutina_ciclo;

  // ROBONOVA PARADO INICIAL CUANDO SE EJECUTA LA APLICACION
    servo_Q.move(90);
    servo_A.move(90);
    servo_I.move(90);
    servo_B.move(30);
    servo_J.move(10);
    servo_C.move(90);
    servo_K.move(90);
    servo_D.move(90);
    servo_L.move(90);
    servo_E.move(105);
    servo_M.move(82);
    servo_F.move(144);
    servo_N.move(50);
    servo_G.move(70);
    servo_O.move(110);
    servo_H.move(90);
    servo_P.move(90);

            //INICIA LA RUTINA 1 reverencia

  app.io.route('rutina',
  {
        rutina:function(req)
                
        {

           
                      servo_Q.move(90);
                      servo_A.move(90);
                      servo_I.move(90);
                      servo_B.move(30);
                      servo_J.move(10);
                      servo_C.move(90);
                      servo_K.move(90);
                      servo_D.move(90);
                      servo_L.move(90);
                      servo_E.move(105);
                      servo_M.move(82);
                      servo_F.move(144);
                      servo_N.move(50);
                      servo_G.move(70);
                      servo_O.move(110);
                      servo_H.move(90);
                      servo_P.move(90);
                  
      




    
  

      }
  });//FINAL DE LA RUTINA 1


//////////INICIA LA RUTINA 2 

app.io.route('rutina2',
{
    rutina2:function(req)
    {

             
              //Estado inicial de la rutina
                servo_Q.move(90);
                servo_A.move(90);
                servo_I.move(90);
                servo_B.move(30);
                servo_J.move(10);
                servo_C.move(90);
                servo_K.move(90);
                servo_D.move(90);
                servo_L.move(90);
                servo_E.move(105);
                servo_M.move(82);
                servo_F.move(144);
                servo_N.move(50);
                servo_G.move(70);
                servo_O.move(110);
                servo_H.move(90);
                servo_P.move(90);

 ///2� paso    
   setTimeout(function(){ servo_J.to(20,300) }, 300);
   setTimeout(function(){ servo_B.to(40,300) }, 350);
   setTimeout(function(){ servo_L.to(78,300) }, 400);
   setTimeout(function(){ servo_D.to(82,300) }, 400);
   setTimeout(function(){ servo_M.to(84,300) }, 700);
   setTimeout(function(){ servo_N.to(43,300) }, 700);
   setTimeout(function(){ servo_O.to(115,300) }, 700);
   setTimeout(function(){ servo_P.to(75,300) }, 700);
   setTimeout(function(){ servo_H.to(80,300) }, 700);
      //3� paso
     setTimeout(function(){ servo_I.to(80,300) }, 900);
     setTimeout(function(){ servo_D.to(82,300) }, 900);
     setTimeout(function(){ servo_L.to(76,300) }, 900);
     setTimeout(function(){ servo_M.to(98,300) }, 1200);
     setTimeout(function(){ servo_N.to(93,300) }, 1200);
     setTimeout(function(){ servo_O.to(82,300) }, 1200);
     setTimeout(function(){ servo_P.to(80,300) }, 1250);
     setTimeout(function(){ servo_H.to(76,300) }, 1250);   
         //4� paso
        setTimeout(function(){ servo_I.to(70,300) }, 1400);
        setTimeout(function(){ servo_A.to(85,300) }, 1400);//
        setTimeout(function(){ servo_N.to(52,300) }, 1600); 
        setTimeout(function(){ servo_M.to(115,300) }, 1600);
        setTimeout(function(){ servo_E.to(108,300) }, 1600);//
        setTimeout(function(){ servo_G.to(70,300) }, 1650);// 
        setTimeout(function(){ servo_O.to(133,300) }, 1650); 
        setTimeout(function(){ servo_H.to(77,300) }, 1650);
              //5� paso
          setTimeout(function(){ servo_M.to(105,300) }, 1850);
          setTimeout(function(){ servo_N.to(32,300) }, 1850);
          setTimeout(function(){ servo_O.to(143,300) }, 1850);
          setTimeout(function(){ servo_H.to(78,300) }, 1850);
              //6� paso
            setTimeout(function(){ servo_I.to(80,300) }, 2050);
            setTimeout(function(){ servo_A.to(90,300) }, 2250);
            setTimeout(function(){ servo_D.to(90,300) }, 2250);
            setTimeout(function(){ servo_L.to(90,300) }, 2250);
            setTimeout(function(){ servo_M.to(106,300) }, 2300);
            setTimeout(function(){ servo_E.to(118,300) }, 2300);
            setTimeout(function(){ servo_N.to(54,300) }, 2400);
            setTimeout(function(){ servo_F.to(155,300) }, 2400);//
            setTimeout(function(){ servo_G.to(73,300) }, 2425);// 
            setTimeout(function(){ servo_O.to(123,300) }, 2425);
            setTimeout(function(){ servo_P.to(90,300) }, 2450);
            setTimeout(function(){ servo_H.to(90,300) }, 2450);
            //7� paso
              setTimeout(function(){ servo_I.to(90,300) }, 2650);                     
              setTimeout(function(){ servo_D.to(104,300) }, 2670);
              setTimeout(function(){ servo_L.to(99,300) }, 2670);
              setTimeout(function(){ servo_E.to(113,300) }, 2690);
              setTimeout(function(){ servo_M.to(98,300) }, 2690);
              setTimeout(function(){ servo_F.to(135,300) }, 2710);                        
              setTimeout(function(){ servo_N.to(53,300) }, 2710);
              setTimeout(function(){ servo_G.to(92,300) }, 2720); 
              setTimeout(function(){ servo_O.to(111,300) }, 2720);
               setTimeout(function(){ servo_P.to(102,300) }, 2730);
              setTimeout(function(){ servo_H.to(100,300) }, 2730);
                //8� paso
                setTimeout(function(){ servo_A.to(100,300) }, 2930);
                setTimeout(function(){ servo_E.to(93,300) }, 2950);
                setTimeout(function(){ servo_M.to(86,300) }, 2950);
                setTimeout(function(){ servo_F.to(104,300) }, 2950);
                setTimeout(function(){ servo_N.to(50,300) }, 2950);
                setTimeout(function(){ servo_G.to(97,300) }, 2970); 
                setTimeout(function(){ servo_O.to(113,300) }, 2970);
                  //9� paso
                  setTimeout(function(){ servo_A.to(110,300) }, 3170);
                  setTimeout(function(){ servo_I.to(95,300) }, 3170);
                  setTimeout(function(){ servo_E.to(76,300) }, 3190);
                  setTimeout(function(){ servo_M.to(83,300) }, 3190);
                  setTimeout(function(){ servo_F.to(142,300) }, 3190);                
                  setTimeout(function(){ servo_G.to(48,300) }, 3210); 
                  setTimeout(function(){ servo_O.to(109,300) }, 3210);
                    //10�
                      setTimeout(function(){ servo_E.to(66,300) }, 3410);
                      setTimeout(function(){ servo_F.to(157,300) }, 3410);
                      setTimeout(function(){ servo_G.to(36,300) }, 3410);
                      setTimeout(function(){ servo_P.to(99,300) }, 3410);                     
                      //11�
                        setTimeout(function(){ servo_A.to(100,300) }, 3610);
                        setTimeout(function(){ servo_I.to(90,300) }, 3610);
                        setTimeout(function(){ servo_D.to(90,300) }, 3640);
                        setTimeout(function(){ servo_L.to(90,300) }, 3640);
                        setTimeout(function(){ servo_E.to(65,300) }, 3640);                      
                        setTimeout(function(){ servo_M.to(78,300) }, 3640);
                        setTimeout(function(){ servo_F.to(135,300) }, 3640);                
                        setTimeout(function(){ servo_N.to(37,300) }, 3640);
                        setTimeout(function(){ servo_G.to(56,300) }, 3640);
                        setTimeout(function(){ servo_O.to(106,300) }, 3640);
                        setTimeout(function(){ servo_H.to(90,300) }, 3640);
                        setTimeout(function(){ servo_P.to(87,300) }, 3640);
                        //12�
                          setTimeout(function(){ servo_A.to(90,300) }, 3840);
                          setTimeout(function(){ servo_D.to(83,300) }, 3840);
                          setTimeout(function(){ servo_L.to(75,300) }, 3840);
                          setTimeout(function(){ servo_E.to(70,300) }, 3840);                      
                          setTimeout(function(){ servo_M.to(80,300) }, 3840);
                          setTimeout(function(){ servo_F.to(136,300) }, 3840);                
                          setTimeout(function(){ servo_N.to(59,300) }, 3840);
                          setTimeout(function(){ servo_G.to(65,300) }, 3840);
                          setTimeout(function(){ servo_O.to(87,300) }, 3840);
                          setTimeout(function(){ servo_H.to(75,300) }, 3840);
                          setTimeout(function(){ servo_P.to(77,300) }, 3840);
                          //13�
                            setTimeout(function(){ servo_I.to(80,300) }, 4040);
                            setTimeout(function(){ servo_E.to(82,300) }, 4040);                      
                            setTimeout(function(){ servo_M.to(113,300) }, 4040);
                            setTimeout(function(){ servo_F.to(139,300) }, 4040);                
                            setTimeout(function(){ servo_N.to(90,300) }, 4040);
                            setTimeout(function(){ servo_G.to(63,300) }, 4040);
                            setTimeout(function(){ servo_O.to(82,300) }, 4040);
                            //14�
                              setTimeout(function(){ servo_I.to(100,300) }, 4240);
                              setTimeout(function(){ servo_D.to(85,300) }, 4240);
                              setTimeout(function(){ servo_L.to(77,300) }, 4240);
                              setTimeout(function(){ servo_M.to(99,300) }, 4240);
                              setTimeout(function(){ servo_N.to(43,300) }, 4240);
                              setTimeout(function(){ servo_O.to(118,300) }, 4240);                                                        
                              setTimeout(function(){ servo_H.to(78,300) }, 4240);
                              setTimeout(function(){ servo_P.to(72,300) }, 4240);                               
                              //15�
                                setTimeout(function(){ servo_A.to(90,300) }, 4440);
                                setTimeout(function(){ servo_I.to(90,300) }, 4440);
                                setTimeout(function(){ servo_B.to(30,300) }, 4440);
                                setTimeout(function(){ servo_J.to(10,300) }, 4440);
                                setTimeout(function(){ servo_C.to(90,300) }, 4440);
                                setTimeout(function(){ servo_K.to(90,300) }, 4440);                                
                                setTimeout(function(){ servo_D.to(90,300) }, 4440);
                                setTimeout(function(){ servo_L.to(90,300) }, 4440);
                                setTimeout(function(){ servo_E.to(105,300) }, 4440);
                                setTimeout(function(){ servo_M.to(82,300) }, 4440);
                                setTimeout(function(){ servo_F.to(144,300) }, 4440);
                                setTimeout(function(){ servo_N.to(50,300) }, 4440);
                                setTimeout(function(){ servo_G.to(70,300) }, 4440);
                                setTimeout(function(){ servo_O.to(110,300) }, 4440); 
                                setTimeout(function(){ servo_H.to(90,300) }, 4440);
                                setTimeout(function(){ servo_P.to(90,300) }, 4440);


      }
  });
//FINAL DE RUTINA 2



//////////INICIA LA RUTINA 3

app.io.route('rutina3',
{
    rutina3:function(req)
    {

//Estado inicial de la rutina
                servo_Q.move(90);
                servo_A.move(90);
                servo_I.move(90);
                servo_B.move(30);
                servo_J.move(10);
                servo_C.move(90);
                servo_K.move(90);
                servo_D.move(90);
                servo_L.move(90);
                servo_E.move(105);
                servo_M.move(82);
                servo_F.move(144);
                servo_N.move(50);
                servo_G.move(70);
                servo_O.move(110);
                servo_H.move(90);
                servo_P.move(90);

//código a ser ejecutado
//2°
setTimeout(function(){ servo_B.to(40,350) }, 4000);//10++
setTimeout(function(){ servo_J.to(20,350) }, 4000);//10++
setTimeout(function(){ servo_D.to(82,350) }, 4000);//8--  
setTimeout(function(){ servo_L.to(78,350) }, 4000);//12+-
setTimeout(function(){ servo_M.to(80,350) }, 4000);//2--
setTimeout(function(){ servo_N.to(43,350) }, 4000);//7+-
setTimeout(function(){ servo_O.to(115,350) }, 4000);//5-+
setTimeout(function(){ servo_H.to(78,350) }, 4000);//12+-
setTimeout(function(){ servo_P.to(75,350) }, 4000); //15--
//3°
setTimeout(function(){ servo_B.to(150,350) }, 5000);//110++
setTimeout(function(){ servo_J.to(130,350) }, 5000);//110++
setTimeout(function(){ servo_C.to(25,350) }, 5000);//70+-
setTimeout(function(){ servo_K.to(155,350) }, 5000);//70++  
setTimeout(function(){ servo_D.to(83,350) }, 5000);//1++  
setTimeout(function(){ servo_L.to(75,350) }, 5000);//3+- 
setTimeout(function(){ servo_E.to(100,350) }, 5000);//5+-
setTimeout(function(){ servo_M.to(104,350) }, 5000);//24++
setTimeout(function(){ servo_N.to(90,350) }, 5000);//47-+
setTimeout(function(){ servo_G.to(68,350) }, 5000);//2--
setTimeout(function(){ servo_O.to(88,350) }, 5000);//27+-
setTimeout(function(){ servo_H.to(74,350) }, 5000);//4+-
setTimeout(function(){ servo_P.to(80,350) }, 5000); //5++
//4°
setTimeout(function(){ servo_E.to(60,500) }, 6000);//40+-
setTimeout(function(){ servo_M.to(94,500) }, 6000);//10--
setTimeout(function(){ servo_F.to(145,500) }, 6000);//1++
setTimeout(function(){ servo_N.to(159,500) }, 6000);//69-+
setTimeout(function(){ servo_G.to(52,500) }, 6000);//10--
setTimeout(function(){ servo_O.to(65,500) }, 6000);//23+-
//5°
setTimeout(function(){ servo_A.to(45,500) }, 7000)//45+-
setTimeout(function(){ servo_I.to(135,500) }, 7000);//45++
setTimeout(function(){ servo_B.to(110,500) }, 7000);//40--
setTimeout(function(){ servo_J.to(90,500) }, 7000);//40--
setTimeout(function(){ servo_C.to(65,500) }, 7000);//40-+
setTimeout(function(){ servo_K.to(115,500) }, 7000);//40--
setTimeout(function(){ servo_E.to(38,500) }, 7000);//22+-
setTimeout(function(){ servo_M.to(53,500) }, 7000);//41--
setTimeout(function(){ servo_F.to(148,500) }, 7000);//14++
setTimeout(function(){ servo_N.to(90,500) }, 7000);//69-+
setTimeout(function(){ servo_G.to(45,500) }, 7000);//10--
setTimeout(function(){ servo_O.to(65,500) }, 7000);//23+-
//6°
setTimeout(function(){ servo_B.to(80) }, 8000);//30--
setTimeout(function(){ servo_J.to(60) }, 8000);//30--
setTimeout(function(){ servo_C.to(95) }, 8000);//30-+
setTimeout(function(){ servo_K.to(85) }, 8000);//30--
//7°
setTimeout(function(){ servo_B.to(120) }, 9000);//40++
setTimeout(function(){ servo_J.to(100) }, 9000);//40++
setTimeout(function(){ servo_C.to(55) }, 9000);//40+-
setTimeout(function(){ servo_K.to(125) }, 9000);//40++
//8°
setTimeout(function(){ servo_B.to(80) }, 10000);//40--
setTimeout(function(){ servo_J.to(60) }, 10000);//40--
setTimeout(function(){ servo_C.to(95) }, 10000);//40-+
setTimeout(function(){ servo_K.to(85) }, 10000);//40--
//9°
setTimeout(function(){ servo_B.to(120) }, 11000);//40++
setTimeout(function(){ servo_J.to(100) }, 11000);//40++
setTimeout(function(){ servo_C.to(55) }, 11000);//40+-
setTimeout(function(){ servo_K.to(125) }, 11000);//40++
//10°
setTimeout(function(){ servo_B.to(80) }, 12000);//40--
setTimeout(function(){ servo_J.to(60) }, 12000);//40--
setTimeout(function(){ servo_C.to(95) }, 12000);//40-+
setTimeout(function(){ servo_K.to(85) }, 12000);//40--
//11°
setTimeout(function(){ servo_B.to(120) }, 13000);//40++
setTimeout(function(){ servo_J.to(100) }, 13000);//40++
setTimeout(function(){ servo_C.to(55) }, 13000);//40+-
setTimeout(function(){ servo_K.to(125) }, 13000);//40++
//12°
setTimeout(function(){ servo_B.to(80) }, 14000);//40--
setTimeout(function(){ servo_J.to(60) }, 14000);//40--
setTimeout(function(){ servo_C.to(95) }, 14000);//40-+
setTimeout(function(){ servo_K.to(85) }, 14000);//40--
//13°
setTimeout(function(){ servo_B.to(120) }, 15000);//40++
setTimeout(function(){ servo_J.to(100) }, 15000);//40++
setTimeout(function(){ servo_C.to(55) }, 15000);//40+-
setTimeout(function(){ servo_K.to(125) }, 15000);//40++
//14°
setTimeout(function(){ servo_B.to(80) }, 16000);//40--
setTimeout(function(){ servo_J.to(60) }, 16000);//40--
setTimeout(function(){ servo_C.to(95) }, 16000);//40-+
setTimeout(function(){ servo_K.to(85) }, 16000);//40--
//15°
setTimeout(function(){ servo_B.to(120) }, 17000);//40++
setTimeout(function(){ servo_J.to(100) }, 17000);//40++
setTimeout(function(){ servo_C.to(55) }, 17000);//40+-
setTimeout(function(){ servo_K.to(125) }, 17000);//40++
//16°
setTimeout(function(){ servo_B.to(80) }, 18000);//40--
setTimeout(function(){ servo_J.to(60) }, 18000);//40--
setTimeout(function(){ servo_C.to(95) }, 18000);//40-+
setTimeout(function(){ servo_K.to(85) }, 18000);//40--
//17°
setTimeout(function(){ servo_B.to(120) }, 19000);//40++
setTimeout(function(){ servo_J.to(100) }, 19000);//40++
setTimeout(function(){ servo_C.to(55) }, 19000);//40+-
setTimeout(function(){ servo_K.to(125) }, 19000);//40++
//18° Tiempo espera
//19°
setTimeout(function(){ servo_A.to(90,500) }, 20000)//45-+ 45
setTimeout(function(){ servo_I.to(90,500) }, 20000);//45-- 135
setTimeout(function(){ servo_B.to(160,500) }, 20000);//40++
setTimeout(function(){ servo_J.to(140,500) }, 20000);//40++
setTimeout(function(){ servo_C.to(0,500) }, 20000);//60+- faltan 10
setTimeout(function(){ servo_K.to(185,500) }, 20000);//60++
//20°
setTimeout(function(){ servo_B.to(150,500) }, 21000);//10--
setTimeout(function(){ servo_J.to(130,500) }, 21000);//10--
setTimeout(function(){ servo_C.to(30,500) }, 21000);//30-+ 
setTimeout(function(){ servo_K.to(155,500) }, 21000);//30--
setTimeout(function(){ servo_E.to(55,500) }, 21000);//22-+
setTimeout(function(){ servo_M.to(94,500) }, 21000);//41++   53
setTimeout(function(){ servo_F.to(138,500) }, 21000);//14--
setTimeout(function(){ servo_N.to(145,500) }, 21000);//69-+
setTimeout(function(){ servo_G.to(55,500) }, 21000);//10++
setTimeout(function(){ servo_O.to(72,500) }, 21000);//23+-


//21°
setTimeout(function(){ servo_B.to(150,500) }, 22000);//110++
setTimeout(function(){ servo_J.to(130,500) }, 22000);//110++
setTimeout(function(){ servo_C.to(25,500) }, 22000);//70+-
setTimeout(function(){ servo_K.to(155,500) }, 22000);//70++  
setTimeout(function(){ servo_D.to(83,500) }, 22000);//1++  
setTimeout(function(){ servo_L.to(75,500) }, 22000);//3+- 
setTimeout(function(){ servo_E.to(90,500) }, 22000);//5+-
setTimeout(function(){ servo_M.to(104,500) }, 22000);//24++
setTimeout(function(){ servo_N.to(90,500) }, 22000);//47-+
setTimeout(function(){ servo_G.to(68,500) }, 22000);//2--
setTimeout(function(){ servo_O.to(88,500) }, 22000);//27+-
setTimeout(function(){ servo_H.to(74,500) }, 22000);//4+-
setTimeout(function(){ servo_P.to(80,500) }, 22000); //5++



//22°
setTimeout(function(){ servo_B.to(40,350) }, 23000);//10++
setTimeout(function(){ servo_J.to(20,350) }, 23000);//10++
setTimeout(function(){ servo_C.to(90,500) }, 23000);//70+-
setTimeout(function(){ servo_K.to(90,500) }, 23000);//70++ 
setTimeout(function(){ servo_D.to(82,350) }, 23000);//8--  
setTimeout(function(){ servo_L.to(78,350) }, 23000);//12+-
setTimeout(function(){ servo_M.to(80,350) }, 23000);//2--
setTimeout(function(){ servo_N.to(43,350) }, 23000);//7+-
setTimeout(function(){ servo_O.to(115,350) }, 23000);//5-+
setTimeout(function(){ servo_H.to(78,350) }, 23000);//12+-
setTimeout(function(){ servo_P.to(75,350) }, 23000); //15--
//23° Posición final
  setTimeout(function(){ servo_A.to(90,500) }, 24000)//30+-
  setTimeout(function(){ servo_I.to(90,500) }, 24000);//30++
  setTimeout(function(){ servo_B.to(30,500) }, 24000);//20++
  setTimeout(function(){ servo_J.to(10,500) }, 24000);//20++
  setTimeout(function(){ servo_C.to(90,500) }, 24000);//5+-
  setTimeout(function(){ servo_K.to(90,500) }, 24000);//5++  
  setTimeout(function(){ servo_D.to(90,500) }, 24000);//5++  
  setTimeout(function(){ servo_L.to(90,500) }, 24000);//5+-                           
  setTimeout(function(){ servo_E.to(105,500) }, 24000);//47+-                                
  setTimeout(function(){ servo_M.to(82,500) }, 24000);//47++                                
  setTimeout(function(){ servo_F.to(144,500) }, 24000);//120--
  setTimeout(function(){ servo_N.to(50,500) }, 24000);//120-+
  setTimeout(function(){ servo_G.to(70,500) }, 24000);//69++
  setTimeout(function(){ servo_O.to(110,500) }, 24000);//69+-
  setTimeout(function(){ servo_H.to(90,500) }, 24000);//40--
  setTimeout(function(){ servo_P.to(90,500) }, 24000); //40-+







    }
  });
//FINAL DE RUTINA 3


//INICIO RUTINA VOLANDO
app.io.route('rutina4',
{
    rutina4:function(req)
    {

 //Estado inicial de la rutina
                servo_Q.move(90);
                servo_A.move(90);
                servo_I.move(90);
                servo_B.move(30);
                servo_J.move(10);
                servo_C.move(90);
                servo_K.move(90);
                servo_D.move(90);
                servo_L.move(90);
                servo_E.move(105);
                servo_M.move(82);
                servo_F.move(144);
                servo_N.move(50);
                servo_G.move(70);
                servo_O.move(110);
                servo_H.move(90);
                servo_P.move(90);
                

//2°
    setTimeout(function(){ servo_A.to(60,1000) }, 5000)//30+-
  setTimeout(function(){ servo_I.to(120,1000) }, 5000);//30++
  setTimeout(function(){ servo_B.to(50,1000) }, 5000);//20++
  setTimeout(function(){ servo_J.to(30,1000) }, 5000);//20++
  setTimeout(function(){ servo_C.to(85,1000) }, 5000);//5+-
  setTimeout(function(){ servo_K.to(95,1000) }, 5000);//5++                              
  setTimeout(function(){ servo_E.to(58,1000) }, 5000);//47+-                                
  setTimeout(function(){ servo_M.to(129,1000) }, 5000);//47++                                
  setTimeout(function(){ servo_F.to(24,1000) }, 5000);//120--
  setTimeout(function(){ servo_N.to(170,1000) }, 5000);//120-+
  setTimeout(function(){ servo_G.to(139,1000) }, 5000);//69++
  setTimeout(function(){ servo_O.to(41,1000) }, 5000);//69+-             
  //3°  
  setTimeout(function(){ servo_A.to(40,500) }, 6000);//20+-
  setTimeout(function(){ servo_I.to(140,500) }, 6000);//20++
  setTimeout(function(){ servo_B.to(60,500) }, 6000);//10++
  setTimeout(function(){ servo_J.to(40,500) }, 6000); //10++                                
  setTimeout(function(){ servo_C.to(80,500) }, 6000);//5+-
  setTimeout(function(){ servo_K.to(100,500) }, 6000);//5++
  setTimeout(function(){ servo_D.to(135,500) }, 6000);//45++
  setTimeout(function(){ servo_L.to(45,500) }, 6000);//45+-
  setTimeout(function(){ servo_E.to(38,500) }, 6000);//20+-
  setTimeout(function(){ servo_M.to(149,500) }, 6000);//20++
  setTimeout(function(){ servo_H.to(130,500) }, 6000);//40--
  setTimeout(function(){ servo_P.to(50,500) }, 6000); //40-+                              
  //4°
  setTimeout(function(){ servo_A.to(20,500) }, 7000);//20+-   
  setTimeout(function(){ servo_I.to(160,500) }, 7000);//20++
  setTimeout(function(){ servo_B.to(20,500) }, 7000);//50--5
  setTimeout(function(){ servo_J.to(5,500) }, 7000); //50--5  
  setTimeout(function(){ servo_C.to(83,500) }, 7000);//5+-
  setTimeout(function(){ servo_K.to(92,500) }, 7000);//5++
  setTimeout(function(){ servo_D.to(140,500) }, 7000);//10++  -5
  setTimeout(function(){ servo_L.to(40,500) }, 7000);//10+-  -5
  setTimeout(function(){ servo_F.to(29,500) }, 7000);//5++
  setTimeout(function(){ servo_N.to(165,500) }, 7000);//5+-            
  //5°
  setTimeout(function(){ servo_A.to(5,500) }, 8000);//15+-   
  setTimeout(function(){ servo_I.to(175,500) }, 8000);//15++
  setTimeout(function(){ servo_F.to(54,500) }, 8000);//25++
  setTimeout(function(){ servo_N.to(140,500) }, 8000);//25+-
  setTimeout(function(){ servo_H.to(115,500) }, 8000);//15+-
  setTimeout(function(){ servo_P.to(65,500) }, 8000); //15+   
  //6°
  setTimeout(function(){ servo_B.to(40,500) }, 9000);//30++
  setTimeout(function(){ servo_J.to(25,500) }, 9000); //30++
  setTimeout(function(){ servo_C.to(110,500) }, 9000);//40-+
  setTimeout(function(){ servo_K.to(65,500) }, 9000);//40--
  setTimeout(function(){ servo_D.to(140,500) }, 9000);//5--
  setTimeout(function(){ servo_L.to(40,500) }, 9000);//5-+ 
  setTimeout(function(){ servo_E.to(48,500) }, 9000);//10-+
  setTimeout(function(){ servo_M.to(139,500) }, 9000);//10--
  setTimeout(function(){ servo_F.to(84,500) }, 9000);//30++
  setTimeout(function(){ servo_N.to(110,500) }, 9000);//30+-
  setTimeout(function(){ servo_H.to(110,500) }, 9000);//5+-
  setTimeout(function(){ servo_P.to(70,500) }, 9000); //5++   
  //7° 
  setTimeout(function(){ servo_A.to(68,1000) }, 10000);//63-+   
  setTimeout(function(){ servo_I.to(110,1000) }, 10000);//65--
  setTimeout(function(){ servo_B.to(170,1000) }, 10000);//130++
  setTimeout(function(){ servo_J.to(150,1000) }, 10000); //120++
  setTimeout(function(){ servo_C.to(170,1000) }, 10000);//60-+
  setTimeout(function(){ servo_K.to(15,1000) }, 10000);//65-
  setTimeout(function(){ servo_D.to(100,1000) }, 10000);//40--
  setTimeout(function(){ servo_L.to(80,1000) }, 10000);//40-+ 
  setTimeout(function(){ servo_E.to(120,1000) }, 10000);//72-+
  setTimeout(function(){ servo_M.to(67,1000) }, 10000);//72--
  setTimeout(function(){ servo_F.to(118,1000) }, 10000);//34++
  setTimeout(function(){ servo_N.to(76,1000) }, 10000);//34+-  
  setTimeout(function(){ servo_G.to(124,1000) }, 10000);//15--
  setTimeout(function(){ servo_O.to(56,1000) }, 10000);//15-+
  setTimeout(function(){ servo_H.to(100,1000) }, 10000);//10+-
  setTimeout(function(){ servo_P.to(80,1000) }, 10000); //10++
  //8°
  setTimeout(function(){ servo_A.to(90,1000) }, 11000);//50-+ *   
  setTimeout(function(){ servo_I.to(90,1000) }, 11000);//50-- *
  setTimeout(function(){ servo_B.to(40,1000) }, 11000);//130--
  setTimeout(function(){ servo_J.to(15,1000) }, 11000); //130-- *
  setTimeout(function(){ servo_C.to(97,1000) }, 11000);//73+-
  setTimeout(function(){ servo_K.to(88,1000) }, 11000);//73++ 
  setTimeout(function(){ servo_D.to(90,1000) }, 11000);//10--
  setTimeout(function(){ servo_L.to(90,1000) }, 11000);//10-+   
  setTimeout(function(){ servo_E.to(107,1000) }, 11000);//13+-
  setTimeout(function(){ servo_M.to(80,1000) }, 11000);//13++
  setTimeout(function(){ servo_F.to(143,1000) }, 11000);//25++
  setTimeout(function(){ servo_N.to(51,1000) }, 11000);//25+-
  setTimeout(function(){ servo_G.to(70,1000) }, 11000);//54--
  setTimeout(function(){ servo_O.to(110,1000) }, 11000);//54-+
  //9  
// Tiempo muerto
  //10
  setTimeout(function(){ servo_B.to(150,800) }, 12000);//120++
  setTimeout(function(){ servo_J.to(135,800) }, 12000); //120++ 
  setTimeout(function(){ servo_C.to(150,800) }, 12000);//63-+
  setTimeout(function(){ servo_K.to(35,800) }, 12000);//63--
  //11                       
  setTimeout(function(){ servo_A.to(3,800) }, 13000);//80+-   
  setTimeout(function(){ servo_I.to(245,800) }, 13000);//80++
   //12
  setTimeout(function(){ servo_B.to(60,800) }, 14000);//100--
  setTimeout(function(){ servo_J.to(35,800) }, 14000); //100--
  //13
  setTimeout(function(){ servo_D.to(135,800) }, 15000);//45++
  setTimeout(function(){ servo_E.to(87,800) }, 15000);//20+-
  setTimeout(function(){ servo_G.to(69,800) }, 15000);//1--
  setTimeout(function(){ servo_O.to(111,800) }, 15000);//1-+
  //14
  setTimeout(function(){ servo_B.to(130,800) }, 16000);//70++
  setTimeout(function(){ servo_C.to(160,800) }, 16000);//10-+
  setTimeout(function(){ servo_G.to(70,800) }, 16000);//1++
  setTimeout(function(){ servo_O.to(110,800) }, 16000);//1+-    
  //15
  setTimeout(function(){ servo_J.to(45,300) }, 17000); //10++                                   
  setTimeout(function(){ servo_K.to(25,300) }, 17000);//10--
  //16
//tiempo muerto                        
//Lagartijas
  //17
  setTimeout(function(){ servo_J.to(5,300) }, 18000); //35--                                     
  setTimeout(function(){ servo_K.to(85,300) }, 18000);//60++
  //18
  setTimeout(function(){ servo_J.to(40,300) }, 19000); //35++
  setTimeout(function(){ servo_K.to(25,300) }, 19000);//60--
  //19
  setTimeout(function(){ servo_J.to(5,300) }, 20000); //35--
  setTimeout(function(){ servo_K.to(85,300) }, 20000);//60++
  //20°
  setTimeout(function(){ servo_J.to(40,300) }, 21000); //35++
  setTimeout(function(){ servo_K.to(25,300) }, 21000);//60--
  //21
  setTimeout(function(){ servo_J.to(5,300) }, 22000); //35--
  setTimeout(function(){ servo_K.to(85,300) }, 22000);//60++
  //22
  setTimeout(function(){ servo_J.to(40,300) }, 23000); //35++
  setTimeout(function(){ servo_K.to(25,300) }, 23000);//60--
  //23
  setTimeout(function(){ servo_J.to(5,300) }, 24000); //35--
  setTimeout(function(){ servo_K.to(85,300) }, 24000);//60++
  //24
  setTimeout(function(){ servo_J.to(40,300) }, 25000); //35++
  setTimeout(function(){ servo_K.to(25,300) }, 25000);//60--
  //25
  setTimeout(function(){ servo_J.to(5,300) }, 26000); //35--
  setTimeout(function(){ servo_K.to(85,300) }, 26000);//60++
  //26
  setTimeout(function(){ servo_B.to(70,500) }, 27000);//70--                                   
  setTimeout(function(){ servo_J.to(40,500) }, 27000); //40++                                   
  setTimeout(function(){ servo_K.to(25,500) }, 27000);//125--                                           
  //21 1° Fase
  setTimeout(function(){ servo_A.to(22,1000) }, 28000);//15-+   
  setTimeout(function(){ servo_I.to(157,1000) }, 28000);//15--
  setTimeout(function(){ servo_B.to(73,1000) }, 28000);//32++
  setTimeout(function(){ servo_J.to(60,1000) }, 28000); //30++
  setTimeout(function(){ servo_C.to(125,1000) }, 28000);//15-+
  setTimeout(function(){ servo_K.to(63,1000) }, 28000);//16-- 
  setTimeout(function(){ servo_D.to(90,1000) }, 28000);//10--
  setTimeout(function(){ servo_L.to(90,1000) }, 28000);//10-+   
  setTimeout(function(){ servo_E.to(107,1000) }, 28000);//13+-
  setTimeout(function(){ servo_M.to(80,1000) }, 28000);//13++
  setTimeout(function(){ servo_F.to(143,1000) }, 28000);//25++
  setTimeout(function(){ servo_N.to(51,1000) }, 28000);//25+-
  setTimeout(function(){ servo_G.to(70,1000) }, 28000);//54--
  setTimeout(function(){ servo_O.to(110,1000) }, 28000);//54-+    
  //22
  setTimeout(function(){ servo_A.to(68,1000) }, 29000);//63-+   
  setTimeout(function(){ servo_I.to(110,1000) }, 29000);//65--
  setTimeout(function(){ servo_B.to(170,1000) }, 29000);//130++
  setTimeout(function(){ servo_J.to(150,1000) }, 29000); //120++
  setTimeout(function(){ servo_C.to(170,1000) }, 29000);//60-+
  setTimeout(function(){ servo_K.to(15,1000) }, 29000);//65-
  setTimeout(function(){ servo_D.to(110,1000) }, 29000);//40--
  setTimeout(function(){ servo_L.to(70,1000) }, 29000);//40-+ 
  setTimeout(function(){ servo_E.to(120,1000) }, 29000);//72-+
  setTimeout(function(){ servo_M.to(67,1000) }, 29000);//72--
  setTimeout(function(){ servo_F.to(118,1000) }, 29000);//34++
  setTimeout(function(){ servo_N.to(76,1000) }, 29000);//34+-
  setTimeout(function(){ servo_G.to(124,1000) }, 29000);//15--
  setTimeout(function(){ servo_O.to(56,1000) }, 29000);//15-+
  setTimeout(function(){ servo_H.to(100,1000) }, 29000);//10+-
  setTimeout(function(){ servo_P.to(80,1000) }, 29000); //10++
  
                                                 //23 Comienza a levantarse 404
  setTimeout(function(){ servo_A.to(5,500) }, 30000);//15+-   
  setTimeout(function(){ servo_I.to(175,500) }, 30000);//15++
  setTimeout(function(){ servo_B.to(40,500) }, 30000);//30++
  setTimeout(function(){ servo_J.to(25,500) }, 30000); //30++
  setTimeout(function(){ servo_C.to(120,500) }, 30000);//40-+
  setTimeout(function(){ servo_K.to(50,500) }, 30000);//40--

  setTimeout(function(){ servo_D.to(160,1000) }, 30000);//5--130
  setTimeout(function(){ servo_L.to(25,1000) }, 30000);//5-+ 50
  setTimeout(function(){ servo_E.to(38,1000) }, 30000);//10-+
  setTimeout(function(){ servo_M.to(149,1000) }, 30000);//10--

  setTimeout(function(){ servo_G.to(139,1000) }, 30000);//15--
  setTimeout(function(){ servo_O.to(41,1000) }, 30000);//15-+
  setTimeout(function(){ servo_F.to(80,1000) }, 30000);//30++
  setTimeout(function(){ servo_N.to(110,1000) }, 30000);//30+-
  setTimeout(function(){ servo_H.to(110,1000) }, 30000);//5+-
  setTimeout(function(){ servo_P.to(70,1000) }, 30000); //5++   
  //24  -414
  setTimeout(function(){ servo_A.to(10,1000) }, 31800);//20+-
  setTimeout(function(){ servo_I.to(170,1000) }, 31800);//20++
  setTimeout(function(){ servo_B.to(20,1000) }, 31800);//10++
  setTimeout(function(){ servo_J.to(0,1000) }, 31800); //10++                                
  setTimeout(function(){ servo_C.to(85,1000) }, 31800);//5+-
  setTimeout(function(){ servo_K.to(95,1000) }, 31800);//5++
  setTimeout(function(){ servo_F.to(44,1000) }, 31800);//25++
  setTimeout(function(){ servo_N.to(150,1000) }, 31800);//25+-
  setTimeout(function(){ servo_H.to(130,1000) }, 31800);//15+-
  setTimeout(function(){ servo_P.to(50,1000) }, 31800); //15+ 
  //25 -420
  setTimeout(function(){ servo_A.to(25,1000) }, 32000);//20+-   
  setTimeout(function(){ servo_I.to(158,1000) }, 32000);//20++
  setTimeout(function(){ servo_F.to(29,1000) }, 32000);//5++
  setTimeout(function(){ servo_N.to(165,1000) }, 32000);//5+-
  //26 -432
  setTimeout(function(){ servo_D.to(150,200) }, 33000);//5--
  setTimeout(function(){ servo_L.to(35,200) }, 33000);//5-+ 
  setTimeout(function(){ servo_F.to(24,200) }, 33000);//5++
  setTimeout(function(){ servo_N.to(170,200) }, 33000);//5+-
  setTimeout(function(){ servo_G.to(154,200) }, 33000);//15--
  setTimeout(function(){ servo_O.to(26,200) }, 33000);//15-+

  setTimeout(function(){ servo_A.to(45,1000) }, 34000);//20+-
  setTimeout(function(){ servo_I.to(135,1000) }, 34000);//20++
  setTimeout(function(){ servo_B.to(70,1000) }, 34000);//10++
  setTimeout(function(){ servo_J.to(50,1000) }, 34000); //10++                                
  setTimeout(function(){ servo_C.to(80,1000) }, 34000);//5+-
  setTimeout(function(){ servo_K.to(100,1000) }, 34000);//5++
                                                                                        //27  -443
  setTimeout(function(){ servo_B.to(50,1000) }, 35000);//20++
  setTimeout(function(){ servo_J.to(30,1000) }, 35000);//20++
  setTimeout(function(){ servo_C.to(85,1000) }, 35000);//5+-
  setTimeout(function(){ servo_K.to(95,1000) }, 35000);//5++                             
  setTimeout(function(){ servo_E.to(58,1000) }, 35000);//47+-                                
  setTimeout(function(){ servo_M.to(129,1000) }, 35000);//47++                                
  setTimeout(function(){ servo_F.to(24,1000) }, 35000);//120--
  setTimeout(function(){ servo_N.to(170,1000) }, 35000);//120-+
  setTimeout(function(){ servo_G.to(139,1000) }, 35000);//69++
  setTimeout(function(){ servo_O.to(41,1000) }, 35000);//69+- 
                                                                                          //28 Final -471
  setTimeout(function(){ servo_A.to(90,1000) }, 36000)//30+-
  setTimeout(function(){ servo_I.to(90,1000) }, 36000);//30++
  setTimeout(function(){ servo_B.to(30,1000) }, 36000);//20++
  setTimeout(function(){ servo_J.to(10,1000) }, 36000);//20++
  setTimeout(function(){ servo_C.to(90,1000) },36000);//5+-
  setTimeout(function(){ servo_K.to(90,1000) }, 36000);//5++  
  setTimeout(function(){ servo_D.to(90,1000) }, 36000);//5++  
  setTimeout(function(){ servo_L.to(90,1000) }, 36000);//5+-                           
  setTimeout(function(){ servo_E.to(105,1000) }, 36000);//47+-                                
  setTimeout(function(){ servo_M.to(82,1000) }, 36000);//47++                                
  setTimeout(function(){ servo_F.to(144,1000) }, 36000);//120--
  setTimeout(function(){ servo_N.to(50,1000) }, 36000);//120-+
  setTimeout(function(){ servo_G.to(70,1000) }, 36000);//69++
  setTimeout(function(){ servo_O.to(110,1000) }, 36000);//69+-
  setTimeout(function(){ servo_H.to(90,1000) }, 36000);//40--
  setTimeout(function(){ servo_P.to(90,1000) }, 36000); //40-+  
              



















      }
  });

app.io.route('rutina5',
{
    rutina5:function(req)
    {

 //Estado inicial de la rutina
                servo_Q.move(90);
                servo_A.move(90);
                servo_I.move(90);
                servo_B.move(30);
                servo_J.move(10);
                servo_C.move(90);
                servo_K.move(90);
                servo_D.move(90);
                servo_L.move(90);
                servo_E.move(105);
                servo_M.move(82);
                servo_F.move(144);
                servo_N.move(50);
                servo_G.move(70);
                servo_O.move(110);
                servo_H.move(90);
                servo_P.move(90);

  setTimeout(function(){ servo_A.to(0,1500) }, 6000)//90+-
  setTimeout(function(){ servo_I.to(180,1500) }, 6000);//90++
  setTimeout(function(){ servo_B.to(150,1500) }, 6000);//120++
  setTimeout(function(){ servo_J.to(130,1500) }, 6000);//120++
  setTimeout(function(){ servo_C.to(180,1500) }, 6000);//70-+
  setTimeout(function(){ servo_K.to(20,1500) }, 6000);//70-- 
  setTimeout(function(){ servo_D.to(97,1500) }, 6000);//7++  
  setTimeout(function(){ servo_L.to(83,1500) }, 6000);//7+- 
  setTimeout(function(){ servo_E.to(92,1500) }, 6000);//7-+                                
  setTimeout(function(){ servo_M.to(91,1500) }, 6000);//7--
  setTimeout(function(){ servo_F.to(104,1500) }, 6000);//35--
  setTimeout(function(){ servo_N.to(90,1500) }, 6000);//35-+
  setTimeout(function(){ servo_G.to(94,1500) }, 6000);//24++
  setTimeout(function(){ servo_O.to(86,1500) }, 6000);//24+-
  setTimeout(function(){ servo_H.to(98,1500) }, 6000);//8+-
  setTimeout(function(){ servo_P.to(82,1500) }, 6000); //8++   

//Brazo izquierdo
  setTimeout(function(){ servo_B.to(140,500) }, 8000);//10--
  setTimeout(function(){ servo_J.to(0,500) }, 8000);//140--
setTimeout(function(){ servo_K.to(55,500) }, 8000);//65++ 
//Regresa izquierda y derecha se levanta
  setTimeout(function(){ servo_B.to(20,500) }, 9000);//130--
  setTimeout(function(){ servo_J.to(130,500) }, 9000);//140--
  setTimeout(function(){ servo_K.to(20,500) }, 9000);//65++ 
  setTimeout(function(){ servo_C.to(120,500) }, 9000);//65+-
//Regresa derecha 
  setTimeout(function(){ servo_B.to(150,500) }, 10000);//130--
  setTimeout(function(){ servo_C.to(180,500) }, 10000);//65+-
//Arriba los dos
  setTimeout(function(){ servo_J.to(0,500) }, 11000);//140--
  setTimeout(function(){ servo_K.to(55,500) }, 11000);//65++ 
  setTimeout(function(){ servo_B.to(20,500) }, 11000);//130--
  setTimeout(function(){ servo_C.to(120,500) }, 11000);//65+-
//Abajo los dos
  setTimeout(function(){ servo_J.to(130,500) }, 12000);//140--
  setTimeout(function(){ servo_K.to(20,500) }, 12000);//65++ 
  setTimeout(function(){ servo_B.to(150,500) }, 12000);//130--
  setTimeout(function(){ servo_C.to(180,500) }, 12000);//65+-
//Arriba los dos
  setTimeout(function(){ servo_J.to(0,500) }, 13000);//140--
  setTimeout(function(){ servo_K.to(55,500) }, 13000);//65++ 
  setTimeout(function(){ servo_B.to(20,500) }, 13000);//130--
  setTimeout(function(){ servo_C.to(120,500) }, 13000);//65+-
//Abajo los dos
  setTimeout(function(){ servo_J.to(130,500) }, 14000);//140--
  setTimeout(function(){ servo_K.to(20,500) }, 14000);//65++ 
  setTimeout(function(){ servo_B.to(150,500) }, 14000);//130--
  setTimeout(function(){ servo_C.to(180,500) }, 14000);//65+-
//Arriba los dos
  setTimeout(function(){ servo_J.to(0,500) }, 15000);//140--
  setTimeout(function(){ servo_K.to(55,500) }, 15000);//65++ 
  setTimeout(function(){ servo_B.to(20,500) }, 15000);//130--
  setTimeout(function(){ servo_C.to(120,500) }, 15000);//65+-
//Abajo los dos
  setTimeout(function(){ servo_J.to(130,500) }, 16000);//140--
  setTimeout(function(){ servo_K.to(20,500) }, 16000);//65++ 
  setTimeout(function(){ servo_B.to(150,500) }, 16000);//130--
  setTimeout(function(){ servo_C.to(180,500) }, 16000);//65+-
//Regresar
  setTimeout(function(){ servo_A.to(90,1500) }, 18000)//90+-
  setTimeout(function(){ servo_I.to(90,1500) }, 18000);//90++
  setTimeout(function(){ servo_B.to(30,1500) }, 18000);//120++
  setTimeout(function(){ servo_J.to(10,1500) }, 18000);//120++
  setTimeout(function(){ servo_C.to(90,1500) }, 18000);//70-+
  setTimeout(function(){ servo_K.to(90,1500) }, 18000);//70-- 
  setTimeout(function(){ servo_D.to(90,1500) }, 18000);//7++  
  setTimeout(function(){ servo_L.to(90,1500) }, 18000);//7+-  
  setTimeout(function(){ servo_E.to(105,1500) }, 18000);//7-+                                
  setTimeout(function(){ servo_M.to(82,1500) }, 18000);//7--
  setTimeout(function(){ servo_F.to(114,1500) }, 18000);//35--
  setTimeout(function(){ servo_N.to(50,1500) }, 18000);//35-+
  setTimeout(function(){ servo_G.to(70,1500) }, 18000);//24++
  setTimeout(function(){ servo_O.to(110,1500) }, 18000);//24+-
  setTimeout(function(){ servo_H.to(90,1500) }, 18000);//8+-
  setTimeout(function(){ servo_P.to(90,1500) }, 18000); //8++  
                          

















      }
  });

app.io.route('rutina6',
{
    rutina6:function(req)
    {

             
//Estado inicial de la rutina
                servo_Q.move(90);
                servo_A.move(90);
                servo_I.move(90);
                servo_B.move(30);
                servo_J.move(10);
                servo_C.move(90);
                servo_K.move(90);
                servo_D.move(90);
                servo_L.move(90);
                servo_E.move(105);
                servo_M.move(82);
                servo_F.move(144);
                servo_N.move(50);
                servo_G.move(70);
                servo_O.move(110);
                servo_H.move(90);
                servo_P.move(90);



  setTimeout(function(){ servo_A.to(68,1000) }, 4000);//63-+   
  setTimeout(function(){ servo_I.to(110,1000) }, 4000);//65--
  setTimeout(function(){ servo_B.to(170,1000) }, 4000);//130++
  setTimeout(function(){ servo_J.to(150,1000) }, 4000); //120++
  setTimeout(function(){ servo_C.to(170,1000) }, 4000);//60-+
  setTimeout(function(){ servo_K.to(15,1000) }, 4000);//65-




  setTimeout(function(){ servo_A.to(5,500) }, 5000);//15+-   
  setTimeout(function(){ servo_I.to(175,500) }, 5000);//15++
  setTimeout(function(){ servo_B.to(40,500) }, 5000);//30++
  setTimeout(function(){ servo_J.to(25,500) }, 5000); //30++
  setTimeout(function(){ servo_C.to(120,500) }, 5000);//40-+
  setTimeout(function(){ servo_K.to(50,500) }, 5000);//40--

  setTimeout(function(){ servo_D.to(160,1000) }, 5000);//5--130
  setTimeout(function(){ servo_L.to(25,1000) }, 5000);//5-+ 50
  setTimeout(function(){ servo_E.to(38,1000) }, 5000);//10-+
  setTimeout(function(){ servo_M.to(149,1000) }, 5000);//10--
  setTimeout(function(){ servo_G.to(139,1000) }, 5000);//15--
  setTimeout(function(){ servo_O.to(41,1000) }, 5000);//15-+
  setTimeout(function(){ servo_F.to(80,1000) }, 5000);//30++
  setTimeout(function(){ servo_N.to(110,1000) }, 5000);//30+-
  setTimeout(function(){ servo_H.to(110,1000) }, 5000);//5+-
  setTimeout(function(){ servo_P.to(70,1000) }, 5000); //5++   
  //24  -414
  setTimeout(function(){ servo_A.to(10,1000) }, 6000);//20+-
  setTimeout(function(){ servo_I.to(170,1000) }, 6000);//20++
  setTimeout(function(){ servo_B.to(20,1000) }, 6000);//10++
  setTimeout(function(){ servo_J.to(0,1000) }, 6000); //10++                                
  setTimeout(function(){ servo_C.to(85,1000) }, 6000);//5+-
  setTimeout(function(){ servo_K.to(95,1000) }, 6000);//5++
  setTimeout(function(){ servo_F.to(44,1000) }, 6000);//25++
  setTimeout(function(){ servo_N.to(150,1000) }, 6000);//25+-
  setTimeout(function(){ servo_H.to(130,1000) }, 6000);//15+-
  setTimeout(function(){ servo_P.to(50,1000) }, 6000); //15+ 
  //25 -420
  setTimeout(function(){ servo_A.to(25,1000) }, 7000);//20+-   
  setTimeout(function(){ servo_I.to(158,1000) }, 7000);//20++
  setTimeout(function(){ servo_F.to(29,1000) }, 7000);//5++
  setTimeout(function(){ servo_N.to(165,1000) }, 7000);//5+-
  //26 -432
  setTimeout(function(){ servo_D.to(150,200) }, 8000);//5--
  setTimeout(function(){ servo_L.to(35,200) }, 8000);//5-+ 
  setTimeout(function(){ servo_F.to(24,200) }, 8000);//5++
  setTimeout(function(){ servo_N.to(170,200) }, 8000);//5+-
  setTimeout(function(){ servo_G.to(154,200) }, 8000);//15--
  setTimeout(function(){ servo_O.to(26,200) }, 8000);//15-+

  setTimeout(function(){ servo_A.to(45,1000) }, 9000);//20+-
  setTimeout(function(){ servo_I.to(135,1000) }, 9000);//20++
  setTimeout(function(){ servo_B.to(70,1000) }, 9000);//10++
  setTimeout(function(){ servo_J.to(50,1000) }, 9000); //10++                                
  setTimeout(function(){ servo_C.to(80,1000) }, 9000);//5+-
  setTimeout(function(){ servo_K.to(100,1000) }, 9000);//5++
                                                                                        //27  -443
  setTimeout(function(){ servo_B.to(50,1000) }, 10000);//20++
  setTimeout(function(){ servo_J.to(30,1000) }, 10000);//20++
  setTimeout(function(){ servo_C.to(85,1000) }, 10000);//5+-
  setTimeout(function(){ servo_K.to(95,1000) }, 10000);//5++                             
  setTimeout(function(){ servo_E.to(58,1000) }, 10000);//47+-                                
  setTimeout(function(){ servo_M.to(129,1000) }, 10000);//47++                                
  setTimeout(function(){ servo_F.to(24,1000) }, 10000);//120--
  setTimeout(function(){ servo_N.to(170,1000) }, 10000);//120-+
  setTimeout(function(){ servo_G.to(139,1000) }, 10000);//69++
  setTimeout(function(){ servo_O.to(41,1000) }, 10000);//69+- 
                                                                                          //28 Final -471
  setTimeout(function(){ servo_A.to(90,1000) }, 11000)//30+-
  setTimeout(function(){ servo_I.to(90,1000) }, 11000);//30++
  setTimeout(function(){ servo_B.to(30,1000) }, 11000);//20++
  setTimeout(function(){ servo_J.to(10,1000) }, 11000);//20++
  setTimeout(function(){ servo_C.to(90,1000) },11000);//5+-
  setTimeout(function(){ servo_K.to(90,1000) }, 11000);//5++  
  setTimeout(function(){ servo_D.to(90,1000) }, 11000);//5++  
  setTimeout(function(){ servo_L.to(90,1000) }, 11000);//5+-                           
  setTimeout(function(){ servo_E.to(105,1000) }, 11000);//47+-                                
  setTimeout(function(){ servo_M.to(82,1000) }, 11000);//47++                                
  setTimeout(function(){ servo_F.to(144,1000) }, 11000);//120--
  setTimeout(function(){ servo_N.to(50,1000) }, 11000);//120-+
  setTimeout(function(){ servo_G.to(70,1000) }, 11000);//69++
  setTimeout(function(){ servo_O.to(110,1000) }, 11000);//69+-
  setTimeout(function(){ servo_H.to(90,1000) }, 11000);//40--
  setTimeout(function(){ servo_P.to(90,1000) }, 11000); //40-+  
              












                
      }
  });





//////////////INICIA MOVIMIENTO SE SLIDES 
  app.io.route('servo_A',{
    moverse: function(req) {
      //Detener el Modo Automatico 
      clearInterval(rutina_ciclo);
     


     //Asignar el valor que envia el cliente web 
      servo_A.move(req.data.valor);

      // Retor7a la posicion del servo motor A al cliente web 
      req.io.emit('servo_A_mensaje', {
        message: servo_A.value
        
      });
    }
  });


  app.io.route('servo_B',{
    moverse: function(req) {
      //Detener el Modo Automatico 
      clearInterval(rutina_ciclo);
    

      //Asignar el valor que envia el cliente web 
      servo_B.move(req.data.valor);

      // Retorna la posicion del servo motor B al cliente web 
      req.io.emit('servo_B_mensaje', {        
        message: servo_B.value
      });
    }
  });

  app.io.route('servo_C',{
    moverse: function(req) {
      //Detener el Modo Automatico 
      clearInterval(rutina_ciclo);
     
     

      //Asignar el valor que envia el cliente web 
      servo_C.move(req.data.valor);

      // Retorna la posicion del servo motor C al cliente web 
      req.io.emit('servo_C_mensaje', {        
        message: servo_C.value
      });
    }
  });

  app.io.route('servo_D',{
    moverse: function(req) {
      //Detener el Modo Automatico 
      clearInterval(rutina_ciclo);
     

      //Asignar el valor que envia el cliente web 
      servo_D.move(req.data.valor);

      // Retorna la posicion del servo motor D al cliente web 
      req.io.emit('servo_D_mensaje', {        
        message: servo_D.value
      });
    }
  });

  app.io.route('servo_E',{
    moverse: function(req) {
      //Detener el Modo Automatico 
      clearInterval(rutina_ciclo);
     

      //Asignar el valor que envia el cliente web 
      servo_E.move(req.data.valor);

      // Retorna la posicion del servo motor D al cliente web 
      req.io.emit('servo_E_mensaje', {        
        message: servo_E.value
      });
    }
  });

  app.io.route('servo_F',{
    moverse: function(req) {
      //Detener el Modo Automatico 
      clearInterval(rutina_ciclo);
  

      //Asignar el valor que envia el cliente web 
      servo_F.move(req.data.valor);

      // Retorna la posicion del servo motor D al cliente web 
      req.io.emit('servo_F_mensaje', {        
        message: servo_F.value
      });
    }
  });

  app.io.route('servo_G',{
    moverse: function(req) {
      //Detener el Modo Automatico 
      clearInterval(rutina_ciclo);
    

      //Asignar el valor que envia el cliente web 
      servo_G.move(req.data.valor);

      // Retorna la posicion del servo motor D al cliente web 
      req.io.emit('servo_G_mensaje', {        
        message: servo_G.value
      });
    }
  });

  app.io.route('servo_H',{
    moverse: function(req) {
      //Detener el Modo Automatico 
      clearInterval(rutina_ciclo);
     

      //Asignar el valor que envia el cliente web 
      servo_H.move(req.data.valor);

      // Retorna la posicion del servo motor D al cliente web 
      req.io.emit('servo_H_mensaje', {        
        message: servo_H.value
      });
    }
  });

  app.io.route('servo_I',{
    moverse: function(req) {
      //Detener el Modo Automatico 
      clearInterval(rutina_ciclo);
   

      //Asignar el valor que envia el cliente web 
      servo_I.move(req.data.valor);

      // Retorna la posicion del servo motor D al cliente web 
      req.io.emit('servo_I_mensaje', {        
        message: servo_I.value
      });
    }
  });

  app.io.route('servo_J',{
    moverse: function(req) {
      //Detener el Modo Automatico 
      clearInterval(rutina_ciclo);
    

      //Asignar el valor que envia el cliente web 
      servo_J.move(req.data.valor);

      // Retorna la posicion del servo motor D al cliente web 
      req.io.emit('servo_J_mensaje', {        
        message: servo_J.value
      });
    }
  });


  app.io.route('servo_K',{
    moverse: function(req) {
      //Detener el Modo Automatico 
      clearInterval(rutina_ciclo);
    

      //Asignar el valor que envia el cliente web 
      servo_K.move(req.data.valor);

      // Retorna la posicion del servo motor D al cliente web 
      req.io.emit('servo_K_mensaje', {        
        message: servo_K.value
      });
    }
  });

  app.io.route('servo_L',{
    moverse: function(req) {
      //Detener el Modo Automatico 
      clearInterval(rutina_ciclo);
     

      //Asignar el valor que envia el cliente web 
      servo_L.move(req.data.valor);

      // Retorna la posicion del servo motor D al cliente web 
      req.io.emit('servo_L_mensaje', {        
        message: servo_L.value
      });
    }
  });

  app.io.route('servo_M',{
    moverse: function(req) {
      //Detener el Modo Automatico 
      clearInterval(rutina_ciclo);
    

      //Asignar el valor que envia el cliente web 
      servo_M.move(req.data.valor);

      // Retorna la posicion del servo motor D al cliente web 
      req.io.emit('servo_M_mensaje', {        
        message: servo_M.value
      });
    }
  });

  app.io.route('servo_N',{
    moverse: function(req) {
      //Detener el Modo Automatico 
      clearInterval(rutina_ciclo);
     

      //Asignar el valor que envia el cliente web 
      servo_N.move(req.data.valor);

      // Retorna la posicion del servo motor D al cliente web 
      req.io.emit('servo_N_mensaje', {        
        message: servo_N.value
      });
    }
  });

  app.io.route('servo_O',{
    moverse: function(req) {
      //Detener el Modo Automatico 
      clearInterval(rutina_ciclo);
     

      //Asignar el valor que envia el cliente web 
      servo_O.move(req.data.valor);

      // Retorna la posicion del servo motor D al cliente web 
      req.io.emit('servo_O_mensaje', {        
        message: servo_O.value
      });
    }
  });

  app.io.route('servo_P',{
    moverse: function(req) {
      //Detener el Modo Automatico 
      clearInterval(rutina_ciclo);
    

      //Asignar el valor que envia el cliente web 
      servo_P.move(req.data.valor);

      // Retorna la posicion del servo motor D al cliente web 
      req.io.emit('servo_P_mensaje', {        
        message: servo_P.value
      });
    }
  });

  app.io.route('servo_Q',{
    moverse: function(req) {
      //Detener el Modo Automatico 
      clearInterval(rutina_ciclo);
     
      //Asignar el valor que envia el cliente web 
      servo_Q.move(req.data.valor);

      // Retorna la posicion del servo motor D al cliente web 
      req.io.emit('servo_Q_mensaje', {        
        message: servo_Q.value
      });
    }
  });
});

module.exports = app;
