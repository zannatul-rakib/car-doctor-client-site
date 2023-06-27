import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])

    return (
        <div className="container mx-auto">
            <div className="lg:mx-20 my-20">
                <div className="text-center my-10 space-y-5">
                    <h2 className="text-2xl font-semibold text-[#ff3811] ">Popular Products</h2>
                    <h1 className="text-4xl font-bold">Browse Our Products</h1>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words <br />which don`t look even slightly believable. </p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {
                        products.map(product => <ProductsCard key={ product._id} product={product} />)                      
                    }
                </div>
                <div className="my-10 text-center">
                    <button className="btn bg-transparent border-[#ff3811] rounded-none text-[#ff3811] hover:bg-[#ff3811] hover:text-white">More Products</button>
                </div>
            </div>
        </div>
    );
};

export default Products;