window.onload = function () {

    let cantidadGifs = prompt('¿Cuantos gifs quieres ver?')
    
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=zkZpcto1WXOeEgcCuu5vyWXI1SjJycUC&limit=${cantidadGifs}&rating=G`)

            .then(function (data) {
                return data.json();
            })
            .then(function (result) {

                for (var i = 0; i < result.data.length; i++) {
                    
                    document.querySelector('body').innerHTML += `
                    <h1>${result.data[i].title}</h1>
                    <img src="${result.data[i].images.original.url}">
                    `
                }

                console.log(result.data.length)

            })
            .catch(function (error) {
                console.log(error)
            })
}

