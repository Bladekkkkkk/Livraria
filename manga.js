//Criando o servidor usando o fastify
import  { fastify } from 'fastify'

import { DatabaseMemory } from './database-memory.js'

//Croando o database
const database = new DatabaseMemory()

//Criando o servidor 
const manga = fastify()

/*manga.post('/manga', (request, reply) => {
    const body = request.body
    console.log(body)
})*/

manga.get('/', () => {
    return 'Olá Mundo'
})

manga.post('/mangas', (request, reply) => {
    //Acessando dadosdo corpo(desestrurados)
    const {titulo, autor, npaginas } = request.body
    database.create({
        titulo: titulo,
        autor: autor,
        npaginas: npaginas,
    })
    //Listando o manga
    console.log(database.list())
    //Retornando o status da rota
    return reply.status(201).send()
})


manga.get('/mangas',(request) => {
    //Pegando o busca
    const search = request.query.search
    //Imprimindo a busca
    console.log(search)
    //Acessando o database
    const mangas = database.list(search)
    
    return mangas
})

manga.put('/mangas/:id',(request, reply) => {
    //Passando o ID do Manga
    const mangaId = request.params.id
    //Passando restante dos atibutos
    const{titulo, autor, npaginas} = request.body

    const manga = database.update(mangaId, {
        titulo: titulo,
        autor: autor,
        npaginas: npaginas,

    })
    //Sucesso sem conteudo
    return reply.status(204).send()
    //return 'atualizar'
})

manga.delete('/mangas/:id',(request, reply) => {
    //Passando o ID do MANGA
    const mangaId = request.params.id
    //Deletando o Manga
    database.delete(mangaId)
    //Retornando status de sucesso em branco
    return reply.status(204).send()
})

//Passando a porta com objecto
manga.listen({
    port:3333,
})

