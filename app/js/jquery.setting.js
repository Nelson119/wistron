'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global  $ */
$(document).ready(function() {

    //相簿集輪播
    $('#gallery-area').owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        loop: true,
        dots: true,
        items: 1,
        autoWidth: true,
        center: true,
        navText: [', ']
    });

    //推薦專區輪播
    $('#recommend-area').owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoWidth: true,
        items: 5,
        margin: 16,
        center: true
    });

    //廣告區塊輪播
    $('#ad-area1').owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoWidth: true,
        items: 1,
        center: true
    });

    $('#ad-area2').owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoWidth: true,
        item: 1,
        center: true
    });

    $('#ad-area3').owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoWidth: true,
        items: 1,
        center: true
    });

    $('#ad-area4').owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoWidth: true,
        items: 1,
        center: true
    });

    $('#ad-area5').owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoWidth: true,
        items: 1,
        center: true
    });

    // 相簿列表頁輪播
    $('#video-gallery').owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoWidth: true,
        items: 3,
        margin: 32,
        center: true
    });

    // 大事紀頁籤切換
    // 預設顯示第一個 Tab
    var showTab = 0;
    $('.location-tab').each(function() {
        // 目前的頁籤區塊
        var $tab = $(this);

        var $defaultLi = $('ul.tabs li', $tab).eq(showTab).addClass('active');
        $($defaultLi.find('a').attr('href')).siblings().hide();

        // 當 li 頁籤被點擊時...
        // 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
        $('ul.tabs li', $tab).click(function() {
            // 找出 li 中的超連結 href(#id)
            var $this = $(this),
                clickTab = $this.find('a').attr('href');
            // 把目前點擊到的 li 頁籤加上 .active
            // 並把兄弟元素中有 .active 的都移除 class
            $this.addClass('active').siblings('.active').removeClass('active');
            // 淡入相對應的內容並隱藏兄弟元素
            $(clickTab).stop(false, true).fadeIn().siblings().hide();

            return false;
        }).
        find('a').focus(function() {
            this.blur();
        });
    });

    // 大事紀年份卷軸切換
    var scrolled = 0;
    $('.scroll-btn').click(function() {
        scrolled = scrolled + 300;
        $('.cyears-tabs').animate({
            scrollTop: scrolled
        });
    });

    // 大事紀客戶DEMO用
    $('#2017events').click(function() {
        $('.events2017').fadeIn(500);
        $('.events2016').hide();
        $('.events2015').hide();
        $('.events2014').hide();
    });

    $('#2016events').click(function() {
        $('.events2016').fadeIn(500);
        $('.events2017').hide();
        $('.events2014').hide();
        $('.events2015').hide();
    });

    $('#2015events').click(function() {
        $('.events2015').fadeIn(500);
        $('.events2016').hide();
        $('.events2017').hide();
        $('.events2014').hide();
    });

    $('#2014events').click(function() {
        $('.events2014').fadeIn(500);
        $('.events2015').hide();
        $('.events2016').hide();
        $('.events2017').hide();
    });

    $('#company').click(function() {
        $('.company').fadeIn(500);
        $('.sign').hide();
        $('.department').hide();
    });

    $('#sign').click(function() {
        $('.sign').fadeIn(500);
        $('.department').hide();
        $('.company').hide();
    });

    $('#department').click(function() {
        $('.department').fadeIn(500);
        $('.company').hide();
        $('.sign').hide();
    });

    $('#allnews').click(function() {
        $('.allnews').fadeIn(500);
        $('.companys').hide();
    });

    $('#companys').click(function() {
        $('.companys').fadeIn(500);
        $('.allnews').hide();
    });

    // 相簿集詳細輪播
    // We only want these styles applied when javascript is enabled
    $('div.navigation').css({ 'width': '165px', 'float': 'left' });
    $('div.content').css('display', 'block');

    // Initially set opacity on thumbs and add
    // additional styling for hover effect on thumbs
    var onMouseOutOpacity = 0.67;
    $('#thumbs ul.thumbs li').opacityrollover({
        mouseOutOpacity: onMouseOutOpacity,
        mouseOverOpacity: 1.0,
        fadeSpeed: 'fast',
        exemptionSelector: '.selected'
    });

    // Initialize Advanced Galleriffic Gallery
    if($('#thumbs').length){
        var numThumbs = $('#page').length ? 12 : 18;
        
        var gallery = $('#thumbs').galleriffic({
            delay: 2500,
            numThumbs: numThumbs,
            preloadAhead: 10,
            enableTopPager: false,
            enableBottomPager: true,
            maxPagesToShow: 2,
            imageContainerSel: '#slideshow',
            ssControlsContainerSel: '#controls',
            navControlsContainerSel: '#nav',
            captionContainerSel: '#caption',
            loadingContainerSel: '#loading',
            renderSSControls: false,
            renderNavControls: true,
            playLinkText: 'Play Slideshow',
            pauseLinkText: 'Pause Slideshow',
            prevLinkText: '&#xf053;',
            nextLinkText: '&#xf054;',
            nextPageLinkText: '&#xf054;',
            prevPageLinkText: '&#xf053;',
            enableHistory: false,
            autoStart: false,
            syncTransitions: false,
            defaultTransitionDuration: 900,
            onSlideChange: function(prevIndex, nextIndex) {
                // 'this' refers to the gallery, which is an extension of $('#thumbs')
                this.find('ul.thumbs').children()
                    .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
                    .eq(nextIndex).fadeTo('fast', 1.0);
    
                this.$captionContainer.find('div.photo-index')
                    .html('照片總數： ' + (nextIndex + 1) + ' of ' + this.data.length);
            },
            onPageTransitionOut: function(callback) {
                this.fadeTo('fast', 0.0, callback);
            },
            onPageTransitionIn: function() {
                this.fadeTo('fast', 1.0);
            }
        });
    }


    /* 大事紀選單效果 */
    if($('[role=events]').length){
        (function(container){
            var opt = $('#scroll', container).data();
            console.log(opt);
            var count = $('li', container).length;
            opt.vertical = true;
            opt.infinite = false;
            opt.centerMode = false;
            $('#scroll', container).slick(opt).on('afterChange', function(e, slick, index) {
                console.log(slick, index);
                if(index == 0){
                    $('.slick-prev').addClass('fade').removeClass('in');
                    $('.slick-next').addClass('in');
                }
                if(index >= slick.slideCount - 10){
                    $('.slick-next').addClass('fade').removeClass('in');
                    $('.slick-prev').addClass('in');
                }
            });
            if(opt.initialSlide == 0){
                $('.slick-prev').addClass('fade').removeClass('in');
                $('.slick-next').addClass('in');
            }
            if(opt.initialSlide >= count - 10){
                $('.slick-next').addClass('fade').removeClass('in');
                $('.slick-prev').addClass('in');
            }

        }($('[role=events]')));
    }
    /* 大事紀選單效果 */


    /* 大聲公效果 */
    if($('.marquee').length){
        var opt = $('.marquee').data();        
        var marquee = $('.marquee');
        var speed = opt.speed || 10;
        var vspeed = opt.vspeed || 1;
        var gap = opt.gap || 5;

        setInterval(function(){
            var active = $('li.active', marquee);
            var next = active.next().length ? active.next() : $('li:first', marquee);
            // console.log('next', next);
            next.addClass('active').siblings().removeClass('active');
            marq();
        }, gap*1000 + speed*1000 +vspeed*1000);

        TweenMax.set($('li', marquee), {
            top: '1.5em',
            left: 0
        });
        marq();

        function marq(){
            var active = $('li.active', marquee);
            var prev = active.prev().length ? active.prev() : $('li:last', marquee);
            TweenMax.set(prev, {
                top: '0em',
                left: 0
            });
            TweenMax.set(active, {
                top: '1.5em',
                left: 0
            });
            TweenMax.to(prev, speed, {
                left: marquee.width() < prev.width() ? marquee.width() - prev.width() : 0
            });
            TweenMax.to(prev, vspeed, {
                top: '-1.5em',
                delay: speed
            });
            TweenMax.to(active, vspeed, {
                top: '0em',
                delay: speed
            });
        }
    }
    /* 大聲公效果 */

    
    /* 訊息視窗 */
    var vb = $('.veno').venobox({
        cb_post_open  : function(obj, gallIndex, thenext, theprev){
            $('.veno-close').on('click', function(){
                vb.VBclose();
            });
        },
    
    });
    /* 訊息視窗 */


    /* 浮水印 */
    if($('.watermark-container').length){
        var container = $('.watermark-container');
        var watermarkText = $('[data-watermark]').data('watermark');
        // console.log(container);
        // console.log(watermarkText);
        container.each(function(){
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');

            var option = $('[data-watermark]').data();
            var tilt = option.tilt = option.tilt * Math.PI / 180 || -15 * Math.PI / 180;
            var fontSize = option.fontSize = option.fontSize || 24;
            var gapWidth = option.gapWidth = option.gapWidth || 224;
            var gapHeight = option.gapHeight = option.gapHeight || 86;
            var color = option.color = option.color || '#e8e8e8';
            var font = option.font = fontSize + 'px Arial';
            var tiltOffset = option.tiltOffset =  Math.sin(-tilt) * (ctx.measureText(watermarkText).width + option.fontSize);
            // console.log(option);
            tiltOffset = 80;
            
            ctx.save();
            canvas.width = ctx.measureText(watermarkText).width * 2 + gapWidth*1.5;
            canvas.height = fontSize*2 + gapHeight * 2;
            ctx.font = font;
            ctx.fillStyle = color;
            ctx.rotate(tilt);
            ctx.fillText(watermarkText, gapWidth, gapHeight + fontSize * 2 + tiltOffset);
            ctx.fillText(watermarkText, 0, fontSize + tiltOffset);

            
            var dataurl = canvas.toDataURL();
            var watermark = document.createElement('i');
            watermark.style.backgroundImage = 'url('+dataurl+')';
            $(watermark).addClass('watermark').appendTo(this);
        });
    }


    /* 中英切換 */
    if($('a.lang').length){
        // var lang = $('.lang');
        $('a.lang').on('click', function(e){
            var lang = $('html').attr('lang');
            if(/en.*/.test(lang)){
                $('html').attr('lang', 'zh');
            }else if(/zh.*/.test(lang)){
                $('html').attr('lang', 'en');
            }else{
                $('html').attr('lang', 'zh');
            }
        });
    }


    /* 搜尋 */
    if($('[role=search]').length){
        var searchContainer = $('[role=search]');
        var searchOpt = window.searchOpt = {
            page: 1,
            limits: 10
        };
        if(getParam('q')){
            search({
                keyword: getParam('q')
            });
        }
        function initfilters(filters, currentFilter){
            var tabs = $('.tabs', searchContainer);
            var menu = $('.filters', searchContainer);
            $.each(filters, function(){
                var label = $('<label></label>').html(this.name);
                if(this.name == currentFilter.name){
                    label.addClass('active');
                    $.each(this.filterContents, function(){
                        var label = $('<label></label>').html(this);
                        var li = $('<li></li>').append(label);
                        if(this == currentFilter.content){
                            label.addClass('active');
                        }
                        menu.append(li);
                    });
                }
                tabs.append(label);
            });
        }
        function result(data){
            var list = $('.result .list', searchContainer);
            $.each(data, function(){
                var article = this;
                var tpl = $('.tpl .'+article.type+'-result', searchContainer).clone();
                $.each(article, function(field, value){
                    $('.'+field, tpl).html(value);
                });
                var li = $('<li></li>').append(tpl);
                list.append(li);
            });
        }
        function search(opt){
            if(opt){
                $.each(opt, function(field, value){
                    searchOpt[field] = value;
                });
            }
            $.ajax({
                url: 'search.json',
                data: searchOpt,
                method: 'get'
            }).success(function(r){
                initfilters(r.filters, r.currentFilter)
                result(r.data);
            }).fail(function(e){
                console.log(e.responseText);
            });
        }
    }
});
function getParam(name){
    var r = new RegExp('^.*[?&]'+name+'[=]([^&]+).*$', 'i');
    if(!r.test(location.search)){
        return null;
    }
    var value = location.search.replace(r,'$1');
    return decodeURIComponent(value);
};
