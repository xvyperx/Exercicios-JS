
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 5 && hora < 12) {
        // Bom dia
        img.src = './img/manha.png'
        document.body.style.background = '#b29079'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = './img/tarde.png'
        document.body.style.background = '#c98d5f'
    } else if (hora >= 18 && hora <= 23) {
        // Boa noite
        img.src = './img/noite.png'
        document.body.style.background = '#222932'
    } else {
        // Boa madrugada
        img.src = './img/madrugada.png'
        document.body.style.background = '#0e1016'
    }
}