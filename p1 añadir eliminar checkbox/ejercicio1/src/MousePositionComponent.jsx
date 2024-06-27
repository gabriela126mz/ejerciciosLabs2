import React, { useState, useEffect } from "react";

const MousePositionComponent = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        console.log("useEffect");
        
        if (isSubscribed) {
            window.addEventListener("mousemove", updateMousePosition);
        }
        return () => {
            console.log("Limpieza")
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, [isSubscribed]);

    const toggleSubscription = () => {
        setIsSubscribed((prevState) => !prevState);
    };

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <p>Posición del ratón en la pantalla:</p>
            <p>X: {mousePosition.x}</p>
            <p>Y: {mousePosition.y}</p>
            <button onClick={toggleSubscription}>
                {isSubscribed ? "Cancelar Suscripción" : "Suscribir"}
            </button>
        </div>
    );
};

export default MousePositionComponent;
