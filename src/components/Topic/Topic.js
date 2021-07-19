import React from 'react';
import TopicDetail from '../TopicDetail';
import './Topic.css';
class Topic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggles: null
        }
    }
    componentDidUpdate() {
        if (!this.state.toggles && this.props.data && this.props.data.topic) {
            this.setState({
                toggles: Array(this.props.data.topic.relatedTopics.length).fill(false)
            });
        }
    }
    handleToggle = (index) => {
        var _t = [...this.state.toggles];
        _t[index] = !_t[index];
        this.setState({
            toggles: _t
        })
    }
    render() {
        return (
            <div className="topic_container">
                {
                    this.props.data && this.props.data.topic.relatedTopics && this.props.data.topic.relatedTopics.map((item, index) => (
                        <div className="topic_wrapper" key={index}>
                            <div className="topic_item" onClick={() => this.handleToggle(index)}>
                                <div className="topic_name">{item.name}</div>
                                <div className="topic_stargazers">{item.stargazerCount}</div>
                            </div>
                            {
                                this.state.toggles && this.state.toggles[index] && (
                                    <TopicDetail data={item.relatedTopics} />
                                )
                            }
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Topic;