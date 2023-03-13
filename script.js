// api url
const api_url =
	"https://mybucksmanager.000webhostapp.com/api/users";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>id</th>
		<th>username</th>
		<th>email</th>
		<th>password</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data) {
		tab += `<tr>
	<td>${r.id} </td>
	<td>${r.username}</td>
	<td>${r.email}</td>
	<td>${r.password}</td>		
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("users").innerHTML = tab;
}

