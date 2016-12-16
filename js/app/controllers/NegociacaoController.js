class NegociacaoController {

	 constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        //classe responsavel pela manipulacao da lista de negociacao
        this._listaNegociacoes = new ListaNegociacoes();
         // instancia de da nossa View que recebe como parametro o elemento do DOM
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        // chamando o método `update` da nossa view.
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView')); 
    }

    adiciona(event) {

        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        // atualiza a view a cada inclusão para que reflete o estado atual da nossa lista de negociações
        this._negociacoesView.update(this._listaNegociacoes);
        // nova mensagem e atualizado a view
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);

        this._limpaFormulario();
    }

    _criaNegociacao() {
        return new Negociacao(
                DateHelper.textoParaData(this._inputData.value),
                this._inputQuantidade.value,
                this._inputValor.value
            );   
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputData.focus();
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0
    }
}