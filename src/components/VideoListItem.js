import React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'

const VideoListItem = (props) => {

    const { title } = props

    const handleCurrentVideoChange = () => {
        props.changeCurrentVideo(props.id)
    }

    return (
        <ListItem
            onClick={handleCurrentVideoChange}
        >
            <img
                alt={title}
                src={props.thumbnail}
                width={120}
            />
            <ListItemText
                primary={title}
                secondary={props.channel}
            />
        </ListItem>
    )
}

export default VideoListItem
