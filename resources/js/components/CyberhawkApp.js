import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Numbers from './Numbers';

export default function CyberhawkApp() {
    useEffect( async () => {
        await fetch(`http://localhost:3000/api/turbine_items`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            const items = data
            setInspectionData(items)
        })
    }, [])

    // State

    const [currentNumber, setCurrentNumber] = useState(null);
    const [displayResults, setDisplayResults] = useState(false);
    const [inspectionData, setInspectionData] = useState([]);
    const [isMultipleOf3, setIsMultipleOf3] = useState(false);
    const [isMultipleOf5, setIsMultipleOf5] = useState(false);
    

    const handleClick = () => {
        const inspectionBtn = document.querySelector('.button');
        const results = document.querySelector('.results');

        inspectionBtn.style.opacity = 0;
        inspectionBtn.style.visibility = "hidden";
        inspectionBtn.style.transform = "scale(0)";
        setDisplayResults(true);

        // setCurrentNumber(inspectionData[8])
        // console.log(inspectionData[8])
        for (let i = 0; i <= inspectionData.length; i++) {
            setTimeout(() => {

                setCurrentNumber(inspectionData[i])

                if(inspectionData[i]%3 == 0) {
                    setIsMultipleOf3(true)
                } else {
                    setIsMultipleOf3(false)   
                }

                if(inspectionData[i]%5 == 0) {
                    setIsMultipleOf5(true)
                } else {
                    setIsMultipleOf5(false)   
                }
                
            }, 1000 * i)
        }
    }



    return (
        <div className="app">
            <div className="inspect_card">
                {displayResults ? 
                    (
                        <div className="results">
                            <Numbers number={currentNumber} multipleOf3={isMultipleOf3} multipleOf5={isMultipleOf5}/>
                        </div>
                    )
                
                    : (
                        <>
                            <Button clickHandler={handleClick}/>
                        </>
                    )
                }
            </div>
        </div>
    )
}

        



if (document.getElementById('app')) {
    ReactDOM.render(<CyberhawkApp />, document.getElementById('app'));
}
