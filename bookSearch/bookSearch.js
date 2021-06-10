let searchInput = document.getElementById("searchInput");
let selectDisplayCount = document.getElementById("selectDisplayCount");
let searchResults = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinnerEl");

function createAndAppenBook(book) {
    let {
        imageLink,
        author
    } = book;

    let bookContainer = document.createElement("div");
    bookContainer.classList.add("col-6", "col-md-3");

    let bookCard = document.createElement("div");
    bookCard.classList.add("d-flex", "flex-column", "p-2");
    bookContainer.appendChild(bookCard);

    let bookImg = document.createElement("img");
    bookImg.src = imageLink;
    bookImg.classList.add("w-100");
    bookCard.appendChild(bookImg);

    let bookAuthor = document.createElement("p");
    bookAuthor.textContent = author;
    bookAuthor.classList.add("book-author");
    bookCard.appendChild(bookAuthor);

    searchResults.appendChild(bookContainer);
}

function displayResults(resultArray) {
    let err = document.createElement("h1");
    spinnerEl.classList.add("d-none");
    if (resultArray.length === 0) {
        err.classList.add("col-12", "text-center");
        err.textContent = "No Results Found";
        searchResults.appendChild(err);
    } else {
        err.textContent = "";
        let searchResultsHead = document.createElement("h1");
        searchResultsHead.classList.add("col-12", "text-center", "search-results-head", "mt-2");
        searchResultsHead.textContent = "Popular Books";
        searchResults.appendChild(searchResultsHead);
        for (let eachBook of resultArray) {
            createAndAppenBook(eachBook);
        }
    }
}

function getBooks() {
    spinnerEl.classList.remove("d-none");
    searchResults.textContent = "";

    let options = {
        method: "GET"
    }
    let url = "https://apis.ccbp.in/book-store?title=" + searchInput.value + "&maxResults=" + selectDisplayCount.value;

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            displayResults(jsonData.search_results);
        })
}
getBooks();

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        getBooks();
    }
});
selectDisplayCount.addEventListener("change", getBooks);