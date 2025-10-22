 function searchMovie() {
            var movieName = document.getElementById('movieSearch').value;
            var apiKey = '7927a8ac'; // Substitua SUA_CHAVE_AQUI pela sua chave da API
            var url = `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data); // Para ver todos os dados disponíveis
                    if(data.Response === "True"){
                        document.getElementById('movieDetails').innerHTML = `
                        <img src="${data.Poster}" alt="Poster do filme">
                            <h2>${data.Title} (${data.Year})</h2>
                            <p id="plot">${data.Plot}</p>
                            <p><strong>Gênero:</strong> ${data.Genre}</p>
                            <p><strong>Diretor:</strong> ${data.Director}</p>
                            
                        `;
                    } else {
                        document.getElementById('movieDetails').innerHTML = `<p>Filme não encontrado. Tente novamente.</p>`;
                    }
                     document.getElementById('movieDetails').classList.add('visible');
                })
                .catch(error => {
                    console.error('Erro ao buscar dados do filme:', error);
                });
        }