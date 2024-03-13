let objeto = {
    propriedadeA: "Conteúdo A",
    propriedadeB: "Conteúdo B",
    juntaQueFunciona: function(){
        return this.propriedadeA + " - " + this.propriedadeB
    },
    juntaQueNaoFunciona: () => {
        return this.propriedadeA+ " - " + this.propriedadeB
    }
}

console.log(objeto.juntaQueFunciona())