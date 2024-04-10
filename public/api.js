// home page moves api

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20', {
	"method": 'GET',
	"headers": {
		'X-RapidAPI-Key': 'ac3b51dd56msh866d7328b015472p1b2ef7jsna7f56c6aeb14',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
})

.then(response => response.json())
.then(data => {
    const list = data.d;
    list.map((item) => {
        const id = item.imdbID;
        const name = item.Title;
        const poster = item.Poster;
        const movie = `<li><a href="https://www.imdb.com/title/${id}" target="_blank"><img src="${poster}" />  </a> <h2>${name}</h2></li>`;
        document.querySelector("#pagemoves").innerHTML += movie
    })
})

 
.catch (err => {
	console.error(err);
});

// movies api


fetch('https://imdb8.p.rapidapi.com/auto-complete?q=movie', {
	"method": 'GET',
	"headers": {
		'X-RapidAPI-Key': 'ac3b51dd56msh866d7328b015472p1b2ef7jsna7f56c6aeb14',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
})

.then(response => response.json())
.then(data => {
    const list = data.d;
    list.map((item) => {
        const id = item.id;
        const name = item.l;
        const poster = item.i.imageUrl;
        const movie = `<li><a href="https://www.imdb.com/title/${id}" target="_blank"><img src="${poster}" />  </a> <h2>${name}</h2></li>`;
        document.querySelector("#movies").innerHTML += movie
    })
})

.catch (err => {
	console.error(err);
});


// series api

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=series', {
	"method": 'GET',
	"headers": {
		'X-RapidAPI-Key': 'ac3b51dd56msh866d7328b015472p1b2ef7jsna7f56c6aeb14',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
})

.then(response => response.json())
.then(data => {
    const list = data.d;
    list.map((item) => {
        const id = item.id;
        const name = item.l;
        const poster = item.i.imageUrl;
        const movie = `<li><a href="https://www.imdb.com/title/${id}" target="_blank"><img src="${poster}" />  </a> <h2>${name}</h2></li>`;
        document.querySelector("#series").innerHTML += movie
    })
})

.catch (err => {
	console.error(err);
});


// anime api 

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=anime', {
	"method": 'GET',
	"headers": {
		'X-RapidAPI-Key': 'ac3b51dd56msh866d7328b015472p1b2ef7jsna7f56c6aeb14',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
})

.then(response => response.json())
.then(data => {
    const list = data.d;
    list.map((item) => {
        const id = item.id;
        const name = item.l;
        const poster = item.i.imageUrl;
        const movie = `<li><a href="https://www.imdb.com/title/${id}" target="_blank"><img src="${poster}" />  </a> <h2>${name}</h2></li>`;
        document.querySelector("#anime").innerHTML += movie
    })
})

 
.catch (err => {
	console.error(err);
});
