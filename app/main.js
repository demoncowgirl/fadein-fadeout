  var fade_in_from = 0;
  var fade_out_from =10;

    function fadeIn(element){
      var target = document.getElementById(element);
      target.style.display = "block";
      var newSetting = fade_in_from / 10;
      target.style.opacity = newSetting;
      fade_in_from++;

      if(fade_in_from == 10){
        target.style.opacity = 1;
        clearTimeout(loopTimer); //stops timer
        fade_in_from = 0; //resets opacity setting
        return false; //returns nothing
      }
      var loopTimer = setTimeout('fadeIn(\''+element+'\')', 150);

    }

        function fadeOut(element){
          var target = document.getElementById(element);
          var newSetting = fade_out_from /10;
          target.style.opacity = newSetting;
          fade_out_from--;

          if(fade_out_from ==0){
            target.style.opacity =0;
            target.style.display ="none"; //creates collapsible space
            clearTimeout(loopTimer); //stops timer
            fade_out_from = 10; //resets opacity setting
            return false; //returns nothing
          }
          var loopTimer = setTimeout('fadeOut(\''+element+'\')', 150);

        }
