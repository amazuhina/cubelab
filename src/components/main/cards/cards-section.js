import {CardItem} from "./card-item";
import {model} from "../../../model";
import styled from "styled-components";


const CardSectionStl = styled.div`
  
  display: flex;
  height: 80vh;
`



export const CardSection = () => {
    return (
        <CardSectionStl>
            {
                model.map(i => (
                    <CardItem
                        key={i.id}
                        name={i.name}
                        description={i.description}
                        url={i.url}
                    />
                ))
            }
        </CardSectionStl>
    )
}