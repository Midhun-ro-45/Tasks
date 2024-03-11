import React, { useContext, useEffect, useState } from 'react';
import './productshow.css';
import { data } from '../../data';
import ProductsCart from '../ProductsCart/ProductsCart';
import { MyContex } from '../../context/Context';

function ProductShow() {
    const { filteredProducts } = useContext(MyContex);
    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        console.log(filteredProducts);
    }, [filteredProducts])

    useEffect(() => {
        if (filteredProducts) {
            const result = data.filter((item) => {
                const Color = item.color.includes(filteredProducts.color);
                const Price = item.price <= filteredProducts.price;
                const Size = item.product_sizes.some((size) => size.name === filteredProducts.size);

                return Color || Price || Size;
            });
            setFilteredData(result);
        } else {
            setFilteredData(null);
        }
    }, [filteredProducts]);

    return (
        <div className='productShowContainer'>
            {filteredData ? (
                filteredData.map((filteredDat, index) => (
                    <ProductsCart
                        key={index}
                        productName={filteredDat.name}
                        price={filteredDat.price}
                        MRP={filteredDat.mrp}
                        offer={filteredDat.offer}
                        brand={filteredDat.manufacturer_brand}
                        size={filteredDat.product_sizes}
                    />
                ))
            ) : (
                data.map((dat, index) => (
                    <ProductsCart
                        key={index}
                        productName={dat.name}
                        price={dat.price}
                        MRP={dat.mrp}
                        offer={dat.offer}
                        brand={dat.manufacturer_brand}
                        size={dat.product_sizes}
                    />
                ))
            )}
        </div>
    );
}

export default ProductShow;

