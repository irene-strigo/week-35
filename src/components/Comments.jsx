import React from 'react';
import { Comment } from './Comment'


export class CommentsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newComment: '',
            allComments: [],


        };
    }

    handleSubmit = (e) => {
        if (this.state.newComment != '') {
            e.preventDefault();
            const allComments = this.state.allComments
            allComments.unshift(this.state.newComment)
            this.setState({ allComments, newComment: '' })
        } else {
            alert('поле не заполнено')
        }
    };

    handleChange = (e) => {

        this.setState({ newComment: e.target.value });




    };


    render() {
        console.log(this.state)
        const commentsList = this.state.allComments.map((comment, index) =>
            <Comment key={index} text={comment} active={index === 0} />

        );
        return (
            <div className="comments-container">
                <div className='visual'>
                    Ваш комментарий: {commentsList}
                </div>

                <form onSubmit={this.handleSubmit}>
                    <div className="heading">
                        <h3>Hi</h3>
                        <h3>How are you?</h3>
                    </div>
                    <input className="comment-area" onChange={this.handleChange} value={this.state.comment}></input>
                    <input className="comments-button" type='submit' value='Submit' />
                </form>
            </div>
        );

    }
}