var config = {
    mapquestUrl: "https://www.mapquestapi.com/geocoding/v1/address?key=mKvu4ZLHSge7XhApqSdB2XKz8W5kHfDN&location=",
    darkSkyUrl: "/forecast/?lat={lat}&lng={lng}",
};



$('#search').click(function(){

    function getLocation(userLocation) {
        var locationUrl = config.mapquestUrl + userLocation;
        return $.get(locationUrl);
    }

    function transformMapQuestResponse(response) {
        return response.results.shift().locations.shift().latLng;
    }

    function requestWeatherForLatLng(latLng) {
        var weatherUrl = config.darkSkyUrl.replace('{lat}', latLng.lat).replace('{lng}', latLng.lng);
        return $.get(weatherUrl);
    }

    function translateWeatherResponse(response) {
        return response.currently;
    }

    function displayWeather(currentWeather) {
        var mySummary = "<h3>" + currentWeather.summary + "</h3>";
        mySummary += "<p>" + currentWeather.temperature + "ºF</p>";

        $("#weather").html(mySummary);
    }

    function handleErrors() {
        alert("Your request failed. Please try again later.");
    }

    getLocation()
        .then(transformMapQuestResponse)
        .then(requestWeatherForLatLng)
        .then(translateWeatherResponse)
        .then(displayWeather)
        .catch(handleErrors);
});
