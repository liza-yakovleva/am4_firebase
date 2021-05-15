import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import {connect} from  'react-redux'
import "./article.css"

class ArticleItem extends Component {

    render() {
        const {
    id,
    date,
    month,
    image,
    s_name,
    share,
    comment,
    name,
    description,
    text,
    long_text,
    genre,
    category,
    isLiked = false,
    articleAddLike,
    articleRemoveLike,
    } = this.props;

        return (
          <>
            <div className="artc-article-img-name">
              <div className="artc-article-img-name__img">
                <div className="artc-article-img-name__img-date artc-color-2">
                  <span className="artc-date-number">{date}</span>
                  <span className="artc-date-month">{month}</span>
                </div>
                <div className="artc-article-img-name__img-image">
                  <Link
                    to={`/article/${id}`}
                  >
                    <img src={image} alt="img" />
                  </Link>
                </div>
              </div>
              <div className="artc-article-img-name__state">
                <Link to={`/article/${id}`}>
                  <div className="artc-article-name">{s_name}</div>
                </Link>
                <div className="artc-art-ico-box">
                  <div className="artc-art-num">
                    
                    {isLiked ? share + 1 : share}
                  </div>
                  <div className="artc-dowland-ico">
                    <button
                      className="btn-like"
                      onClick={() =>
                        isLiked ? articleRemoveLike(id) : articleAddLike(id)
                      }
                    >
                      {isLiked ? (
                        <span>
                          <i className="fas fa-heart"></i>
                        </span>
                      ) : (
                        <span>
                          <i className="far fa-heart"></i>
                        </span>
                      )}
                    </button>
                  </div>
                  <div className="artc-art-num">{comment}</div>
                  <div className="artc-comment-ico">
                    <i className="far fa-comment-alt"></i>
                  </div>
                </div>
              </div>
            </div>
            <Link to={`/article/${id}`}>
              <div className="artc-article-main-name">{name}</div>
            </Link>
            <div className="artc-article-main-content">
              <p className="artc-italic">{description}</p>
              <p className="artc-norm">{text}</p>
            </div>
          </>
        );
    }
}

ArticleItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
};

ArticleItem.defaultProps = {
    description: "No description",
    image: "images/no-image.png",
};

const mapStateToProps = (state, {id}) => ({
    isLiked: state.articleLikeState[id],
  })
  const mapDispatchToProps = (dispatch) => ({
    articleAddLike:(id) => dispatch({
      type: "A_LIKE",
      id
    }),
    articleRemoveLike: (id) => dispatch({
      type: "A_DISLIKE",
      id
    }),
  })
export default connect(mapStateToProps, mapDispatchToProps)(ArticleItem)


