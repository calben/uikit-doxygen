$(document).ready(function() {

    $("#main-nav").addClass("uk-nav").removeAttr("id");
    $("div.headertitle").addClass("uk-article-title").removeClass("headertitle");
    $("div.title").contents().unwrap();

    $("ul.tablist").addClass("uk-nav uk-nav-pills");
    $("li.current").addClass("uk-active");

});