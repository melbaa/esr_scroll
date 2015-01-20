// ==UserScript==
// @name        esr scroll
// @namespace   mel
// @description scroll to next/prev new comment
//// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @include *.esreality.com*
// @version     1
// @grant       none
// ==/UserScript==

var curr_comment = -1;
var comments_selector = ".commentboxnew";
var DOWN = 40;
var UP = 38;

function scrollTo(selector, elem_num) {
    var comments = $(selector);
    
    elem_num = Math.min(comments.length-1, elem_num);
    elem_num = Math.max(-1, elem_num)
    comments.get(elem_num).scrollIntoView();
    console.log(elem_num)
    return elem_num
}

$(window).load(function() {
    $("html").keyup(function(evt) {
        if (evt.ctrlKey && evt.keyCode == UP) {
            curr_comment -= 1;
            curr_comment = scrollTo(comments_selector, curr_comment);
        } else if (evt.ctrlKey && evt.keyCode == DOWN) {
            curr_comment += 1;
            curr_comment = scrollTo(comments_selector, curr_comment);
        }
    });
});