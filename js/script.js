const frm = document.querySelector("form") //obtém os elementos da página para serem manipulados
const resp = document.querySelector("pre")

const animais = [] //declara o vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o envio do form
    const nome = frm.inNome.value  //obtém o conteúdo dos campos
    const idade = Number(frm.inIdade.value)
    const tipo = frm.inTipo.value
    const porte = frm.inPorte.value
    animais.push({nome, idade, tipo, porte}) //adiciona os dados ao vetor de objetos
    frm.reset() //limpa os campos do código
    frm.inNome.focus() //posiciona no campo de formulário
    frm.btListar.dispatchEvent(new Event("click")) //dispara click em btlistar
}) 
frm.btListar.addEventListener("click", ( ) => {
    if (animais.length == 0) { //se for igual a zero ou vazio exibe o alerta
        alert("Não há animal na lista")
        return
    }
    let lista = "" //para concatenar a lista de animais
    for (const animal of animais){
        const { nome, idade, tipo, porte } = animal //desestrutura o objeto
        lista += `--- ${tipo} - ${porte} - ${nome} - ${idade} anos\n`
    }
    resp.innerText = lista //exibe a lista de animais 
})
//bloco para resumir caracteristicas
frm.btResumir.addEventListener("click", () => {
    if (animais.length == 0) { //se for zero ou vazio exibe o alerta
        alert("Não há animais na lista")
        return
    }
    const copia = [...animais] //cria a cópia do vetor animais
    copia.sort((a, b,) => a.tipo - b.tipo)//ordena pelo tipo
    let resumo = "" //para concatenar saída
    let aux = copia[0].tipo //menor idade do vetor ordenando 

    let tipo =[] //para inserir tipo de cada idade
    for (const animais of copia) {
    const {nome, idade, tipo, porte} = animais
    if (tipo == aux) {
        tipo.push(tipo)
    }else { //senão, monta o resumo para cada idade
        resumo += aux + "ano(s):" + tipo.length + "animai(s) -"
        resumo +=((tipo.length / copia.length) * 100).toFixed(2) + "%\n"
        resumo += "(" + tipo.join(" , ") + ") \n\n"
        aux = tipo //obtém a nova idade na ordem
        tipo = [] //limpa o vetor dos nomes
        tipo.push(tipo) //adiciona o primeiro do tipo
    }
}
//adiciona o último animal 
    resumo += aux + "ano(s):" + tipo.length + "animais - "
    resumo +=((tipo.length / copia.length) * 100).toFixed(2) + "%\n"
    resumo += "(" + tipo.join(" , ") + ") \n\n"
    resp.innerText = resumo // exibe a resposta 
})