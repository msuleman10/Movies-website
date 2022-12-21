
var movies =[
        {
            Id : 1,
            url : "https://themoviezflix.co.in/download-venom-2-let-there-be-carnage-2021-dual-audio-hindi-dubbed-5-1-dd-amp-english-web-dl-480p-720p-720p-1080p/",
            movieName : "Venom",
            path : "./img/Venom.jpg ",
            rating : 5.9,
            relesDate : 2021,
            movieTime : "1h 37min",
            Category : ["Action","Comedy"],
            quality : "1080p"
        },
        {
            Id : 2,
            url : "https://hdmoviezflix.site/download-commando-2-2017-480p-720p/",
            movieName : "Commondo",
            path : "./img/comma.jpg",
            rating : 5.4,
            relesDate : 2017,
            movieTime : "2h 38min",
            Category : ["Action"],
            quality : "480p"
        },
        {
            Id : 3,
            url : "https://themoviezflix.co.in/download-bullet-train-2022-hindi-english-480p-720p-1080p-2/",
            movieName : "Bullet Train",
            path : "./img/Bullet.jpg",
            rating : 7.3,
            relesDate : 2022,
            movieTime : "2h 6min",
            Category : ["Action","Comedy"],
            quality : "1080p"
        },
        {
            Id : 4,
            url : "https://themoviezflix.co.in/download-lost-bullet-2-back-for-more-2022-dual-audio-hindi-english-web-dl-480p-720p-1080p/",
            movieName : "Lost Bullet",
            path : "./img/lost.jpg",
            rating : 6.3,
            relesDate : 2020,
            movieTime : "1h 32min",
            Category : ["Horror","Action"],
            quality : "480p"
        },
        {
            Id : 5,
            url : "https://themoviezflix.co.in/download-extraction-2020-hindi-480p-720p-1080p/",
            movieName : "Extraction",
            path : "./img/extrac.jpg",
            rating : 6.7,
            relesDate : 2020,
            movieTime :"1h 56min",
            Category : ["Thriller","Action"],
            quality : "720p"
        },
        {
            Id : 6,
            url : "https://themoviezflix.co.in/download-bloodshot-2020-hindi-english-480-720p-1080p/",
            movieName : "Bloodshot",
            path : "./img/Blood.jpg",
            rating : 5.7,
            relesDate : 2020,
            movieTime : "1h 49min",
            Category : ["Horror","Action"],
            quality : "480p"
        },
        {
            Id : 7,
            url : "https://themoviezflix.co.in/download-rango-2011-hindi-english-480p-720p-1080p/",
            movieName : "Rango",
            path : "./img/Rango.jpg",
            rating : 7.2,
            relesDate : 2011,
            movieTime : "1h 47min",
            Category : ["Action","Comedy"],
            quality : "720p"
        },
        {
            Id : 8,
            url : "https://themoviezflix.co.in/download-kung-fu-panda-3-2016-hindi-480p-720p-1080p/",
            movieName : "Kung Fu Panda 3",
            path : "./img/Panda.jpg",
            rating : 7.1,
            relesDate : 2016,
            movieTime : "1h 35min",
            Category : ["Action","Comedy"],
            quality : "1080p"
        },
        {
            Id : 9,
            url : "https://themoviezflix.co.in/download-puss-in-boots-2011-hindi-480p-720p/",
            movieName : "Puss in Boots",
            path : "./img/Puss.jpg",
            rating : 6.6,
            relesDate : 2011,
            movieTime : "1h 37min",
            Category : ["Action","Comedy"],
            quality : "720p"
        },
        {
            Id : 10,
            url : "https://bollyflix.page/rise-of-the-guardians-2012-dual-audio-hindi-english-movie/",
            movieName : "Rise of the Guardians",
            path : "./img/Rise.jpg",
            rating : 7.2,
            relesDate : 2012,
            movieTime : "1h 37min",
            Category : ["Action","Comedy"],
            quality : "480p"
        },
        {
            Id : 11,
            url : "https://themoviezflix.co.in/download-morbius-2022-hindiclean-english-480p-720-1080p/",
            movieName : "Morbius",
            path : "./img/Morbius.jpg",
            rating : 5.2,
            relesDate : 2022,
            movieTime : "1h 44min",
            Category : ["Horror","Action"],
            quality : "1080p"
        },
        {
            Id : 12,
            url : "https://themoviezflix.co.in/download-the-huntsman-winters-war-2016-hindi-english-480p-720p-1080p/",
            movieName : "The Huntsman",
            path : "./img/Hunts.jpg",
            rating : 6.1,
            relesDate : 2016,
            movieTime : "2h 00min",
            Category : ["Mystery","Action"],
            quality : "720p"
        },
        {
            Id : 13,
            url : "https://bollyflix.page/the-sea-beast-2022-dual-audio-hindi-english-movie/",
            movieName : "The Sea Beast2",
            path : "./img/sea.jpg",
            rating : 7.1,
            relesDate : 2022,
            movieTime : "1h 59min",
            Category : ["Fantasy","Action"],
            quality : "720p"
        },
        {
            Id : 14,
            url : "https://themoviezflix.co.in/download-mortal-kombat-2021-hindi-480p-720p/",
            movieName : "Mortal Kombat",
            path : "./img/mortel.jpg",
            rating : 6.1,
            relesDate : 2021,
            movieTime : "1h 50min",
            Category : ["Horror","Action"],
            quality : "480p"
        },
        {
            Id : 15,
            url : "https://bollyflix.page/red-notice-2021-dual-audio-hindi-english-movie/",
            movieName : "Red Notice",
            path : "./img/Red.jpg",
            rating : 6.3,
            relesDate : 2021,
            movieTime : "1h 58min",
            Category : ["Action","Comedy"],
            quality : "1080p"
        }
    
];

function renderMovies(movies){
    let bodys ="";
    for (let i = 0; i < movies.length; i++){
        bodys+=`<a target="_blank" class="movies-link" href='${movies[i].url}'>
                    <div class="containers">
                        <h3 class="movies-name">${movies[i].movieName}</h3>
                        <div>
                            <img class="movies-poster" src="${movies[i].path}" >
                            <div class="movies-information" >
                                <span><b>Release date: </b>${movies[i].relesDate}</span>
                                <br>
                                <br>
                                <span><b>Length: </b>${movies[i].movieTime}</span>
                                <br> 
                                <br>
                                <span><b>IMDB: </b>${movies[i].rating}</span>
                                <br> 
                                <br>
                                <span><b>Category: </b>${movies[i].Category.join("/")}</span>
                            </div>
                        </div>    
                    </div>      
               </a>`
    };
    document.getElementById("movies").innerHTML= bodys;
}
renderMovies(movies)

function quality(per) {
     let tempArray = [];
    for (let index = 0; index < movies.length; index++) {
        if (movies[index].quality == per) {
            tempArray.push(movies[index]);
        }else{
         
        };
    };
    renderMovies(tempArray)
};

document.getElementById("but").addEventListener('click' , logMovies)
function logMovies() {
    let text = document.getElementById("search").value
    names(text);
}
function names(pera) {
     let tempArray = [];
    for (let index = 0; index < movies.length; index++) {
        if (movies[index].movieName == pera) {
            tempArray.push(movies[index]);
        }else{
          
        };
    };
    renderMovies(tempArray)
};

document.getElementById("all").addEventListener('click', () =>
    renderMovies(movies)
);

document.getElementById("highQuality").addEventListener("click" , () => quality("1080p"))
document.getElementById("mideumQuality").addEventListener("click",() =>quality("720p"))
document.getElementById("lowQuality").addEventListener("click", () => quality("480p"))









