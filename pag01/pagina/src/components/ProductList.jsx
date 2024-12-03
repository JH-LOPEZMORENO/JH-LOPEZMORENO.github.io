import React, { useEffect, useState} from "react";
import { Paginacion } from "./Paginacion";

export const ProductList = () => {

    const [products, setProducts] = useState([])

    const totalProducts = products.length

    const [productsPerPage, setProductsPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)

    const lastIndex = currentPage * productsPerPage  // = 2*6= 12
    const firtIndex = lastIndex - productsPerPage    // = 12-6= 6

    const productList = async() => {
        const data = await fetch('https://fakestoreapi.com/products')
        const products = await data.json()
        console.log(products);

        setProducts(products)
    }

    useEffect(() => {
        productList()
    }, []);
    

    return (
        <>
            <div className='container-products'>
                {products.map(product => (
                    <div className="card-product" key={product.id}> 
                        <figure className="container-img>">
                            <img src={product.image} alt={product.title} />
                        </figure>
                        <div className="info-product">
                            <h3>{product.title}</h3>
                            <p className="price">$ {product.price}</p>
                            <button>Añadir al carrito</button>
                        </div>
                    </div>
                )).slice(firtIndex, lastIndex)}
            </div>
            <Paginacion 
                productsPerPage={productsPerPage} 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
                totalProducts={totalProducts}
            />
        </>
    );
};