const nomes = ["Fernanda", "Giuliana", "Maria Eduarda", "Marcelo", "Amanda", "Gustavo", "Gabriel"];

// Função para retornar um nome aleatório da lista
export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

// Função para obter um nome aleatório
export function obterNome() {
    return aleatorio(nomes);
}
