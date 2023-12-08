//Criando o servidor usando o fastify
import  { fastify } from 'fastify'

import { DatabaseMemory } from './database-memory.js'

//Croando o database
const database = new DatabaseMemory()

//Criando o servidor 
const manga = fastify()


manga.post('/mangas', (request, reply) => {
    database.create({
        titulo: 'Manga 01',
        autor: 'autor 01',
        npaginas:400,
    })
    console.log(database.list())
    return reply.status(201).send()
})

manga.get('/mangas',() => {
    return 'Ler!'
})

manga.put('/mangas/:id',() => {
    return 'atualizar'
})

manga.delete('/mangas/:id',() => {
    return 'atualizar'
})

//Passando a porta com objecto
manga.listen({
    port:3333,
})

