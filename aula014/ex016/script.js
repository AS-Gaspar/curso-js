function verificar() {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: </br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }


        if (i < f) {
            // Contagem crescente
            for (let r = i; r <= f; r += p) {
                res.innerHTML += `${r} \u{1F449}`
            } 
        } else {
            // Descrescente
            for(let r = i; r >=f; r -= p) {
                res.innerHTML += `${r} \u{1F449}`
            }    
        }
        res.innerHTML += `\u{1F3C1}`
    }
}