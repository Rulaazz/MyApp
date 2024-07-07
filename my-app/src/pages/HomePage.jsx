import productDetails from './productDetails';
import Login from './Login';
import Navbar from '../components/Navbar';
import AdminPage from './AdminPage';
import ProductCard from '../components/ProductCard';
import Alert from '../components/Alert';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const url = 'https://66870bab83c983911b0469c0.mockapi.io/LaLuna/az/product';

const HomePage = ({ product }) => { 
  const [searchTerm, setSearchTerm] = useState('true');
  const [searchResults, setSearchResults] = useState([]);

  
  const fetchProduct= async()=>{
    setSearchTerm(true);
    try{
      const response= await fetch(url);
      const product=await response.json();
      console.log(product); 
    }catch(error){
      console.log(error);
    }
  }
  

  const handleSearch = () => {
   
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSignIn = () => {
  
    console.log('Signing in...');
  };

  const handleSignUp = () => {
   
    console.log('Signing up...');
  };

  return (
    <div className="home-page">
      <h2>Popular Products</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="product-list">
        {(searchTerm ? searchResults : products).map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Coach: {product.coach}</p>
            <p>Description: {product.description}</p>
            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
      <div className="additional-content">
        <p>Brief overview text or additional content here.</p>
        {user && user.isAdmin && (
          <div className="admin-section">
            <h3>Admin Section</h3>
            <Link to="/admin">Go to Admin Dashboard</Link>
            {/*  admin continue */}
          </div>
        )}
        <div className="auth-options">
          <h3>Sign In</h3>
          <form onSubmit={handleSignIn}>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign In</button>
          </form>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
