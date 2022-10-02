import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import contractData from "../contracts/GolBall.json";
import { contractNumberLocal, contractNumberRospten } from "../utils";
import useAlerts from "../Hooks/useAlerts";

export const TransactionContext = React.createContext();

const contractNumber = contractNumberLocal;
// const contractNumber = contractNumberRospten;

export const TransactionProvider = ({ children }) => {
  const { ethereum } = window;
  const { messageAlert, messageAlertError, alertSendNtf } = useAlerts();
  const [currentWalletAccount, setCurrentWalletAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [listNtfs, setListNtfs] = useState([]);

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum)
        return messageAlertError("You need a wallet like MetaMask!");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length) {
        setCurrentWalletAccount(accounts[0]);
        getEthereumContract();
      } else {
        messageAlertError("MetaMask not detected");
      }
    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object.");
    }
  };

  const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(
      contractNumber,
      contractData.abi,
      signer
    );
    setContract(transactionContract);
  };

  // Get list NTfs
  const getNtfs = async () => {
    try {
      const list = await contract.getPlayers();

      let array = [];
      await Promise.all(
        list.map(async (ntf) => {
          const owner = await contract.ownerOf(ntf.id);

          return array.push({
            id: ntf.id.toString(),
            ownerNtf: owner,
          });
        })
      );

      setListNtfs(array);
    } catch (error) {
      console.log(error.message);
    }
  };

  //Tranfer NTfs
  const getTranferNtf = async (_to, _idNtf) => {
    try {
      let transaction = await contract.transferFrom(
        currentWalletAccount,
        _to,
        _idNtf
      );
      const response = await transaction.wait();

      if (response.confirmations === 1) {
        messageAlert("Transfer Completed");
        getNtfs();
      } else {
        throw new Error("Error in operation");
      }
    } catch (error) {
      messageAlertError("Error in operation");
      console.log(error.message);
      return null;
    }
  };

  // Mint new Token NFT
  const getCreateNTF = async () => {
    try {
      let createNtf = await contract.createNtf();
      const response = await createNtf.wait();

      if (response.confirmations === 1) {
        messageAlert("Ntf Created successful");
        getNtfs();
      } else {
        throw new Error("Error creating your ntfs");
      }
    } catch (error) {
      messageAlertError("Error creating your ntfs");
      console.log(error.message);
    }
  };

  //Number contract
  const getNumberContract = async () => {
    try {
      const number = await contract.addressSmartContract();
      messageAlert(`The number contract is ${number}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  //Change network
  const connectToRopsten = async () => {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: `0x${Number(3).toString(16)}` }],
    });
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    getNtfs();
  }, [contract]);

  useEffect(() => {
    if (ethereum) {
      ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
      ethereum.on("chainChanged", (_chainId) => window.location.reload());
    }
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        currentWalletAccount,
        listNtfs,
        alertSendNtf,
        getCreateNTF,
        connectToRopsten,
        getNumberContract,
        getTranferNtf,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
