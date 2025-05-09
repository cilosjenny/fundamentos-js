// shadowing= o  escopo local esta orpimindo o escopo global

const texto = "estou no escopo global"

function exemplo() {
    //camufla a externa e enxerga so a interna
    const texto = "estou no escopo local da função"
    console.log(texto);
    
}

console.log(texto);
//enxerga a de fora

// hoinsted: pode chamar a funçao mesmo antes dela ser declarada