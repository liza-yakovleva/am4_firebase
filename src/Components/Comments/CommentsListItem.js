import React, {Component} from "react"
import PropTypes from "prop-types"
import "./CommentsList.css"
import CommentForm from "../CommentForm/CommentForm"
class CommentsListItem extends Component {
    state = {
        replyForm: false,
        displayReplies:false,
    }

    changeReplyForm = () => {
        this.setState((prevState)=>{
            return{
                replyForm: !prevState.replyForm
            }
        })
    }

    changeDisplayReplies = (e) => {
        console.log(e.target.id)
        this.setState((prevState)=>{
            return {
                displayReplies: !prevState.displayReplies
            }
        })
    }

    render() {
        const {
        data,
        comId,
        id,
        author,
        avatar,
        date,
        text,
            replies = [],
         
    } = this.props;
// console.log(comId)
//   console.log(data)
            
        return (
            <div className="wrap_comment_list">
                <div className="comment-item">
                    <div className="comment-author">
                        <img src={avatar} alt=""/>
                    </div>
                    <div className="right-part">
                        <div className="comment-meta">
                            <span className="author-name">{author}</span>
                            <span className="comment-date">
                                {date}
                            </span>
                        </div>
                        <div className="comment-text">
                            <p>
                                {text}
                            </p>
                        </div>
                        <button id={id} className="btn-answer" onClick={this.changeDisplayReplies}>{replies.length ?replies.length:0} Отв</button>
                        <button  className="btn-add-answer" onClick={this.changeReplyForm}>Ответить</button>
                    </div>
                </div>
                 <div className={this.state.replyForm ? 'reply-comment is-reply-open':'reply-comment' }>
                    <div className="top-line">
                        <button className='cancel-reply-btn' onClick={this.changeReplyForm}>Отменить</button>
                        
                        <CommentForm itemId={this.props.itemId} repliesLength={replies.length} isComment={false} comId={comId} data={data} changeReplyForm={this.changeReplyForm}   rootPartPath={ this.props.rootPartPath}/>
                        </div>
                    </div>
                <div className={this.state.displayReplies ? 'reply show':'reply' }>
                {replies && replies.length !== 0 ? replies.map((item,id) => {
                    return ( 
                        <div key={id} className="arr-replies">
                            <CommentsListItem {...item} />
                        </div>
                    )
                    }) : false}
                </div>
            </div>
        )
    }
}

CommentsListItem.propTypes = {
    author:PropTypes.string,
    avatar:PropTypes.string,
    date:PropTypes.string,
    text:PropTypes.string,
}

CommentsListItem.defaultProps = {
    text:"No text",
}

export default CommentsListItem