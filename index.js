const employee = {
    name: "Reagan",
    streetAddress: "9354 W Coal Mine Ave."
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee};
    updatedEmployee[key] = value;
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
} 

function deleteFromEmployeeByKey(employee, key) {
    const anotherUpdatedEmployee = {...employee};
    delete anotherUpdatedEmployee[key];
    return anotherUpdatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}