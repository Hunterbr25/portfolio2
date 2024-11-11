import imagemDev from './img/grapy-software-developer-coding-with-two-monitors.png'
import iconegithub from './img/icons8-github-50.png'
import linkedin from './img/icons8-linkedin-50.png'


function App() {
  
  return (
    <>
     <main>
      <section>
      <p>
        Olá Seja bem-vindo(a) ao meu portfólio.
      </p>

      <p>
        Meu nome é <span>Tiago</span> e eu sou um desenvolvedor web
      </p>

      <div id="linkedin">
      <a href="https://www.linkedin.com/in/tiago-ferreira-a18611338/">
      <img id='linkedin' src={linkedin}  />
      </a>
      <a href="https://github.com/Hunterbr25">
      <img id="iconegit" src={iconegithub}/>
      </a>
      </div>
      <a href="#sobreMim">
        <button>Conheça mais sobre mim</button>
      </a>
      </section>

      <section>
        <img id="imagemDev" src={imagemDev}/>
      </section>
    </main>
    </>
   
  )
}

export default App

