const router = require('express').Router(); // Require the Express module and create a new router instance
const categoryRoutes = require('./category-routes');// Require the category, product, and tag route modules
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');
// Use the category, product, and tag route modules for their respective endpoints
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router; // Export the router instance for use in other modules
