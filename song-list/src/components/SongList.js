import React, { useState } from 'react'
import uuid from 'uuid/v1'

const SongList = () => {
    const [ songs, setSongs ] = useState([
        { title: 'May', id: 1 },
        { title: 'Hidding Place', id: 2 },
        { title: 'Lucid', id: 3 },
    ])

    const addSong = () => { 
        setSongs([...songs, { title: 'New song', id: uuid() }])
    }

    return ( 
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (<li key={ song.id }>{ song.title }</li>)
                })}
            </ul>
            <button onClick={ addSong }> Add a song </button>
        </div>
    )
}

export default SongList