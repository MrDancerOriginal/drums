
console.log($('.w').attr("class")) // Для отримання атрибуту в нас є attr

$(document).keypress(keyboard_event_adapter)

$('.drum').click(button_event_adapter)

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


    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();

}
