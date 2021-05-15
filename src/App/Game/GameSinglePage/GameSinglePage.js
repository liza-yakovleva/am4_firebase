import React, {Component} from "react"
import { connect } from 'react-redux'
import { database } from '../../../firebase'
import '../../../common/style/base.css'
import "./gameSinglePage.css"
import Player from './../../../Components/Player/Player'
import CommentsList from '../../../Components/Comments/CommentsList'
import CommentForm from '../../../Components/CommentForm/CommentForm'
class GameSinglePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        rootPartPath:'1/game_base/',
        data: [],
      }
   }

   componentDidMount() {
    database.ref('/1/game_base/').on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      })
    })
    }
  render() {
    const { match,
       isLiked = false,
        gameAddLike,
      gameRemoveLike,
    } = this.props
    
    const id = match.params.id
     if (this.state.data.length===0) {
      return null
    }
    else  {
      return (
        <main className="main">
          <div className="container">
            <div className="row main-row">
              <div className="col-md-12 col-xs-12 pag-main-box">
                <div className="row pag-sort-row">
                  <h1>{this.state.data[id].name}</h1>
                </div>
                <div className="pag-wrap-block">
                  <div className="pag-bl">
                    <div className="pag-block"></div>
                  </div>
                  <div className="pag-game-container">
                    <div className="row pag-wrap-main-line">
                      <div className="col-md-4 col-xs-4 pag-news pag-news-game">
                        <div className="pag-main-name">New</div>
                      </div>
                    </div>

                    <div className="row pag-game-cards-row">
                      <div className="pag-game-cards">
                        <Player url={this.state.data[id].url} />

                        <div className="pag-game-cont-box">
                          <div className="pag-game-rating">
                            {this.state.data[id].reiting}
                          </div>
                          <div className="pag-game-name">
                            {this.state.data[id].name}
                          </div>
                          <div className="pag-descrip-name">
                            {this.state.data[id].description}
                            <span className="pag-descrip-name-green">
                              {this.state.data[id].s_description}
                            </span>
                          </div>
                          <div className="pag-game-text">
                            {this.state.data[id].long_text}
                          </div>
                          <div className="pag-game-ico-box">
                            <div className="pag-game-num">
                              {isLiked
                                ? this.state.data[id].share + 1
                                : this.state.data[id].share}
                            </div>
                            <div className="pag-dowland-ico">
                              <button button className = "btn-like"
                                onClick={() =>
                                  isLiked
                                    ? gameRemoveLike(id)
                                    : gameAddLike(id)
                                }
                              >
                                {isLiked
                                  ? (
                                  <span>
                                    
                                    <i className="fas fa-heart"></i>
                                  </span>
                                  )
                                  : (
                                  <span>
                                    <i className="far fa-heart"></i>
                                  </span>
                                )}
                              </button>
                            </div>
                            <div className="pag-game-num">
                              {this.state.data[id].comment}
                            </div>
                            <div className="pag-comment-ico">
                              <i className="far fa-comment-alt"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CommentsList
                      data={this.state.data}
                      itemId={id}
                      rootPartPath={this.state.rootPartPath} />
                    <CommentForm
                      data={this.state.data}
                      itemId={id}
                      isComment
                      rootPartPath={this.state.rootPartPath}
                      commentsLength={this.state.data[id].comments.length} />
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </main>
      )
    }
    }
  }
const mapStateToProps = (state, props) => ({
    isLiked: state.gameLikeState[props.match.params.id] ,
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
export default connect(mapStateToProps, mapDispatchToProps)(GameSinglePage)
