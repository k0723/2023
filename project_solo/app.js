
    window.onload = function () {
        listing();
    };

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjg4YjQ2NDE3MDg5ZTVlMTQyMWNmN2I2ZDQ4NzI4NSIsInN1YiI6IjY0NzU1ZTg0OTYzODY0MDBmYmIxZTkxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I9RXy1KQ_jx6CVsEEZq9SqDAKrXI618KXM8HvbEmpXM'
        }
    };

    function listing() {
        let url ='https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',options).then(res => res.json()).then(data => {
            let rows = data['results']
            let card = document.querySelector("#cards-box");
            card.innerHTML='';
            rows.map((a,b,c) =>
            {
                let comment = a['vote_average']
                let title = a['original_title']
                let image = a['poster_path']
                let desc = a['overview']
                let id = a['id']
                let temp_html = `<div class="col">
                                        <div class="card h-100" onclick="popid()">
                                            <img src="${'https://image.tmdb.org/t/p/w500'+image}"
                                                class="card-img-top">
                                            <div class="card-body">
                                                <h5 class="card-title">${title}</h5>
                                                <p class="card-text">${desc}</p>
                                                <p class="mycomment">${comment}</p>
                                                <p class="movieId">${id}</p>
                                            </div>
                                        </div>
                                </div>`

                card.innerHTML += temp_html;
            })
        })
    }


    function search() {
        var searchText1 = document.getElementById("searchText").value;
        console.log(searchText1)
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',options)
        .then(res => res.json())
        .then(data => {
            let rows = data['results']
            let card = document.querySelector("#cards-box");
            card.innerHTML='';
            rows.forEach((a) => {
                let comment = a['vote_average']
                let title = a['original_title']
                let image = a['poster_path']
                let desc = a['overview']
                let id = a['id']
                if(title.includes(searchText1))
                {
                        let temp_html = `<div class="col" onclick="popid()">
                                            <div class="card h-100">
                                                <img src="${'https://image.tmdb.org/t/p/w500'+image}"
                                                    class="card-img-top">
                                                <div class="card-body">
                                                    <h5 class="card-title">${title}</h5>
                                                    <p class="card-text">${desc}</p>
                                                    <p class="mycomment">${comment}</p>
                                                    <p class="movieId">${id}</p>
                                                </div>
                                            </div>
                                        </div>`
                    card.innerHTML += temp_html;
                }
            })
        })
    }

    function popid()
    {
        let movie_id = document.querySelector(".movieId").textContent;
        console.log(movie_id)
        alert(movie_id);
    }

