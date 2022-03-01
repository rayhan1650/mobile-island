// get allPhone data
const allPhone = () => {
  const searchValue = document.getElementById("search-box").value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((phone) => console.log(phone.data));
  console.log(url);
};
