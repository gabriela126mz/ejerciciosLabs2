import { useReducer } from "react";

const contadorReducer = (state,action) => {
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


export const useCounter = () => {
    const [contador, dispatch] = useReducer(contadorReducer, 0);

    const incrementar = ()=>{
        dispatch({type: "incrementar"});
    }

    const decrementar = ()=>{
        dispatch({type: "decrementar"});
    }

    const resetear = ()=>{
        dispatch({type: "reset"});
    }

    return {
        contador,
        incrementar,
        decrementar,
        resetear,
    };
}