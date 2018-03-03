import React from 'react'
import List from 'material-ui/List'
import VideoListItem from './VideoListItem'

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
        <List>
            {renderVideoItems(props.data)}
        </List>
    )
}

export default VideoList
