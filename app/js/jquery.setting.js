$(document).ready(function() {

    //相簿集輪播
    $("#gallery-area").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        loop: true,
        dots: true,
        items: 1,
        autoWidth: true,
        center: true,
        navText: ["", ""]
    });

    //推薦專區輪播
    $("#recommend-area").owlCarousel({
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
    $("#ad-area1").owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoWidth: true,
        items: 1,
        center: true,
    });

    $("#ad-area2").owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoWidth: true,
        item: 1,
        center: true,
    });

    $("#ad-area3").owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoWidth: true,
        items: 1,
        center: true
    });

    $("#ad-area4").owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoWidth: true,
        items: 1,
        center: true
    });

    $("#ad-area5").owlCarousel({
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
    $("#video-gallery").owlCarousel({
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
    var _showTab = 0;
    $('.location-tab').each(function() {
        // 目前的頁籤區塊
        var $tab = $(this);

        var $defaultLi = $('ul.tabs li', $tab).eq(_showTab).addClass('active');
        $($defaultLi.find('a').attr('href')).siblings().hide();

        // 當 li 頁籤被點擊時...
        // 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
        $('ul.tabs li', $tab).click(function() {
            // 找出 li 中的超連結 href(#id)
            var $this = $(this),
                _clickTab = $this.find('a').attr('href');
            // 把目前點擊到的 li 頁籤加上 .active
            // 並把兄弟元素中有 .active 的都移除 class
            $this.addClass('active').siblings('.active').removeClass('active');
            // 淡入相對應的內容並隱藏兄弟元素
            $(_clickTab).stop(false, true).fadeIn().siblings().hide();

            return false;
        }).
        find('a').focus(function() {
            this.blur();
        });
    });

    // 大事紀年份卷軸切換
    var scrolled = 0;
    $(".scroll-btn").click(function() {
        scrolled = scrolled + 300;
        $(".cyears-tabs").animate({
            scrollTop: scrolled
        });
    });

    // 大事紀客戶DEMO用
    $("#2017events").click(function() {
        $(".events2017").fadeIn(500);
        $(".events2016").hide();
        $(".events2015").hide();
        $(".events2014").hide();
    });

    $("#2016events").click(function() {
        $(".events2016").fadeIn(500);
        $(".events2017").hide();
        $(".events2014").hide();
        $(".events2015").hide();
    });

    $("#2015events").click(function() {
        $(".events2015").fadeIn(500);
        $(".events2016").hide();
        $(".events2017").hide();
        $(".events2014").hide();
    });

    $("#2014events").click(function() {
        $(".events2014").fadeIn(500);
        $(".events2015").hide();
        $(".events2016").hide();
        $(".events2017").hide();
    });

    $("#company").click(function() {
        $(".company").fadeIn(500);
        $(".sign").hide();
        $(".department").hide();
    });

    $("#sign").click(function() {
        $(".sign").fadeIn(500);
        $(".department").hide();
        $(".company").hide();
    });

    $("#department").click(function() {
        $(".department").fadeIn(500);
        $(".company").hide();
        $(".sign").hide();
    });

    $("#allnews").click(function() {
        $(".allnews").fadeIn(500);
        $(".companys").hide();
    });

    $("#companys").click(function() {
        $(".companys").fadeIn(500);
        $(".allnews").hide();
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
    if($('#thumbs').lengh){
        
        var gallery = $('#thumbs').galleriffic({
            delay: 2500,
            numThumbs: 12,
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
});