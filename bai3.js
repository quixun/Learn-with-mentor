const getPersonInfo = (person) => {
  return `${person.name} is ${person.age} and lives in ${person.city}`;
};

const personInfo = {
  name: "Phan Quí Xuân",
  age: 21,
  city: "Quảng Nam",
};

console.log(getPersonInfo(personInfo));
