import './aboutMe.css'
function AboutMe() {
    const imgLink = 'https://media.licdn.com/dms/image/D5603AQEOGzgR6_Qmkg/profile-displayphoto-shrink_200_200/0/1683397874618?e=1694044800&v=beta&t=JUve6IgQYBqqYP6Ub61mPRtJ9jQbTKEMT4lEaMX-D00'
    return (
        <div className="container" id="about-me">
        <div className="container-item" id="me-photo">

            <img className="photo" id="me-photo-jpg"

                src={imgLink}
                alt="Foto de perfil de Ruan Chagas" />
            <div id="me-name">
                <h2><em>Ruan Chagas</em></h2>
            </div>
        </div>

        <div className="container-item" id="me-text">
            <h3>
                <p>Nascido no Rio de janeiro, moro atualmente em <span id='me-city'>Belford roxo, RJ</span>.
                    Sou apaixonado por tecnologias, Games e inteligências artificiais estão no meu dia a dia, mas sem
                    deixar de lado o velho violão. Depois de anos "brincando" com programação, finalmente me tornei aluno da <a
                        href='https://www.betrybe.com/' target="_blank">Trybe</a> no início de 2023 para começar a trilhar o caminho do desenvolvimento profissional.
                </p>
            </h3>
        </div>

    </div>

    )
}
export default AboutMe