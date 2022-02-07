import styled from "styled-components";


const BtnNavStl = styled.div`
  width: 19%;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  padding: 25px;
  transition: 0.4s;
  &:hover {
    background-color: lightslategray;
  }
`


export const BtnNav = ({title}) => {
    return (
        <BtnNavStl>
            {title}
        </BtnNavStl>
    )
}