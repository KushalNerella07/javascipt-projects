const list_items = [
  "Item1",
  "Item2",
  "Item3",
  "Item4",
  "Item5",
  "Item6",
  "Item7",
  "Item8",
  "Item9",
  "Item10",
  "Item11",
  "Item12",
  "Item13",
  "Item14",
  "Item15",
  "Item16",
  "Item17",
  "Item18",
  "Item19",
  "Item20",
  "Item21",
  "Item22",
  "Item23",
  "Item24",
  "Item25",
  "Item26",
];

const list_element = document.getElementById("list");
const pagination_element = document.getElementById("pagination");

let currentPage = 1;
let rows = 5;

function displayList(items, wrapper, rows_per, page) {
  wrapper.innerHTML = "";
  page--;

  let start = rows_per * page;
  let end = start + rows_per;
  let paginatedItems = items.slice(start, end);
  console.log(paginatedItems);

  for (let i = 0; i < paginatedItems.length; i++) {
    let item = paginatedItems[i];

    let item_element = document.createElement("div");
    item_element.classList.add("item");
    item_element.innerHTML = item;
    console.log(item_element);
    wrapper.appendChild(item_element);
  }
}

function SetupPagination(items, wrapper, rows_per_page) {
  wrapper.innerHTML = "";

  let page_count = Math.ceil(items.length / rows_per_page);

  for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i, items);
    wrapper.appendChild(btn);
  }
}

function PaginationButton(page, items) {
  let button = document.createElement("button");
  button.innerHTML = page;

  if (currentPage == page) {
    button.classList.add("active");
  }
  button.addEventListener("click", function () {
    currentPage = page;
    displayList(items, list_element, rows, currentPage);
    let currentBtn = document.querySelector(".pagination button.active");
    currentBtn.classList.remove("active");
    button.classList.add("active");
  });
  return button;
}

displayList(list_items, list_element, rows, currentPage);
SetupPagination(list_items, pagination_element, rows);
