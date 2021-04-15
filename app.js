 // let list2 = document.getElementById("ullist").getElementsByTagName('li');
 // for (j = 0; j < list2.length; j++) {
 //     console.log(list2[j].id)
 // }


 let list = document.querySelectorAll('*[id]')
 for (i = 1; i <= list.length - 1; i++) {
     let word = list[i].id
     const api = 'L5sP7jlpFO36hBwP4LtRenD4A4KT5A28'
     let url = `https://api.nytimes.com/svc/topstories/v2/${word}.json?api-key=${api}`;
     list[i].addEventListener("click", () => {
         fetch(url)
             .then((response => response.json()))

         .then((data) => {

                 document.getElementById('container').innerHTML = '';

                 data.results.map(article => {

                     let card = document.createElement("div")
                     card.classList.add(['card'])
                     card.setAttribute('id', 'card')

                     let row = document.createElement("div")
                     row.classList.add(['row'])
                     row.setAttribute('id', 'row')
                     row.style.margin = '5px'
                     row.style.padding = '5px'
                     row.style.border = '1px solid black'

                     let left = document.createElement("div")
                     left.setAttribute('class', 'col-md-9');

                     var card_body = document.createElement('div');
                     //card_body.classList.add(['card-body'])
                     card_body.setAttribute('class', 'cardbody');

                     let title = document.createElement("h5")
                     title.innerHTML = article.section.toUpperCase()

                     let abstract = document.createElement("p")
                     abstract.innerHTML = article.title;

                     let byline = document.createElement("h6")
                     byline.innerHTML = article.byline;

                     let createddate = document.createElement("h6")
                     createddate.innerHTML = article.created_date.split('T')[0];

                     let itemtype = document.createElement("h6")
                     itemtype.innerHTML = article.item_type;

                     let shorturl = document.createElement("a")
                     shorturl.setAttribute('href', article.short_url)
                     shorturl.setAttribute('target', '_blank')
                     shorturl.innerHTML = 'Continue Reading the full article ... '

                     left.appendChild(card_body)
                     left.appendChild(title)
                     left.appendChild(abstract)
                     left.appendChild(byline)
                     left.appendChild(createddate)
                     left.appendChild(itemtype)
                     left.appendChild(shorturl)

                     var right = document.createElement('div');
                     right.setAttribute('class', 'col-md-3');

                     let itemImg = document.createElement("img")
                     itemImg.classList.add(['img-thumbnail']);
                     itemImg.setAttribute('src', article.multimedia[3].url)

                     right.appendChild(itemImg)

                     row.appendChild(left)
                     row.appendChild(right)

                     card.appendChild(row)

                     document.getElementById('container').appendChild(card)
                     document.getElementById('container').append(document.createElement('br'))


                 })
             })
             .catch((err) => {
                 console.log('check for Error!')
             })
     })
 }