import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        website: "",
        address: {
            street: "",
            city: "",
            zipCode: "",
        },
    });

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            address: {
                ...formData.address,
                [name]: value,
            },
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post("https://jsonplaceholder.typicode.com/users", formData);
                console.log("User registered successfully:", response.data);
                alert("User Registered Successfully !");
                navigate("/welcome")
            } catch (error) {
                console.error("Error registering user:", error);
            }
        } else {
            console.error("Form submission failed. Please fix errors.");
        }
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        // Name validation
        if (formData.name.length === 0) {
            newErrors.name = "Name is required.";
            valid = false;
        }

        //phoneNumber validation
        if (formData.phoneNumber.length !== 10 ||
            !['6', '7', '8', '9'].includes(formData.phoneNumber.charAt(0))) {
            newErrors.phoneNumber = "Phone number must be 10 digits and start with Indian code (6-9).";
            valid = false;
        }


        // Email validation
        if (!formData.email.includes("@") || !formData.email.includes("gmail.com")) {
            newErrors.email = "Email must contain '@' and be a Gmail address.";
            valid = false;
        }

        // Website validation
        if (!formData.website.includes(".") || formData.website.indexOf(".") === 0 || formData.website.lastIndexOf(".") === formData.website.length - 1 || formData.website.length === 0) {
            newErrors.website = "Please enter a valid website name containing a dot (.) with characters before and after it.";
            valid = false;
        }


        // Zip code validation
        if (formData.address.zipCode.length !== 6 || isNaN(formData.address.zipCode)) {
            newErrors.zipCode = "Zip code must be a 6-digit number.";
            valid = false;
        }


        setErrors(newErrors);
        return valid;
    };


    return (
        <form onSubmit={handleSubmit} className="form-container">

            <h1 className="heading">Register Form</h1>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input-field ${errors.name ? "error" : ""}`}
                />
            </label>
            {errors.name && <div className="error">{errors.name}</div>}
            <label>
                Phone Number:
                <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`input-field ${errors.phoneNumber ? "error" : ""}`}
                />
            </label>
            {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input-field ${errors.email ? "error" : ""}`}
                />
            </label>
            {errors.email && <div className="error">{errors.email}</div>}
            <label>
                Website:
                <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="input-field"
                />
            </label>
            {errors.website && <div className="error">{errors.website}</div>}
            <label>
                Address:
                <input
                    type="text"
                    name="street"
                    placeholder="Street"
                    value={formData.address.street}
                    onChange={handleAddressChange}
                    className="input-field"
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.address.city}
                    onChange={handleAddressChange}
                    className="input-field"
                />
                <input
                    type="text"
                    name="zipCode"
                    placeholder="Zip Code"
                    value={formData.address.zipCode}
                    onChange={handleAddressChange}
                    className={`input-field ${errors.zipCode ? "error" : ""}`}
                />
            </label>
            {errors.zipCode && <div className="error">{errors.zipCode}</div>}
            <button type="submit" className="submit-btn" name="register">
                Register
            </button>
        </form>

    );
}

export default Login;
