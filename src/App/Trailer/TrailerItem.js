import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import {connect} from  'react-redux'
import "./trailer.css"
class TrailerItem extends Component {
    render() {
        const {
          id,
          image,
          name,
          description,
          long_text,
          genre,
          reiting,
          share,
          comment,
          category,
          isLiked = false,
          addLike,
          removeLike,
          trailerAddLike,
          trailerRemoveLike,
        } = this.props;
        return (
          <>
            <div className="trail-cont-box-img">
              <Link to={`/trailer/${id}`}>
                {" "}
                <img src={image} alt="img"></img>
              </Link>
            </div>
            <div className="trail-cont-box-tr">
              <div className="trail-rating-tr">{reiting}</div>
              <Link to={`/trailer/${id}`}>
                <div className="trail-name-tr">{name}</div>
              </Link>
              <Link to={`/trailer/${id}`}>
                <div className="descrip-name-tr">{description}</div>
              </Link>
              <div className="tr-art-ico-box">
                <div className="artc-art-num">
                  {isLiked ? share + 1 : share}
                </div>
                <div className="artc-dowland-ico">
                  <button
                    className="btn-like"
                    onClick={() =>
                      (isLiked ? trailerRemoveLike(id) : trailerAddLike(id))
                    }
                  >
                    {isLiked ? (
                      <span>
                        <i class="fas fa-heart"></i>
                      </span>
                    ) : (
                      <span>
                        <i class="far fa-heart"></i>
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
          </>
        );
    }
}

TrailerItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
}

TrailerItem.defaultProps = {
    description: "No description",
    image: "images/no-image.png",
}
const mapStateToProps = (state, {id}) => ({
    isLiked: state.trailerLikeState[id],
  })
  const mapDispatchToProps = (dispatch) => ({
    trailerAddLike: (id) =>
      dispatch({
        type: "TR_LIKE",
        id,
      }),
    trailerRemoveLike: (id) =>
      dispatch({
        type: "TR_DISLIKE",
        id,
      }),
  });
export default connect(mapStateToProps, mapDispatchToProps)
  (TrailerItem)

