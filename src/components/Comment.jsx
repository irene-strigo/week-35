
import React from 'react';
import './Comment.css';
export class Comment extends React.Component {

    render() {
        return (
            <>
                <div className={'comment' + (this.props.active ? ' active ' : '')}>{this.props.text}</div>

            </>
        )
    }
}