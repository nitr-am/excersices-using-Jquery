$(document).ready(function() {
    
    $('p').click(function() {
        $('p').addClass('get_red').removeClass('get_red')
    })
   
    
    // Para que crezca el tamaño de la letra de solo el h2 que estoy tocando.
    // Se queda grande y no se vuelve a reducir su tamaño
    $('h2').mouseenter(function(){
        $(this).addClass('h2_size')
    });
    $('h2').mouseleave(function(){
        $(this).removeClass('h2_size')
    });
    
    // Now this willl change de bg_color to black when mouse enter, 
    // and will add a new class when mouse leave, bg will turn grey. 
    $('img').mouseover(function() {
        $('body').addClass('bg_color')
    })
    $('img').mouseleave(function() {
        $('body').addClass('bg_grey')
    })
    
    // This is for the "button.html" 
    $('#button_unique').click(function() {
        $('#para1').slideToggle('slow', );
    })
    
    // Para que el boton cambie su transparencia. 0.5 y 1 son grados de transparencia. 
    $('#button_unique').mouseenter(function() {
        $(this).fadeTo(2000,0.5);
    })
    $('#button_unique').mouseleave(function() {
        $(this).fadeTo(2000,1);
    })
    
    // Para ocultar y mostrar el texto
    $('#button_unique2').click(function() {
        $('#para12').slideToggle('slow');
    })    
    
    ////////////////// Para que cambe el bg color del h2
	$("h2").mouseenter(function(){
        $(this).addClass("h2_bg_color");
    });
	$("h2").mouseleave(function(){
        $(this).removeClass("h2_bg_color");
    });
 
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	$("ul").css("border", "5px solid red");
	$("ul li").css("color", "red");
	
/* ----------> Este es para cambiar el color del texto. 
	$("p").click(function(){
      $("p").addClass("highlight_text");
    });
*/

 
/* -----------------> To change the size of the h2 when hovered
    $("#sz_html").hover(function() {
    	$("#sz_html").removeClass("h2_size");
    	$("#sz_mysql").removeClass("h2_size");
    	$("#sz_python").removeClass("h2_size");
    	$("#sz_jquery").removeClass("h2_size");
    	$("#sz_django").removeClass("h2_size");
    	$("#sz_css").removeClass("h2_size");
    	$("#sz_html").addClass("h2_size");
    }); 
    $("#sz_mysql").hover(function() {
    	$("#sz_html").removeClass("h2_size");
    	$("#sz_mysql").removeClass("h2_size");
    	$("#sz_python").removeClass("h2_size");
    	$("#sz_jquery").removeClass("h2_size");
    	$("#sz_django").removeClass("h2_size");
    	$("#sz_css").removeClass("h2_size");
    	$("#sz_mysql").addClass("h2_size");
    }); 
    $("#sz_python").hover(function() {
    	$("#sz_html").removeClass("h2_size");
    	$("#sz_mysql").removeClass("h2_size");
    	$("#sz_python").removeClass("h2_size");
    	$("#sz_jquery").removeClass("h2_size");
    	$("#sz_django").removeClass("h2_size");
    	$("#sz_css").removeClass("h2_size");
    	$("#sz_python").addClass("h2_size");
    }); 
    $("#sz_jquery").hover(function() {
    	$("#sz_html").removeClass("h2_size");
    	$("#sz_mysql").removeClass("h2_size");
    	$("#sz_python").removeClass("h2_size");
    	$("#sz_jquery").removeClass("h2_size");
    	$("#sz_django").removeClass("h2_size");
    	$("#sz_css").removeClass("h2_size");
    	$("#sz_jquery").addClass("h2_size");
    }); 
    $("#sz_django").hover(function() {
    	$("#sz_html").removeClass("h2_size");
    	$("#sz_mysql").removeClass("h2_size");
    	$("#sz_python").removeClass("h2_size");
    	$("#sz_jquery").removeClass("h2_size");
    	$("#sz_django").removeClass("h2_size");
    	$("#sz_css").removeClass("h2_size");
    	$("#sz_django").addClass("h2_size");
    }); 
    $("#sz_css").hover(function() {
    	$("#sz_html").removeClass("h2_size");
    	$("#sz_mysql").removeClass("h2_size");
    	$("#sz_python").removeClass("h2_size");
    	$("#sz_jquery").removeClass("h2_size");
    	$("#sz_django").removeClass("h2_size");
    	$("#sz_css").removeClass("h2_size");
    	$("#sz_css").addClass("h2_size");
    }); 
*/

// ---------> Este cambia el color de fondo fondo
 /*   $(".bottom_button").mouseenter(function() {
    	$("body").addClass("bg_color");
    });	
    $(".bottom_button").mouseout(function() {
    	$("body").removeClass("bg_color");
    });	
*/  
    
 /* ////////////////////Para que cambie lucidez 
 
    $("#button1").mouseenter(function() {
        $("#button1").fadeTo(1000, 0.5, )
    }); 
    $("#button1").mouseout(function() {
        $("#button1").fadeTo(1000, 1)
    }); 
*/

// ---------------- This one is to change the color of the buttons
    $("button").mouseenter(function() {
        $(this).removeClass("makeRed").addClass("makeBorder")
    }); 
    $("button").mouseout(function() {
        $(this).removeClass("makeBorder").addClass("makeRed")
    }); 
 
 // --------> Images and Buttons, to make the paragraph vanish   
 //   $("#html_vanish").hide();
    $("#img3").click(function() {
       $("#html_vanish").slideToggle("slow", )
    })
    $("#button1").click(function() {
       $("#html_vanish").slideToggle("slow", )
    });
    
//   $("#mysql_vanish").hide();
    $("#img1").click(function() {
       $("#mysql_vanish").slideToggle("slow", )
    })
    $("#button2").click(function() {
       $("#mysql_vanish").slideToggle("slow", )
    });
    
//    $("#python_vanish").hide();
    $("#img2").click(function() {
       $("#python_vanish").slideToggle("slow", )
    })
    $("#button3").click(function() {
       $("#python_vanish").slideToggle("slow", )
    });
    
//    $("#jquery_vanish").hide();
    $("#img5").click(function() {
       $("#jquery_vanish").slideToggle("slow", )
    })
    $("#button4").click(function() {
       $("#jquery_vanish").slideToggle("slow", )
    });
    
//    $("#django_vanish").hide();
    $("#img4").click(function() {
       $("#django_vanish").slideToggle("slow", )
    })
    $("#button5").click(function() {
       $("#django_vanish").slideToggle("slow", )
    });
    
//    $("#css_vanish").hide();
    $("#img6").click(function() {
       $("#css_vanish").slideToggle("slow", )
    })
    $("#button6").click(function() {
       $("#css_vanish").slideToggle("slow", )
    });
   
// ----> Esto hara que todos los hiperviculos se resalten cuando pase el mouse por el texto    
    $("p").mouseenter(function() {
        $(this).children("a").addClass("highlight")
    })
    $("p").mouseleave(function() {
        $(this).children("a").removeClass("highlight")
    })
    
// ------> The use of next    
 /*   $("button").click(function() {
        $(this).prev().slideToggle(1000, )
    });
 */
    $(".card").click(function() { // esto me pinta o despunta el bk de cada cartilla
		$(this).toggleClass("highlight");	 
	});
 
     //let highlighted =  $(".card").toggleClass("highlight");
     $("#select_btn").click(function() { // esta opcion me desaarece las cartillas no pintadas (la opcion de arriba)
        $(".card:not(.highlight)").hide() // Las qe no esten pintadas las desaparece. :not(slector)
     })
     $("#all_btn").click(function() {
        $(".card").show() // esta me vuelve a mostrar todas todas. 
     })
 
     
  

}); 

