
// load the http and file system modules into respective variables
// http module allows to create a server
// fs module allows to access file system (i.e., files that we will be serving are in our file system) 

var http = require('http'),
    fs = require('fs');
    //path = require('path');

const PORT = 1337;

function serveStaticFile(res, path, contentType, responseCode) {
    // if there is no http response status code, then assume everything is okay 
    // set http response status code to 200 to tell browser everything is okay 

    if(!responseCode) {
        responseCode = 200;
    }

    // try to read the file that is located at the path that is being passed in 
    // _dirname resolves to the path where this file lives

    fs.readFile(__dirname + path, function(err, data) {
        // tell browser there was an internal server error
        if(err) {
            // include in our header that there was an internal server error
            res.writeHead (500, {'Content-Type': 'text/plain' });

            // give the user an error messaage in plain text and tell browser all info has been sent 
            res.end('500 - Internal Error');

        }
         
        // otherwise, we know that there is no error and that it works
        else {
            // give it whatever the response code and content type was 
            res.writeHead (responseCode,
                {'Content-Type': contentType });
            // send over whatever data we have 
            res.end(data);
        }
    });
}


http.createServer (function(req, res) {
    // normalize url by removing querystring, optional trailing slash, and making lowercase
    //  replace function takes in what to replace using regular expression that says find anything after ? 
    //      and replace with nothing
    //  make everything lower case

    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    
    switch(path) {
        
        // if they go to http://localhost:1337, then serve the home page
        // break tells switch statement that this case is over and done executing
        case '':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;
        
        case '/contact':
            serveStaticFile(res, '/public/contact.html', 'text/html');
            break;
        
        // if they go to http://localhost:1337/index, then serve the home page 
        case '/index':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;
        
        case '/posts':
            serveStaticFile(res, '/public/posts.html', 'text/html');
            break;
        
        case '/under-construction':
            serveStaticFile(res, '/public/under-construction.html', 'text/html');
            break;
        
        case '/css/style.css':
            serveStaticFile(res, '/public/css/style.css', 'text/css');
            break;
    
        case '/images/404bottom.gif':
            serveStaticFile(res, '/public/images/404bottom.gif', 'image/gif');
            break;


        case '/images/404mid.gif':
            serveStaticFile(res, '/public/images/404mid.gif', 'image/gif');
            break;


        case '/images/404bottom.jpg':
            serveStaticFile(res, '/public/images/404top_w.jpg', 'image/jpg');
            break;


        case '/images/blogging.png':
            serveStaticFile(res, '/public/images/blogging.png', 'image/png');
            break;


        case '/images/computer-typing.jpeg':
            serveStaticFile(res, '/public/images/computer-typing.jpeg', 'image/jpeg');
            break;


        case '/images/construction.png':
            serveStaticFile(res, '/public/images/construction.png', 'image/png');
            break;
       
        case '/images/logo.png':
            serveStaticFile(res, '/public/images/logo.png', 'image/png');
            break;


        case '/images/merch.png':
            serveStaticFile(res, '/public/images/merch.png', 'image/png');
            break;


        case '/images/x.png':
            serveStaticFile(res, '/public/images/x.png', 'image/png');
            break;
        
            case '/images/404bottom.gif':
                serveStaticFile(res, '/public/images/404bottom.gif', 'image/gif');
                break;
    
    
            case '/images/404mid.gif':
                serveStaticFile(res, '/public/images/404mid.gif', 'image/gif');
                break;
    
    
            case '/images/404bottom.jpg':
                serveStaticFile(res, '/public/images/404top_w.jpg', 'image/jpg');
                break;
    
    
            case '/images/blogging.png':
                serveStaticFile(res, '/public/images/blogging.png', 'image/png');
                break;
    
    
            case '/images/computer-typing.jpeg':
                serveStaticFile(res, '/public/images/computer-typing.jpeg', 'image/jpeg');
                break;
    
    
            case '/images/construction.png':
                serveStaticFile(res, '/public/images/construction.png', 'image/png');
                break;
           
            case '/images/logo.png':
                serveStaticFile(res, '/public/images/logo.png', 'image/png');
                break;
    
    
            case '/images/merch.png':
                serveStaticFile(res, '/public/images/merch.png', 'image/png');
                break;
    
    
            case '/images/x.png':
                serveStaticFile(res, '/public/images/x.png', 'image/png');
                break;
        
        // in the case that it is none of the above cases, we have a default case so that our server does not break 
        //  and we serve the 404 page
        //  we let server know that something went wrong by setting http response status code to 404
        default:
            serveStaticFile(res,"404.html","text/html");
        
    }

}).listen(PORT); // tells the server what port to be on

console.log("Server running on: http://localhost:" + PORT);