$( document ).ready(()=>{

      $(document).on("scroll",  ()=> {
        if ($('html').scrollTop() >= 100) {
           $('.navbar-bg-color').css('background-color','#003CFF')
      } else {
          $('.navbar-bg-color').css('background-color','transparent')
      }

    })

    $('.navbar-toggle').on('click', ()=>{
      $('.navbar-bg-color').css('background-color','#003CFF')
    })

    var num=0;
    var num1=0;
    var slider = setInterval(()=>{
      num+=100;
      $.map($('.slider-child').children(), (a,index) =>{
      $('.slider-child').children().css('transform','translate3d(-'+num+'%, 0, 0)')
    })
    if(num>500){
      num=0;
      $('.slider-child').children().css('transform','translate3d(0%, 0, 0)')

    }
  } , 4000)

  if($( window ).width()<768){
    var slider1 = setInterval(()=>{
      num1+=100;
      $.map($('.slider-child').children(), (a,index) =>{
      $('.slider-child').children().css('transform','translate3d(-'+num1+'%, 0, 0)')
    })
    if(num1>800){
      num1=0;
      $('.slider-child').children().css('transform','translate3d(0%, 0, 0)')

    }
  } , 4000)


  }




})
