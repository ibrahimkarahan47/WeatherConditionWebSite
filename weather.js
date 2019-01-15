$(document).ready(function(){
    $('#submitcity').click(function(){
        var city=$('#city').val();

        if(city != ''){
            $.ajax({

                url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric' + '&APPID=',
                type: 'GET',
                dataType: "jsonp",
                succes: function(data){
                    var widget=show(data);
                    $('#show').html(widget);
                    $('#city').val('');
                }
            });
        }
        else{
            $('#error').html('field cannot be empty');
        }
    })
});
function show(data){
    return "<h2>weather:"+ data.weather[0].main + "<\h2>"+
           "<h2>weather:"+ data.weather[0].description + "<\h2>";
}