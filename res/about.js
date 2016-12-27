function onSkillsButtonClick(){
    // $("div#about_card").hide(500);
    // $("div#skills_card").show(500)
    $("#about_card #about_part").toggleClass('hidden', true);
    $("#about_card #skills_part").toggleClass('hidden', false);
}

function backToAboutCardFromSkills(){
    // $("div#skills_card").hide(500);
    // $("div#about_card").show(500)
    $("#about_card #about_part").toggleClass('hidden', false);
    $("#about_card #skills_part").toggleClass('hidden', true);
}

function showSkillDetails(name){
    //For now this animation will do
    //TODO someting wayyyyy more fancy
    $('#skills_back_to_all').toggleClass('hidden', false);
    $('#skills_title_bar').toggleClass('hidden', true);
    $('.skill-wrapper:not(#' + name + ')').toggleClass('hidden', true);
    $('.skill-wrapper#' + name).toggleClass('grid-item', false);
    $('#rating_' + name).toggleClass('hidden', false);
    $('#description_' + name).toggleClass('hidden', false);
}

function backToAllSkills(){
    $('#skills_back_to_all').toggleClass('hidden', true);
    $('#skills_title_bar').toggleClass('hidden', false);
    $('.skill-wrapper').toggleClass('hidden', false);
    $('.skill-wrapper').toggleClass('grid-item', true);
    $('.skill-rating').toggleClass('hidden', true);
    $('.skill-description').toggleClass('hidden', true);
}

var fullStarSvg =
'<svg style="width:24px;height:24px" viewBox="0 0 24 24">'+
    '<path class="fill" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />'+
'</svg>';

var emptyStarSvg =
'<svg style="width:24px;height:24px" viewBox="0 0 24 24">' +
    '<path fill="#000000" d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,' +
    '10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,' +
    '8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />' +
'</svg>';

function populateRating(name, val){
    var root = $('#rating_' + name);
    var i = 0;
    do{
        if (i < val){
            root.append(fullStarSvg)
        }else{
            root.append(emptyStarSvg);
        }
        i++;
    }while (i < 5);
}
