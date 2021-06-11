let bookmarks = [{
    bookmarkId: "bookmark1",
    name: "My netflix clone",
    url: "https://be-u-nik.github.io/app-clones/",
}, ];

let bookmarkForm = document.getElementById("bookmarkForm");
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let submitBtn = document.getElementById("submitBtn");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let bookmarksList = document.getElementById("bookmarksList");

function createAndAppendBookmark(bookmark) {
    let {
        bookmarkId,
        name,
        url
    } = bookmark;

    let listItem = document.createElement("li");
    listItem.classList.add("list-item","m-1")
    listItem.id = bookmarkId;


    let bookmarkContainer = document.createElement("div");
    bookmarkContainer.classList.add("d-flex", "flex-row", "bg-light", "rounded", "shadow", "p-2", "w-100");
    listItem.appendChild(bookmarkContainer);

    let bookmarkHeading = document.createElement("h1");
    bookmarkHeading.textContent = name;
    bookmarkHeading.classList.add("w-100", "p-1", "bookmark-head", "text-left");
    bookmarkContainer.appendChild(bookmarkHeading);

    let bookmarkLink = document.createElement("a");
    bookmarkLink.setAttribute("href", url);
    bookmarkLink.setAttribute("target", "_blank");
    bookmarkContainer.appendChild(bookmarkLink);

    bookmarkButton = document.createElement("button");
    bookmarkButton.classList.add("btn", "btn-primary");
    bookmarkButton.textContent = "visit";
    bookmarkLink.appendChild(bookmarkButton);

    bookmarksList.appendChild(listItem);
}
createAndAppendBookmark(bookmarks[0]);

function validateSiteName() {
    if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
}

function validateSiteURL() {
    if (siteUrlInput.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
}

siteNameInput.addEventListener("change", validateSiteName);
siteUrlInput.addEventListener("change", validateSiteURL);
let count = 1;
bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validateSiteName();
    validateSiteURL();
    count += 1;
    let bookID = "bookmark" + count;

    let newBookmark = {
        bookmarkId: "",
        name: "",
        url: ""
    };
    newBookmark.bookmarkId = bookID;
    newBookmark.name = siteNameInput.value;
    newBookmark.url = siteUrlInput.value;
    if (siteNameInput.value !== "" && siteUrlInput.value !== "") {
        bookmarks.push(newBookmark);
        siteUrlErrMsg.textContent = "";
        siteNameErrMsg.textContent = "";
        createAndAppendBookmark(newBookmark);
    }

});
