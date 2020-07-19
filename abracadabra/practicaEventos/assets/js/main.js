window.onload = () => {
    document.querySelector('#abracadabra').addEventListener('click', ()=>{
        let nombreUsuario = prompt('Ingresa tu nombre');
        document.querySelector('header h1 strong').innerHTML = nombreUsuario;
    })

    document.querySelector('#getTouch').addEventListener('dblclick', ()=>{
        document.querySelector('.parrafo-color').style.color = colorAlAzar()
    })

    const colorAlAzar = ()=>{
        let arrColores = ['red', 'blue', 'green', 'yellow', 'orange'];
        lista = arrColores.sort(function() {return Math.random() - 0.5});

        return lista[0]
    }

    let sectionStyle1 = document.querySelectorAll('.sectionStyle1')
    var h3 = document.querySelectorAll('.sectionStyle1 h3')

    h3.forEach(e => {
        e.addEventListener('click', ()=>{
            alert(e.innerHTML)
        })
    })

    let recentWork = document.querySelector('#recentWork');
    let recentWorkText = document.querySelector('#recentWorkText');

    recentWork.addEventListener('mouseenter', ()=>{
        recentWorkText.style.color = colorAlAzar()
    })

    recentWork.addEventListener('mouseout', ()=>{
        recentWorkText.style.color = '#888'
    })

    let fit = document.querySelector('.fit');

    fit.addEventListener('click',()=>{
        alert('preparate para el futuro');
        setTimeout(() => {
            alert('Y el futuro ya llego')
        }, 5000);
    })
    
    let email = document.querySelector('#email');

    email.addEventListener('keypress', (e)=>{
        if(e.charCode == 32){
            e.preventDefault()
            alert(`Presionaste la tecla ${e.key}`)
        }
    })

    var estadoSecreto = 0;

    window.addEventListener('keypress', (e)=>{
        if(e.charCode == 115 && estadoSecreto == 0){
            estadoSecreto = 1
            console.log('s')
        } 
        if(e.charCode == 101 && estadoSecreto == 1){
            estadoSecreto = 2
            console.log('se')
        } else if (e.charCode == 101 && estadoSecreto == 4){
            estadoSecreto = 5
            console.log('secre')
        }
        if(e.charCode == 99 && estadoSecreto == 2){
            estadoSecreto = 3
            console.log('sec')
        }
        if(e.charCode == 114 && estadoSecreto == 3){
            estadoSecreto = 4
            console.log('secr')
        }
        if(e.charCode == 116 && estadoSecreto == 4){
            estadoSecreto = 5
            console.log('secret')
        }
        if(e.charCode == 111 && estadoSecreto == 5){
            estadoSecreto = 0
            alert('Secreto magico')
        }
       
        
    })
}


