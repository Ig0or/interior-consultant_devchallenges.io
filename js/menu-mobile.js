export default class MenuMobile {
  constructor(botaoMenu, listaMenu, conteudos){
    this.botaoMenu = document.querySelector(botaoMenu);
    this.listaMenu = document.querySelector(listaMenu);
    this.conteudos = document.querySelectorAll(conteudos)
    this.eventos = ['click']

    this.alterarConteudo = this.alterarConteudo.bind(this)
  }

  alterarConteudo() {
    this.conteudos.forEach((conteudo) => {
      conteudo.classList.toggle('remove')
    })
    this.listaMenu.classList.toggle('ativo')
    this.botaoMenu.classList.toggle('alterar--bg')
  }

  clickMenu(){
    this.botaoMenu.addEventListener('click', this.alterarConteudo)
  }
}