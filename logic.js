var tick = 0;
var i = 0;
var messages = [
    "Hey there",
    "How are you?",
    "Welcome to my portfolio",
    "I hope you enjoy it",
    "I think it's pretty cool",
    "I kinda have to",
    "Since I live here and all",
    "My name's Hatto by the way",
    "I am your navigation guide for this portfolio",
    "Jk Jk XD",
    "I am contained to this block of text for eternity",
    "8/",
    "Feel free to ignore me",
    "I can go all day long",
    "Wait maybe not",
    "Bye",
    "Z",
    "Z",
    "Z",
    "Z",
    "Z",
    "Z",
    "Z",
    "I'm back",
    "Say, you're kinda cute",
    "Wanna date?",
    "Sorry, too fast, I know",
    "boundaries and such",
    "so",
    "erm",
    "sorry",
    "...",
    "...",
    "Still cute tho"
]

secs = setInterval(function(){
    tick++ //incs tick
    i++
    document.getElementById("talking-text").innerHTML = messages[i];
    
}, (4 * 1000));

secs()