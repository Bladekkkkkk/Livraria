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
    const {titulo, autor, npaginas } = request.body
    database.create({
        titulo: titulo,
        autor: autor,
        npaginas: npaginas,
    })
    console.log(database.list())
    return reply.status(201).send()
})


manga.get('/mangas',(request) => {
    const search = request.query.search

    console.log(search)

    const mangas = database.list(search)
    
    return mangas
})

manga.put('/mangas/:id',(request, reply) => {

    const mangaId = request.params.id

    const{titulo, autor, npaginas} = request.body

    const manga = database.update(mangaId, {
        titulo: titulo,
        autor: autor,
        npaginas: npaginas,

    })
    return reply.status(204).send()
    //return 'atualizar'
})

manga.delete('/mangas/:id',(request, reply) => {
    const mangaId = request.params.id
    database.delete(mangaId)

    return reply.status(204).send()
})

//Passando a porta com objecto
manga.listen({
    port:3333,
})

