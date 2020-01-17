import React, { Component } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { connect } from "react-redux";
import './userprofile.css';
import { Link } from "react-router-dom";
class userprofile extends Component {
  state = {}
  render() {
    const { user } = this.props.auth;
    return (
      <div className="wrap">
        <div class="col">
          <div className="main">

            <div className="login_text">

              <p className="cab" ></p>
              <p className="cabtext">Name: {user.name} <br />Email: {user.email}</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div className="side">
            <div className="carousel" data-flickity='{ "groupCells": true }'>
              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}>

                <ButtonBack className="flickity-button-previous">⮘</ButtonBack>
                <Slider>
                  <Slide ><Link className="s1" to="/film" ></Link></Slide>
                  <Slide ><Link className="s2" to="/film" ></Link></Slide>
                  <Slide ><Link className="s3" to="/Application" ></Link></Slide>
                </Slider>

                <ButtonNext className="flickity-button-next">⮚</ButtonNext>
              </CarouselProvider>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps)(userprofile);