import React from "react";
import styled from "styled-components";
import Body from "./components/Body";
import { useGlobalContext } from "./context";
import Final from "./pages/Final";

const App = () => {
  // STATE VALUES
  const { activePage } = useGlobalContext();

  if (activePage < 4) {
    return (
      <div>
        <Wrapper>
          <div className="background"></div>
          <Body />
        </Wrapper>
      </div>
    );
  }

  return <Final />;
};

const Wrapper = styled.main`
  .background {
    height: 100%;
    z-index: -1;
    position: absolute;
    left: -0.62%;
    right: 0.21%;
    top: -0.41%;
    bottom: 40.91%;
    background: linear-gradient(
      180deg,
      rgba(242, 201, 76, 0.2) 0%,
      rgba(242, 153, 74, 0.2) 100%
    );
    clip-path: polygon(0 0, 100% 0, 100% 55%, 0 100%);
  }
`;

export default App;
