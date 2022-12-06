
function getBotResponse(input) {
    // Simple responses
    if (input == "Hello" || input == "Hi" || input == "Hey" || input == "Hii") 
    {
        return "Hello there!";
    }
    else if(input == "hello" || input == "hi" || input == "hey" || input == "hii") {
        return "Hello there!!!";
    }
    else if(input=="how are you" || input == "How are you"){
        return "I am fine and you."
    }
    else if(input=="who are you" || input == "Who are you"){
        return "I am college buddy."
    }
    else if(input=="fine" || input == "Fine"){
        return "ok. which type i can help you."
    }
    else if(input=="what the time" || input == "What the time"){
        return getTime()
    }    
    else if (input == "Is principal sir in college" || input == "is principal sir in college") {
        return "Yes, He is in college"
        
    }
    else if (input == "Where can we find dr.A. N. Thakre" || input == "where can we find dr.A. N. Thakre") {
        return "He can be found in computer department room no. CE04"
        
    }
    else if (input == "Where is the 3rd year project seminar going on" || input == "where is the 3rd year project seminar going on") {
        return "Progarmming lab CE13"
    }
    else if (input == "How many rooms are there in computer department & MBA " || input == "how many rooms are there in computer department & MBA ") {
        return "There are 7 rooms in CE & 4 rooms of MBA"
    }
    // else if (input == "image") {
    //     return  img()
    // }
    else if (input == "goodbye" || input == "bye" || input == "Goodbye" || input == "Bye") 
    {
        return "Thank You";
    }
    
    else 
    {
        return "asking something else!";
    }
}


// function img(src, width, height, alt) {
//     var a = document.createElement("img");
//     a.src = src;
//     a.width = width;
//     a.height = height;
//     a.alt = alt;
//     document.body.appendChild(a)
// }
// img('bdceloto.png',
//     276,
//     110,
//     )