import styled from "styled-components";
import { Header1 } from "../../styles/Common";
import { InfoAccordion } from "./InfoAccordion";


export const PraktiskInfo = () => {
    return (
      <SectionWrapper>
        <Header1>Praktisk info</Header1>
        <InfoAccordion />
      </SectionWrapper>
    )
  }
  
  // Styled components:
  
  const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 65vh;
    margin-top: 50px;
    margin-bottom: 50px;
    animation: fadeIn 0.5s;
      @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
      }
  `