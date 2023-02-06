import React, {useEffect, useState, useContext, createContext} from 'react';
export default function () {

    const [value, setMyValue] = useState("0");

    return <>
        <div id="standing-area">
            <h2> 👯 This is the standing area 👯</h2>
            <label>Choose number of tickets </label>
            <select value={value} onChange={(e) => {
                const selectedValue = e.target.value;
                setMyValue(selectedValue)
            }}>
                <option value="0" id="number0">0</option>
                <option value="1" id="number1">1</option>
                <option value="2" id="number2">2</option>
                <option value="3" id="number3">3</option>
                <option value="4" id="number4">4</option>
            </select>
            <p>{value}</p>
        </div>
    </>
}