
// Establecer conexion con socket.io
io = io.connect();


$('document').ready(function()
{


  //Activar boton 1 rutina
  $(".automatic").click(function()
  {
    io.emit('rutina:rutina',
    {
      valor : 'encendido rutina' 
    });
  });
 
    //Activar boton 2 rutina
        $(".automatic2").click(function()
        {
          io.emit('rutina2:rutina2',
          {
            valor : 'encendido rutina' 
          });
        });
      
          //Activar boton 3 rutina
                $(".automatic3").click(function()
                {
                io.emit('rutina3:rutina3',
                {
                  valor : 'encendido rutina' 
                });
              });
                    //Activar boton 4 rutina VOLANDO
                $(".automatic4").click(function()
                {
                io.emit('rutina4:rutina4',
                {
                  valor : 'encendido rutina' 
                });
              });
                
                $(".automatic5").click(function()
                        {
                        io.emit('rutina5:rutina5',
                        {
                          valor : 'encendido rutina' 
                        });
                      });
                             $(".automatic6").click(function()
                        {
                        io.emit('rutina6:rutina6',
                        {
                          valor : 'encendido rutina' 
                        });
                      });



//envia el valor de la rutina para mover el servo A 
   $( "#servo_A" ).slider(
     {
        orientation: "vertical",
        range: "min",
        min: 1,
        max: 179,
        value: 90,
        slide: function( event, ui ) 
        {
            // Envia el valor de la posicion del servo al server 
            io.emit('servo_A:moverse',
            {
              valor : ui.value 
            });
        }
      });

      //envia el valor de la rutina para mover el servo B
            $( "#servo_B" ).slider(
          {
              orientation: "vertical",
              range: "min",
              min: 1,
              max: 179,
              value: 30,
              slide: function( event, ui ) 
              {

                    // Envia el valor de la posicion del servo al server 
                  io.emit('servo_B:moverse',
                  {
                    valor : ui.value 
                  });
              }
            });


                     //envia el valor de la rutina para mover el servo C
                    $( "#servo_C" ).slider(
                  {
                      orientation: "vertical",
                      range: "min",
                      min: 1,
                      max: 179,
                      value: 90,
                      slide: function( event, ui ) 
                      {

                          // Envia el valor de la posicion del servo al server 
                          io.emit('servo_C:moverse',
                          {
                            valor : ui.value 
                          });
                      }
                    });

                                //envia el valor de la rutina para mover el servo D
                             $( "#servo_D" ).slider(
                              {
                                  orientation: "vertical",
                                  range: "min",
                                  min: 1,
                                  max: 179,
                                  value: 90,
                                  slide: function( event, ui ) 
                                  {

                                      // Envia el valor de la posicion del servo al server 
                                      io.emit('servo_D:moverse',
                                      {
                                        valor : ui.value 
                                      });
                                  }
                                });

                                           //envia el valor de la rutina para mover el servo E
                                          $( "#servo_E" ).slider(
                                        {
                                            orientation: "vertical",
                                            range: "min",
                                            min: 1,
                                            max: 179,
                                            value: 105,
                                            slide: function( event, ui ) 
                                            {
                                                // Envia el valor de la posicion del servo al server 
                                                io.emit('servo_E:moverse',
                                                {
                                                  valor : ui.value 
                                                });
                                            }
                                          });
                                                 //envia el valor de la rutina para mover el servo F
                                                  $( "#servo_F" ).slider(
                                                {
                                                    orientation: "vertical",
                                                    range: "min",
                                                    min: 1,
                                                    max: 179,
                                                    value: 144,
                                                    slide: function( event, ui ) 
                                                    {
                                                        // Envia el valor de la posicion del servo al server 
                                                        io.emit('servo_F:moverse',
                                                        {
                                                          valor : ui.value 
                                                        });
                                                    }
                                                  });
                                                           //envia el valor de la rutina para mover el servo G
                                                          $( "#servo_G" ).slider(
                                                        {
                                                            orientation: "vertical",
                                                            range: "min",
                                                            min: 1,
                                                            max: 179,
                                                            value: 70,
                                                            slide: function( event, ui ) 
                                                            {
                                                                // Envia el valor de la posicion del servo al server 
                                                                io.emit('servo_G:moverse',
                                                                {
                                                                  valor : ui.value 
                                                                });
                                                            }
                                                          });
                                                                   //envia el valor de la rutina para mover el servo H
                                                                  $( "#servo_H" ).slider(
                                                                {
                                                                    orientation: "vertical",
                                                                    range: "min",
                                                                    min: 1,
                                                                    max: 179,
                                                                    value: 90,
                                                                    slide: function( event, ui ) 
                                                                    {
                                                                        // Envia el valor de la posicion del servo al server 
                                                                        io.emit('servo_H:moverse',
                                                                        {
                                                                          valor : ui.value 
                                                                        });
                                                                    }
                                                                  });
                                                                                 //envia el valor de la rutina para mover el servo I
                                                                                $( "#servo_I" ).slider(
                                                                              {
                                                                                  orientation: "vertical",
                                                                                  range: "min",
                                                                                  min: 1,
                                                                                  max: 179,
                                                                                  value: 90,
                                                                                  slide: function( event, ui ) 
                                                                                  {
                                                                                      // Envia el valor de la posicion del servo al server 
                                                                                      io.emit('servo_I:moverse',
                                                                                      {
                                                                                        valor : ui.value 
                                                                                      });
                                                                                  }
                                                                                });
                                                                                             //envia el valor de la rutina para mover el servo J
                                                                                            $( "#servo_J" ).slider(
                                                                                          {
                                                                                              orientation: "vertical",
                                                                                              range: "min",
                                                                                              min: 1,
                                                                                              max: 179,
                                                                                              value: 10,
                                                                                              slide: function( event, ui ) 
                                                                                              {
                                                                                                  // Envia el valor de la posicion del servo al server 
                                                                                                  io.emit('servo_J:moverse',
                                                                                                  {
                                                                                                    valor : ui.value 
                                                                                                  });
                                                                                              }
                                                                                            });
                                                                                                         //envia el valor de la rutina para mover el servo K
                                                                                                        $( "#servo_K" ).slider(
                                                                                                      {
                                                                                                          orientation: "vertical",
                                                                                                          range: "min",
                                                                                                          min: 1,
                                                                                                          max: 179,
                                                                                                          value: 90,
                                                                                                          slide: function( event, ui ) 
                                                                                                          {
                                                                                                                // Envia el valor de la posicion del servo al server 
                                                                                                                io.emit('servo_K:moverse',
                                                                                                                {
                                                                                                                  valor : ui.value 
                                                                                                                });
                                                                                                          }
                                                                                                        });
                                                                                                                         //envia el valor de la rutina para mover el servo L
                                                                                                                      $( "#servo_L" ).slider(
                                                                                                                    {
                                                                                                                        orientation: "vertical",
                                                                                                                        range: "min",
                                                                                                                        min: 1,
                                                                                                                        max: 179,
                                                                                                                        value: 90,
                                                                                                                        slide: function( event, ui ) 
                                                                                                                        {
                                                                                                                            // Envia el valor de la posicion del servo al server 
                                                                                                                            io.emit('servo_L:moverse',
                                                                                                                            {
                                                                                                                              valor : ui.value 
                                                                                                                            });
                                                                                                                        }
                                                                                                                      });
                                                                                                                                   //envia el valor de la rutina para mover el servo M
                                                                                                                                  $( "#servo_M" ).slider(
                                                                                                                                {
                                                                                                                                    orientation: "vertical",
                                                                                                                                    range: "min",
                                                                                                                                    min: 1,
                                                                                                                                    max: 179,
                                                                                                                                    value: 82,
                                                                                                                                    slide: function( event, ui ) 
                                                                                                                                    {
                                                                                                                                          // Envia el valor de la posicion del servo al server 
                                                                                                                                          io.emit('servo_M:moverse',
                                                                                                                                          {
                                                                                                                                            valor : ui.value 
                                                                                                                                          });
                                                                                                                                    }
                                                                                                                                  });
                                                                                                                                           //envia el valor de la rutina para mover el servo N
                                                                                                                                          $( "#servo_N" ).slider(
                                                                                                                                        {
                                                                                                                                            orientation: "vertical",
                                                                                                                                            range: "min",
                                                                                                                                            min: 1,
                                                                                                                                            max: 179,
                                                                                                                                            value: 50,
                                                                                                                                            slide: function( event, ui ) 
                                                                                                                                            {
                                                                                                                                                // Envia el valor de la posicion del servo al server 
                                                                                                                                                io.emit('servo_N:moverse',
                                                                                                                                                {
                                                                                                                                                  valor : ui.value 
                                                                                                                                                });
                                                                                                                                            }
                                                                                                                                          });
                                                                                                                                                   //envia el valor de la rutina para mover el servo O
                                                                                                                                                  $( "#servo_O" ).slider(
                                                                                                                                                {
                                                                                                                                                    orientation: "vertical",
                                                                                                                                                    range: "min",
                                                                                                                                                    min: 1,
                                                                                                                                                    max: 179,
                                                                                                                                                    value: 110,
                                                                                                                                                    slide: function( event, ui ) 
                                                                                                                                                    {
                                                                                                                                                          // Envia el valor de la posicion del servo al server 
                                                                                                                                                          io.emit('servo_O:moverse',
                                                                                                                                                          {
                                                                                                                                                            valor : ui.value 
                                                                                                                                                          });
                                                                                                                                                        }
                                                                                                                                                  });
                                                                                                                                                           //envia el valor de la rutina para mover el servo P
                                                                                                                                                        $( "#servo_P" ).slider(
                                                                                                                                                      {
                                                                                                                                                          orientation: "vertical",
                                                                                                                                                          range: "min",
                                                                                                                                                          min: 1,
                                                                                                                                                          max: 179,
                                                                                                                                                          value: 90,
                                                                                                                                                          slide: function( event, ui ) 
                                                                                                                                                          {
                                                                                                                                                              // Envia el valor de la posicion del servo al server 
                                                                                                                                                              io.emit('servo_P:moverse',
                                                                                                                                                              {
                                                                                                                                                                valor : ui.value 
                                                                                                                                                              });
                                                                                                                                                          }
                                                                                                                                                        });
                                                                                                                                                                     //envia el valor de la rutina para mover el servo Q
                                                                                                                                                                    $( "#servo_Q" ).slider(
                                                                                                                                                                  {
                                                                                                                                                                      orientation: "vertical",
                                                                                                                                                                      range: "min",
                                                                                                                                                                      min: 1,
                                                                                                                                                                      max: 179,
                                                                                                                                                                      value: 90,
                                                                                                                                                                      slide: function( event, ui ) 
                                                                                                                                                                      {
                                                                                                                                                                          // Envia el valor de la posicion del servo al server 
                                                                                                                                                                          io.emit('servo_Q:moverse',
                                                                                                                                                                          {
                                                                                                                                                                            valor : ui.value 
                                                                                                                                                                          });
                                                                                                                                                                      }
                                                                                                                                                                    });
});

