const nome = "SEGMENTAÇÃO DE IMAGEM NÃO SUPERVISIONADA PARA RECONHECIMENTO DE AÇÕES. In: VI SEMINÁRIO DE AVALIAÇÃO DE PESQUISA CIENTÍFICA E TECNOLÓGICA (SAPCT) E V WORKSHOP DE INTEGRAÇÃO E CAPACITAÇÃO EM PROCESSAMENTO DE ALTO DESEMPENHO (ICPAD)"

console.log(nome.toLowerCase())

function publicacoes (professor, leave) {
    const containerPubli = document.getElementById('content-info-professor')
    const container = document.getElementById('info-professor')

    const publicacoes = []

    var ul = document.createElement("ul")
    var li = document.createElement("li")
    if (leave) {
        container.style.display = 'flex'
    } else {
        container.style.display = 'none'
        publicacoes = []
        containerPubli.removeChild(ul)
    }
    if (professor.match("Luiz Carlos")) {
        publicacoes.push([
            
        ])
    } else if (professor.match("Igor")) {
        publicacoes.push([
            
        ])   
    } else if (professor.match("Gildeberto")) {
        publicacoes.push([
            
        ])
    } else {
        publicacoes = []
    }

    for (item of publicacoes) {
        console.log(item)
        li.createTextNode = item
        ul.appendChild(li)
    }

    containerPubli.appendChild(ul)
}