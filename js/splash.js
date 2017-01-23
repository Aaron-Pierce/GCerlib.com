/**
 * Created by aaron on 1/22/17.
 */
$(document).ready(function () {


$('.welc').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    // alert('done');
    $(".future").addClass("animated slideInLeft");
    $(".future").removeClass("none");
    $('.future').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(".botball").addClass("animated slideInUp");
        $(".botball").removeClass("none");



    });
    });
});