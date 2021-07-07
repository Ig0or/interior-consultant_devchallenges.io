export default class MenuMobile {
  constructor(botaoMenu, listaMenu, conteudos){
    this.botaoMenu = document.querySelector(botaoMenu);
    this.listaMenu = document.querySelector(listaMenu);
    this.conteudos = document.querySelectorAll(conteudos)
    this.eventos = ['click', 'touchstart']

    this.alterarConteudo = this.alterarConteudo.bind(this)
  }

  alterarConteudo(evento) {
    console.log(evento)
    this.conteudos.forEach((conteudo) => {
      conteudo.classList.toggle('remove')
    })
    this.listaMenu.classList.toggle('ativo')
    this.botaoMenu.classList.toggle('alterar--bg')
  }

  clickMenu(){
    this.eventos.forEach((evento) => {
      this.botaoMenu.addEventListener(evento, this.alterarConteudo)
    })
  }
}