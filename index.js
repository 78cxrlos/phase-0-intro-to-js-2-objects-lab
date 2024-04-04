// Write your solution in this file!
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St",
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");
console.log(updatedEmployee); 

destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Park Ave");
console.log(employee);

const employeeWithoutAddress = deleteFromEmployeeByKey(employee, "streetAddress");
console.log(employeeWithoutAddress);


destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
console.log(employee); 

  