

test("username, city, and image are all exported", () => {
  expect(username).toEqual("Liza");
  expect(city).toEqual("New York");
  expect(image).toEqual("https://i.imgur.com/mV8PQxj.gif");
});
let username = "Liza";
const city = "New York";
const image = "https://i.imgur.com/mV8PQxj.gif"