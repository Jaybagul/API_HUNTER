import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loader from '../Components/Loader';
import ProductsTable from "../Components/ProductsTable";
import { ContextDataProvider } from "../Context/AuthContext";

function Dashboard() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { LogoutUser } = useContext(ContextDataProvider);
  const token = localStorage.getItem('token');

  
  const getProducts = async () => {
    let getProductData = await axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products");
    setData(getProductData.data.data);
    setLoading(false);
  }


  useEffect(() => { 
    getProducts();
  }, [])
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={LogoutUser} style={{ backgroundColor: "#4cae4f", color: "white" }}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading ? <Loader /> : <ProductsTable data={data} />}
      </div>
    </div>
  );
}

export default Dashboard;
