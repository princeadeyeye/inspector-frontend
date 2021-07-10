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
    investigationInfo lastInvestigation;
    investigationInfo[] personalInvestigations;
    mapping(address => investigationInfo[]) public investigations;


  constructor(string memory _investigatorName) {
    console.log("Creating a investigating contract by:", _investigatorName);
    investigator = msg.sender;
    investigatorName = _investigatorName;
  }
// function getAll() public view returns (address[] memory){
//     address[] memory ret = new address[](addressRegistryCount);
//     for (uint i = 0; i < addressRegistryCount; i++) {
//         ret[i] = addresses[i];
//     }
//     return ret;
// }
  function getLastInvestigation() public view returns (investigationInfo memory) {
    return lastInvestigation;
  }

   function getInvestigations(address unique_id) public returns (investigationInfo[] memory) {
            console.log("getting personal investigation from", unique_id);

       personalInvestigations = investigations[unique_id];
    return personalInvestigations;
  }

//   function setGreeting(string memory _greeting) public {
//     console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
//     greeting = _greeting;
//   }


function createInvestigation(investigationInfo memory data) public 
{
        //     require( 
        //         msg.sender == investigator,
        //     "Only investigator can create an investigation"
        // );
        // require(data.investigation_data.length > 0, "Investigation data cannot be blank");
        // // require(data.unique_id, "Investigation address must be included");
        // require(data.inspector_name.length > 0, "Investigator name must be included");

        // investigations[data.unique_id].push(data);
        lastInvestigation = data;
    // console.log("successfully create an investigation");
    // return 'successfully create an investigation';
}

}