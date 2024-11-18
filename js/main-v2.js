/* 메인 화면용 gnb 호버 애니메이션 */
$(document).ready(function () {
  $(".gnb.main .main-dep1").on("mouseover", function () {
    $(".gnb.main").addClass("is-open");
  });
  $(".gnb.main .main-dep1").on("mouseleave", function () {
    $(".gnb.main").removeClass("is-open");
  });
});

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







