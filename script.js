const nome = 'Gabriel'

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
            "Aplicações baseadas em visão computacional com controle fuzzy em sistemas robóticos - SBAI 2019",
            "Restriction of Transverse Feedback Linearization for Piecewise Linear Paths - Wiley Online Library",
        ])
    } else if (professor.match("Igor")) {
        publicacoes.push([
            "Combinational Intelligent Networks - International Conference on Application-specific Systems, Architectures and Processors (ASAP) 2023",
            "Accelerometer-Based Bed Occupancy Detection for Automatic, Non-Invasive Long-Term Cough Monitoring - IEEE Access - 2023",
            "Automatic Non-Invasive Cough Detection based on Accelerometer and Audio Signals - JOURNAL OF SIGNAL PROCESSING SYSTEMS FOR SIGNAL - 2022",
            "Deep Neural Network Based Cough Detection Using Bed-Mounted Accelerometer Measurements - IEEE International Conference on Acoustics, Speech and Signal Processing - 2021"
        ])   
    } else if (professor.match("Gildeberto")) {
        publicacoes.push([
            "Restriction of Transverse Feedback Linearization for Piecewise Linear - SCOPUS"
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