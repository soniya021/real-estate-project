// if rent gets clicks ctn5 n ctn6 shld get vanished
// if sell gets clicked ct4 n ctn6 shd get vanished
// if buy get clicked ctn4 n ctn5 shld get vanished

const rent = document.querySelector(".rent");
const sell = document.querySelector(".sell");
const buy = document.querySelector(".buy");
const ctn_4 = document.querySelector(".ctn4");
const ctn_5 = document.querySelector(".ctn5");
const ctn_6 = document.querySelector(".ctn6");

rent.addEventListener("click", function () {
 
  // ctn_4.style.display = "block";
  ctn_5.style.display = "none";
  ctn_6.style.display = "none";
});
sell.addEventListener("click", function () {
 
  // ctn_4.style.display = "block";
  ctn_4.style.display = "none";
  ctn_6.style.display = "none";
});
buy.addEventListener("click", function () {
 
  // ctn_4.style.display = "block";
  ctn_4.style.display = "none";
  ctn_5.style.display = "none";
});
