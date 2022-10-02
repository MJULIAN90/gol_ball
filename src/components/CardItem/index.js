import React from "react";
import { images } from "../../assets/index.js";
import {
  Container2,
  Container,
  TextDescription,
  ButtonCard,
  ButtonDisable,
  Center,
} from "../../styles/globalStyles.js";
import { shortenAddress } from "../../utils/index.js";

const CardItem = ({
  item,
  currentWalletAccount,
  getTranferNtf,
  alertSendNtf,
}) => (
  <Container2 style={{ padding: "15px", opacity: 0.9 }} test>
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <img alt={"Error"} src={images.ntf} style={{ marginLeft: 15 }} />
      <TextDescription>ID: {item.id}</TextDescription>
      <TextDescription>OWNER: {shortenAddress(item.ownerNtf)}</TextDescription>

      <Center>
        {currentWalletAccount.toUpperCase() !== item.ownerNtf.toUpperCase() ? (
          <ButtonDisable disabled={true}>Not allowed to you</ButtonDisable>
        ) : (
          <ButtonCard onClick={() => alertSendNtf(getTranferNtf, item.id)}>
            Transfer NTF
          </ButtonCard>
        )}
      </Center>
    </Container>
  </Container2>
);

export default CardItem;
