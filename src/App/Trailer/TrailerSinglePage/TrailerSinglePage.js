import React, {Component} from "react"
import { connect } from 'react-redux'
import { database } from '../../../firebase'
import '../../../common/style/base.css'
import s from "./trailerSinglePage.module.css"
import Player from './../../../Components/Player/Player'
import CommentsList from '../../../Components/Comments/CommentsList'
import CommentForm from '../../../Components/CommentForm/CommentForm'
class TrailerSinglePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        rootPartPath:'2/trailer_base/',
        data: [],
      }
   }

    UNSAFE_componentWillMount() {
    database.ref('/2/trailer_base/').on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      })
    })
    }
  render() {
   const{ match,
       isLiked = false,
        trailerAddLike,
       trailerRemoveLike,
   } = this.props
  const id = match.params.id
if (this.state.data.length===0) {
      return null
    }
    else {
    return (
      <main className={s.main}>
        <div className={s.container}>
          <div className={`${s.row} main-row`}>
            <div className="col-md-12 col-xs-12">
              <div className={`${s.row} pag_sort_row`}></div>
              <div className={s.pag_wrap_block}>
                <div className={s.pag_bl}>
                  <div className={s.pag_block}></div>
                </div>
                <div className={s.pag_game_container}>
                  <div className={`${s.row} pag_wrap_main_line`}>
                    <div className={`col-md-4 col-xs-4 ${s.pag_news} ${s.pag_news_game}`}>
                      <div className={s.pag_main_name}>
                        <h1>{this.state.data[id].name}</h1>
                      </div>
                    </div>
                  </div>
                  <div className={`${s.row} pag_game_cards_row`}>
                    <div className={s.pag_game_cards}>
                      <Player url={this.state.data[id].url} />
                      <div className={s.pag_game_cont_box}>
                        <div className={s.pag_game_rating}>8.2</div>
                        <div className={s.pag_game_name}>
                          {this.state.data[id].name}
                        </div>
                        <div className={s.pag_descrip_name}>
                          PC, PS4,
                          <span className={s.pag_descrip_name_green}>
                            {this.state.data[id].description}
                          </span>
                        </div>
                        <div className={s.pag_game_text}>
                          {this.state.data[id].long_text}
                        </div>
                        <div className={s.pag_game_ico_box}>
                          <div className={s.pag_game_num}>
                            {isLiked
                              ? this.state.data[id].share + 1
                              : this.state.data[id].share}
                          </div>
                          <div className={s.pag_dowland_ico}>
                            <button
                              className="btn-like"
                              onClick={() =>
                                isLiked
                                  ? trailerRemoveLike(id)
                                  : trailerAddLike(id)
                              }>
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
                          <div className={s.pag_game_num}>21</div>
                          <div className={s.pag_comment_ico}>
                            <i class="far fa-comment-alt"></i>
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
    isLiked: state.trailerLikeState[props.match.params.id] ,
  })
  const mapDispatchToProps = dispatch => ({
    trailerAddLike:(id) => dispatch({
      type: "TR_LIKE",
      id
    }),
    trailerRemoveLike: (id) => dispatch({
      type: "TR_DISLIKE",
      id
    }),
  })
export default connect(mapStateToProps, mapDispatchToProps)(TrailerSinglePage)

