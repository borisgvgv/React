// Importamos la utilidad useEstate te react para controlar los estados de los elementos de los componentes 
import { useState } from 'react'


export function TwiterFollowCard({ children, userName }) {

    // Los Hooks deben llamarse siempre en el mismo orden y en el nivel superior del componente 
    
    //Hook 1
    // Alterna entre true o false según el estado de isFollowing
    const [isFollowing, setIsFollowing] = useState(false)

    //console.log(isFollowing) para ver en consola si está en true o false isFollowing *no es obligatorio*
    console.log(isFollowing)

    //Utilizamos estado condicional para elternar el texto del botón
    const text = isFollowing ? 'Siguendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    // cambia following true a false o al contrario
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (

        <article className="tw-followCard-article">
            <header className="tw-followCard-header">
                <img className="tw-followCard-img" src="https://images.wallpapersden.com/image/download/the-way-of-water-avatar-movie-2022_bW1oaGiUmZqaraWkpJRmbmdlrWZpaWU.jpg" alt="avatar-avatar" />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw_followCard-userName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>{text}</button>
            </aside>
        </article>
    )
}