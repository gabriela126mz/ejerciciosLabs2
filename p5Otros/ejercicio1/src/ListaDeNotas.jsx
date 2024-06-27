import React, { useState, useContext, useReducer } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { Nota } from "./Nota";
import "./ListaDeNotas.css";

const AGREGAR_NOTA = "AGREGAR_NOTA";
const ELIMINAR_NOTA = "ELIMINAR_NOTA";
const COMPLETAR_NOTA = "COMPLETAR_NOTA";

const notasReducer = (state, action) => {
    switch (action.type) {
        case AGREGAR_NOTA:
            return [
                ...state,
                { id: Date.now(), texto: action.payload, completada: false }
            ];

        case ELIMINAR_NOTA:
            return state.filter((nota) => nota.id !== action.payload);

        case COMPLETAR_NOTA:
            return state.map((nota) =>
                nota.id === action.payload
                    ? { ...nota, completada: !nota.completada }
                    : nota
            );

        default:
            return state;
    }
};

const ListaDeNotas = () => {
    const [valorInput, setValorInput] = useState("");
    const [notas, dispatch] = useReducer(notasReducer, []);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const agregarNota = () => {
        if (valorInput.trim() !== "") {
            dispatch({ type: AGREGAR_NOTA, payload: valorInput });
            setValorInput("");
        }
    };

    const eliminarNota = (id) => {
        dispatch({ type: ELIMINAR_NOTA, payload: id });
    };

    const completarNota = (id) => {
        dispatch({ type: COMPLETAR_NOTA, payload: id });
    };

    const handleCheckboxChange = (id) => {
        completarNota(id);
    };

    return (
        <div className={`container ${theme}`}>
            <h2>Lista de Notas</h2>
            <input
                type="text"
                value={valorInput}
                onChange={(e) => setValorInput(e.target.value)}
                placeholder="Escribe una nota..."
                className="input"
            />
            <button className={`button ${theme}`} onClick={agregarNota}>
                Agregar Nota
            </button>
            <ul className="list">
                {notas.map((nota) => (
                    <Nota
                        key={nota.id}
                        nota={nota}
                        handleCheckboxChange={handleCheckboxChange}
                        eliminarNota={eliminarNota}
                        theme={theme}
                    />
                ))}
            </ul>

            <button className={`button ${theme}`} onClick={toggleTheme}>
                Cambiar tema a {theme === "light" ? "oscuro" : "claro"}
            </button>
        </div>
    );
};

export default ListaDeNotas;
