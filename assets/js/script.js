



const getArtist = (artistName, sectionId, wrapperId) => {
    const section = document.getElementById(sectionId)
    const wrapper = document.getElementById(wrapperId)
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`)
    .then(response => response.json())
    .then(data => {
        section.innerHTML = ""
        data.data.forEach(song => {
            const containerCoverAlbum = document.createElement("div")
            const coverImgAlbum = document.createElement("img")
            const titleSong= document.createElement("p")
            const artistNameP = document.createElement("p")
            const albumTitle = document.createElement("p")
            
            containerCoverAlbum.classList.add("col", "text-center", "mb-4")
            coverImgAlbum.setAttribute("src", song.album.cover_medium)
            titleSong.textContent = song.title
            artistNameP.textContent = song.artist.name
            albumTitle.textContent = song.album.title
            
            containerCoverAlbum.append(coverImgAlbum, titleSong, artistNameP, albumTitle)
            section.appendChild(containerCoverAlbum)
        })
        wrapper.classList.remove("d-none")
    })
    .catch(error => console.error('Errore', error))
}

getArtist("eminem", "eminemSection", "eminem")
getArtist("metallica", "metallicaSection", "metallica")
getArtist("queen", "queenSection", "queen")



const search = () => {
    document.getElementById("eminem").classList.add("d-none")
    document.getElementById("metallica").classList.add("d-none")
    document.getElementById("queen").classList.add("d-none")
    document.getElementById("eminemSection").innerHTML = ""
    document.getElementById("metallicaSection").innerHTML = ""
    document.getElementById("queenSection").innerHTML = ""
    const query = document.getElementById("searchField").value
    getArtist(query, "searchSection", "found")
}