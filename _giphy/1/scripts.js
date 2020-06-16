window.onload = function () {
    document.querySelector('button.traer').addEventListener('click', function () {
        fetch('https://api.giphy.com/v1/gifs/random?api_key=zkZpcto1WXOeEgcCuu5vyWXI1SjJycUC&tag=&rating=G')
            .then(function (data) {
                return data.json();
            })
            .then(function (result) {
                let url = result.data.image_url;
                let gif = result.data.title;

                document.querySelector('h1').innerHTML = gif
                document.querySelector('img').setAttribute('src', url)
            })
            .catch(function (error) {
                console.log(error)
            })
    })
}