import styled, { css } from "styled-components";
import triangle from "../../svg/triangle.svg";
import { Link } from "react-router-dom";
import { InfoAccordionData } from "./InfoAccordionData";
import { TextWhite, Header2 } from "../../styles/Common";
import { useUI } from "../../state/ui-context";


export const InfoAccordion = () => {
  const { activeTopicId, toggleInfo } = useUI();

  const onTopicClick = (itemId) => {
    if (itemId === activeTopicId) {
      toggleInfo(null);
    } else {
      toggleInfo(itemId);
    }
  };


  return (
    <AccordionWrapper>
      {InfoAccordionData.map((item) => {
        if (item.id === 4) {
          return (
            <AccordionSectionWrapper key={item.id}>
              <TopicWrapper
                $isActive={item.id === activeTopicId}
                onClick={() => onTopicClick(item.id)}>
                <Header2>{item.topic}</Header2>
                <ActiveIcon
                  src={triangle}
                  alt="triangle"
                  $isActive={item.id === activeTopicId} />
              </TopicWrapper>
              {item.id === activeTopicId && (
                <TextWrapper>
                  <Text>
                    {item.p1} <StyledLink to="/kontakt">{item.p2}</StyledLink> {item.p3}
                  </Text>
                  <Text>{item.p4}</Text>
                </TextWrapper>
              )}
            </AccordionSectionWrapper>
          );
        } else {
          return (
            <AccordionSectionWrapper key={item.id}>
              <TopicWrapper
                $isActive={item.id === activeTopicId}
                onClick={() => onTopicClick(item.id)}>
                <Header2>{item.topic}</Header2>
                <ActiveIcon
                  src={triangle}
                  alt="triangle"
                  $isActive={item.id === activeTopicId} />
              </TopicWrapper>
              {item.id === activeTopicId && (
                <TextWrapper>
                  <Text>{item.p1}</Text>
                  <Text>{item.p2}</Text>
                  <Text>{item.p3}</Text>
                  <Text>{item.p4}</Text>
                  <Text>{item.p5}</Text>
                </TextWrapper>
              )}
            </AccordionSectionWrapper>
          );
        }
      })}
    </AccordionWrapper>
  );
};

// Styled Components

const AccordionWrapper = styled.div`
    width: 90%;
    min-width: 320px;
    max-width: 1050px;
    margin: 40px auto 60px auto;
  `

const AccordionSectionWrapper = styled.div`
    border-bottom: pink solid 1px;
  `

const TopicWrapper = styled.div`
    width: 100%;
    padding: 15px 50px 15px 50px;
    background-color: var(--transparentWhite);
    display: flex; 
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    @media (max-width: 550px) {
      padding: 15px 25px 15px 25px;
    }
  `

const TextWrapper = styled.div`
    width: 100%;
    padding: 20px 30px 20px 30px;
    background-color: var(--purple);
    color: var(--white);
    animation: fadeIn 0.5s;
    @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
    }
  `

const ActiveIcon = styled.img`
  height: 18px;
  width: 18px;
  transition: 0.5s;
  ${({ $isActive }) => $isActive && css`
    transform: scale(1.2) rotate(40deg);
  `}
`;

const Text = styled(TextWhite)`
    margin-top: 15px;
  `

const StyledLink = styled(Link)`
    color: white;
  `