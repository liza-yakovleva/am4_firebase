import React, { Component } from 'react'
import {keys} from 'lodash'
import '../../common/style/base.css'
import './favorites.css'
import { database } from '../../firebase'
import { connect } from 'react-redux'
import ArticleItem from '../Article/ArticleItem'
import TrailerItem from '../Trailer/TrailerItem'
import GameItem from '../Game/GameItem'
import Slider from 'react-slick'
// import settings from '../../common/settings'
import { settingsFavor } from '../../common/settings'
import firebase from 'firebase'

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoginInEmail:"",
      userName:"",
    }
  }

  componentDidMount() {
    database.ref('/0/article_base/').on('value', (snapshot) => {
      this.setState({
        data_article: snapshot.val()
      })
    })

    database.ref('/1/game_base/').on('value', (snapshot) => {
      this.setState({
        data_game: snapshot.val()
      })
    })

    database.ref('/2/trailer_base/').on('value', (snapshot) => {
      this.setState({
        data_trailer: snapshot.val()
      })
    })

    database.ref('/4/favorites').on('value', (snapshot) => {
      this.setState({
        data_favorites: snapshot.val()
      })
     })
   
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
    this.setState({
      userLoginInEmail: user.email,
      userName:user.email.substring(0,(user.email.indexOf("@")))
    })
      } else {
        this.setState({
        userLoginInEmail:""
      })
      }
    })


