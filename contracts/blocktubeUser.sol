/*
BlocktubeUser is an index of all the blocktube users linking 
their address to their profile info. Publishing your user profile
is optional.
*/
pragma solidity ^0.4.11;
import '../installed_contracts/zeppelin/contracts/ownership/Ownable.sol';

contract blocktubeUser is Ownable {

	
	mapping(address => string) public users;

	event userAdded(address who, string hash);

	function blocktubeUser(){
	}

	function setProfileHash(string _hash) {
		users[msg.sender] = _hash;
		userAdded(msg.sender, _hash);
	}

	function getProfileHash(address useraddress) returns (string userhash) {
		return users[useraddress];
	}

	function kill() onlyOwner { suicide(owner); }
}
