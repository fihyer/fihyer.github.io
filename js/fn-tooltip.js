$(document).ready(function(){
    $(".tooltip-turnright").each(function(){
        var id = $(this).children("a").attr("href").substr(1);
            footnote = $(document.getElementById(id));
            outer_wrapper = $("<span>",{"class":"tooltip-item"});
            inner_wrapper = $("<span>",{"class":"tooltip-content"});
            // footnote.find(".footnote-backref").remove();
            $(this).append(outer_wrapper.append(inner_wrapper.html(footnote.html())));
    });
});