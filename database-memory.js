import { randomUUID } from "crypto"


export class DatabaseMemory{
#mangas = new Map()

//listando mangas em as  chaves
list(search){
    return Array.from(this.#mangas.entries()).map((mangaArray)  => {
        //Primeira Posição
        const id = mangaArray[0]
        //Segunda Posição
        const data = mangaArray[1]

        return{
            id,
            ...data,
        }
    })
//Retornando apenas resultados da pesquisa
.filter(manga => {
    if (search) {
        return manga.titulo.includes(search)
    }
    return true
})
}

//Estou criando um manga
create(manga){
    // Gerando id de mangas aleatorio
    const mangaId = randomUUID()
    this.#mangas.set(mangaId, manga)
}

//Atualizando o manga
update(id, manga){
    this.#mangas.set(id, manga)
}
//Deletando livro
delete(id, manga){
    this.#mangas.delete(id, manga)
}
}