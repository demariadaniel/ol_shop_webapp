app.controller('addProductCtrl',addProductCtrl);

function addProductCtrl($stateParams, api, productSrv, $state){
	var ctrl = this
	ctrl.productSrv = productSrv;
	ctrl.products = productSrv.products;
	ctrl.$state = $state;
	ctrl.categories = productSrv.categories;
//	ctrl.category = ctrl.categories[0];
	console.log("Add product control!");

	ctrl.getProducts = function(){
		productSrv.getProducts();
		ctrl.products = productSrv.products;
		console.log(ctrl.products);
	};

	ctrl.initializeApi = function() {
		productSrv.initializeApi(productSrv.skateboards);
		ctrl.products = productSrv.products;
		console.log(ctrl.products);
	}

	ctrl.product = {};
	ctrl.product_update_btn = 'Update Product';
	ctrl.product_delete_btn = 'Remove Product';

	if($stateParams.productId != undefined){
		productSrv.getProduct($stateParams.productId)
		.then(function(res){
			console.log(res);
			ctrl.product = res.data.product;

			//TODO #2 set category based on edit form based on 
			//product category
			
			for(var category in ctrl.categories){
			if(ctrl.product.category == ctrl.category[category].value){

		}
	}


})
}
}

addProductCtrl.prototype.addProduct = function(){
	var ctrl = this;
	
	console.log("product add function works")	
	
	var product = {
		name: ctrl.name,
		category: ctrl.category.label,
		image: ctrl.image,
		image_hero: ctrl.image_hero,
		image_vert: ctrl.image_vert,
		price: ctrl.price,
		description: ctrl.description,
		status: true,
	}

	console.log(product)
	ctrl.productSrv.addProduct(product);
//	ctrl.products = ctrl.productSrv.products;

}

 addProductCtrl.prototype.removeProduct = function(productId){
 	var ctrl = this;
 	ctrl.productSrv.removeProduct(productId);
 	console.log(productId);
 	for (var i = 0; i<ctrl.products.length; i++){
 		if (ctrl.products[i].id == productId){
	 	ctrl.products.splice(i, 1);
 	}
	}
//	ctrl.$window.reload();
 	ctrl.productSrv.products = ctrl.products;
 	console.log(ctrl.products.length);
 	console.log(ctrl.productSrv.products.length);
 }


 addProductCtrl.prototype.deleteProducts = function(){
 	var ctrl = this;
 	console.log("click");
 	ctrl.productSrv.deleteProducts();
 	ctrl.products = [];
 	console.log(ctrl.products.length);
  };



// addProductCtrl.prototype.updateProduct = function(){
// 	var ctrl = this;
// addProductCtrl.prototype.updateProduct = function(){
// 	var ctrl = this;


// 	//TODO #2
// 	//create product object, pass to plugin service
// 	//Update text in button