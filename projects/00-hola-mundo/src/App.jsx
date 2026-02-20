
import { useState } from "react";
import { TwiterFollowCard } from "./TwiterFollowCard";


export function App() {
    //Hook 1 Nombre por defecto desconocido

    
    const [name, setName] = useState('desconocido')
    
    return (
        //se pueden envolver varios componentes con <React.Fragment> para poder mostrarlos juntos <React.Fragment> se puede de simplifivcar a <></>
        //También podemos usar un div
        <div className="clase-App">
            < TwiterFollowCard userName={name}>
                Avatar Prueba
            </TwiterFollowCard>

            < TwiterFollowCard userName="avatarprueba">
                Avatar Prueba
            </TwiterFollowCard>

            <button onClick={() => setName('pedromikel')}>Cambio de nombre</button>
        </div>
    )
}