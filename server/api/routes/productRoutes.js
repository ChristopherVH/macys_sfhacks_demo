'use strict';
module.exports = function(app) {
  var productControl = require('../controllers/productController');

  // todoList Routes
  app.route('/products')
    .get(productControl.list_all_products)
    .post(productControl.create_a_product);


  app.route('/products/:productId')
    .get(productControl.read_a_product)
    .put(productControl.update_a_product)
    .delete(productControl.delete_a_product);
};
