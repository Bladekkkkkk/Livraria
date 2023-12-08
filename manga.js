//Criando o servidor usando o fastify
import  { fastify } from 'fastify'

import { DatabaseMemory } from './database-memory.js'

//Croando o database
const database = new DatabaseMemory()

//Criando o servidor 
const manga = fastify()


manga.post('/manga', () => {
    return 'cadastrar!'
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

