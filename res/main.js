$(document).ready(function() {
    imgToInlineSVG();
});

function imgToInlineSVG(){
    /**
    * Code from http://stackoverflow.com/a/35126817 AS-IS
    * converts IMG to inline SVG
    */
    $('img[src$=".svg"]').each(function() {
        var $img = jQuery(this);
        var imgURL = $img.attr('src');
        var attributes = $img.prop("attributes");

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Remove any invalid XML tags
            $svg = $svg.removeAttr('xmlns:a');

            // Loop through IMG attributes and apply on SVG
            $.each(attributes, function() {
                $svg.attr(this.name, this.value);
            });

            // Replace IMG with SVG
            $img.replaceWith($svg);
        }, 'xml');
    });
}

function selectNavigationItem(name){
    $('nav a').removeClass('current');
    $('nav a#' + name).addClass('current');
}

function openNavigationDrawer(){
    $('nav').css('left', '0px');
    $('div#opened-drawer-content').css('display', 'block');
}

function closeNavigationDrawer(){
    $('nav').css('left', '');
    $('div#opened-drawer-content').css('display', '');
}
