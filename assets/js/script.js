



fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=billie_elish')
    .then(data => data.json() )
    .then (data => {
        console.log(data)
    })
    .catch(error => console.error('Errore', error))