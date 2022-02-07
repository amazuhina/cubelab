import styled from "styled-components";


const BtnNavStl = styled.button`

`


export const BtnNav = ({title}) => {
    return (
        <BtnNavStl>
            {title}
        </BtnNavStl>
    )
}