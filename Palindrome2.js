function checkPal()
{
var string1= document.getElementById("userInput").value;

var splitString = string1.split("");

var revString= splitString.reverse();

var joinString= revString.join("")

   // var reversed=string1.split("").reverse("").join("");

    if(string1== joinString)
    {
        document.getElementById("results").innerHTML= '<span style= "color: green;">It is a Palindrome!</span>'
    }
    else{
        document.getElementById("results").innerHTML= '<span style= "color: red;">Not a Palindrome!</span>'
    }

    var reversed= "";
    var i;

    for(i = string1.length - 1; i >=0; i-- )
    {
        //a += 7 is equivalent to a=a+7
        reversed += string1[i];
    }
    

    }

    function checkCreds() {
        var firstName= document.getElementById("fName").value;
        var lastName= document.getElementById("lName").value;
        var Zip = document.getElementById("Zip").value;
        var pass=document.getElementById("password").value;

        var fullName=firstName +" "+ lastName;
//I used span to give design. 
        if(firstName.length==0 || lastName.length==0)
        {
            document.getElementById("loginStatus").innerHTML ='<span style= "color: red;">First and Last name cannot be blank</span>'
        }
        else if (fullName.length >20)
        {
            document.getElementById("loginStatus").innerHTML='<span style= "color: red;">Name is too long - must be <20</span>'

        }

        else if(Zip.length !=5)
        {
            document.getElementById("loginStatus").innerHTML='<span style= "color: red;">Zip code is not 5 digits</span>'
        }

        else if(pass != "UATRocks")
        {
            document.getElementById("loginStatus").innerHTML='<span style= "color: red;">Incorrect Password</span>'
        }

        else
        {
            document.getElementById("loginStatus").innerHTML='<span style= "color: green;">Credentials validated</span>'
            //I used my craps game to be what they access once credentials are validated
            location.replace("game.html")
        }
    }