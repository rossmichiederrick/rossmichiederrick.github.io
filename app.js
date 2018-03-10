$(document).ready(function() {

   

    var topics = ["James Harden", "Russell Westbrook", "LeBron James", "Steph Curry", "Kevin Durant", "Chris Paul", "Anthony Davis"];

    function displayInfo() {
        var players = $(this).attr("player-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + NBA + "&api_key=dc6zaTOxFJmzC&limit=10";

       

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {

            $("#players").empty();

            var results = response.data;

            
            for (var i = 0; i < results.length; i++) {
                var playerDiv = $("<div class='userPlayer'>");

                var urlStill = results[i].images.fixed_height_still.url;
                var urlPlay = results[i].images.fixed_height.url;


                var gif = $("<img>").addClass("gif").attr("src", urlStill).attr("data-still", urlStill).attr("data-animate", urlPlay).attr("data-state", "still");

                playerDiv.append(gif);
                playerDiv.append(pRate);

                

                $("#players").append(playerDiv);
            }

            $(".gif").on("click", function() {
                var state = $(this).attr("data-state");

                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }

            });
        });

    }

   

    function renderButtons() {


        $("#playerButtons").empty();

        for (var i = 0; i < topics.length; i++) {

            var playerRender = $("<button>");


            playerRender.addClass("player");
            playerRender.attr("player-name", topics[i]);
            playerRender.text(topics[i]);
            $("#playerButtons").append(playerRender);
        }
    }

    $("#addplayer").on("click", function(event) {
        event.preventDefault();
        var player = $("#player-input").val().trim();

        topics.push(player);
            $("#player-input").val(" ");
        renderButtons();
    });


    
    $(document).on("click", ".player", displayInfo);

    renderButtons();

});