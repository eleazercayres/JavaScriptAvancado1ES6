class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        // cria um novo array com [] e concatena com o conteúdo de this._negociacoes, resultando em um novo array
        return [].concat(this._negociacoes);
    }
}