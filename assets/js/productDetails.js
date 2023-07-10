// Function to get URL parameters
function getURLParameters() {
	var params = {};
	var queryString = window.location.search.slice(1);
	var pairs = queryString.split("&");
	for (var i = 0; i < pairs.length; i++) {
		var pair = pairs[i].split("=");
		var key = decodeURIComponent(pair[0]);
		var value = decodeURIComponent(pair[1] || "");
		params[key] = value;
	}
	return params;
}

// Usage example
var urlParams = getURLParameters();
// console.log(urlParams); // Output: Object containing URL parameters

// Access specific URL parameter
var paramId = urlParams.id;
// console.log(paramId); // Output: Value of the "id" parameter

const localStorageData = localStorage.getItem("storage");
const modifiedData = JSON.parse(localStorageData);
const singleProduct = modifiedData.find((item) => item.id == paramId);
if (singleProduct) {
	console.log(singleProduct);
} else {
	alert("Post not Found");
	window.location.href = "http://127.0.0.1:5500/product-page.html";
}

// DOM Manipulation
const productSpace = document.getElementById("product");
var childElement = document.createElement("div");
childElement.innerHTML =
	`<img src='${singleProduct.image}' class='card-img-top' alt='Image'>\n` +
	"<div class='card-body'> \n" +
	`  <h5 class='card-title'>${singleProduct.name}</h5>   <h2>ID === ${singleProduct.id} </h2>\n` +
	` <p class='card-text'>${singleProduct.description}</p>\n` +
	"</div>";
	productSpace.appendChild(childElement);
