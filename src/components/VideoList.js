import React from 'react'
import List, { ListItem, ListItemText } from 'material-ui/List'

const Videos = props => {
    const renderVideoItems = (list) =>
        list.map(video =>
            <ListItem>
                <img src={video.snippet.thumbnails.high.url} width={120} height={90} />
                <ListItemText
                    primary={video.snippet.title}
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
