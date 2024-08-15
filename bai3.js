getPersonInfo = (obj) => {
  return (newString = `${obj.name} is ${obj.age} and lives in ${obj.city}`);
};

const obj = {
  name: "Phan Quí Xuân",
  age: 21,
  city: "Quang Nam",
};

console.log(getPersonInfo(obj));
