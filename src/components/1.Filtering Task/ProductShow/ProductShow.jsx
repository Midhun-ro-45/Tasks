import React, { useContext, useEffect, useState } from 'react';
import './productshow.css';
import { data } from '../../../data';
import ProductsCart from '../ProductsCart/ProductsCart';
import { MyContex } from '../../../context/Context';

function ProductShow() {
    const { filteredProducts } = useContext(MyContex);
    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        console.log(filteredData);
    }, [filteredProducts])

    useEffect(() => {
        if (filteredProducts) {
            const result = data.filter((item) => {
                const passesColorCondition = filteredProducts.color ? item.color.includes(filteredProducts.color) : true;
                const passesPriceCondition = filteredProducts.price ? item.price <= filteredProducts.price : true;
                const passesSizeCondition = filteredProducts.size ? item.product_sizes.some((size) => size.stock_status && size.name === filteredProducts.size) : true;

                return passesColorCondition && passesPriceCondition && passesSizeCondition;
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

