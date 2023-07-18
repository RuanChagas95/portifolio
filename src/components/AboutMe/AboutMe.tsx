import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutMeContainer = styled.div`
  display: flex;
  padding: 30px;

  @media (max-width: 759px) {
    flex-direction: column;
  }
`;

const MePhoto = styled.div`
  text-align: center;
  max-width: 33.33%;
  max-height: 167px;
  border-radius: 15%;
  margin: 10px;

  @media (max-width: 759px) {
    border-radius: 40%;
  }
`;

const MeText = styled.div`
  max-width: 1000px;
  display: flex;
  align-items: center;
  margin: 10px;
`;

const MeName = styled.h5`
  color: dimgray;
  font-size: medium;
`;

const Photo = styled.img`
  border-radius: 100%;
  width: 136px;

  @media (max-width: 759px) {
    max-width: 250px;
  }
`;

const TextStart = styled.p`
  & span {
    color: dimgray;
    font-size: medium;
  }
`;

function AboutMe() {
  const imgLink = 'https://media.licdn.com/dms/image/D5603AQEOGzgR6_Qmkg/profile-displayphoto-shrink_200_200/0/1683397874618?e=1694044800&v=beta&t=JUve6IgQYBqqYP6Ub61mPRtJ9jQbTKEMT4lEaMX-D00';

  return (
    <Container>
      <AboutMeContainer className="container">
        <MePhoto>
          <Photo src={imgLink} alt="Foto de perfil de Ruan Chagas" />
          <div>
            <MeName><em>Ruan Chagas</em></MeName>
          </div>
        </MePhoto>
        <MeText>
          <TextStart>
            Nascido no Rio de Janeiro, moro atualmente em <span id='me-city'>Belford Roxo, RJ</span>.
            Sou apaixonado por tecnologias, Games e inteligências artificiais estão no meu dia a dia, mas sem
            deixar de lado o velho violão. Depois de anos "brincando" com programação, finalmente me tornei aluno da{' '}
            <a href="https://www.betrybe.com/" target="_blank">Trybe</a> no início de 2023 para começar a trilhar o caminho do desenvolvimento profissional.
          </TextStart>
        </MeText>
      </AboutMeContainer>
    </Container>
  );
}

export default AboutMe;