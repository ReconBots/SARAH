function mudaNome(muda) {
    if (!muda) {
        document.getElementById('title-sarah').innerHTML = "RASHA"
        document.getElementById('descricao').innerHTML = "(Robotic Autonomous System for Human Assistance)"
    } else {
        document.getElementById('title-sarah').innerHTML = "SARAH"
        document.getElementById('descricao').innerHTML = "(Sistema Autônomo Robótico para Assistência Humana)"
    }
}

function publicações (professor, leave) {
    container = document.getElementById('info-professor')
    if (leave) {
        container.style.display = 'block'
    } else {
        container.style.display = 'none'
    }
    if (professor.match("Ivanoé")) {
        
    } 
}