$('.stage').css('height', $(window).height());

var 
    // Numbers
    g = .2,
    wind_resistance = .0001,
    
    // Coordinates
    vel_x,
    vel_y,
    pertsona_x, 
    pertsona_y,
    bird_x,
    bird_y,
    arbola_x,
    arbola_y,

    // Booleans
    bird_grabbed = false,
    flung = false,
    right_fling = false,
     
    // Elements
    $_pertsona = $('.pertsona'),
    $_bird = $('.bird'),
    $_arbola = $('.arbola'),
    
    // Functions
    reset = function(){
     
      arbola_x = $('canvas').width() * 0.4;
      arbola_y = $('canvas').height() * 0.3;
      pertsona_x = $('canvas').width() * 0.01;
      pertsona_y = $('canvas').height() * 0.6;
      bird_x = $('canvas').width() * 0.1;
      bird_y = $('canvas').height() * 0.9;
      cat_x = bird_x;
      cat_y = bird_y;
      vel_x = 0;
      vel_y = 0;
      flung = false;
      
     
    };

reset();

$_bird.mousedown(function(){
  
  if(!flung){
    bird_grabbed = true;
  }
  
});

$('body').mousemove(function(e){
  
  if(bird_grabbed){
    
    bird_x = e.clientX - ($_bird.width()/2);
    bird_y = e.clientY - ($_bird.height()/2);
  }
  
});

$('body').mouseup(function(e){
  
  if(bird_grabbed){ 
    vel_x = (cat_x - bird_x)/10;
    vel_y = (cat_y - bird_y)/10;
    flung = true;
    right_fling = vel_x >= 0;
  }
  
  bird_grabbed = false;
  
});



setInterval(function(){
  
  if(!bird_grabbed && flung){
    
    bird_x += vel_x;
    
    if(bird_x < 0)
      bird_x = 0;
    
    if(bird_x > $('canvas').width() - $_bird.width())
      bird_x = $('canvas').width() - $_bird.width();
    
    bird_y += vel_y;
    
    if(bird_y > $('canvas').height()*0.93 - $_bird.height())
    {
      bird_y = $('canvas').height()*0.93 - $_bird.height();
      vel_x -= .1 * (!right_fling ? -1 : 1);
    }
    
    vel_x -= wind_resistance * (!right_fling ? -1 : 1);
    
    if(right_fling){
      
      if(vel_x < 0){
        
        vel_x = 0;
      }
      
    }else{
    
      if(vel_x > 0){
        
        vel_x = 0;
      }
    }
    
    vel_y += g;
  } 


  
  $_bird.css({

    left : bird_x,
    top : bird_y

  });
   $_pertsona.css({

    left : pertsona_x,
    top : pertsona_y

  });

   $_arbola.css({

    left : arbola_x,
    top : arbola_y

  });
  
}, 12);

$('body').keydown(function(){
  
  reset();
  
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bird();
    
    if(x + dx > canvas.width-17 || x + dx < 17) {
        dx = -dx;
    }
    if(y + dy > canvas.height-17 || y + dy < 17) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}
