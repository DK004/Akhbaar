
let cardss0 = document.getElementById('card0')
let cardss1 = document.getElementById('card1')
let cardss2 = document.getElementById('card2')
let cardss3 = document.getElementById('card3')
let cardss4 = document.getElementById('card4')
let cardss5 = document.getElementById('card5')
let cardss6 = document.getElementById('card6')
let cardss7 = document.getElementById('card7')
let cardss8 = document.getElementById('card8')
let cardss9 = document.getElementById('card9')

const apiKey ="9a47aa843ba35591417901c5328920ba";

const apiKey_voice = "1f44c827c9794ceeb4f5d708fe7c6cd4";



fetch(`https://gnews.io/api/v4/search?q=example&token=${apiKey}&lang=en&country=in`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        
            cardss0.innerHTML = `
              <h5 class="card-title" id="news-title">${data.articles[0].title}</h5>
              <h6 class="card-subtitle mb-2 text-muted" id="sub-title">${data.articles[0].description}</h6>
            `


          cardss1.innerHTML = `
              <h5 class="card-title" id="news-title">${data.articles[1].title}</h5>
              <h6 class="card-subtitle mb-2 text-muted" id="sub-title">${data.articles[1].description}</h6>`

          cardss2.innerHTML = `
              <h5 class="card-title" id="news-title">${data.articles[2].title}</h5>
              <h6 class="card-subtitle mb-2 text-muted" id="sub-title">${data.articles[2].description}</h6>`

          cardss3.innerHTML = `
              <h5 class="card-title" id="news-title">${data.articles[3].title}</h5>
              <h6 class="card-subtitle mb-2 text-muted" id="sub-title">${data.articles[3].description}</h6>`

          cardss4.innerHTML = `
              <h5 class="card-title" id="news-title">${data.articles[4].title}</h5>
              <h6 class="card-subtitle mb-2 text-muted" id="sub-title">${data.articles[4].description}</h6>`

          cardss5.innerHTML = `
              <h5 class="card-title" id="news-title">${data.articles[5].title}</h5>
              <h6 class="card-subtitle mb-2 text-muted" id="sub-title">${data.articles[5].description}</h6>`

          cardss6.innerHTML = `
              <h5 class="card-title" id="news-title">${data.articles[6].title}</h5>
              <h6 class="card-subtitle mb-2 text-muted" id="sub-title">${data.articles[6].description}</h6>`

          cardss7.innerHTML = `
              <h5 class="card-title" id="news-title">${data.articles[7].title}</h5>
              <h6 class="card-subtitle mb-2 text-muted" id="sub-title">${data.articles[7].description}</h6>`

          cardss8.innerHTML = `
              <h5 class="card-title" id="news-title">${data.articles[8].title}</h5>
              <h6 class="card-subtitle mb-2 text-muted" id="sub-title">${data.articles[8].description}</h6>`

          cardss9.innerHTML = `
              <h5 class="card-title" id="news-title">${data.articles[9].title}</h5>
              <h6 class="card-subtitle mb-2 text-muted" id="sub-title">${data.articles[9].description}</h6>`
        
            // responsiveVoice.speak();
    });

    
// let main_cardss = document.getElementById('cardss');
// function textSpeak(){
//   responsiveVoice.speak(main_cardss.innerText);
//   }


// var timeout = 18000;
// function textSpeak(){


//   console.log("in the function");
//   // console.log(i);
//   VoiceRSS.speech({
//     key: '1f44c827c9794ceeb4f5d708fe7c6cd4',
//     src: cardss9.innerText,
//     hl: 'en-in',
//     v: 'Jai',
//     r: 4, 
//     c: 'mp3',
//     f: '44khz_16bit_stereo',
//     ssml: false
// });

// setTimeout(() => {
//   VoiceRSS.speech({
//     key: '1f44c827c9794ceeb4f5d708fe7c6cd4',
//     src: cardss0.innerText,
//     hl: 'en-in',
//     v: 'Jai',
//     r: 4, 
//     c: 'mp3',
//     f: '44khz_16bit_stereo',
//     ssml: false
// });
// }, timeout);



// setTimeout(() => {
//   VoiceRSS.speech({
//     key: '1f44c827c9794ceeb4f5d708fe7c6cd4',
//     src: cardss1.innerText,
//     hl: 'en-in',
//     v: 'Jai',
//     r: 4, 
//     c: 'mp3',
//     f: '44khz_16bit_stereo',
//     ssml: false
// });
// }, timeout*2);

// setTimeout(() => {
//   VoiceRSS.speech({
//     key: '1f44c827c9794ceeb4f5d708fe7c6cd4',
//     src: cardss2.innerText,
//     hl: 'en-in',
//     v: 'Jai',
//     r: 4, 
//     c: 'mp3',
//     f: '44khz_16bit_stereo',
//     ssml: false
// });
// }, timeout*3);

// }



let news1 = document.getElementById('news1');
let news2 = document.getElementById('news2');
let news3 = document.getElementById('news3');
let news4 = document.getElementById('news4');
let news5 = document.getElementById('news5');
let news6 = document.getElementById('news6');
let news7 = document.getElementById('news7');
let news8 = document.getElementById('news8');
let news9 = document.getElementById('news9');
let news10 = document.getElementById('news10');

function speakText1(){
  VoiceRSS.speech({
        key: '1f44c827c9794ceeb4f5d708fe7c6cd4',
        src: cardss9.innerText,
        hl: 'en-in',
        v: 'Jai',
        r: 3, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}


function speakText2(){
  VoiceRSS.speech({
        key: '1f44c827c9794ceeb4f5d708fe7c6cd4',
        src: cardss0.innerText,
        hl: 'en-in',
        v: 'Jai',
        r: 3, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}



function speakText3(){
  VoiceRSS.speech({
        key: '1f44c827c9794ceeb4f5d708fe7c6cd4',
        src: cardss1.innerText,
        hl: 'en-in',
        v: 'Jai',
        r: 3, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}
function speakText4(){
  VoiceRSS.speech({
        key: '1f44c827c9794ceeb4f5d708fe7c6cd4',
        src: cardss2.innerText,
        hl: 'en-in',
        v: 'Jai',
        r: 3, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}
function speakText5(){
  VoiceRSS.speech({
        key: '1f44c827c9794ceeb4f5d708fe7c6cd4',
        src: cardss3.innerText,
        hl: 'en-in',
        v: 'Jai',
        r: 3, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}
function speakText6(){
  VoiceRSS.speech({
        key: '1f44c827c9794ceeb4f5d708fe7c6cd4',
        src: cardss4.innerText,
        hl: 'en-in',
        v: 'Jai',
        r: 3, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}
function speakText7(){
  VoiceRSS.speech({
        key: '1f44c827c9794ceeb4f5d708fe7c6cd4',
        src: cardss5.innerText,
        hl: 'en-in',
        v: 'Jai',
        r: 3, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}
function speakText8(){
  VoiceRSS.speech({
        key: '1f44c827c9794ceeb4f5d708fe7c6cd4',
        src: cardss6.innerText,
        hl: 'en-in',
        v: 'Jai',
        r: 3, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}


function speakText9(){
  VoiceRSS.speech({
        key: '1f44c827c9794ceeb4f5d708fe7c6cd4',
        src: cardss7.innerText,
        hl: 'en-in',
        v: 'Jai',
        r: 3, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}
function speakText10(){
  VoiceRSS.speech({
        key: '1f44c827c9794ceeb4f5d708fe7c6cd4',
        src: cardss8.innerText,
        hl: 'en-in',
        v: 'Jai',
        r: 3, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}