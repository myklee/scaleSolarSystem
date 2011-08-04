$(function() {
        
        var scrollSpeedGlobal = null;
        var scrollSpeed = null;
        
        jQuery.easing.def = 'easeOutBounce';
       
   
        $(window).scrollTop(0);
        $('#goMercury').click(function(){
                var offsetVal = $(window).width()/-2;
                $('.main').scrollTo($('#mercury'), 800,{offset:offsetVal});
                alert(offsetVal);
                });
        
//		$('a').bind('click',function(event){
//            var $this = $(this);
//            var current = $(window).scrollTop();
//            var $anchorRef = $this.attr('href');
//            var destinationOffset = $($anchorRef).offset().top - $(window).height()/2; 
//            var scrollSpeed = Math.abs((current - destinationOffset) - Math.abs($(window).height()))/100;
//            
//            //NOTE: scrollSpeed is approximately 140 million km/s
//            
//			$('html, body').stop().animate({
//				scrollTop: $($this.attr('href')).offset().top
//			}, {
//                duration:scrollSpeed,
//                queue:false
//                });
//            //alert(scrollSpeed);
//			/*
//			if you don't want to use the easing effects:
//			$('html, body').stop().animate({
//				scrollTop: $($anchor.attr('href')).offset().top
//			}, 1000);
//			*/
//			event.preventDefault();
//            scrollSpeedGlobal = scrollSpeed;
//		});
		// turn on and off text
		$('#toggleCard').click(function() {
			$('.card').toggle('fast');
			
		});
		//hover glow
		//$('.planetLink').hover(function () {
		//	$(this).animate({
		//		opacity:'+=1',
		//		}, 2000);, function() {
		//		$(this).animate({
		//		opacity:'+=1',
		//		}, 2000);			
		//	});
			
		$('.navList li').hover(function() { $(this).animate({'opacity':'1'}, {duration:300, easing:'swing', queue:false});
			}, function() { $(this).animate({'opacity':'.5'}, {duration:300, easing:'swing', queue:false});
			});
		
		// center vertically 
		var height = $(window).height();
		//var adjustPlanet = $('.planet').attr('width');
		//var adjust = height - adjustPlanet;		
		
		$('.planetAnchor').css('top', -height/2.1);
		$('.bgRuler').hover(function(){
                $(this).find('p').animate({left: '-2.25em', top:'-.75em', fontSize: '1.5em'}, {duration:100, queue:false});
                $(this).find('.infoSmall').animate({opacity: '.5'}, {duration:300, queue:false});
                $(this).animate({opacity: '1'}, {duration:100, queue:false});
        }, function() {
                $(this).find('p').animate({left: '-25', top:'0', fontSize: '.7em'}, {duration:100, queue:false});
                $(this).find('.infoSmall').animate({opacity: '0'}, {duration:300, queue:false});
                $(this).animate({opacity: '.5'}, {duration:100, queue:false});
                });
        $('#au').hover(function(){
                $(this).find('p').animate({left: '-2.25em', top:'-.75em', fontSize: '1.5em'}, {duration:100, queue:false});
                $(this).find('.infoSmall').animate({opacity: '.5'}, {duration:300, queue:false});
                $(this).animate({opacity: '1'}, {duration:100, queue:false});
        }, function() {
                $(this).find('p').animate({left: '-25', top:'0', fontSize: '.7em'}, {duration:100, queue:false});
                $(this).find('.infoSmall').animate({opacity: '0'}, {duration:300, queue:false});
                $(this).animate({opacity: '.5'}, {duration:100, queue:false});
                });
        
        
//        var marker = $(window).offset().top/3235232;
//     
//        $('.planetLink').click(function () {
//                
//			$('.markerContainer').stop().animate({
//				top: marker + '%'
//				}, {
//                duration:scrollSpeedGlobal,
//                queue:false
//                });
//			});
        
		// marker scroll
		$('#goSun').click(function () {
			$('.markerContainer').stop().animate({
				top:'0%'
				}, {
                duration:scrollSpeedGlobal,
                queue:false
                });
			});
		
//		$('#goMercury').click(function () {
//			$('.markerContainer').stop().animate({
//				top:'1.2877835788648%'
//				}, {
//                duration:scrollSpeedGlobal,
//                queue:false
//                });
//			});
		
		$('#goVenus').click(function () {
			$('.markerContainer').stop().animate({
				top:'2.4024728117222%'
				}, {
                duration:scrollSpeedGlobal,
                queue:false
                });
			});
		$('#goEarth').click(function () {
			$('.markerContainer').stop().animate({
				top:'3.3238383021659%'
				}, {
                duration:scrollSpeedGlobal,
                queue:false
                });
			});
		$('#goMars').click(function () {
			$('.markerContainer').stop().animate({
				top:'5.0631952115101%'
				}, {
                duration:scrollSpeedGlobal,
                queue:false
                });
			});
		$('#goJupiter').click(function () {
			$('.markerContainer').stop().animate({
				top:'17.2923602478132%'
				}, {
                duration:scrollSpeedGlobal,
                queue:false
                });
			});
		$('#goSaturn').click(function () {
			$('.markerContainer').stop().animate({
				top:'31.7118059561653%'
				}, {
                duration:scrollSpeedGlobal,
                queue:false
                });
			});
		
		$('#goUranus').click(function () {
			$('.markerContainer').stop().animate({
				top:'63.7858542079155%'
				}, {
                duration:scrollSpeedGlobal,
                queue:false
                });
			});
		$('#goNeptune').click(function () {
			$('.markerContainer').stop().animate({
				top:'99.5%'
				}, {
                duration:scrollSpeedGlobal,
                queue:false
                });
			});
       
       // navList menu animations  
       var panelSpeed = 100;
       var $navli = $('.navList li');
       var $lastSelected = $('.lastSelected');
       var $fullName = $('span.fullName');
       var $closeBtn = $('.closePanel');
       var menuSpeed = 150;
       
       $fullName.hide('fast');
       

        $('.navList li').click(function() {
                var $this = $(this);
                
                //if ($this.hasClass('lastSelected') == true) {
                  //      resetPanels();
                //};
                
                $navli.not('.lastSelected').find($fullName).hide(menuSpeed);
                // if full name is hidden of clicked item 
                if ($this.find($fullName).is(':hidden') == true) {
                        
                        collapsePanel($('.lastSelected'));
                        $closeBtn.fadeOut(menuSpeed);
                        $navli.removeClass('lastSelected');
                        
                        $this.find($fullName).show(menuSpeed);
                        
                        $navli.not(this).animate({
                                width: '8.75%'
                                }, {
                                duration:menuSpeed,
                                queue:false
                        });
                        $this.css('cursor', 'normal');
                        
                        $this.animate({
                                width:'30%',
                                height: '70',
                                fontSize: '1.33em',
                                borderBottomRightRadius: '1em',
                                borderBottomLeftRadius: '1em',
                                borderLeft: '5px',
                                borderRight: '5px'
                        }, {
                                duration:menuSpeed,
                                queue:false
                        });
                        
                        $this.find('.ic16').addClass('ic32').removeClass('ic16').animate({
                                width: '32px',
                                height: '32px;',
                                bottom:'1.16em'
                        }, {    duration:menuSpeed,
                                queue:false
                        });
                        $this.find($closeBtn).fadeIn(menuSpeed);
                }
                
                $this.addClass('lastSelected');
                
        });
        
        function collapsePanel($elem) {
                
                $elem.animate({
                                height: '50',
                                fontSize: '1em',
                                borderBottomRightRadius: '0px',
                                borderBottomLeftRadius: '0px'
                        }, {
                                duration:menuSpeed,
                                queue:false
                        });
                
                $elem.find('.ic32').addClass('ic16').removeClass('ic32').animate({
                                width: '32px',
                                height: '32px;',
                                bottom:'1em'
                        }, {    duration:menuSpeed,
                                queue:false
                        });
                
                
                $fullName.hide(menuSpeed);
        };
        //close tabs/ reset panel
        $('.closePanel').click(function() {
                resetPanels();
        });
        
        function resetPanels() {
                var $this = $(this);
                $navli.animate({
                        height: '50',
                        width: '11.11111%',
                        fontSize: '1em',
                        borderBottomRightRadius: '0px',
                        borderBottomLeftRadius: '0px'
                }, {
                        duration:menuSpeed,
                        queue:false
                        }
                );
                
                $fullName.hide(menuSpeed);
                $closeBtn.fadeOut(menuSpeed);
              
                $('.lastSelected').find('.ic16').animate({
                        bottom:'1em'
                }, {    duration:menuSpeed,
                        queue:false
                });
                $('.ic32').addClass('ic16').removeClass('ic32').animate({
                                width: '32px',
                                height: '32px;',
                                bottom:'1em'
                        }, {    duration:menuSpeed,
                                queue:false
                        });
       
                
        
        };
        
        //animate the background on the scroll
        //var lastScrollTop = 0;
        //        $(window).scroll(function(event){
        //           var st = $(this).scrollTop();
        //           if (st > lastScrollTop){
        //               $('.bgStars').stop().animate({top: '0%'}, {duration:1200, queue:false});
        //           } else {
        //              $('.bgStars').stop().animate({top: '0%'}, {duration:1200, queue:false});
        //           }
        //           lastScrollTop = st;
        //        });


        function meOrbit() {
            $('#mercury').stop().animate( { top:-40673, left:500, top:0, flip:true } , 27000 , 'ellipse' , function() {
                $(this).animate( { top:500, left:50655.8189655172, flip:true } , 27000 , 'ellipse' , function() {
                    $(this).animate( { top:40673, left:500, flip:true } , 27000 , 'ellipse' , function() {
                        $(this).animate( { top:500, left:-33046.8390804598, flip:true } , 270000 , 'ellipse' , function() {
                            meOrbit();
                        })
                    })
                })
            }).css({opacity: 1});
        };
        theMoonOrbit();
        
        function theMoonOrbit() {
            $('#theMoon').stop().animate( { top:0, left:291.235632183908,top:0, left:-291.235632183908, flip:true } , 27000 , 'ellipse' , function() {
                $(this).animate( { top:-260.488505747127, left:0, flip:true } , 27000 , 'ellipse' , function() {
                    $(this).animate( { top:0, left:291.235632183908, flip:true } , 27000 , 'ellipse' , function() {
                        $(this).animate( { top:260.488505747127, left:0, flip:true } , 270000 , 'ellipse' , function() {
                            theMoonOrbit();
                        })
                    })
                })
            }).css({opacity: 1});
        };
        theMoonOrbit();
        
        function ioOrbit() {
            $('#io').stop().animate( { top:0, left:-304.166666666667, flip:true } , 1769 , 'ellipse' , function() {
                $(this).animate( { top:404.424137931035, left:51.35, flip:true } , 1769 , 'ellipse' , function() {
                    $(this).animate( { top:0, left:406.866666666667, flip:true } , 1769 , 'ellipse' , function() {
                        $(this).animate( { top:-301.724137931034, left:51.35, flip:true } , 1769 , 'ellipse' , function() {
                            ioOrbit();
                        })
                    })
                })
            }).css({opacity: 1});
        };
        ioOrbit();
        
        
        
        
        
	});
        
        

//$('.clickable').not(this);


        




