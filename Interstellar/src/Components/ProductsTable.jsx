import { Link } from "react-router-dom"
import ProductCard from "./ProductCard"

function ProductsTable({ data }) {

    return (
        <table border="1px">
            <thead>
                <tr>
                    <th>Sno</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {/* map through the data */}
                {data.map(({ id, brand, category, price }) => (
                    <ProductCard key={id} brand={brand} category={category} price={price} id={id} />
                )
                )}
            </tbody>
        </table>
    )
}

export default ProductsTable