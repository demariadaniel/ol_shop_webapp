app.service('productSrv',ProductService);

function ProductService($state,api){
	//dependencies
	this.api = api;
	this.state = $state;
	this.products = [];
	this.product;
	this.products = [
		{"name":"Model 01", "image":"/assets/img/skateboards/1h.png", "image_hero":"/assets/img/skateboards/1.png", "image_vert":"/assets/img/skateboards/1v.png", "description":"", "category":"Skateboard", "price":120,
		"quantity":1},
		{"name":"Model 02", "image":"/assets/img/skateboards/2h.png", "image_hero":"/assets/img/skateboards/2.png", "image_vert":"/assets/img/skateboards/2v.png", "description":"", "category":"Skateboard", "price":120,
		"quantity":1},
		{"name":"Model 03", "image":"/assets/img/skateboards/3h.png", "image_hero":"/assets/img/skateboards/3.png", "image_vert":"/assets/img/skateboards/3v.png", "description":"", "category":"Skateboard", "price":120,
		"quantity":1},
		{"name":"Model 04", "image":"/assets/img/skateboards/4h.png", "image_hero":"/assets/img/skateboards/4.png", "image_vert":"/assets/img/skateboards/4v.png", "description":"", "category":"Skateboard", "price":120,
		"quantity":1},
		{"name":"Model 05", "image":"/assets/img/skateboards/5h.png", "image_hero":"/assets/img/skateboards/5.png", "image_vert":"/assets/img/skateboards/5v.png", "description":"", "category":"Skateboard", "price":120,
		"quantity":1},
		{"name":"Model 06", "image":"/assets/img/skateboards/6h.png", "image_hero":"/assets/img/skateboards/6.png", "image_vert":"/assets/img/skateboards/6v.png", "description":"", "category":"Skateboard", "price":120,
		"quantity":1},
		{"name":"Model L1", "image":"/assets/img/longboards/1h.png", "image_hero":"/assets/img/longboards/1.png", "image_vert":"/assets/img/longboards/1v.png", "description":"", "category":"Longboard", "price":120,
		"quantity":1},
		{"name":"Model L2", "image":"/assets/img/longboards/2h.png", "image_hero":"/assets/img/longboards/2.png", "image_vert":"/assets/img/longboards/2v.png", "description":"", "category":"Longboard", "price":120,
		"quantity":1},
		{"name":"Model L3", "image":"/assets/img/longboards/3h.png", "image_hero":"/assets/img/longboards/3.png", "image_vert":"/assets/img/longboards/3v.png", "description":"", "category":"Longboard", "price":120,
		"quantity":1}
];
	
}

ProductService.prototype.getProducts = function(){
	var _this = this;
	return this.api.request('/products',{},'GET')
	.then(function(res){
		//success promise
		console.log(res);
		_this.products = res.data.products;
		return res.data.products;
	},function(res){
		//error promise
		console.log(res);
		return;
	})
}

ProductService.prototype.addProduct = function(product){
	var _this = this;
	_this.api.request('/products',product,'POST')
	.then(function(res){
		console.log(res);
		if(res.status === 200){
			//product was added successfully
			_this.products.push(res.data.product);
			//_this.state.go('admin');
		}
	})
}

// ProductService.prototype.updateProduct = function(product,productId){
// 	var _this = this;
// 	this.api.request('/products/'+productId,product,'PUT')
// 	.then(function(res){
// 		console.log(res);
// 		if(res.status === 200){
// 			//product was updated successfully
// 			_this.updateProductList(product,productId);
// 			_this.state.go('admin.dash');
// 		}
// 	})
// }

// ProductService.prototype.deleteProduct = function(productId){
// 	var _this = this;
// 	this.api.request('/products/'+productId,{},'DEL')
// 	.then(function(res){
// 		console.log(res);
// 		if(res.status === 200){
// 			//product was deleted successfully
// 			_this.removeProduct(productId);
// 			_this.state.go('admin.dash');
			
// 		}
// 	})
// }

ProductService.prototype.getProduct = function(productId){
	var _this = this
	return this.api.request('/products/'+productId,{},'GET');
}

// ProductService.prototype.updateProductList = function(product,productId){
// 	for(index in this.products){
// 		if(this.products[index].id == productId){
// 			this.products[index].name = product.name;
// 			this.products[index].image = product.image;
// 			this.products[index].description = product.description;
// 			this.products[index].category = product.category;
// 			this.products[index].price = product.price;
// 			this.products[index].quantity = product.quantity;
// 		}
// 	}
// }

// ProductService.prototype.removeProduct = function(productId){
// 	for(index in this.products){
// 		if(this.products[index].id == productId){
// 			delete this.products[index];
// 		}
// 	}
// }