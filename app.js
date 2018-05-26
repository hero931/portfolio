// Home
$('header h1 a').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $(".bio").offset().top
    });
})

// About Me
$('#nav-bio').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $(".bio").offset().top
    });
})

// Skills
$('#nav-skills').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $(".skills").offset().top
    });
})

// Projects
$('#nav-projects').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $(".projects").offset().top
    });
})

// Contact
$('#nav-contact').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    });
})

// Back to top
$('button').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $(".pic").offset().top
    });
})
