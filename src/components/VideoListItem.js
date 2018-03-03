import React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'

const VideoListItem = (props) => {

    const {
        changeCurrentVideo,
        channel,
        desc,
        id,
        thumbnail,
        title
    } = props

    const handleCurrentVideoChange = () => {
        changeCurrentVideo(id, title, desc)
    }

    return (
        <div>
            <ListItem
                onClick={handleCurrentVideoChange}
            >
                <img
                    alt={title}
                    src={thumbnail}
                    width={120}
                />
                <ListItemText
                    primary={title}
                    secondary={channel}
                />
            </ListItem>
            <Divider />
        </div>
    )
}

export default VideoListItem
