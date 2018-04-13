var data = [
	{
		productName: "Arduino Starter Kit",
		productId: 123
	}
];
console.log('data received form database');
console.log(data[0].productName, " ", data[0].productId);
function addItems(){
	var product = document.getElementById("productName");
	product.innerText = data[0].productName;
}