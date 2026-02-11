import React from "react";
import { TwiterFollowCard } from "./TwiterFollowCard";


export function App() {

    return (
        //se pueden envolver varios componentes con <React.Fragment> para poder mostrarlos juntos <React.Fragment> se puede de simplifivcar a <></>
        //También podemos usar un div
        <div className="clase-App">
            < TwiterFollowCard isFollowing userName="avatarprueba" name="Avatar Prueba" />
            < TwiterFollowCard isFollowing={false} userName="pablohernandez" name="Pablo hernandez" />
            < TwiterFollowCard isFollowing userName="elonmusk" name="Elon Musk" />
        </div>
    )
}