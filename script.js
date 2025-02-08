const crearcancion = (songdata) => {
    const div = document.createElement ('div')
    div.setAttribute("class","song")
    div.innerHTML = `
    <img src="${"https://api.institutoalfa.org/api/songs/image/" + songdata.image.filename}"alt="">
    <p>${songdata.title}</p>


    `
    div.addEventListener("click", () => {
        document.getElementById("audio")
        .setAttribute('src', "https://api.institutoalfa.org/api/songs/audio/" + songdata.audio.filename)
    })

    
    
    return div
} 

// document.getElementById("play").addEventListener("click" , () => {
//     const audio = document.getElementById("audio")

//     console.log(audio)

//     if (audio.paused) {
//         audio.play()
//     } else{
//         audio.pause()
//     }
// })

axios.get("https://api.institutoalfa.org/api/songs")
.then((res) => {


    const canciones = res.data.songs

    canciones.map((cancion) => {
        document.getElementById ("container")
        .appendChild(crearcancion(cancion))

    })

})
