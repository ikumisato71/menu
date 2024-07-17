const qa = document.querySelectorAll(".js-ac");
console.log(qa);

qa.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("is-open");
  });
});

// 参考
// const qa = document.querySelectorAll(".js-ac"); // js-ac要素すべて取得
// qa.forEach((item) => {
// 	item.addEventListener("click", () => {
// 		item.classList.toggle("is-open");
// 	});
// });

// js-ac要素を取得し変数に格納
// const qa = document.querySelectorAll(".js-ac"); // js-ac要素すべて取得
// // クリック時に発火する関数を作成
// function acToggle() {
//   // js-ac要素の「次の要素」を取得し変数に格納
//   const content = this.nextElementSibling;
//   // js-ac要素の「次の要素」
//   content.classList.toggle("is-open");
//   // js-ac要素自身を変数に格納
//   const qa = this;
//   // js-ac要素にis-openつけ外し
//   qa.classList.toggle("is-open");
// }
// for (let i = 0; i < qa.length; i++) {
//   // for文でjs-acメニューをループ処理
//   qa[i].addEventListener("click", acToggle);
// }

// // クリックイベントを登録、acToggle関数を発火
// qa.addEventListener("click", acToggle);
