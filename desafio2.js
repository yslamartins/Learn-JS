/* 1. Crie uma função que ajude professores a saber se o aluno está aprovado ou reprovado, 
    considerando os pontos abaixo:

    1. Lista de alunos:
        - Brayan:
            nota 1: 3
            nota 2: 5
            nota 3: 8
        - Tarzan:
            nota 1: 6
            nota 2: 9
            nota 3: 8
        - Jefferson:
            nota 1: 10
            nota 2: 5
            nota 3: 6
    2. A média mínima é 7.
    3. Informar se o aluno está aprovado ou reprovado.
    4. Crie uma função separada responsável por filtrar o aluno informado.
    5. Crie uma função separada responsável por calcular a média do aluno.
    6. Caso o aluno informado não esteja na lista, retornar uma mensagem de erro.
*/
const alunos = {
    'Brayan': { nota1: 3, nota2: 5, nota3: 8 },
    'Tarzan': { nota1: 6, nota2: 9, nota3: 8 },
    'Jefferson': { nota1: 10, nota2: 5, nota3: 6 }
};

function filtrarAluno(nome) {
    const aluno = alunos[nome];
    if (!aluno) {
        console.log(`Aluno ${nome} não existe.`);
        return null;
    }
    return aluno;
}

function calcularMedia(aluno) {
    const { nota1, nota2, nota3 } = aluno;
    const media = (nota1 + nota2 + nota3) / 3;
    return media;
}

function verificarAprovacao(nome) {
    const aluno = filtrarAluno(nome);
    if (aluno) {
        const media = calcularMedia(aluno);
        if (media >= 7) {
            console.log(`${nome} está aprovado com média ${media.toFixed(2)}`);
        } else {
            console.log(`${nome} está reprovado com média ${media.toFixed(2)}`);
        }
    }
}

// Testando a função principal
verificarAprovacao('Brayan');
verificarAprovacao('Tarzan');
verificarAprovacao('Jefferson');
verificarAprovacao('Maria');