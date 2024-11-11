import "./Sobre.css"

export const Sobre = ({categoria}) => {
    return(
        <div id={categoria}>
        <div id="resumo">
            <h2>Sobre mim</h2>

            <p>
            Comecei a aprender desenvolvimento web no SENAI em agosto, focando em HTML, CSS, JavaScript e React. No começo, aprendi a estruturar páginas com HTML e a deixar tudo bonito com CSS. <br></br> <br />
            Depois, com o JavaScript, comecei a entender como deixar as páginas mais interativas e dinâmicas. Agora, estou me aprofundando em React, que tem me ajudado a criar interfaces mais modernas e eficientes. 
            O curso tem sido uma ótima experiência, e estou cada vez mais empolgado para seguir aprendendo e colocando em prática tudo o que estou estudando! </p>
        </div>
        <div id="meus-conhecimentos">
            <h2>Meus conhecimentos</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>REACTJS</li>
            </ul>
        </div>

        </div>
    

    )
}