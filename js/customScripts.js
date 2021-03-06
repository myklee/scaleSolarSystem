$(function() {
        
        var scrollSpeedGlobal = null;
        var scrollSpeed = null;
        var solarTotalHeight = $('#planetContainer').height();
        var auHeight = null;
        
        
        // reset to top when page refreshed !!
        $(window).unload(function() {
                $(window).scrollTop(0);
        });
        
        $('a').bind('click',function(event){
            var $this = $(this);
            var current = $(window).scrollTop();
            var $anchorRef = $this.attr('href');
            var destinationOffset = $($anchorRef).offset().top - $(window).height()/2; 
            var scrollSpeed = Math.abs((current - destinationOffset) - Math.abs($(window).height()))/100;
            
            //NOTE: scrollSpeed is approximately 140 million km/s
            
            $('html, body').stop().animate({
                scrollTop: $($this.attr('href')).offset().top
            }, {
                duration:scrollSpeed,
                queue:false
                });
            event.preventDefault();
            scrollSpeedGlobal = scrollSpeed;
        });
        // turn on and off text
        $('#toggleCard').click(function() {
            $('.card').toggle('fast');
            
        });
        
         
        $('.navList li').hover(function() {
                var $this = $(this);
                $this.animate({'opacity':'1'}, {duration:200, easing:'swing', queue:false});
                $this.addClass('color');
            }, function() {
                var $this = $(this);
                $this.animate({'opacity':'.5'}, {duration:200, easing:'swing', queue:false});
                if ($this.hasClass('lastSelected')) {
                }else {
                        $this.removeClass('color');
                };
            });
        
        
        // show or hide info
        function showInfo(e) {
                e.find('.infoSmall').css('display','block').animate({opacity: '1'}, {duration:300, queue:false});
        }
        function hideInfo(e) {
                e.find('.infoSmall').css('display','none').animate({opacity: '0'}, {duration:300, queue:false});
        }
        //to center align vertically the planet (positioning the anchor with negative top value)
        var height = $(window).height();
        $('.planetAnchor').css('top', -height/2.1);
        
        $('.bgRuler').hover(function(){
                var $this = $(this);
                $this.find('p').animate({left: '-2.25em', top:'-.75em', fontSize: '1.5em'}, {duration:100, queue:false});
                showInfo($this);
                $this.animate({opacity: '.66'}, {duration:100, queue:false});
        }, function() {
                var $this = $(this);
                $this.find('p').animate({left: '-25', top:'0', fontSize: '.7em'}, {duration:100, queue:false});
                hideInfo($this);
                $this.animate({opacity: '.3'}, {duration:100, queue:false});
                });
        
        //Get and set the value of an au in px (appx the distance between the earth and the sun)
        var $auArray = $('#earth').prevAll('.planet');
        var au = 0;
        $auArray.each(function() {
                au += parseFloat($(this).css('margin-top'));
                });
        au += parseFloat($('#earth').css('margin-top'));
        
        var $au = $('#au');
        
        //set au as percentage for ruler
        function setAu() {
                auHeight = (au/solarTotalHeight)*100;
                $au.css('height', auHeight + '%');
                $('.rulerGrid').css('height', auHeight + '%');
                $('#au').height($('.rulerGrid').height());
        };
        setAu();
        $(window).resize(function() {
                $('#au').height($('.rulerGrid').height());
        });
       
        $('#mainInfo').click(function(){
                var $this = $(this);
                $this.animate({width: '80%', right:'10%', height: '25%', opacity: '.66'}, {duration:100, queue:false},
                              {//grab the correct info and show it
                                //show close button
                                });
        });
        //
        //$au.hover(function(){
        //        var $this = $(this);
        //        $this.find('p').animate({left: '-2.25em', top:'-.75em', fontSize: '1.33em'}, {duration:100, queue:false});
        //        
        //        $this.animate({opacity: '.7'}, {duration:100, queue:false});
        //}, function() {
        //        var $this = $(this)
        //        $this.find('p').animate({left: '-35', top:'0', fontSize: '1em'}, {duration:100, queue:false});
        //
        //        $this.animate({opacity: '.5'}, {duration:100, queue:false});
        //        });
        //markerHalf height
        //$('.markerHalf').css('height', auHeight + '%');
         //universal marker scroll
        $('.planetLink').click(function () {              
                var findAnchor = $(this).prop('href');
                var anchorName = findAnchor.split('#');
                var anchorID = anchorName[1];
                
                var thisAnchorMargin = parseFloat($('.planetAnchor[id='+ anchorID +']').parent('.planet').css('margin-top')) ;
                
                var $allPrev = $('.planetAnchor[id='+ anchorID +']').parent().prevAll('.planet');
                var sum = 0;
                $allPrev.each(function() {
                        sum += parseFloat($(this).css('margin-top'));
                    });
                sum += thisAnchorMargin;
                // make sure the event uses the correct solar height 
                solarTotalHeight = parseFloat($('#planetContainer').height());
                var percentTraveled = (sum/solarTotalHeight)*100;
                
            $('.markerContainer').stop().animate({
                top: percentTraveled + '%'
                }, {
                duration:scrollSpeedGlobal,
                queue:false
                });
            });
        $(window).scroll(function() {
                $('.markerContainer').stop().css({
                  top: ($(window).scrollTop()/solarTotalHeight)*100 + '%'
                  });
                
                
        });
        // navList menu animations  
        var panelSpeed = 100;
        var $navli = $('.navList li');
        var $lastSelected = $('.lastSelected');
        var $fullName = $('span.fullName');
        var $closeBtn = $('.navList .closePanel');
        var menuSpeed = 150;
        
        $fullName.hide('fast');
        
        //set inital nav item widths        
        $navli.width(parseFloat(100/$navli.length) + '%');
        
        $('.navList li').click(function() {
                var $this = $(this);
                $navli.not(this).removeClass('color');
                $navli.not('.lastSelected').find($fullName).hide(menuSpeed);
                // if full name is hidden of clicked item 
                if ($this.find($fullName).is(':hidden') == true) {
                        collapsePanel($('.lastSelected'));
                        $closeBtn.fadeOut(menuSpeed);
                        $navli.removeClass('lastSelected');
                        
                        $this.find($fullName).show(menuSpeed);
                        
                        $navli.not(this).animate({
                                width: parseFloat(80/$navli.not(this).length) + '%'
                                }, {
                                duration:menuSpeed,
                                queue:false
                        });
                        $this.css('cursor', 'normal');
                        
                        $this.animate({
                                width:'20%',
                                height: '58',
                                fontSize: '1.16em',
                                borderBottomRightRadius: '8px',
                                borderBottomLeftRadius: '8px',
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
                        width: parseFloat(100/$navli.length) + '%',
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
        // moons
        function theMoonOrbit() {
            $('#theMoon').stop().animate( { top:0, left:-291.235632183908, flip:true } , 27000 , 'ellipse' , function() {
                $(this).animate( { top:260.488505747127, left:0, flip:true } , 27000 , 'ellipse' , function() {
                    $(this).animate( { top:0, left:291.235632183908, flip:true } , 27000 , 'ellipse' , function() {
                        $(this).animate( { top:-260.488505747127, left:0, flip:true } , 27000, 'ellipse' , function() {
                            theMoonOrbit();
                        })
                    })
                })
            }).css({opacity: 1});
        };
        theMoonOrbit();
        
        $('#theMoon .info').click(function(){
                $('#theMoon .infoPanel').toggle(100);
        })
        $('#theMoon .infoPanel button').click(function(){
                $('#theMoon .infoPanel').hide(100);
        })
        
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
        
        // controls/switches
        var $toIntro = $('#toIntro');
        $toIntro.click(function(){
                $('.markerContainer').stop().animate({
                top: '0%'
                }, {
                duration:scrollSpeedGlobal,
                queue:false
                });
                resetPanels();
                $navli.removeClass('color').removeClass('lastSelected');
                $(window).scrollTop(0)
                
        })
        
        $('#freeScroll').click(function() {
                $('body').toggleClass('freeScroll ');
        });
        
        $('#showDwarf').click(function() {
                $('#pluto').toggle(function() {
                        solarTotalHeight = ($('#planetContainer').height());
                        setAu();
                });
                $(this).toggleClass('switchOn');
                
                
        });
        $('#testExpandOn').click(function() {
                $('.testExpand').toggle(100, 'swing', function() {
                        
                });
                $(this).toggleClass('switchOn');
        });
        
        // Create the ruler grid in au
        function drawAuGrid() {
                var $gridCount = $('.rulerGrid');
                var gridHeight = 0;
                $('.rulerGrid').css('height', auHeight + '%');
                var rulerHeight = parseFloat($('.bgRuler').height());
                
                while (gridHeight < rulerHeight) {
                        var auHeight = (au/solarTotalHeight)*100;
                        $('.bgRuler').append('<div class=\"rulerGrid\"></div>');
                        $gridCount.each(function() {
                                gridHeight += parseFloat($(this).css('height'));
                                gridHeight = gridHeight + 2;
                                
                        });
                        $('.rulerGrid').css('height', auHeight + '%');
                        setAu();
                        $('.bgRuler').append('<div class=\"rulerGrid\"></div>');
                        
                };
        };
        drawAuGrid();
        
        
        //counter
        $(window).scroll(function(){
        var $counter = $('.counter');
        var currentPx = ($(window).scrollTop() - 1955)*1392 + ' km';
        $counter.text(currentPx).digits();
        
        });
        
        //plugin for adding commas to numbers
        $.fn.digits = function(){ 
            return this.each(function(){ 
                $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
            })
        }
     
        
        
});
        
        
// for reference (inner solar system)       
//      marker scroll 166934
//		$('#goSun').click(function () {
//			$('.markerContainer').stop().animate({
//				top:'0%'
//				}, {
//                duration:scrollSpeedGlobal,
//                queue:false
//                });
//			});
//		
//		$('#goMercury') top:'1.2877835788648			
//		$('#goVenus') top:'2.4024728117222%'				
//		$('#goEarth') top:'3.3238383021659%'				
//		$('#goMars') top:'5.0631952115101%'				
//		$('#goJupiter') top:'17.2923602478132%'				
//		$('#goSaturn') top:'31.7118059561653%'		
//		$('#goUranus') top:'63.7858542079155%'				
//		$('#goNeptune') top:'99.5%'
//	
//      $('.clickable').not(this);


        




