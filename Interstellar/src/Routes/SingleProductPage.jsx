import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProductPage() {

    const [data, setData] = useState({});

    const { id } = useParams();

    const getSingleProduct = async () => {
        let getProductData = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`);
        setData(getProductData.data.data);
    }

    useEffect(() => {
        getSingleProduct();
    }, [])

    return (
        <div data-testid="products-container" className="product-details">
            <div>
                <h3 data-testid="product-brand"></h3>
            </div>
            <div className="pr-image">
                <img data-testid="product-image" alt="something went wrong" src={data.img} />
            </div>
            <div data-testid="product-category">
                <h3>Category:{data.category}</h3>
            </div>

            <div data-testid="product-details">
                <h3>Description:{data.details}</h3>
            </div>
            <div data-testid="product-price">
                <h3>Price:{data.price}</h3>
            </div>

        </div>
    )
}
export default SingleProductPage