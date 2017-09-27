$(document).ready(function() {
    $("#btn-1").click(function() {
        $("#question-1").show()
        $("#btn-1").hide()
        $(".main-text").hide()
        $('html, body').animate({ scrollTop: $('.question').offset().top}, 'slow');
    });

    $("#btn-2").click(function() {
        $("#question-2").show()
        $("#question-1").hide()
        $('html, body').animate({ scrollTop: $('.question').offset().top + 870 }, 'slow');
    });

    $("#btn-3").click(function() {
        $("#question-3").show()
        $("#question-2").hide()
        $('html, body').animate({ scrollTop: $('.question').offset().top + 870 }, 'slow');
    });

    $("#btn-4").click(function() {
        $("#question-4").show()
        $("#question-3").hide()
        $('html, body').animate({ scrollTop: $('.question').offset().top + 870 }, 'slow');
    });

    $("#btn-5").click(function() {
        $("#question-5").show()
        $("#question-4").hide()
        $('html, body').animate({ scrollTop: $('.question').offset().top + 870 }, 'slow');
    });

    $("#btn-6").click(function() {
        $("#question-6").show()
        $("#question-5").hide()
        $('html, body').animate({ scrollTop: $('.question').offset().top + 870 }, 'slow');
    });

    $("#btn-7").click(function() {
        $("#question-7").show()
        $("#question-6").hide()
        $('html, body').animate({ scrollTop: $('.question').offset().top + 870 }, 'slow');
    });

    $("#btn-8").click(function() {
        $("#question-8").show()
        $("#question-7").hide()
        $('html, body').animate({ scrollTop: $('.question').offset().top + 870 }, 'slow');
    });

    $("#btn-9").click(function() {
        $("#question-9").show()
        $("#question-8").hide()
        $('html, body').animate({ scrollTop: $('.question').offset().top + 870 }, 'slow');
    });

    $("#btn-10").click(function() {
        $("#question-10").show()
        $("#question-9").hide()
        $('html, body').animate({ scrollTop: $('.question').offset().top + 870 }, 'slow');
    });

    $("#btn-11").click(function() {
        $("#progress-bar").show()
        $("#question-10").hide()
        setTimeout(function() {$(".progress-bar__btn").show()}, 1000);
        $('html, body').animate({ scrollTop: $('.question').offset().top + 870 }, 'slow');
    });

    $("#btn-12").click(function() {
        $("#result").show()
        $("#progress-bar").hide()
        $('html, body').animate({ scrollTop: $('.question').offset().top + 870 }, 'slow');
    });

    $("#1-option").click(function() {
        $("#btn-2").show()
    });

    $("#2-option").click(function() {
        $("#btn-2").show()
    });

    $("#3-option").click(function() {
        $("#btn-2").show()
    });

    $("#4-option").click(function() {
        $("#btn-3").show()
    });

    $("#5-option").click(function() {
        $("#btn-3").show()
    });

    $("#6-option").click(function() {
        $("#btn-3").show()
    });

    $("#62-option").click(function() {
        $("#btn-3").show()
    });

    $("#7-option").click(function() {
        $("#btn-4").show()
    });

    $("#8-option").click(function() {
        $("#btn-4").show()
    });

    $("#9-option").click(function() {
        $("#btn-4").show()
    });

    $("#93-option").click(function() {
        $("#btn-4").show()
    });

    $("#10-option").click(function() {
        $("#btn-5").show()
    });

    $("#11-option").click(function() {
        $("#btn-5").show()
    });

    $("#12-option").click(function() {
        $("#btn-5").show()
    });

    $("#13-option").click(function() {
        $("#btn-6").show()
    });

    $("#14-option").click(function() {
        $("#btn-6").show()
    });

    $("#15-option").click(function() {
        $("#btn-6").show()
    });

    $("#16-option").click(function() {
        $("#btn-7").show()
    });

    $("#17-option").click(function() {
        $("#btn-7").show()
    });

    $("#18-option").click(function() {
        $("#btn-7").show()
    });

    $("#19-option").click(function() {
        $("#btn-8").show()
    });

    $("#20-option").click(function() {
        $("#btn-8").show()
    });

    $("#21-option").click(function() {
        $("#btn-8").show()
    });

    $("#22-option").click(function() {
        $("#btn-9").show()
    });

    $("#23-option").click(function() {
        $("#btn-9").show()
    });

    $("#24-option").click(function() {
        $("#btn-9").show()
    });

    $("#25-option").click(function() {
        $("#btn-10").show()
    });

    $("#26-option").click(function() {
        $("#btn-10").show()
    });

    $("#27-option").click(function() {
        $("#btn-10").show()
    });

    $("#28-option").click(function() {
        $("#btn-11").show()
    });

    $("#29-option").click(function() {
        $("#btn-11").show()
    });

    $("#30-option").click(function() {
        $("#btn-11").show()
    });

});
