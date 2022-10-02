// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 < 0.9.0;

interface IGolBall {

    //---------------------------------------Events---------------------------------------
    // Declaración de un evento nuevo jugador
    event NewPlayer(address indexed owner,  uint256 indexed tokenId);

    //---------------------------------------Structs---------------------------------------
       // Estructura de datos con las propiedades del jugador
    struct Player {
        uint256 id;
        address owner;
    }

    //---------------------------------------Funciones---------------------------------------
    function createNtf() external;

    function getPlayers() external view returns (Player [] memory);
    
    function addressSmartContract() external view returns (address);
}