import "./productscart.css"

function ProductsCart({ KEY, productName, price, offer, MRP, brand, size }) {


    return (
        <div className="cart-container" key={KEY}>



            <div className="details">
                <h4>{brand}</h4 >
                <p className="product-name">{productName}</p>
            </div>

            <div className="size-btn">
                {size.filter((fil) => fil.stock_status === true).map((val, index) => (
                    <button key={index}>{val.name}</button>
                ))}
            </div>

            <div className="price-display">

                <p>₹{price}</p>

                <div className="mrp">
                    <div>MRP:</div><p>{MRP}</p>
                </div>

                <button>{offer}</button>

            </div>

        </div>
    )
}

export default ProductsCart