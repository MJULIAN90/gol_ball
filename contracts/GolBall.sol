// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./IGolBall.sol";

// Creación del Smart Contract para el Videojuego NFT
contract GolBall is ERC721, IGolBall {

    using Counters for Counters.Counter;

    // Constructor de mi Smart Contract
    constructor (string memory _name, string memory _symbol)
    ERC721(_name, _symbol) {}

    // Contador de tokens NFT
    Counters.Counter private _idCounter;

    // Estructura de almacenamiento
    Player [] public players;
    
    // Funciones 

    // Creación del Token NFT
    function createNtf() public override{
        uint256 current = _idCounter.current();
        Player memory newPlayer = Player(current, msg.sender);
        _safeMint(msg.sender, current);
        players.push(newPlayer);
        _idCounter.increment();
        emit NewPlayer(msg.sender, current);
    }

    // Obtención de todos los jugadores
    function getPlayers() public view override returns (Player [] memory) {
        return players;
    }

    // Visualizar la dirección del Smart Contract
    function addressSmartContract() public view override returns (address) {
        return address(this);
    }

    // Tranferir tocken
    function tranferTocken ( address _to, uint _idTocken) public override {
        require (msg.sender == ownerOf(_idTocken), "You do not have permissions to run this operation");
        transferFrom(msg.sender, _to, _idTocken);
        players[_idTocken].owner = _to;
    } 

}