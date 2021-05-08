import React, { Component } from "react"
import CommentsListItem from './CommentsListItem'
class CommentsList extends Component {
    render() {
    // console.log(this.props)
    //  console.log(data)
    // console.log(article_base)
    // console.log(commentsArray[this.props.itemId])
     // console.log(commentsArray.[0].[1].author)
        if (this.props.data && (Object.values(this.props.data).map((item) => (item.comments))[this.props.itemId]!==undefined)) {
            // console.log(Object.values(this.props.data).map((item) => (item.comments))[this.props.itemId])
            return (
                <>
                    <div className="quantity-comments">Всего комментариев :
                    {Object.values(Object.values(this.props.data).map((item) => (item.comments))[this.props.itemId]).length}
                    </div>
                    <div>
                        {Object.values(Object.values(this.props.data).map((item) => (item.comments))[this.props.itemId]).map((comment, id) => (
                            <div key={id}>
                                <CommentsListItem
                                    itemId={this.props.itemId}
                                    author={comment.author}
                                    avatar={comment.avatar}
                                    date={comment.date}
                                    text={comment.text}
                                    replies={comment.replies}
                                    id={comment.id}
                                    comId={id}
                                    data={this.props.data}
                                     rootPartPath={ this.props.rootPartPath}
                                />
                            </div>
                        ))}
                    </div>
                </>
            )
        } else {
            return null
        }
    }
}
export default CommentsList
