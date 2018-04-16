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

function products()
{
  this.productAmount = 0;
  this.productName = "";
  this.productImage = "";
  this.price = 0.0;
}

function retrieveData(){
var APP_ID = 'A90AD439-5B4E-65AA-FF53-E78F7E527700';
var API_KEY = '59911D41-9166-ADC2-FFCE-A75F27043200';
Backendless.initApp(APP_ID, API_KEY);

Backendless.Data.of( "products" ).find()
  .then( function( result ) {
  	console.log("1. Amount", result[0].productAmount, " is load from database");
  	console.log("2. Name", result[0].productName, " is load from database");
  	console.log("3. ImageRef", result[0].productImage, " is load from database");
  	console.log("4. Price", result[0].productPrice, " is load from database");
     // every loaded object from the "Cont1act" table is now an individual 
     // instance of Contact in the "result" array
   })
  .catch( function( error ) {
    // an error has occurred, the error code can be retrieved with fault.statusCode
   });
}
