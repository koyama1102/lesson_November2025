const btn = document.querySelector("#btn");
const text = document.querySelector("#text");

if (btn && text) {
  btn.addEventListener(
    "click",
    () => (text.textContent = "ボタンがクリックされました！")
  );
}

const checkAge = (age) => {
  if (age < 0) return "無効な年齢です";
  if (age < 20) return "未成年です";
  if (age < 60) return "成人です";
  return "シニアです";
};

const checkScore = (score) => {
  switch (true) {
    case score > 100 || score < 0:
      return "無効なスコアです";
    case score >= 90:
      return "A";
    case score >= 80:
      return "B";
    case score >= 70:
      return "C";
    default:
      return "F";
  }
};

const getSeason = (month) =>
  month < 1 || month > 12
    ? "無効な月です"
    : month <= 2 || month === 12
    ? "冬"
    : month <= 5
    ? "春"
    : month <= 8
    ? "夏"
    : "秋";

//form
const formElements = {
  input: document.querySelector("#nameInput"),
  button: document.querySelector("#greetBtn"),
  display: document.querySelector("#message"),
};

if (Object.values(formElements).every((element) => element)) {
  formElements.button.addEventListener("click", () => {
    const name = formElements.input.value.trim();
    formElements.display.style.color = name ? "" : "red";
    formElements.display.textContent = name
      ? `こんにちは、${name}さん！`
      : "名前を入力してください";
  });
}

//arrayフルーツ
const fruits = ["りんご", "みかん", "ぶどう"];
console.log(fruits[0]); // りんご
console.log(fruits.length); // 3

fruits.push("バナナ"); // 末尾に追加
fruits.pop(); // 最後を削除
fruits.unshift("メロン"); // 先頭に追加
console.log(fruits);

for (const fruit of fruits) {
  console.log(`私は${fruit}が好きです。`);
}

//arrayスコア
const scores = [80, 90, 70, 100];
let sum = 0;
for (const score of scores) {
  sum += score;
}
console.log(`合計点: ${sum}`);

//arrayナンバー
const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
  console.log(`${number}は${number % 2 === 0 ? "偶数" : "奇数"}です`);
}
//arrayムービー
const movies = [
  { title: "インセプション", year: 2010 },
  { title: "マトリックス", year: 1999 },
  { title: "君の名は。", year: 2016 },
];
for (const movie of movies) {
  console.log(`${movie.title}`);
}
//array名前
const names = ["太郎", "花子", "次郎"];
names.forEach((name) => {
  if (name === "花子") {
    console.log(`${name}さんが見つかりました！`);
  }
});

// // favorites配列の定義を追加
// const favorites = ["ラーメン", "カレー", "寿司"];

// //favorites配列の各要素をli要素としてulに追加

// const ul = document.getElementById("favoriteList");
// const itemInput = document.getElementById("itemInput");
// const addBtn = document.getElementById("addBtn");

// // リストを表示する関数
// const renderList = () => {
//     ul.innerHTML = ''; // リストをクリア
//     favorites.forEach((item, index) => {
//         const li = document.createElement("li");
//         li.textContent = item;

//         // 削除ボタンを追加
//         const deleteBtn = document.createElement("button");
//         deleteBtn.textContent = "削除";
//         deleteBtn.onclick = () => {
//             favorites.splice(index, 1);
//             renderList();
//         };

//         li.appendChild(deleteBtn);
//         ul.appendChild(li);
//     });
// };

// // 追加ボタンのイベントリスナー
// addBtn.addEventListener('click', () => {
//     const newItem = itemInput.value.trim();
//     if (newItem) {
//         favorites.push(newItem);
//         itemInput.value = '';
//         renderList();
//     }
// });

// // 初期表示
// renderList();

// localStorageからfavoriteListを復元
let favoriteList = JSON.parse(localStorage.getItem("favoriteList")||"null");
// localStorageにデータがなければ初期値をセット
if(!Array.isArray(favoriteList)) favoriteList = ["ラーメン", "カレー", "寿司"];

//favorites配列の定義を追加
const ul = document.querySelector("#favoriteList");
const itemInput = document.querySelector("#itemInput");
const addBtn = document.querySelector("#addBtn");

// favoriteListをlocalStorageに保存する関数
const saveFavorites = () =>{
    localStorage.setItem("favoriteList",JSON.stringify(favoriteList));
}

//リストを表示する関数
const renderList = () => {
  //listの作り方
  ul.innerHTML = "";
  favoriteList.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    //削除ボタンを追加
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";
    deleteBtn.onclick = () => {
      favoriteList.splice(index, 1);
      saveFavorites();
      renderList();
    };
    ul.appendChild(li);
    li.appendChild(deleteBtn);
  });
};

addBtn.addEventListener("click", () => {
  const newItem = itemInput.value.trim();
  if (newItem) {
    favoriteList.push(newItem);
    itemInput.value = "";
    saveFavorites();
    renderList();
  }
});
//初期表示
renderList();