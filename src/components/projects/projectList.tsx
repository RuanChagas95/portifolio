export type projectType = {
    name: string;
    folder: string;
    describe: string;
}
const pixelArtDescribe = `Pixel Art é um projeto para treinar manipulação no DOM e localStrorage que permite criar quadros brancos com tamanhos entre 5 e 50 pixels que podem ser pintados`
const learningToWriteDescribe = `Este projeto foi feito quando vi necessidade de ensinar meu filho de 1 ano e 6 meses a escrever seu nome de forma divertida, levou cerca de 1 mês para ele começar a comemorar suas vitórias várias vezes em sequência.`
const ytListDescribe = `a ideia para o YouTube List veio com a vontade de demonstrar a utilidade do localStorage, principalmente em algo prático, logo no início decidi usar bootstrap no youtube(péssima ideia, os conflitos deram muito trabalho), mas era o que eu estava treinando bootstrap na época e não quis ficar sem usar, esse projeto teve uma dificuldade especial pois foi a primeira vez que lidei com promises, e acabei fazendo funcionar antes de entende-las 100%, serviu de um ótimo insentivo para aprender a lidar com código assíncrono`
export const projectList: projectType[] =  [
    {
        name: 'Pixel Art',
        folder: 'pixel-art',
        describe: pixelArtDescribe
    },
    {
        name: 'Learning to Write',
        folder: 'learning-to-write',
        describe: learningToWriteDescribe
    },
    {
        name: 'YouTube Lists',
        folder: 'yt-list',
        describe: ytListDescribe
    }
]