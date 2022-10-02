import React, { useContext } from "react";
import CardItem from "../CardItem";
import { TransactionContext } from "../../context/TransactionContext";

import {
  Container,
  TextTitle,
  ButtonCard,
  TextTitleCenter,
  ContainerTitle,
  ContainerHeader,
  ContainerHeaderBotton,
} from "../../styles/globalStyles.js";

const Render = () => {
  const {
    currentWalletAccount,
    getCreateNTF,
    listNtfs,
    getNumberContract,
    getTranferNtf,
    alertSendNtf,
    connectToRopsten,
  } = useContext(TransactionContext);

  // si se usa en local desabiiltar este segmento de codigo
  if (window.ethereum.chainId !== "0x3") {
    return (
      <Container flex={1} ai={"center"} jc={"center"}>
        <TextTitle> ¡WELCOME TO NTF GOL BALL!</TextTitle>
        <ButtonCard onClick={connectToRopsten}>CONNECT TO ROPSTEN</ButtonCard>
      </Container>
    );
  }

  return (
    <Container ai={"center"} style={{ padding: "10px" }}>
      <ContainerHeader>
        <div style={{ width: "30%", marginLeft: 20 }}>
          <TextTitle> ¡WELCOME NTF! </TextTitle>
        </div>
        <ContainerHeaderBotton>
          <ButtonCard onClick={getCreateNTF}>CREATE NEW NTF</ButtonCard>

          <ButtonCard onClick={getNumberContract}>NUMBER CONTRACT</ButtonCard>
        </ContainerHeaderBotton>
      </ContainerHeader>

      {listNtfs.length === 0 ? (
        <ContainerTitle>
          <TextTitleCenter>CREATE YOUR FIRST NTF</TextTitleCenter>
        </ContainerTitle>
      ) : (
        <Container
          jc={"center"}
          fd={"row"}
          style={{
            flexWrap: "wrap",
            backgroundColor: "rgb(25, 39, 61)",
            width: "80%",
            opacity: 0.8,
          }}
        >
          {listNtfs.map((item) => (
            <CardItem
              item={item}
              key={item.id}
              currentWalletAccount={currentWalletAccount}
              getTranferNtf={getTranferNtf}
              alertSendNtf={alertSendNtf}
            />
          ))}
        </Container>
      )}
    </Container>
  );
};

export default Render;
