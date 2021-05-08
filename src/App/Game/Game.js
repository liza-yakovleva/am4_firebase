
import Slider from 'react-slick'
import CustomSelect from "../Main/CustomSelect"
import '../../common/style/base.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './game.css'
import { database } from '../../firebase'
import GameItem from './GameItem'
import React, { Component } from 'react'
import settings from '../../common/settings'
import {styles} from '../../common/settings'
import {optionsGame} from '../../common/settings'


class Game extends Component {
  constructor(props) {
        super(props);
    this.state = {
        // data_game: [],
        selectedCategory: "all",
            }
  }
  
   componentDidMount() {
    database.ref('/1/game_base/').on('value', (snapshot) => {
      this.setState({
        data_game: snapshot.val()
      })
    })
    }
  
 onChangeInput = (val) => {
         this.setState({
           selectedCategory: val.value, 
        })
    }
 
	render() {
	
	if (this.state.data_game) {
	return (
		<div className="container">
			<div className="row gam-main-row">
				<div className="col-md-12 col-xs-12 gam-main-box">
					<div className="row gam-sort-row">
						<div className="col-md-6 col-xs-5 main-choice-cont">

<CustomSelect
                    style={styles.select}
                     options={optionsGame}
                    defaultValue={optionsGame[0]}
                    onChange={this.onChangeInput}/>
</div>

						<div className="col-md-6 col-xs-7 gam-main-sort">
							<div className="col-md-6 col-xs-6 gam-btn-popular">
								<button   onClick={() => this.setState({ selectedCategory: "popular" })} className="gam-popular"> Популярные </button>
							</div>
							<div className="col-md-6 col-xs-6 gam-btn-new">
                                <button onClick={() => this.setState({ selectedCategory: "new" })} className="gam-new"> Новые </button>
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
                                        <div className="gam-name-noties"> {this.state.selectedCategory} </div>
									</div>
								</div>
								<div className="col-md-7 col-xs-7">
								</div>
							</div>
							<div className="row gam-game-cards-row">
								<div className="gam-game-cards">
									<Slider {...settings}>
										
                                        {(this.state.selectedCategory !== "all" && this.state.selectedCategory !=="new" && this.state.selectedCategory !=="popular") ?
                                           this.state.data_game.filter(item => item.category === this.state.selectedCategory 
                                        ).map(
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
                                    
                                            : (this.state.selectedCategory !== "all") ?
                                                 this.state.data_game.filter(item => item.genre === this.state.selectedCategory 
                                        ).map(
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
                                    :
                                               this.state.data_game.map(
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
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	 )
    } else {return null}
  }
}

export default Game;
