import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import {connect} from  'react-redux'
import "./game.css"

class GameItem extends Component {
  render() {
    const {
      id,
      image,
      name,
      description,
      s_description,
      text,
      long_text,
      share,
      comment,
      reiting,
      genre,
      category,
      isLiked = false,
      gameAddLike,
      gameRemoveLike,
    } = this.props;

    return (
      <>
        <div className="gam-img">
          <Link to={`/game/${id}`}>
            <img src={image} className="gam-game-img" alt="img" />
          </Link>
        </div>
        <div className="gam-game-cont-box">
          <div className="gam-game-rating"> {reiting} </div>
          <Link to={`/game/${id}`}>
            <div className="gam-game-name"> {name}</div>
          </Link>
          <Link to={`/game/${id}`}>
            <div className="gam-descrip-name">
              {" "}
              {description}
              <span className="gam-descrip-name-green">{s_description}</span>
            </div>
          </Link>
          <div className="gam-game-text">{text}</div>{" "}
          <div className="gam-game-ico-box">
            <div className="gam-game-num"> {isLiked ? share + 1 : share}</div>
            <div className="gam-dowland-ico">
              {" "}
              <button
                className="btn-like"
                onClick={() => (isLiked ? gameRemoveLike(id) : gameAddLike(id))}
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
            <div className="gam-game-num"> {comment}</div>
            <div className="gam-comment-ico">
              {" "}
              <i className="far fa-comment-alt"></i>
            </div>
          </div>
        </div>
      </>
    );
  }
}

GameItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

GameItem.defaultProps = {
  description: "No description",
  image: "images/no-image.png",
};

const mapStateToProps = (state, {id}) => ({
    isLiked: state.gameLikeState[id],
  })
  const mapDispatchToProps = dispatch => ({
    gameAddLike:(id) => dispatch({
      type: "G_LIKE",
      id
    }),
    gameRemoveLike: (id) => dispatch({
      type: "G_DISLIKE",
      id
    }),
  })

export default connect(mapStateToProps, mapDispatchToProps)(GameItem)
