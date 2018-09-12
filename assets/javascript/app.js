
//create 30 sec timer
var counter = 30;

function setup() {
    $('#timer').html('30');

    function timeIt() {
        counter--;
        $('#timer').html(counter);
    }
    setInterval(timeIt, 1000)
}

setup();  

// user answers question
//user submits answers
// check if users answers correctly
// display results on another page