// if (this.state.userName) {
//       database.ref(`/4/favorites/${this.state.userName}`)
//         .child(`article`)
//         .set(`${this.props.articleLikeState}`)
//       database.ref(`/4/favorites/${this.state.userName}`)
//         .child(`game`)
//         .set(`${this.props.gameLikeState}`)
//       database.ref(`/4/favorites/${this.state.userName}`)
//         .child(`trailer`)
//         .set(`${this.props.trailerLikeState}`)
//     }


}
    
  
  handleFavoritesToFirebase = () => {
    
      database.ref(`/4/favorites/${this.state.userName}`)
        .child('article')
        .set(this.props.articleLikeState)
      database.ref(`/4/favorites/${this.state.userName}`)
        .child(`game`)
        .set(this.props.gameLikeState)
      database.ref(`/4/favorites/${this.state.userName}`)
        .child(`trailer`)
        .set(this.props.trailerLikeState)
    
   this.state.data_favorites.[this.state.userName] ?
     alert("Поздравляю! Ваши избранные успешно внесены в базу данных!")
     :
     alert("К сожалению Ваши избранные не удалось внести в базу данных!")
  }
   
  onChangeInput = (val) => {
    this.setState({
      selectedCategory: val.value,
    })
  }
  render() {
console.log(this.state.data_favorites)
console.log(this.props.articleLikeState)
console.log(this.state.userLoginInEmail)
    // console.log(keys(this.props.articleLikeState).length === 0)
    // console.log(this.state.data_favorites)
    // console.log(this.state.data_article)
    // console.log(this.state.data_game)
    // console.log(this.state.data_trailer)
    // console.log(Object.keys(this.props.articleLikeState).find((i)=>{return i>4}))
    // console.log(Object.keys(this.props.articleLikeState))
    // console.log(this.props.gameLikeState)
    // console.log(this.props.trailerLikeState)
    // console.log(this.state.data_favorites[`${this.state.userName}`])
    // console.log(this.state.userName)
  

    if (this.state.data_article && this.state.data_game && this.state.data_trailer)
    {
     
  return (
        <>
        <div className="container">
          <div className="row artc-main-row">
          <div className="col-md-12 col-xs-12 artc-main-box">
             <div className="row artc-sort-row">
                <div className="col-md-6 col-xs-5 main-choice-cont">
                <button onClick={this.handleFavoritesToFirebase}>
                  Внести мое избранное в базу
                  </button>
                </div>
                <div className="col-md-6 col-xs-7 artc-main-sort">
                  <div className="col-md-6 col-xs-6 artc-btn-popular">
                    
                  </div>
                  <div className="col-md-6 col-xs-6 artc-btn-new">
                    
                  </div>
                </div>
              </div>

              <div className="artc-wrap-block">
                <div className="artc-bl">
                  <div className="artc-block" />
                </div>
                <div className="artc-art-container">
                  <div className="row artc-wrap-main-line">
                    <div className="col-md-2 col-xs-2 artc-news artc-news-art">
                      <div className="artc-main-name">Статьи</div>
                    </div>
                    <div className="col-md-1 col-xs-1` artc-news">
                      <div className="artc-name-noties-box">
                        <div className="artc-name-noties">Ваши избранные</div>
                      </div>
                    </div>
                    <div className="col-md-7 col-xs-7 "></div>
                  </div>
                  <div className="row artc-art-cards-row">
                  <div className="artc-art-cards">

                    {
                      keys(this.props.articleLikeState).length !== 0 ?
                      
                      <Slider  {
                        ...settingsFavor
                      } >
  
                        {
                          this.state.data_article
                              .filter((item) => keys(
                                this.props.articleLikeState
                                // ||
                                // this.state.data_favorites.article
                              )
                              .find((i) => { return i == item.id }))
                            .map(
                              ({ id, date, month, image, s_name, share, comment, name, description, text }) => (
                                <div className="artc-art-card" key={id}>
                                  <ArticleItem id={id} date={date} month={month} image={image} s_name={s_name} share={share} comment={comment} name={name} description={description} text={text} />
                                </div>
                              ))
                        }
                      </Slider>

                      :
                      
                      <div> ---- У Вас еще нет избранного в категории ARTICLE-- </div>
                    }

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


<div className="container">
      <div className="row main-row-tr">
        <div className="col-md-12 col-xs-12 main-box-tr">
          <div className="row artc-sort-row">
            <div className="col-md-6 col-xs-5 main-choice-cont">
             
            </div>
            <div className="col-md-6 col-xs-7 gam-main-sort">
              <div className="col-md-6 col-xs-6 gam-btn-popular">
               
              </div>
              <div className="col-md-6 col-xs-6 gam-btn-new">
                
              </div>
            </div>
          </div>
          <div className="wrap-block-tr">
            <div className="bl-tr">
              <div className="block-tr" />
            </div>
            <div className="trayler-container-tr">
              <div className="row wrap-main-line-tr">
                <div className="col-md-3 col-xs-3 news-tr news-trail-tr">
                  <div className="main-name-tr">Трейлеры</div>
                </div>
                <div className="col-md-1 col-xs-1 news-tr">
                  <div className="name-noties-box-tr">
                    <div className="name-noties-tr">Ваши избранные</div>
                  </div>
                </div>
                <div className="col-md-6 col-xs-6 main-choice-cont-tr " />
              </div>
              <div className="row trail-cards-row-tr">
                  <div className="trail-cards-tr">
                    

 {
   keys(this.props.trailerLikeState).length !== 0 ?

                  <Slider {
                    ...settingsFavor
                  } >
                      {this.state.data_trailer
                            .filter((item) => keys(
                              this.props.trailerLikeState
                              // ||
                              //   this.state.data_favorites.trailer
                            )
                          .find((i) => { return i == item.id }))
                        .map(
                          ({
                            id,
                            image,
                            name,
                            description,
                            long_text,
                            genre,
                            category,
                            reiting,
                            share,
                            comment,
                          }) => (
                            <div className="card-trailer-tr" key={id}>
                              <TrailerItem
                                id={id}
                                image={image}
                                name={name}
                                description={description}
                                long_text={long_text}
                                genre={genre}
                                category={category}
                                reiting={reiting}
                                share={share}
                                comment={comment}
                              />
                            </div>
                          )
                        )
                      }
                          
                        
                        </Slider>
                        
:
                      
                      <div> ---- У Вас еще нет избранного в категории TRAILER --- </div>
                    }

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
      

		<div className="container">
			<div className="row gam-main-row">
				<div className="col-md-12 col-xs-12 gam-main-box">
				<div className="row gam-sort-row">
						<div className="col-md-6 col-xs-5 main-choice-cont">
</div>
						<div className="col-md-6 col-xs-7 gam-main-sort">
							<div className="col-md-6 col-xs-6 gam-btn-popular">
							</div>
							<div className="col-md-6 col-xs-6 gam-btn-new">
                                
							</div>
						</div>
					</div>
					<div className="gam-wrap-block">
						<div className="gam-bl">
							<div className="gam-block" />
						</div>
						<div className="gam-game-container">
							<div className="row gam-wrap-main-line">
								<div className="col-md-2 col-xs-2 gam-news gam-news-game">
									<div className="gam-main-name"> Игры </div>
								</div>
								<div className="col-md-1 col-xs-1 gam-news">
									<div className="gam-name-noties-box">
                                        <div className="gam-name-noties"> Ваши избранные </div>
									</div>
								</div>
								<div className="col-md-7 col-xs-7">
								</div>
							</div>
							<div className="row gam-game-cards-row">
                  <div className="gam-game-cards">
                    
{
  keys(this.props.gameLikeState).length !== 0 ?

									<Slider  {...settingsFavor} >
                    {this.state.data_game
                        .filter((item) => keys(this.props.gameLikeState)
                          .find((i) => { return i == item.id }))
                      .map(
											({
												id,
												image,
												name,
												description,
												s_description,
												text,
												share,
												comment,
												reiting
											}) => (
												<div
												
													className="gam-card-game"
													key={id}
												>
													<GameItem
														id={id}
														image={image}
														name={name}
														description={description}
														s_description={s_description}
														text={text}
														share={share}
														comment={comment}
														reiting={reiting}
													/>
												</div>
											)
                                            )
                                        }
                        </Slider>
                        
:
                      
                      <div> ----У Вас еще нет избранного в категории GAME----- </div>
                    }

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	 




   </>     
  )
} else { return (<div>Ошибка в базе данных</div>) }
    
  
    
 
    

    

    
    }
  }

      

  const mapStateToProps = (state, props) => ({
         articleLikeState: state.articleLikeState,
           gameLikeState: state.gameLikeState,
           trailerLikeState: state.trailerLikeState,
  })
  const mapDispatchToProps = dispatch => ({
    articleAddLike: (id) => dispatch({
      type: "A_LIKE",
      id
    }),
    articleRemoveLike: (id) => dispatch({
      type: "A_DISLIKE",
      id
    }),
     gameAddLike: (id) => dispatch({
         type: "A_LIKE",
         id
       }),
       gameRemoveLike: (id) => dispatch({
         type: "A_DISLIKE",
         id
       }),
      
      trailerAddLike: (id) => dispatch({
          type: "A_LIKE",
          id
        }),
        trailerRemoveLike: (id) => dispatch({
          type: "A_DISLIKE",
          id
        }),
      

      
  })
  export default connect(mapStateToProps, mapDispatchToProps)(Favorites)

















{/* const mapStateToProps = (state) => ({
  articleLikeState: state.articleLikeState,
  gameLikeState: state.gameLikeState,
  trailerLikeState: state.trailerLikeState,
})
 
export default connect(mapStateToProps)(Favorites) */}



