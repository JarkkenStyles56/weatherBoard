let apiKey = "d3cbd8bd94e3ee7832b4bc0d9b352bf0"

$(document).ready(function () {

    $("#city-input-btn").on("click", function (event) {
        event.preventDefault()
        let citySearch = $("#city-input").val()
        let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=" + apiKey


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {



            console.log(response)
        });



    })


})