let apiKey = "d3cbd8bd94e3ee7832b4bc0d9b352bf0"
let citySearch = "Helena"
let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=" + apiKey

$(document).ready(function () {



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {



        console.log(response)
    });




























})