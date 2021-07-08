$(document).ready(function () {
    
    $("#opt").click(function () {
        
    });
    
    $("#txtCountry").autocomplete({  
        source: function (request, response) {  
            $.ajax({  
                url: "http://localhost:8080/search",  
                method: "post",  
                contentType: "application/json;charset=utf-8",  
                data: JSON.stringify({ term: request.term }),  
                dataType: 'json',  
                success: function (data) {  
                    response(data.d); 
                    $("#browsers").empty();
                    $.each(data, function(i, item) {
                        $("#browsers").append($("<option id='opt'>").attr('value', item).text(item));
                      });
                },  
                error: function (err) {  
                    alert(err);  
                }  
            });  
        }  
    });  



    ajax_call();
    setInterval(ajax_call, interval);




});

var ajax_call = function() {
    console.log("Global requested");
    $.ajax({
    url: 'http://localhost:8080/global',
    dataType: 'json',
    success: function(data) {
        console.log(data);
        $("#confirmed").text(data['confirmed']);
        $("#active").text(data['active']);
        $("#recovered").text(data['recovered']);
        $("#deaths").text(data['deaths']);
    }
});
};

var X = 10; // minutes
var interval = 1000 * 60 * X;




       