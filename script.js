
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Boston&units=metric&APPID=8967ad22e520bec55d0c594134061aca", function(data){
    console.log(data);
    var weather_icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temperature = data.main.temp;
        console.log("temp is: " + temperature + "C");

    var weather_description = data.weather[0].description;

    let input_temp = temperature;
    let cold = -10;
    let average = 15;
    let hot = 32;

    if(input_temp <= cold)
        console.log("less than -10")
    else if(input_temp >= hot)
        console.log("greater than 32")

    var dist_from_cold = ((Math.abs(input_temp - cold))/42)*100;
    var dist_from_avg = ((Math.abs(input_temp - average))/21)*100;
    var dist_from_hot = ((Math.abs(input_temp - hot))/42)*100;
    console.log("dist from cold: " + dist_from_cold);
    console.log("dist from avg: " + dist_from_avg);
    console.log("dist from hot: " + dist_from_hot);

    var cold_modifier = (100 - dist_from_cold)/100;
    var avg_modifier = (100 - dist_from_avg)/100;
    var hot_momdifier = (100 - dist_from_hot)/100;

    var red_val = 255 * hot_momdifier;
    var green_val = 255 * avg_modifier;
    var blue_val = 255 * cold_modifier;

    console.log("r: " + red_val + "g: " + green_val + "b: " + blue_val);
    
    $('body').css("background-color", "rgb(" + red_val + "," +green_val + "," + blue_val);

    $('.info').css("color", "rgb(" + (red_val*1.30) + "," + (green_val*1.30) + "," + (blue_val*1.30));

    $('.icon').attr('src', weather_icon);
    $('.description').append(weather_description);
    $('.temperature').append(temperature + "C");

});