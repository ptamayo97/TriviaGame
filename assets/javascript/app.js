
//
//create an object that holds questions and answers
//

// var questions = [
//     {
//         q: "question 1",
//         choices: ["choice a", "choice b", "choice c", "choice d"],
//         a: 1
//     },

//     {
//         q: "question 2",
//         choices: ["choice a", "choice b", "choice c", "choice d"],
//         a: 3
//     },

//     {
//         q: "question 3",
//         choices: ["choice a", "choice b", "choice c", "choice d"],
//         a: 0
//     },

//     {
//         q: "question 4",
//         choices: ["choice a", "choice b", "choice c", "choice d"],
//         a: 2
//     }
// ]

$(document).ready(); {

    function start() {
        var count = 59;
        var timer = setInterval(function () {
            $("#timer").text(count);
            console.log(count);
            count--;
            if (count < 0) {

                setTimeout(function () {
                    stopInterval();
                }, 10)

                check()

            }
        }, 1000);

        var stopInterval = function () {

            alert('time is up!');
            clearInterval(timer);

        }


        function check() {

            var question1 = document.forms["myform"]["q1"].value;
            var question2 = document.forms["myform"]["q2"].value;
            var question3 = document.forms["myform"]["q3"].value;
            var question4 = document.forms["myform"]["q4"].value;
            var question5 = document.forms["myform"]["q5"].value;
            var question6 = document.forms["myform"]["q6"].value;
            var question7 = document.forms["myform"]["q7"].value;
            var question8 = document.forms["myform"]["q8"].value;
            var question9 = document.forms["myform"]["q9"].value;
            var question10 = document.forms["myform"]["q10"].value;

            var answers = ["b", "c", "a", "d", "b", "a", "c", "d", "b", "a"];

            var score = 0;

            if (question1 === answers[0]) {
                score++;

            }
            if (question2 === answers[1]) {
                score++;
            }
            if (question3 === answers[2]) {
                score++;
            }
            if (question4 === answers[3]) {
                score++;
            }
            if (question5 === answers[4]) {
                score++;
            }
            if (question6 === answers[5]) {
                score++;
            }
            if (question7 === answers[6]) {
                score++;
            }
            if (question8 === answers[7]) {
                score++;
            }
            if (question9 === answers[8]) {
                score++;
            }
            if (question10 === answers[9]) {
                score++;
            }

            $(".wrapper").html("<div class='score'><p>You scored: " + score + "/10</p></div>");

        }



        $("#submit").on("click", function () {
            check();
            clearInterval(timer);
        })


    }


    start();
}