const getPersonInfo = require("./bai_3.js");

const personInfo = {
  name: "Phan Quí Xuân",
  age: 21,
  city: "Quảng Nam",
};

test("getPersonInfo should display information of person properly", () => {
  expect(getPersonInfo(personInfo)).toEqual(
    "Phan Quí Xuân is 21 and lives in Quảng Nam"
  );
});
