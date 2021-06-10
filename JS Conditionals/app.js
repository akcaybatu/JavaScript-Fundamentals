/*
let begin = prompt("What is the offical name of JavaScript")
if (begin == "ECMAScript"){
    alert('Congrats!')
}
else
alert('Sorry, please try again.')
*/

/*
let message = prompt("Input a number")
        if (message > 0){
            alert("1");
        }
        else if (message < 0){
            alert("-1");
        }
        else{
            alert("0");
        }
*/

const day = new Date().getDay();

    switch (day) {
    case 1:
        console.log("Happy Monday!");
        break;
    case 2:
        console.log("It's Tuesday. You got this!");
        break;
    case 3:
        console.log("Hump day already!");
        break;
    case 4:
        console.log("Just one more day 'til the weekend!");
        break;
    case 5:
        console.log("Happy Friday!");
        break;
    case 6:
        console.log("Have a wonderful Saturday!");
        break;
    case 7:
        console.log("It's Sunday, time to relax!");
        break;
    default:
        console.log("Something went horribly wrong...");
    }