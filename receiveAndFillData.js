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
console.log("Start");
var APP_ID = 'A90AD439-5B4E-65AA-FF53-E78F7E527700';
var API_KEY = '59911D41-9166-ADC2-FFCE-A75F27043200';
Backendless.initApp(APP_ID, API_KEY);
console.log("initApp");
var stringValue = "productPrice=790"
var queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause( stringValue );

Backendless.Data.of( "products" ).find(queryBuilder)
  .then( function( result ) {
    for (var i =0; i<result.length; i++){
  	console.log("1. Amount", result[i].productAmount, " is load from database");
  	console.log("2. Name", result[i].productName, " is load from database");
  	console.log("3. ImageRef", result[i].productImage, " is load from database");
  	console.log("4. Price", result[i].productPrice, " is load from database");
  }
     // every loaded object from the "Cont1act" table is now an individual 
     // instance of Contact in the "result" array
   })
  .catch( function( error ) {
  	console.log("Error: ",error.statusCode);
    // an error has occurred, the error code can be retrieved with fault.statusCode
   });
}
