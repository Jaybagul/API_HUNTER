import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from './../Context/AuthContext';
import Loader from './../Components/Loader';
import ProductsTable from './../Components/ProductsTable';

function Dashboard() {
  const { authState, logoutUser } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products");
      const data = await response.json();
      setProducts(data.data);
    } catch (err) {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={handleLogout}>
          Logout
        </button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading ? (
          <Loader />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ProductsTable data={products} />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
