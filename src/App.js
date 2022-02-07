import './App.css';
import {Main} from "./components/main/main";
import styled from "styled-components";


const MainStl = styled.div`
  background-color: #f7f7f7;
`

const WrapperStl = styled.div`
  width: 70%;
  margin: 0 auto;
`



function App() {

  return (
      <>
          <MainStl>
              <WrapperStl>
                  <Main/>
              </WrapperStl>
          </MainStl>
      </>

  );
}

export default App;
