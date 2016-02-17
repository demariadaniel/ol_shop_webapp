app.controller('headerCtrl',headerCtrl);

function headerCtrl(productSrv) {
	console.log("Header control!");
	var ctrl = this;
	ctrl.productSrv = productSrv;

	ctrl.categories = productSrv.categories;
    console.log(ctrl.categories)

    ctrl.filter = '';

    ctrl.showProductsByCat = function(cat){
        var ctrl = this;
        ctrl.productSrv.filter = cat;
        ctrl.filter = cat;
        console.log(ctrl.filter)
    }
}