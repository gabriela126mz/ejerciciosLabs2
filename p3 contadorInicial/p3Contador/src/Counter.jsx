import React, { useReducer } from "react";

const contadorReducer = (state, action) => {
    switch (action.type) {
        case "incrementar":
            return state + 1;
        case "decrementar":
            return state - 1;
        case "reset":
            return 0;
        default:
            state;
    }
    return state;
};

const Contador = () => {
    const [contador, dispatch] = useReducer(contadorReducer, 0);

    const incrementar = () => {
        dispatch({ type: "incrementar" });
    };

    const decrementar = () => {
        dispatch({ type: "decrementar" });
    };

    const resetear = () => {
        dispatch({ type: "reset" });
    };

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
