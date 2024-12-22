$(document).ready(function(){
    function gnbshow(){
        $(".gnb.main").addClass("is-open");
        $('.black-bg').addClass('on');
    }
    
    function gnbhide(){
        $(".gnb.main").removeClass("is-open");
        $('.black-bg').removeClass('on');
    }
    
    $(document).on('mouseover', '.main-dep1 , .gnb-in, .gnb-bg', function(){
        gnbshow()
    })

    $(document).on('mouseleave', '.main-dep1 , .gnb-in, .gnb-bg', function(){
        gnbhide()
    })

    $('.all-menu-toggle').click(function(){
        var hasClass = $(this).hasClass('is-active');

        if(hasClass){
            $(this).removeClass('is-active')
            gnbhide()
        } else {
            $(this).addClass('is-active')
            gnbshow();
            $('.gnb').unbind();
        }
        return false;
    })
})

/* 전체 메뉴 활성화 */ 
$('.all-menu').on('click',function(){
    $('.all-menu-box').addClass('is-open')
    $('body').css({
        'overflow': 'hidden',
        'height': '100vh'
    })
})
$('.all-menu-close').on('click', function(){
    $('.all-menu-box').removeClass('is-open')
    $('body').css({
        'overflow': '',
        'height': ''
    })
})

$('.sidebar .nav.sub-menu .nav-item .nav-link').on('click',function(){
    $('.sidebar .nav.sub-menu .nav-item').removeClass('active')
    $(this).parent().toggleClass('active')
})

/* sidebar 스타일 */
$('.sidebar .nav .nav-item.depth-1 > a').on('click', function(){
    var hasActiveClass = $(this).hasClass('is-active')
    if(hasActiveClass){
        $(this).removeClass('is-active')
    } else {
        $('.sidebar .nav .nav-item.depth-1 > a').removeClass('is-active')
        $(this).addClass('is-active')
    }
})







