import Slider from 'react-slick'
import CustomSelect from '../Main/CustomSelect'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../common/style/base.css'
import './trailer.css'
import { database } from '../../firebase'
import TrailerItem from './TrailerItem'
import React, { Component } from 'react'
import settings from '../../common/settings'
import {styles} from '../../common/settings'
import { optionsTrailer } from '../../common/settings'


class Trailer extends Component {
  constructor(props) {
        super(props);
    this.state = {
        // data_article: [],
        selectedCategory: "all",
            }
  }
  
   componentDidMount() {
    database.ref('/2/trailer_base/').on('value', (snapshot) => {
      this.setState({
        data_trailer: snapshot.val()
      })
    })
    }
  
 onChangeInput = (val) => {
         this.setState({
           selectedCategory: val.value, 
        })
    }
  
  render() {
    

  if (this.state.data_trailer) {

	return (
    <div className="container">
      <div className="row main-row-tr">
        <div className="col-md-12 col-xs-12 main-box-tr">
          <div className="row artc-sort-row">
            <div className="col-md-6 col-xs-5 main-choice-cont">
              <CustomSelect
                style={styles.select}
                options={optionsTrailer}
                defaultValue={optionsTrailer[0]}
                onChange={this.onChangeInput}
              />
            </div>
            <div className="col-md-6 col-xs-7 gam-main-sort">
              <div className="col-md-6 col-xs-6 gam-btn-popular">
                <button
                  onClick={() => this.setState({ selectedCategory: "popular" })}
                  className="gam-popular"
                >
                  {" "}
                  Популярные{" "}
                </button>
              </div>
              <div className="col-md-6 col-xs-6 gam-btn-new">
                <button
                  onClick={() => this.setState({ selectedCategory: "new" })}
                  className="gam-new"
                >
                  Новые
                </button>
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
                    <div className="name-noties-tr">{this.state.selectedCategory}</div>
                  </div>
                </div>
                <div className="col-md-6 col-xs-6 main-choice-cont-tr " />
              </div>
              <div className="row trail-cards-row-tr">
                <div className="trail-cards-tr">
                  <Slider {...settings}>
                    {this.state.selectedCategory !== "all" &&
                    this.state.selectedCategory !== "new" &&
                    this.state.selectedCategory !== "popular"
                      ? this.state.data_trailer
                          .filter((item) => item.category === this.state.selectedCategory)
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
                      : this.state.selectedCategory !== "all"
                      ? this.state.data_trailer
                          .filter((item) => item.genre === this.state.selectedCategory)
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
                      : this.state.data_trailer.map(
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
                        )}
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

export default Trailer
