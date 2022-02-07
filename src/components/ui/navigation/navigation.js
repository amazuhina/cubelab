import {BtnNav} from "./btn-nav";
import {arrayBtnNav} from "../../../model";
import styled from "styled-components";


const NavigationStl = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
`


export const Navigation = () => {
    return (

        <NavigationStl>
            {
                arrayBtnNav.map(i => <BtnNav title={i}/>)
            }
        </NavigationStl>
    )
}