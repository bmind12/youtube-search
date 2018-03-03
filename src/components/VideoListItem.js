import React from 'react'

/* Material UI */
import Divider from 'material-ui/Divider'
import { ListItem, ListItemText } from 'material-ui/List'

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
