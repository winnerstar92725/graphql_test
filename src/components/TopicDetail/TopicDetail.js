import React from 'react';
import './TopicDetail.css';
class TopicDetail extends React.Component {
    render() {
        return (
            <div className="topic_detail_container">
                {
                    this.props.data && this.props.data.map((item, index) => (
                        <div className="topic_detail_item" key={index}>
                            <div className="topic_detail_item_name">{item.name}</div>
                            <div>{item.stargazerCount}</div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default TopicDetail;