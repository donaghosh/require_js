define(['data','info'], function(data,info){
    $('#output2').html(`<center><h2>${data} ${info} </h2></center>`); //Template literal
    return '3rd JS script is loaded asynchronously';
});

define('foo', function(){
    return {
        call: "This is a nested",
        order: "require call",
    }
});
