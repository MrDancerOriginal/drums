document.addEventListener("keypress", event => keyboard_event_adapter(event))

var buttons = document.querySelectorAll(".drum")

for(i=0; i<buttons.length;i++){
    buttons[i].addEventListener("click",event => button_event_adapter(event))
}

function keyboard_event_adapter(event){
    play_sound(event.key)
}

function button_event_adapter(event){
    play_sound(event.target.classList[0])
}

function play_sound(letter){
    let sound = ''

    switch(letter){
        case 'w': sound ='crash'
            break
        case 'a': sound = 'kick-bass'
            break
        case 's': sound = 'snare'
            break
        case 'd': sound = 'tom-1'
            break
        case 'j': sound = 'tom-2'
            break
        case 'k': sound = 'tom-3'
            break
        case 'l': sound = 'tom-4'
            break
    }


    var audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();

}


//При маленькому проєкті НЕМАЄ потреби так мучатись. Але якщо великий проєкт, то без цього нікуди
//Lower order - нищого порядку
function Add(number1,number2){
    alert(number1 + number2)
}

//Lower order - нищого порядку
function Subtract(number1,number2){
    alert(number1 - number2)
}

//Higher order - вищого порядку
function Calculate(number1,number2,operation){
    if(number1 > number2){
        operation(number1,number2)
    }else{
        alert("Перше число має бути більшим за друге")
    }
}

//Calculate(3,5, Add)
                        // 0   1    2    3    4    5    6    7   8
//let children = [170, 165, 167, 150, 176, 172, 163, 167, 180, 180, 180]
//let result = 0

//for(i = 0; i < children.length; i++){

//    result += children[i]
//}
//result /= children.length

//console.log(result)










