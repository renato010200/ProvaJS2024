let Pessoa = {
    nome : "Nome",
    nascimento : 00/00/00,
    cpf : 123456789
}
let aluno = {
    nome : "Nome",
    nascimento : "00/00/00",
    cpf : 123456789,
    matricula : 01
}  
    function retornaNota(){
       let nota = [4,5,2,8]
       let aluno = " Renato "
       return nota, aluno
       

    }

    function calcularMedias(_aluno){
    let media = 0
    
    alunos.forEach(aluno => {
        aluno.media = 0
        aluno.nota.forEach(nota => {
            aluno.media += nota
        })
        aluno.media /= aluno.notas.length

        media += aluno.media
       

    })

console.log(calcularMedias(aluno.media))

    }
