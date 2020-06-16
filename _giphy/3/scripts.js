window.onload = function () {

    document.querySelector('form.form').addEventListener('submit', function (e) {
        e.preventDefault()
        let inputValue = document.querySelector('input').value

        fetch(`https://api.giphy.com/v1/gifs/search?api_key=zkZpcto1WXOeEgcCuu5vyWXI1SjJycUC&q=${inputValue}&limit=25&offset=0&rating=G&lang=en`)
            .then(function (data) {
                return data.json()
            })
            .then(function (result) {
                console.log(result.data)
                document.querySelector('.cont').innerHTML = "";

                let resultado = document.querySelector('p');
                resultado.innerHTML = ""

                if (resultado.innerHTML == "") {
                    resultado.innerHTML += `Resultado de busqueda para: ${inputValue}`
                }

                for (var i = 0; i < result.data.length; i++) {
                    
                    document.querySelector('.cont').innerHTML += `
                    <h1>${result.data[i].title}</h1>
                    <img src="${result.data[i].images.original.url}">
                    `
                }

            })
            .catch(function (error) {
                console.log(error)
            })
    })

}