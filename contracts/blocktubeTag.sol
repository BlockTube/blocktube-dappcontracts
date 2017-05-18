pragma solidity ^0.4.11;
import '../installed_contracts/zeppelin/contracts/ownership/Ownable.sol';

contract blocktubeTag is Ownable  {

	 string public name;

	function blocktubeTag(string _name) onlyOwner {
		name = _name;
	}


}
