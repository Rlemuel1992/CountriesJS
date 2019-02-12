
function initialize(){

    // Update the controls on load
    updateTimerDisplay();
    updateProgressBar();

    // Clear any old interval.
    clearInterval(time_update_interval);

    // Start interval to update elapsed time display and
    // the elapsed part of the progress bar every second.
    time_update_interval = setInterval(function () {
        updateTimerDisplay();
        updateProgressBar();
    }, 1000)

}

SwitchCountry();
class Country{
    constructor(name, lang, greeting, colors){
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}


function SwitchCountry(){
    let input = prompt("What country you want fam?" + 
"'Murrica, Canada, Mexico, Germany, Russia").toLowerCase();
            if (input === "mexico")
            {
                document.body.style.backgroundColor = "white";
                document.getElementById("Color2").style.backgroundColor = "green";
                document.getElementById("Color3").style.backgroundColor = "red";
                document.getElementById("CountryName").innerText = "Mexico";
                document.getElementById("OfficialLanguage").innerText = "Spanish";
                document.getElementById("HelloWorld").innerText = "Hola Mundo!";
               
                
              
            }
           else if (input === "'murrica")
            {
                document.body.style.backgroundColor = "red";
                document.getElementById("Color2").style.backgroundColor = "white";
                document.getElementById("Color3").style.backgroundColor = "blue";
                document.getElementById("CountryName").innerText = "AMERRRIICAAAAAA";
                document.getElementById("OfficialLanguage").innerText = "American!";
                document.getElementById("HelloWorld").innerText = "HELLO!";
                
            
            }
           else if (input === "canada")
            {
                document.body.style.backgroundColor = "white";
                document.getElementById("Color2").style.backgroundColor = "red";
                document.getElementById("Color3").style.backgroundColor = "red";
                document.getElementById("CountryName").innerText = "Canada";
                document.getElementById("OfficialLanguage").innerText = "English";
                document.getElementById("HelloWorld").innerText = "Hello eh";
            }
            else if (input === "germany")
            {
                document.body.style.backgroundColor = "black";
                document.getElementById("Color2").style.backgroundColor = "gold";
                document.getElementById("Color3").style.backgroundColor = "red";
                document.getElementById("CountryName").innerText = "Germany";
                document.getElementById("OfficialLanguage").innerText = "German";
                document.getElementById("HelloWorld").innerText = "Hallo Welt!";
            }
           else if (input === "russia")
            {
                document.body.style.backgroundColor = "white";
                document.getElementById("Color2").style.backgroundColor = "blue";
                document.getElementById("Color3").style.backgroundColor = "red";
                document.getElementById("CountryName").innerText = "Russia";
                document.getElementById("OfficialLanguage").innerText = "Russian";
                document.getElementById("HelloWorld").innerText = "Privet, mir!";
            }
            else 
            SwitchCountry();

    }
