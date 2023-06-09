function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtAno');
    var res = document.querySelector('div#res');

    if (fano.value.length < 4 || Number(fano.value) > ano) {
        alert('[#ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radSex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                // Bebê
                img.setAttribute('src', './assets/bebe-masc.png')
                res.innerHTML = `Detectamos um bebê ${genero} com ${idade} anos.`
                document.body.style.background = '#0092b1'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './assets/jovem-masc.png')
                res.innerHTML = `Detectamos um ${genero} jovem com ${idade} anos.`
                document.body.style.background = '#014406'
            } else if (idade < 52) {
                // Adulto
                img.setAttribute('src', './assets/adulto-masc.png')
                res.innerHTML = `Detectamos um ${genero} adulto com ${idade} anos.`
                document.body.style.background = '#04047e'
            } else if (idade < 100) {
                // Idoso
                img.setAttribute('src', './assets/idoso-masc.png')
                res.innerHTML = `Detectamos um ${genero} idoso com ${idade} anos.`
                document.body.style.background = '#011937'
            } else {
                // Faleceu
                img.setAttribute('src', './assets/luto-1.png')
                res.innerHTML = `✟ Provavelmente esta pessoa já faleceu ✟`
                document.body.style.background = '#222932'
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                // Bebê
                img.setAttribute('src', './assets/bebe-fem.png')
                res.innerHTML = `Detectamos um bebê ${genero} com ${idade} anos.`
                document.body.style.background = '#c49ef4'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './assets/jovem-fem.png')
                res.innerHTML = `Detectamos um ${genero} jovem com ${idade} anos.`
                document.body.style.background = '#c58ef9'
            } else if (idade < 52) {
                // Adulto
                img.setAttribute('src', './assets/adulto-fem.png')
                res.innerHTML = `Detectamos um ${genero} adulto com ${idade} anos.`
                document.body.style.background = '#93019c'
            } else if (idade < 100) {
                // Idoso
                img.setAttribute('src', './assets/idosa-fem.png')
                res.innerHTML = `Detectamos um ${genero} idoso com ${idade} anos.`
                document.body.style.background = '#4f0601'
            } else {
                // Faleceu
                img.setAttribute('src', './assets/luto-1.png')
                res.innerHTML = `✟ Provavelmente esta pessoa já faleceu ✟`
                document.body.style.background = '#222932'
            }
        }
        res.appendChild(img)
    }
}