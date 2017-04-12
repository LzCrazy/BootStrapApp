/**
 * Created by jalance on 17/4/11.
 */
$(function () {
    $('.n_user').mouseover(function () {
        $('.user_dropdown').stop().slideDown(100);
    }).mouseout(function () {
        $('.user_dropdown').stop().slideUp(100);
    })
})