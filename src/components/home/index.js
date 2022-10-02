import React from "react";
import { Screen, Container, TextTitle } from "../../styles/globalStyles.js";

import { images } from "../../assets";
import Render from "../Render";

const Home = () => {
  return (
    <Screen image={images.bg}>
      {!window.ethereum ? (
        <Container flex={1} ai={"center"} jc={"center"}>
          <TextTitle> ¡WELCOME TO NTF GOL BALL!</TextTitle>
          {!window.ethereum && (
            <a href='https://metamask.io/' target={"_blank"}>
              DOWNLOAD METAMASK
            </a>
          )}
        </Container>
      ) : (
        <Render />
      )}
    </Screen>
  );
};

export default Home;
