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


            function dayOne() {

                // $("#day-1-name").text(response.)
                $("#day-1-date").text("Date:" + response.list[2].dt_txt)
                $("#day-1-temp").text("Temp:" + response.list[2].main.temp)
                $("#day-1-humidity").text("Humidity:" + response.list[2].main.humidity)
                $("#day-1-wind").text("Windspeed:" + response.list[2].wind.speed + "km/hr")
                // $("#")
            }

            dayOne()

            function dayTwo() {

                // $("#day-2-name").text(response.)
                $("#day-2-date").text("Date:" + response.list[10].dt_txt)
                $("#day-2-temp").text("Temp:" + response.list[10].main.temp)
                $("#day-2-humidity").text("Humidity:" + response.list[10].main.humidity)
                $("#day-2-wind").text("Windspeed:" + response.list[10].wind.speed + "km/hr")
                // $("#")
            }

            dayTwo()

            function dayThree() {

                // $("#day-1-name").text(response.)
                $("#day-3-date").text("Date:" + response.list[18].dt_txt)
                $("#day-3-temp").text("Temp:" + response.list[18].main.temp)
                $("#day-3-humidity").text("Humidity:" + response.list[18].main.humidity)
                $("#day-3-wind").text("Windspeed:" + response.list[18].wind.speed + "km/hr")
                // $("#")
            }

            dayThree()

            function dayFour() {

                // $("#day-1-name").text(response.)
                $("#day-4-date").text("Date:" + response.list[26].dt_txt)
                $("#day-4-temp").text("Temp:" + response.list[26].main.temp)
                $("#day-4-humidity").text("Humidity:" + response.list[26].main.humidity)
                $("#day-4-wind").text("Windspeed:" + response.list[26].wind.speed + "km/hr")
                // $("#")
            }

            dayFour()

            function dayFive() {

                // $("#day-1-name").text(response.)
                $("#day-5-date").text("Date:" + response.list[34].dt_txt)
                $("#day-5-temp").text("Temp:" + response.list[34].main.temp)
                $("#day-5-humidity").text("Humidity:" + response.list[34].main.humidity)
                $("#day-5-wind").text("Windspeed:" + response.list[34].wind.speed + "km/hr")
                // $("#")
            }

            dayFive()

        });










    })


})