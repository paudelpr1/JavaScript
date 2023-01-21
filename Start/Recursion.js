
let text = "Hello world!";
let value = "";


function reverse(){
    if(text.length != 0){
        value = value.concat(text.substr(text.length -1));
        text = text.substr(0, text.length-1);
        reverse()
    }
    else{
        return value;
    }
	
}

reverse();
document.write(value);
console.log(value);

function logKey(event){
    console.log('You pressed "${event.key}".');
}

textBox.addEventListener('keydown', (event) => {
    console.log('You pressed "${event.key}".');
});