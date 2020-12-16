
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

const apiKey ="9a47aa843ba35591417901c5328920ba"


fetch(`https://gnews.io/api/v4/search?q=example&token=${apiKey}&lang=en&country=in`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        
            cardss0.innerHTML = `
              <h5 class="card-title" id="news-title">${data.articles[0].title}</h5>
              <h6 class="card-subtitle mb-2 text-muted" id="sub-title">${data.articles[0].description}</h6>
              <p class="card-text" id="news-body">${data.articles[0].content}</p>
            </div>`


          cardss1.innerHTML = `
              <h5 class="card-title" id="news-title">${data.articles[1].title}</h5>
              <h6 class="card-subtitle mb-2 text-muted" id="sub-title">${data.articles[1].description}</h6>
              <p class="card-text" id="news-body">${data.articles[1].content}</p>
            </div>`

          cardss2.innerHTML = `
              <h5 class="card-title" id="news-title">${data.articles[2].title}</h5>
              <h6 class="card-subtitle mb-2 text-muted" id="sub-title">${data.articles[2].description}</h6>
              <p class="card-text" id="news-body">${data.articles[2].content}</p>
            </div>`

          cardss3.innerHTML = `
              <h5 class="card-title" id="news-title">${data.articles[3].title}</h5>
              <h6 class="card-subtitle mb-2 text-muted" id="sub-title">${data.articles[3].description}</h6>
              <p class="card-text" id="news-body">${data.articles[3].content}</p>
            </div>`

          cardss4.innerHTML = `
              <h5 class="card-title" id="news-title">${data.articles[4].title}</h5>
              <h6 class="card-subtitle mb-2 text-muted" id="sub-title">${data.articles[4].description}</h6>
              <p class="card-text" id="news-body">${data.articles[4].content}</p>
            </div>`

          cardss5.innerHTML = `
              <h5 class="card-title" id="news-title">${data.articles[5].title}</h5>
              <h6 class="card-subtitle mb-2 text-muted" id="sub-title">${data.articles[5].description}</h6>
              <p class="card-text" id="news-body">${data.articles[5].content}</p>
            </div>`

          cardss6.innerHTML = `
              <h5 class="card-title" id="news-title">${data.articles[6].title}</h5>
              <h6 class="card-subtitle mb-2 text-muted" id="sub-title">${data.articles[6].description}</h6>
              <p class="card-text" id="news-body">${data.articles[6].content}</p>
            </div>`

          cardss7.innerHTML = `
              <h5 class="card-title" id="news-title">${data.articles[7].title}</h5>
              <h6 class="card-subtitle mb-2 text-muted" id="sub-title">${data.articles[7].description}</h6>
              <p class="card-text" id="news-body">${data.articles[7].content}</p>
            </div>`

          cardss8.innerHTML = `
              <h5 class="card-title" id="news-title">${data.articles[8].title}</h5>
              <h6 class="card-subtitle mb-2 text-muted" id="sub-title">${data.articles[8].description}</h6>
              <p class="card-text" id="news-body">${data.articles[8].content}</p>
            </div>`

          cardss9.innerHTML = `
              <h5 class="card-title" id="news-title">${data.articles[9].title}</h5>
              <h6 class="card-subtitle mb-2 text-muted" id="sub-title">${data.articles[9].description}</h6>
              <p class="card-text" id="news-body">${data.articles[9].content}</p>
            </div>`
        
            // responsiveVoice.speak();
    });

    