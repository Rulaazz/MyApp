import React from 'react';

const AdminPage = () => {
  const handleAddProduct = () => {
    
  };

  const handleEditProduct = () => {
   
  };

  const handleDeleteProduct = () => {
    
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={handleAddProduct}>Add New Product</button>
      <button onClick={handleEditProduct}>Edit Product</button>
      <button onClick={handleDeleteProduct}>Delete Product</button>
      <div>Alert/notification system goes here</div>
    </div>
  );
};

export default AdminPage;
