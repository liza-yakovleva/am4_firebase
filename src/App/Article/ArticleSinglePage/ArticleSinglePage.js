import React, {Component} from "react"
import { connect } from 'react-redux'
import { database } from '../../../firebase'
import '../../../common/style/base.css'
import s from './articleSinglePage.module.css'
import CommentsList from '../../../Components/Comments/CommentsList'
import CommentForm from '../../../Components/CommentForm/CommentForm'
class ArticleSinglePage extends Component {

   constructor(props) {
      super(props);
     this.state = {
       rootPartPath:'0/article_base/',
        data: [],
      }
   }

    componentDidMount() {
    database.ref('/0/article_base/').on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      })
    })
    }
  
  render() {
      const  {match,
        isLiked = false,
        articleAddLike,
       articleRemoveLike
      } = this.props
    
    const id = match.params.id
    if (this.state.data.length===0) {
      return null
    }
    else {
      const srcImg = "../../../" + `${this.state.data[id].image}`
      return (
        <main className="main">
          <div className="container">
            <div className="row main-row">
              <div className="col-md-12 col-xs-12">
                <div className={`${s.pag_sort_row} row`}></div>
                <div className={s.pag_wrap_block}>
                  <div className={s.pag_bl}>
                    <div className={s.pag_block}></div>
                  </div>
                  <div className={s.pag_game_container}>
                    <div className={`row ${s.pag_wrap_main_line}`}>
                      <div
                        className={`${s.pag_news} ${s.pag_news_game}`}
                      >
                        <div className={s.pag_main_name}>
                          <h1>{this.state.data[id].s_name}</h1>
                        </div>
                      </div>
                    </div>
                    <div className={`row ${s.pag_game_cards_row}`}>
                      <div className={s.pag_game_cards}>
                        <img
                          src={srcImg}
                          alt="img"
                          className={s.pag_page_img}
                        />
                        <div className={s.pag_game_cont_box}>
                          <div className={s.pag_game_rating}>
                            {this.state.data[id].reiting}
                          </div>
                          <div className={s.pag_game_name}>
                            {this.state.data[id].name}
                          </div>
                          <div className={s.pag_descrip_name}>
                            {this.state.data[id].description}
                            <span className={s.pag_descrip_name_green}></span>
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
                                    ? articleRemoveLike(id)
                                    : articleAddLike(id)
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
                            <div className={s.pag_game_num}>
                              {this.state.data[id].comment}
                            </div>
                            <div className={s.pag_comment_ico}>
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
                      commentsLength={this.state.data[id].comments.length}
                      rootPartPath={this.state.rootPartPath}
                      isComment />
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
    isLiked: state.articleLikeState[props.match.params.id],
  })
  const mapDispatchToProps = dispatch => ({
    articleAddLike:(id) => dispatch({
      type: "A_LIKE",
      id
    }),
    articleRemoveLike: (id) => dispatch({
      type: "A_DISLIKE",
      id
    }),
  })
export default connect(mapStateToProps, mapDispatchToProps)(ArticleSinglePage)

