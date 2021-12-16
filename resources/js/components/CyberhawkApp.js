import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Numbers from './Numbers';

export default function CyberhawkApp() {
    //Retrieving list from api/turbine_items
    useEffect( async () => {
        await fetch(`http://cyberhawktest-env.eba-chjjfdsj.us-east-2.elasticbeanstalk.com/api/turbine_items`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            //Saving the list to state
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
    
    //Function to begin processing of list
    const handleClick = () => {
        const inspectionBtn = document.querySelector('.button');
        const results = document.querySelector('.results');
        
        //Remove inspection button
        inspectionBtn.style.opacity = 0;
        inspectionBtn.style.visibility = "hidden";
        inspectionBtn.style.transform = "scale(0)";

        // Show inspection results
        setDisplayResults(true);

        // Loop through the turbine items items
        for (let i = 0; i <= inspectionData.length; i++) {
        
            setTimeout(() => {

                //Set the current number to the current value in the loop
                setCurrentNumber(inspectionData[i])

                //Check if current value is a multiple of 3
                if(inspectionData[i]%3 == 0) {
                    setIsMultipleOf3(true)
                } else {
                    setIsMultipleOf3(false)   
                }

                //Check if current value is a multiple of 5
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

                {/* Conditionally rendering inspection button or inspection results */}
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
