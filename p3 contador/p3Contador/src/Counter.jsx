import {useCounter} from "./hooks/useCounter"
import React from "react"


const Contador = () => {
    const {contador,incrementar,decrementar,resetear} =useCounter();
    
    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
            <button onClick={resetear}>Resetear</button>
        </div>
    );
};

export default Contador;
