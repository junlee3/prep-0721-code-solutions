var person = {
  firstName: 'jay',
  lastName: 'lo',
  hobby: 'piano'
};

var fullName = person.firstName + ' ' + person.lastName;

console.log("The person's name is: ", fullName + '.');

person.job = 'carpenter';

console.log("The person's current job is: ", person.job + '.');

person.previousJob = 'magician';

console.log("The person's previous job is: ", person.previousJob + '.');

console.log('The complete person object: ', person);
