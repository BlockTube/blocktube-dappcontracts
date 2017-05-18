var blocktubeClip = artifacts.require("blocktubeClip.sol");
var blocktubeCoin = artifacts.require("blocktubeCoin.sol");
var blocktube = artifacts.require("blocktube.sol");
var blocktubeTag = artifacts.require("blocktubeTag.sol");
var blocktubeUser = artifacts.require("blocktubeUser.sol");


var owner = web3.eth.accounts[0];
var delegate = web3.eth.accounts[1];
var giveth = web3.eth.accounts[2];
var _initialSupply = 1000;
var _tokenName = "asf";
var _decimalUnits = 16;
var _tokenSymbol = "asf";


var _ipfsclipobject = "";
var _treshold = 12312;
var _percentageforowner = 1;
var  _tokenaddr = "0x0";

var _minEthbalance = 0;
var _versionOfTheCode = "";

module.exports = function(deployer) {
  deployer.deploy(blocktube, _initialSupply, _tokenName, _decimalUnits, _tokenSymbol, {gas:4712388} );
  deployer.deploy(blocktubeCoin, _initialSupply, _tokenName, _decimalUnits, _minEthbalance, _tokenSymbol,_versionOfTheCode) 
  deployer.deploy(blocktubeClip, "", _ipfsclipobject, _treshold, _percentageforowner,  _tokenaddr  )   
  deployer.deploy(blocktubeUser)
};
