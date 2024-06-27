import React, { useEffect, useRef, useState } from "react";

const Formulario = () => {
    const [inputValueState, setInputValueState] = useState("");

    const prevRef = useRef("");

    const inputRef = useRef(null);

    useEffect (() => {
        prevRef.current = inputValueState; 
        }, [inputValueState]);
        
    const handleChangeState = (e) => {
        setInputValueState(e.target.value);
    };
   
    const handleChangeRef = (e) => { 
        inputRef.current = e.target.value;
    };

    return (
        <div>
            <h2>useState</h2>
            <input
                type="text"
                value={inputValueState}
                onChange={handleChangeState}
                placeholder="useState"
            />
            <h2>useRef</h2>
            <input
                type="text"
                ref={inputRef}
                onChange={handleChangeRef}
                placeholder="useRef"
            />
            <div>
                El estado es {inputValueState}, pero antes era {prevRef.current}
            </div>
        </div>
    );
};

export default Formulario;