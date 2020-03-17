import React, { Component } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { connect } from "react-redux";
import './userprofile.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import classnames from 'classnames';
import 'cropperjs/dist/cropper.css';
import Cropper from 'react-cropper';
import ImageMapper from 'react-image-mapper';
class userprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: null,
      src: '',
      isCropped: false,
    };
  }
  onSubmitForm = (e) => {
    e.preventDefault();
    const model = {
      name: this.state.name,
      image: this.state.image
    };

    axios.post('https://localhost:44368/api/add-base64', model)
      .then(
        (resp) => {
          console.log('--success post--', resp.data);
          this.props.history.push('/user');
        },
        (err) => {
          console.log('--err problem---', err);
        }
      );
  }

  onChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);

  }

  onSelectImage = () => {
    console.log('-------Upload image--------');
    this.inputFileElement.click();
  }
  onChangeSelecFile = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    if (files && files[0]) {
      if (files[0].type.match(/^image\//)) {
        const reader = new FileReader();
        reader.onload = () => {
          this.setState({ src: reader.result, isCropped: true });

        };
        reader.readAsDataURL(files[0]);
      }
      else {
        alert("Невірний тип файлу");
      }
    }
    else {
      alert("Будь ласка виберіть файл");
    }

  }
  onCloseCropper = (e) => {
    e.preventDefault();
    this.setState({ isCropped: false });
    console.log('----submit form---');


  }
  onChangeAngleCropperLeft = (e) => {
    e.preventDefault();
    this.setState({ isCropped: false });
  }
  onChangeAngleCropperRight = (e) => {
    e.preventDefault();
    this.setState({ isCropped: false });
  }

  cropImage = (e) => {
    e.preventDefault();
    if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
      return;
    }
    this.setState({
      image: this.cropper.getCroppedCanvas().toDataURL(),
      isCropped: false,
    });
  }
  render() {
    const { user } = this.props.auth;
    const { image, src, isCropped } = this.state;
    const imgDef = image !== null ? image : 'https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg';
    return (
      <div className="wrap">
        <div className="col">
          <div className="main">
            <div className="login_text">
              <div className="form-group" >
                <p className="cab"
                  onClick={this.onSelectImage}
                  src={imgDef} />
                <input ref={input => this.inputFileElement = input}
                  type="file"
                  onChange={this.onChangeSelecFile}
                  className="d-none" />
              </div>
              <p className="cabtext">Имя: {user.name} <br />Почта: {user.email}</p>
              <React.Fragment>
                <div className={classnames('croppermodal', { 'open': isCropped })}>
                  <div className="container">
                    <div className="row" style={{ marginTop: '100px' }}>
                      <div className="col-md-8">
                        <Cropper
                          style={{ height: 500, width: '300%' }}
                          aspectRatio={1 / 1}
                          guides={false}
                          viewMode={1}
                          preview=".img-preview"
                          src={src}
                          ref={cropper => { this.cropper = cropper; }}
                        />
                      </div>
                      <div className="col-md-4">
                        <div>
                          <div className="box" style={{ width: '350%' }}>
                            <button className="btn btn-success" onClick={this.cropImage}>Обрізати фото</button>
                            <button className="btn btn-danger" onClick={this.onCloseCropper}>Закрити</button>
                            <button className="btn btn-info" onClick={this.onChangeAngleCropperLeft}>↺</button>
                            <button className="btn btn-info" onClick={this.onChangeAngleCropperRight}>↻</button>
                            <br />
                            <div style={{ marginTop: 20 }}>
                              <div className="img-preview" style={{ height: 300 }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            </div>
            <hr/>
            <div className="contain">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link active">Любимые</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Смотреть позже</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Не нравятся</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
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