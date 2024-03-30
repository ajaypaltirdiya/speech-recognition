
const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

const reconiz = new speechRecognition();
reconiz.lang = 'en-US';
reconiz.continuous = true;

reconiz.onresult = function(e) {
    const acceptColors = [
        'red',
        'blue',
        'brown',
        'darkblue',
        'white',
        'black',
        'lightgray',
        'green',
        'purple',
        'yellow',
        'pink',
        'orange'
    ]

    for(let i = e.resultIndex; i < e.results.length; i++){
        const script = e.results[i][0].transcript.toLowerCase().trim();
        console.log(script)
        
        if(acceptColors.includes(script)){
            document.body.style.backgroundColor = script
            document.querySelector('h4').innerText = `Said Color : ${script}`;
        }
        else{
            alert('Please say a most used color');
        }
    }
}

reconiz.start();
