new WOW().init();

$(document).ready(function () {
    
    $('.darkMood .icon').click(function(){

        $('.darkMood .ul').fadeToggle();


    });
    
    let li=$('.darkMood ul li');
    li.eq(0).css({
        background:'white',
        color:'white'
    })
    li.eq(1).css({
        background:'black',
        color:'black'
    })
    li.eq(2).css({
        background:'#ff5363',
        color:'#ff5363'
    })
    li.eq(3).css({
        background:'#666',
        color:'#666'
    })

    $('.darkMood ul li').click(function(){

        $('.darkMood').css({
            color:$(this).css('color'),
        
             })    
            $('#topIcon').css({
                
                color:$(this).css('color')
            })
            $('.kamal').css({
                
                color:$(this).css('color')
            })

       $('header').css({
        background:$(this).css('background'),
    
         })
         $('header .container .left .news').css({
            background:$(this).css('background'),
        
             })
         $('section').css({
            background:$(this).css('background'),
        
             })
             
    });    
   

    setInterval(function(){
        $('.loading').css('display','none')
    },3000)

    $(window).scroll(function () { 
        let x=$(window).scrollTop();
        let topIcon =document.getElementById('topIcon')
        
        let a1 = document.getElementById('home')
        let a2 = document.getElementById('about')
        let a3 = document.getElementById('symptoms')
        let a4 = document.getElementById('prevention')
        let a5 = document.getElementById('tretments')
        let a6 = document.getElementById('faq')
        let a7 = document.getElementById('news')
        let a11 = document.getElementById('home1')
        let a21 = document.getElementById('about1')
        let a31 = document.getElementById('symptoms1')
        let a41 = document.getElementById('prevention1')
        let a51 = document.getElementById('tretments1')
        let a61 = document.getElementById('faq1')
        let a71 = document.getElementById('news1')

        console.log(x); 
        if(x > 600){
            $(topIcon).css('display','block')
        }
        else{
            $(topIcon).css('display','none')
        }

        if(x > 0){
            $('nav').css('background','white')
            
        }
        
        else{
            $('nav').css('background','transparent')
        }
        if(x > 0 && x<=590){
          
           $(a1).css('color','red')
           $(a2).css('color','#50658e')
           $(a3).css('color','#50658e')
           $(a4).css('color','#50658e')
           $(a5).css('color','#50658e')
           $(a6).css('color','#50658e')
           $(a7).css('color','#50658e')
           $(a11).css('color','red')
           $(a21).css('color','#50658e')
           $(a31).css('color','#50658e')
           $(a41).css('color','#50658e')
           $(a51).css('color','#50658e')
           $(a61).css('color','#50658e')
           $(a71).css('color','#50658e')
        }
        else if(x > 590 && x<=1990){
            $(a1).css('color','#50658e')
           $(a2).css('color','red')
           $(a3).css('color','#50658e')
           $(a4).css('color','#50658e')
           $(a5).css('color','#50658e')
           $(a6).css('color','#50658e')
           $(a7).css('color','#50658e')
           $(a11).css('color','#50658e')
           $(a21).css('color','red')
           $(a31).css('color','#50658e')
           $(a41).css('color','#50658e')
           $(a51).css('color','#50658e')
           $(a61).css('color','#50658e')
           $(a71).css('color','#50658e')
        }
        else if(x > 1990 && x<=2880){
            $(a1).css('color','#50658e')
            $(a2).css('color','#50658e')
            $(a3).css('color','red')
            $(a4).css('color','#50658e')
            $(a5).css('color','#50658e')
            $(a6).css('color','#50658e')
            $(a7).css('color','#50658e')
            $(a11).css('color','#50658e')
           $(a21).css('color','#50658e')
           $(a31).css('color','red')
           $(a41).css('color','#50658e')
           $(a51).css('color','#50658e')
           $(a61).css('color','#50658e')
           $(a71).css('color','#50658e')
        }
        else if(x > 2880 && x<=5100){
            $(a1).css('color','#50658e')
            $(a2).css('color','#50658e')
            $(a3).css('color','#50658e')
            $(a4).css('color','red')
            $(a5).css('color','#50658e')
            $(a6).css('color','#50658e')
            $(a7).css('color','#50658e')
            $(a11).css('color','#50658e')
           $(a21).css('color','#50658e')
           $(a31).css('color','#50658e')
           $(a41).css('color','red')
           $(a51).css('color','#50658e')
           $(a61).css('color','#50658e')
           $(a71).css('color','#50658e')
        }
        else if(x > 5100 && x<=7000){
            $(a1).css('color','#50658e')
            $(a2).css('color','#50658e')
            $(a3).css('color','#50658e')
            $(a4).css('color','#50658e')
            $(a5).css('color','red')
            $(a6).css('color','#50658e')
            $(a7).css('color','#50658e')
            $(a11).css('color','#50658e')
           $(a21).css('color','#50658e')
           $(a31).css('color','#50658e')
           $(a41).css('color','#50658e')
           $(a51).css('color','red')
           $(a61).css('color','#50658e')
           $(a71).css('color','#50658e')
        }
        else if(x > 6899 && x<=7660){
            $(a1).css('color','#50658e')
            $(a2).css('color','#50658e')
            $(a3).css('color','#50658e')
            $(a4).css('color','#50658e')
            $(a5).css('color','#50658e')
            $(a6).css('color','red')
            $(a7).css('color','#50658e')
            $(a11).css('color','#50658e')
           $(a21).css('color','#50658e')
           $(a31).css('color','#50658e')
           $(a41).css('color','#50658e')
           $(a51).css('color','#50658e')
           $(a61).css('color','red')
           $(a71).css('color','#50658e')
        }
        else if(x > 7660 && x<=8200){
            $(a1).css('color','#50658e')
            $(a2).css('color','#50658e')
            $(a3).css('color','#50658e')
            $(a4).css('color','#50658e')
            $(a5).css('color','#50658e')
            $(a6).css('color','#50658e')
            $(a7).css('color','red')
            $(a11).css('color','#50658e')
           $(a21).css('color','#50658e')
           $(a31).css('color','#50658e')
           $(a41).css('color','#50658e')
           $(a51).css('color','#50658e')
           $(a61).css('color','#50658e')
           $(a71).css('color','red')
        }
        else{
            $(a1).css('color','#50658e')
            $(a2).css('color','#50658e')
            $(a3).css('color','#50658e')
            $(a4).css('color','#50658e')
            $(a5).css('color','#50658e')
            $(a6).css('color','#50658e')
            $(a7).css('color','#50658e')
            $(a11).css('color','#50658e')
           $(a21).css('color','#50658e')
           $(a31).css('color','#50658e')
           $(a41).css('color','#50658e')
           $(a51).css('color','#50658e')
           $(a61).css('color','#50658e')
           $(a71).css('color','#50658e')
        }

    }); 
    
    

 $('.navbar-toggler-icon').click(function(){
    $('.navsSmall').removeClass('none')
 })

 $('.navsSmall').click(function(){
     $('.navsSmall').addClass('none')
 })
 
 $('#closeIcon').click(function(){
    $('.navsSmall').addClass('none')
})

});


jQuery("#responsive_headline").fitText(.8,{
    minFontSize:'20px',
    maxFontSize:'40px',
});




  