/** @format */
//1 & //2
const grid = document.querySelector(".container > .row");
const displayBooks = async () => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/books"
    );
    const books = await response.json();

    books.forEach((book) => {
      const col = document.createElement("div");
      col.className = "col-md-3";

      col.innerHTML = `<div class="single-album card mb-4 shadow-sm">
                        <img src= ${book.img} class="card-img-top" alt="${book.title}">
                        <div class="card-body">
                            <h5 class="card-title">${book.title}<h5>
                            <p class="card-text">
                                ${book.category}
                            </p>
                            <div
                                class="d-flex justify-content-between align-items-center"
                            >
                                <div class="btn-group">
                                    <button
                                        type="button"
                                        id="cartButton"
                                        class="btn btn-outline-secondary"
                                        onclick="addToCart(event)"
                                    >
                                        Add to Cart
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary"
                                        onclick="removeCard(event)"
                                    >
                                        skip
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>`;
      grid.appendChild(col);
    });
    console.log("ganesh");
  } catch (error) {
    console.log(error);
  }
};

window.onload = () => {
  displayBooks();
};

//5.
const removeCard = (e) => {
  e.target.closest(".col-md-3").remove();
};

//4. When this button is pressed: 1) add the item to another list (the cart), and 2) change the card styling to show that the element is in the cart (eg. red border, a badge, an icon… you choose)

const addToCart = (e) => {};
