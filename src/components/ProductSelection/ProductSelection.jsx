import "./productselection.css"
import { data } from "../../data";
import { useState, useContext } from "react";
import { MyContex } from "../../context/Context";

function ProductSelection() {

    const uniqueColors = [];

    data.map((dat) => dat.color.map((color) => {
        if (!uniqueColors.includes(color)) {
            uniqueColors.push(color)
        }
    }))

    const uniqueSizes = [];

    data.map((dat) => dat.product_sizes
        .map((size) => size.name)
        .map((name) => {
            if (!uniqueSizes.includes(name)) { uniqueSizes.push(name) }
        }))

    const uniqueOffer = [];
    data.map((dat) => dat.offer)
        .map((off) => {
            if (!uniqueOffer.includes(off)) { uniqueOffer.push(off) }
        })


    const Obj = {
        color: "",
        size: "",
        price: 299,
    }

    const [filteredObject, setFilteredObject] = useState(Obj);

    const [range, setRange] = useState("299")
    const handleChange = (e) => {
        const newPrice = Number(e.target.value);
        setRange(newPrice);
        setFilteredObject((prev) => ({ ...prev, price: newPrice }));
    };

    const [colorBorder, setColorBorder] = useState(null)
    const handleClickColors = (color, index) => {
        setColorBorder(colorBorder === index ? null : index);
        setFilteredObject(colorBorder === index ? (prev) => ({ ...prev, color: "" }) : (prev) => ({ ...prev, color }));
    }

    const [colorSizes, setColorSizes] = useState(null)
    const handleClickSizes = (size, index) => {
        setColorSizes(colorSizes === index ? null : index);
        setFilteredObject(colorSizes === index ? (prev) => ({ ...prev, size: "" }) : (prev) => ({ ...prev, size }));
    }


    const { handleSubmit } = useContext(MyContex);



    return (
        <div className="selection-container">

            <h1>Filters:</h1>

            <div className="colors-container" >
                <h2>colors:</h2>
                {uniqueColors.map((color, index) => (

                    <button key={index} onClick={() => handleClickColors(color, index)} style={{
                        backgroundColor: `${color}`,
                        border: colorBorder === index ? "3px solid black" : ""
                    }}></button>

                ))}

            </div>

            <div className="sizes-container">
                <h2>size:</h2>
                <div className="sizes">

                    {uniqueSizes.map((size, index) => (
                        <button key={index}
                            onClick={() => handleClickSizes(size, index)}
                            style={{ border: colorSizes === index ? "3px solid black" : "" }}
                        >{size}</button>
                    ))}
                </div>

            </div>

            <div className="offer-container">
                <h2>offer:</h2>
                {uniqueOffer.map((off, index) => (
                    <button key={index}>{off}</button>
                ))}
            </div>

            <div className="amount-container">
                <h2>price:</h2>
                <input type="range"
                    min={299}
                    max={899}
                    step={50}
                    onChange={handleChange}
                />

                <h3>{range}</h3>

            </div>

            <button className="filter-btn" onClick={() => handleSubmit(filteredObject)}>Filter</button>

        </div>
    )
}

export default ProductSelection