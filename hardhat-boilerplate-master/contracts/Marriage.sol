//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

contract Marriage {
    string public name = "Contrat de Mariage";
    string public symbol = "MARR";

    uint256 public totalSupply = 1; // Un seul contrat de mariage est créé

    address public owner;

    mapping(address => uint256) public balances; //Argent du mariage

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    // Informations sur le mariage
    string public weddingDate;
    Child[] public children;

    string public nameMaryMan;
    string public nameMaryWomen;

    //Object enfant avec un nom prenim et age
    struct Child {
        string firstName;
        string lastName;
        uint age;
    }

    //On met en place les données du mariage
    constructor(string memory _weddingDate, string memory _maryMan, string memory _maryWomen) {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;

        weddingDate = _weddingDate;
        nameMaryMan = _maryMan;
        nameMaryWomen = _maryWomen;
    }

    //On ajoute un petit enfant trop pipou
    function addChild(string memory _firstName, string memory _lastName, uint _age) public {
        require(msg.sender == owner, "Only the owner can add children");
        children.push(Child(_firstName, _lastName, _age));
    }

    //Creation d'un mariage (a faire avec en object (enfant, mari, marie, date))
    //TODO
    
    //On retourn l'argent utilisé pour le mariage
    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}
