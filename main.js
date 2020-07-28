/******************
 * YOUR CODE HERE *
 ******************/
const newPerson = function(firstName,lastName,age,marriage){
const personal = {};
personal.firstName = firstName;
if(!firstName){personal.firstName = 'Anonymous';}
personal.lastName = lastName;
if(!lastName){personal.lastName = 'Person';}
personal.age = age;
personal.married = marriage; 
if(!marriage){personal.married = false;}
personal.goingOn = function(){
  return this.age+1
}
personal.ageUp = function(){
  this.age++;
}
personal.getFullName = function(){
  return `${this.firstName} ${this.lastName}`
}
personal.marry= function(partner){
  personal.married = true;
  partner.married = true;
  personal.spouseName = partner.getFullName();
  partner.spouseName = personal.getFullName();
}

personal.divorce=function(ex){
  personal.married = false;
  ex.married = false;
  delete personal.spouseName;
  delete ex.spouseName;
}
return personal
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === 'undefined') {
  newPerson = undefined;
}


module.exports = newPerson;
