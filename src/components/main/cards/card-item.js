import styled from "styled-components";


const CardItemStl = styled.div`
  padding: 10px;
  border: 1px solid #aeaeae;
  border-radius: 15px;
  width: 350px;    
  height: 280px;
  margin: 30px;
  background-color: #fff;
`

const CardHeader = styled.div`
  display: flex;   
  justify-content: space-between;
`

const PhotoContainerStl = styled.img`
  width: 60%;
  margin: 0 auto;
  display: flex;
`

const TitleStl = styled.h2`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
`

const DescriptionStl = styled.p`
  color: #aeaeae;
  width: 60%;
  margin: 0 auto;
`

const CardBtnStl = styled.button`
  border: 1px solid #c4c4c4;
  border-radius: 50%;
  width: 35px;
  height: 35px;  
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background-color: #e5e5e5;
  }
`




export const CardItem = ({name, description, url}) => {
    return (
        <CardItemStl>
            <CardHeader>
                <CardBtnStl>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.684 22C17.5806 22 17.4783 21.9578 17.3962 21.8764L12.9371 17.4561H3.05822C1.3719 17.456 0 15.8429 0 13.86V3.59605C0 1.61317 1.3719 0 3.05822 0H18.9418C20.6281 0 22 1.61322 22 3.59605V13.86C22 15.8429 20.6281 17.456 18.9418 17.456H18.1304V21.475C18.1304 21.6793 18.0297 21.865 17.8722 21.951C17.8121 21.9839 17.7478 22 17.684 22ZM3.05822 1.05003C1.8643 1.05003 0.892975 2.19216 0.892975 3.59605V13.86C0.892975 15.2638 1.8643 16.406 3.05822 16.406H13.1002C13.2055 16.406 13.3074 16.4498 13.388 16.5296L17.2374 20.3457V16.931C17.2374 16.641 17.4374 16.406 17.684 16.406H18.9418C20.1357 16.406 21.107 15.2638 21.107 13.86V3.59605C21.107 2.19216 20.1357 1.05003 18.9418 1.05003H3.05822V1.05003Z" fill="#C4C4C4"/>
                        <path d="M18.1912 5.87945H3.8088C3.56222 5.87945 3.36234 5.64435 3.36234 5.35444C3.36234 5.06447 3.56222 4.82942 3.8088 4.82942H18.1912C18.4378 4.82942 18.6377 5.06447 18.6377 5.35444C18.6377 5.64435 18.4378 5.87945 18.1912 5.87945Z" fill="#C4C4C4"/>
                        <path d="M18.1912 9.24136H3.8088C3.56222 9.24136 3.36234 9.00625 3.36234 8.71634C3.36234 8.42637 3.56222 8.19132 3.8088 8.19132H18.1912C18.4378 8.19132 18.6377 8.42637 18.6377 8.71634C18.6377 9.00625 18.4378 9.24136 18.1912 9.24136Z" fill="#C4C4C4"/>
                        <path d="M18.1912 12.6033H3.8088C3.56222 12.6033 3.36234 12.3682 3.36234 12.0783C3.36234 11.7883 3.56222 11.5533 3.8088 11.5533H18.1912C18.4378 11.5533 18.6377 11.7883 18.6377 12.0783C18.6377 12.3682 18.4378 12.6033 18.1912 12.6033Z" fill="#C4C4C4"/>
                    </svg>
                </CardBtnStl>
                <CardBtnStl>
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.04257 0C1.3622 0 0 1.36949 0 3.05882V12.9412C0 14.6305 1.3622 16 3.04257 16H12.8745C14.5549 16 15.9171 14.6305 15.9171 12.9412V11.4548L20.1684 14.3834C20.9449 14.9184 22 14.3593 22 13.4129V2.58675C22 1.64045 20.9452 1.08139 20.1686 1.61608L15.9171 4.54325V3.05882C15.9171 1.36949 14.5549 0 12.8745 0H3.04257ZM15.9171 9.74344V6.25431L20.5957 3.03306V12.9665L15.9171 9.74344ZM14.5129 3.05882V12.9412C14.5129 13.8508 13.7793 14.5882 12.8745 14.5882H3.04257C2.13775 14.5882 1.40426 13.8508 1.40426 12.9412V3.05882C1.40426 2.14918 2.13775 1.41176 3.04257 1.41176H12.8745C13.7794 1.41176 14.5129 2.14918 14.5129 3.05882Z" fill="#C4C4C4"/>
                    </svg>
                </CardBtnStl>
            </CardHeader>
            <PhotoContainerStl src={url}/>
            <TitleStl>{name}</TitleStl>
            <DescriptionStl>{description}</DescriptionStl>
        </CardItemStl>
    )
}