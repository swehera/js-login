var database = [

    {
    
    username: "hera",
    
    password: "123"
    
    },
    {
    
        username: "himel",
        
        password: "1234"
        
    },
    {
    
        username: "didar",
        
        password: "777"
        
    },
    
    ];
    
    var newsfeed = [
    
    {
    
    username: "Bobby",
    
    timeline: "So tired from all that learning!"
    
    },
    
    {
    
    username: "Sally",
    
    timeline: "Javascript is sooooo cool!"
    
    },
    
    {
    
    username: "Mitch",
    
    timeline: "Javascript is preeetyy cool!"
    
    }
    
    ];
    
    var usernameP = prompt("username");

    var passP = prompt("password");

    function isUserValid(user,pass) {
        for(var i = 0; database.length; i++) {
            if(database[i].username === usernameP && database[i].password === passP) {
                return true;
            } 
        }
        return false;
    }
    
    function signIn(user,pass){

        /*console.log(isUserValid(user, pass)); */

    
        if(isUserValid(user,pass)){
    
            console.log(newsfeed);
    
        } else {
    
            alert("who are you");
    
        }
    
    }
    
    signIn(usernameP,passP);