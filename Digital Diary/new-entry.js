const form = document.getElementById('entry-form');
const saveButton = document.getElementById('save-btn');

const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');

// add event listener
saveButton.addEventListener("click", function(event) {

    //prevent fresh of the page
    event.preventDefault();

    //get the values of the input fields
    const title = titleInput.value;
    const content = contentInput.value;

    // logging the values to the console
    console.log("Title: " + title);
    console.log("Content: " + content);
});