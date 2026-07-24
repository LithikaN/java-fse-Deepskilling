import React from "react";

function CurrencyConvertor() {

    const handleSubmit = () => {

        const rupees = 1000;
        const euro = rupees / 90;

        alert("1000 INR = " + euro.toFixed(2) + " Euro");
    };

    return (
        <div>
            <h2>Currency Convertor</h2>

            <button onClick={handleSubmit}>
                Convert
            </button>
        </div>
    );
}

export default CurrencyConvertor;