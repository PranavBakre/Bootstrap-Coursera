$(document).ready(() => {
    $('#Reserve').click(()=> {
        $('#ReserveTable').modal();
    });
    $('#login').click(() => {
        $('#loginModal').modal();
    });
    $('#carousel').carousel({interval:2000});
    $('#carousel-button').click(() => {
        if ($('#carousel-button').children('span').hasClass('fa-pause')) {
            $('#carousel-button').children('span').removeClass('fa-pause');
            $('#carousel-button').children('span').addClass('fa-play');
            $('#carousel').carousel('pause');
        }
        else {
            $('#carousel-button').children('span').removeClass('fa-play');
            $('#carousel-button').children('span').addClass('fa-pause');
            $('#carousel').carousel('cycle');
        }
        
    });
});