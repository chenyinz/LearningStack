// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

contract courseone{
uint256 public number=5;
function add() external {
number=number+1;
}
function addpure(uint256 _number) external pure returns (uint256 new_number){
new_number=\_number+1;
}
function addview() external view returns(uint256 new_number){
new_number=number+1;
}
function minus() internal {
number=number-1;
}
function minusCall() external {
minus();
}
function minusPayable() external payable returns(uint256 balance){
minus();
balance=msg.value;
}
uint[] public x=[1,2,3];
function fMemory() public view{
uint[] memory xMemory = x;
xMemory[0]=100;
}
function global() external view returns(address,uint,bytes memory){
address sender=msg.sender;
uint blockNum=block.number;
bytes memory data=msg.data;
return (sender,blockNum,data);
}
struct Student{
uint256 id;
address score;
}
// Student student;
// function initStudent1() external{
// Student storage \_student=student;
// \_student.id=10;
// \_student.score=100;
// }
// function initStudent2() external {
// student.id=1;
// student.score=100;
// }
// function initStudent3() external {
// student=Student(8,10);
// }
// function initStudent4() external {
// student=Student({id:4,score:60});
// }
mapping (uint=>Student) public idToAddress;
function writerMap(uint \_Key,address \_Value) public{
idToAddress[_Key]=Student(\_Key,\_Value);
}
address owner;
constructor(){
owner=msg.sender;
}
modifier onlyOwner{
require(msg.sender==owner);
_;
}
function changeOwner(address \_newOwner) external onlyOwner{
owner=\_newOwner;
}
event Transfer(address indexed from,address indexed to,uint256 amount);
function \_tranfer(address from,address to,uint256 amount) external {
// \_balances[from]=10000000;
// \_balances[from]-=amount;
// \_balances[to]+=amount;
emit Transfer(from,to,amount);
}
}
