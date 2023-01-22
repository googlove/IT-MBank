import styled from "styled-components";

export default function Header({ name, onClick }) {
  return <HeaderTag onClick={onClick}>{name}</HeaderTag>;
}

const HeaderTag = styled.div`
  /* робимо темний колір фону блока */
  background: linear-gradient(
    62.93deg,
    #86a970 30.68%,
    #8e0eb3 55.55%,
    #9f3048 88.55%
  );

  /* робимо щоб знизу блок мав закруглення */
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  /* режим верстки flex, робимо текст по центру */
  display: flex;
  justify-content: center;

  /* ставимо колір тексту білим */
  color: #c1c5ec;

  /* робимо відступи вертикальні та горизонтальні,
    щоб текст не притискався до країв блоку
   */
  padding: 15px;
`;