// Emit ready event.


//// muestra el valor de la posicion actual de cada servomotor

io.on('rutina_mensaje',function(data)
{
  $('.mensajeRutina').html(data.message);
});

    io.on('servo_A_mensaje', function(data) 
    {
      $('.serva_A_position').html(data.message)
    })  

          io.on('servo_B_mensaje', function(data) 
          {
            $('.serva_B_position').html(data.message)
          })  

                io.on('servo_C_mensaje', function(data) 
                {
                  $('.serva_C_position').html(data.message)
                })  

                      io.on('servo_D_mensaje', function(data) 
                      {
                        $('.serva_D_position').html(data.message)
                      })  

                            io.on('servo_E_mensaje', function(data)
                             {
                              $('.serva_E_position').html(data.message)
                            })

                                io.on('servo_F_mensaje', function(data) 
                                {
                                  $('.serva_F_position').html(data.message)
                                })

                                      io.on('servo_G_mensaje', function(data) 
                                      {
                                        $('.serva_G_position').html(data.message)
                                      })

                                          io.on('servo_H_mensaje', function(data) 
                                          {
                                            $('.serva_H_position').html(data.message)
                                          })

                                              io.on('servo_I_mensaje', function(data) 
                                              {
                                                $('.serva_I_position').html(data.message)
                                              })

                                                  io.on('servo_J_mensaje', function(data) 
                                                  {
                                                    $('.serva_J_position').html(data.message)
                                                  })

                                                      io.on('servo_K_mensaje', function(data) 
                                                      {
                                                        $('.serva_K_position').html(data.message)
                                                      })

                                                            io.on('servo_L_mensaje', function(data)
                                                            {
                                                              $('.serva_L_position').html(data.message)
                                                            })

                                                                  io.on('servo_M_mensaje', function(data) 
                                                                  {
                                                                    $('.serva_M_position').html(data.message)
                                                                  })

                                                                        io.on('servo_N_mensaje', function(data) 
                                                                        {
                                                                          $('.serva_N_position').html(data.message)
                                                                        })

                                                                              io.on('servo_O_mensaje', function(data) 
                                                                              {
                                                                                $('.serva_O_position').html(data.message)
                                                                              })

                                                                                  io.on('servo_P_mensaje', function(data)
                                                                                   {
                                                                                    $('.serva_P_position').html(data.message)
                                                                                  })

                                                                                        io.on('servo_Q_mensaje', function(data) 
                                                                                        {
                                                                                          $('.serva_Q_position').html(data.message)
                                                                                        })









