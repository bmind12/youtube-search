import React from 'react'
import List, { ListItem, ListItemText } from 'material-ui/List'

const Videos = props => {
    const renderVideoItems = (list) =>
        list.map(video =>
            <ListItem>
                <img
                    alt="Video item"
                    height={90}
                    src={video.snippet.thumbnails.high.url}
                    width={120}
                />
                <ListItemText
                    primary={video.snippet.title}
                    secondary={video.snippet.channelTitle}
                />
            </ListItem>
        )

    return (
        <List>
            {renderVideoItems(props.data)}
        </List>
    )
}

export default Videos
