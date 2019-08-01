var currentMode = 'light';
$(document).ready(function(){
    $('#mode-button').click(function() {
        toggleMode();
    });
})

function toggleMode() {
    if(currentMode == 'light'){
        showDarkMode();
    } else {
        showLightMode();
    }
}

function showDarkMode() {
    currentMode = 'dark';
    $('#mode-button').html('Light Mode');
    $('.navbar').removeClass('navbar-light bg-light').addClass('navbar-dark bg-dark');
    $('.card').addClass('bg-dark text-white');
    $('.course-table').css('color', 'white');
}

function showLightMode() {
    currentMode = 'light';
    $('#mode-button').html('Dark Mode');
    $('.navbar').removeClass('navbar-dark bg-dark').addClass('navbar-light bg-light');
    $('.card').removeClass('bg-dark text-white');
    $('.course-table').css('color', 'darkred');
}
    