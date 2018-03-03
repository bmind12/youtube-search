import React from 'react'
import propTypes from 'prop-types'

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

VideoListItem.propTypes = {
    changeCurrentVideo: propTypes.func.isRequired,
    channel: propTypes.string,
    desc: propTypes.string,
    id: propTypes.string,
    thumbnail: propTypes.string,
    title: propTypes.string
}

export default VideoListItem
