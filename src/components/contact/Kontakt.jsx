import styled from "styled-components"
import { TextPurple, BoldSpan, Header1 } from "../../styles/Common"
// Kontaktformular... måske?

export const Kontakt = () => {
    return (
      <SectionWrapper>
        <TextWrapper>
          <Header1>Kontakt mig</Header1>
          <TextPurple>
            Hvis du er interesseret i at komme i forløb hos mig er du velkommen til at sende en mail til <BoldSpan>normfriterapi@protonmail.com</BoldSpan>
          </TextPurple>
          <TextPurple>
            Repræsenterer du en forening, er du fagperson, eller på anden vis mulig samarbejdspartner
            og interesseret i et kaffemøde eller eventuelt samarbejde er du også velkommen til
            at kontakte mig på overstående mailadresse.
          </TextPurple>
          <TextPurple>
            <br />
            <Centered><BoldSpan>Jeg ser frem til at høre fra dig.</BoldSpan></Centered>
          </TextPurple>
        </TextWrapper>
        {/*<ContactForm />*/}
      </SectionWrapper>
  
    )
  }
  
  const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.5s;
      @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
      }
  `
  
  const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  min-width: 300px;
  max-width: 560px;
  text-align: center;
  margin: 50px auto;
  // text-align: justify; makes weirds gaps in text, because of email-address
  hyphens: auto;
  `
  
  const Centered = styled.div`
    text-align: center;
  `