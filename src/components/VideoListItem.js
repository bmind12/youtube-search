import React from 'react'
import propTypes from 'prop-types'

/* Material UI */
import Divider from 'material-ui/Divider'
import { ListItem, ListItemText } from 'material-ui/List'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
    listItem: {
        cursor: 'pointer'
    }
})

const VideoListItem = (props) => {

    const {
        changeCurrentVideo,
        channel,
        classes,
        desc,
        id,
        styles,
        thumbnail,
        title
    } = props

    const handleCurrentVideoChange = () => {
        changeCurrentVideo(id, title, desc)
    }

    return (
        <div>
            <ListItem
                className={classes.listItem}
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
    classes: propTypes.object,
    desc: propTypes.string,
    id: propTypes.string,
    thumbnail: propTypes.string,
    title: propTypes.string
}

export default withStyles(styles)(VideoListItem)
