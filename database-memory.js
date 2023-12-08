import { randomUUID } from "node:crypto";
export class DatabaseMemory{
#mangas = new Map()

//listando mangas em as  chaves
list(){
    return this.#mangas.values()
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

delete(id, manga){
    this.#mangas.delete(id, manga)
}
}