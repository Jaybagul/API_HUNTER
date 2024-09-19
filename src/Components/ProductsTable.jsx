import { Link } from "react-router-dom";

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
                {data.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>
                            <Link to={`/products/${item.id}`}>{item.brand}</Link>
                        </td>
                        <td>{item.category}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProductsTable;
