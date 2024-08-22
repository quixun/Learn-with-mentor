const getPersonInfo = require("./bai_3.js");

const personInfo = {
  name: "Phan Quí Xuân",
  age: 21,
  city: "Quảng Nam",
};

test('display info of a person',() => {
    expect(getPersonInfo(personInfo)).toEqual('Phan Quí Xuân is 21 and lives in Quảng Nam')
})