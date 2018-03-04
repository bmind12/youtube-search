import React from 'react'
import propTypes from 'prop-types'
import Paper from 'material-ui/Paper'

/* Components */
import VideoListItem from './VideoListItem'

/* Material UI */
import Grow from 'material-ui/transitions/Grow'
import List from 'material-ui/List'

const VideoList = props => {
    const renderVideoItems = (list) =>
        list.map(video =>
            <VideoListItem
                changeCurrentVideo={props.changeCurrentVideo}
                channel={video.snippet.channelTitle}
                id={video.id.videoId}
                key={video.id.videoId}
                thumbnail={video.snippet.thumbnails.high.url}
                title={video.snippet.title}
                desc={video.snippet.description}
            />
        )

    return (
        <Grow in={true} >
            <Paper>
                <List>
                    {renderVideoItems(props.data)}
                </List>
            </Paper>
        </Grow>
    )
}

VideoList.propTypes = {
    changeCurrentVideo: propTypes.func.isRequired,
    data: propTypes.array
}

export default VideoList
