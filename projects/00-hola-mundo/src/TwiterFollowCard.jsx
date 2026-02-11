export function TwiterFollowCard({userName, name, isFollowing}){
    //console.log(isFollowing)
    return(
         
         <article className="tw-followCard-article">
            <header className="tw-followCard-header">
                <img className="tw-followCard-img" src="https://images.wallpapersden.com/image/download/the-way-of-water-avatar-movie-2022_bW1oaGiUmZqaraWkpJRmbmdlrWZpaWU.jpg" alt="avatar-avatar" />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw_followCard-userName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className="tw-followCard-button">seguir</button>
            </aside>
        </article>
    )
}