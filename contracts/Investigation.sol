//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

import "hardhat/console.sol";

contract Investigation {

  struct investigationInfo {
    string inspector_name;
    string investigation_data;
    address unique_id;
  }

    string investigatorName;
    address public investigator;
    uint counter = 0;
    investigationInfo lastInvestigation;
    investigationInfo[] personalInvestigations;
    mapping(address => investigationInfo[]) public investigations;
    mapping(uint => investigationInfo[]) public allInvestigations;


  constructor(string memory _investigatorName) {
    console.log("Creating a investigating contract by:", _investigatorName);
    investigator = msg.sender;
    investigatorName = _investigatorName;
  }
function getAll() public view returns (investigationInfo[][] memory){
    uint investigationLength = allInvestigations[counter].length;
    investigationInfo[][] memory ret = new investigationInfo[][](investigationLength);
    for (uint i = 0; i < investigationLength; i++) {
        ret[i] = allInvestigations[i];
    }
    return ret;
}
  function getLastInvestigation() public view returns (investigationInfo memory) {
    return lastInvestigation;
  }

   function getInvestigations(address unique_id) public view returns (investigationInfo[] memory) {
            console.log("getting personal investigation from", unique_id);
            return investigations[unique_id];
    
  }

function createInvestigation(investigationInfo memory data) public 
{
        // require(data.investigation_data.length > 0, "Investigation data cannot be blank");
        // // require(data.unique_id, "Investigation address must be included");
        // require(data.inspector_name.length > 0, "Investigator name must be included");

        counter++;
        investigations[data.unique_id].push(data);
        allInvestigations[counter].push(data);
        lastInvestigation = data;
        console.log("successfully create an investigation");
}

}