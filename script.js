function mudaNome(muda) {
    if (!muda) {
        document.getElementById('title-sarah').innerHTML = "RASHA"
        document.getElementById('descricao').innerHTML = "(Robotic Autonomous System for Human Assistance)"
    } else {
        document.getElementById('title-sarah').innerHTML = "SARAH"
        document.getElementById('descricao').innerHTML = "(Sistema Autônomo Robótico para Assistência Humana)"
    }
}