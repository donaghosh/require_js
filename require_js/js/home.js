requirejs.config({
    baseUrl: 'js',
    paths: {
        app: './home',
        foo: 'libs/foo-1.1.3'
    }
});
require(['jquery','message'], function ($, message){
    $('#output1').html('<center><h2>1st JS script is loaded asynchronously</h2></center>');
    $('#output3').html(`<center><h2>${message}</h2></center>`);
    require(['foo'], function(foo){
        $('#output4').html(`<h4><center>${foo.call} ${foo.order} </center></h4>`);
        
    });
});

