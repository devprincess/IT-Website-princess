// Get Data from the Local Storage
const localProducts = localStorage.getItem("storage");

// We have to parse the data from the local Storage because we  stringified it when setting the item at index.js page
const ModifiedLocalStorageData = JSON.parse(localProducts);
// console.log(ModifiedLocalStorageData);

// Play with this one
// const filteredArray = ModifiedLocalStorageData.find((item) => item.name === 'Phone')
// console.log(ModifiedLocalStorageData.find((item) => item.name === 'Phone'))
// console.log(ModifiedLocalStorageData.filter((item) => item.name === 'Phone'))

// DOM Manipulation starts
const cardGroup = document.querySelector("#myCardGroup");
//  Create new DOM elements
// For loop to append the individual Cards to the Parent #myCardGroup
for (let index = 0; index < ModifiedLocalStorageData.length; index++) {
	// We need to get the individual items (Object) in the array and store it in the "element" variable
	const element = ModifiedLocalStorageData[index];
	var truncatedString = element.description.substring(0, 100) + "...";
	// console.log(element.image);

	// This is the Structure of the child Element we talked about
	var childElement = document.createElement("div");
	childElement.classList.add(
		"myCard",
		"col-lg-4",
		"col-md-6",
		"col-sm-12",
		"pt-3"
	);

	childElement.innerHTML =
		`<img src='${element.image}' class='card-img-top' alt='Image'>\n` +
		"<div class='card-body'> \n" +
		`  <h5 class='card-title'>${element.name}</h5>\n` +
		` <p class='card-text'>${truncatedString}</p>\n` +
		`<a href='/product-detail.html?id=${element.id}' class='btn btn-primary'>More</a>\n` +
		"</div>";
	cardGroup.appendChild(childElement);
}
