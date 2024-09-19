import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from './../Components/Loader';

function SingleProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchProductDetails();
    }, [id]);

    const fetchProductDetails = async () => {
        setLoading(true);

        try {
            const response = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`);
            setProduct(response.data.data);
        } catch {
            setError("Failed to fetch product details");
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <Loader />;
    if (error) return <p>{error}</p>;

    return (
        <div data-testid="products-container">
            {product && (
                <>
                    <div>
                        <h3 data-testid="product-brand">{product.brand}</h3>
                    </div>
                    <div>
                        <img
                            data-testid="product-image"
                            src={product.image}
                            alt={product.brand}
                        />
                    </div>
                    <div data-testid="product-category">{product.category}</div>
                    <div data-testid="product-details">{product.details}</div>
                    <div data-testid="product-price">{product.price}</div>
                </>
            )}
        </div>
    );
}

export default SingleProductPage;
