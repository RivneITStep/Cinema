import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { format } from 'date-fns'
import screenfull from 'screenfull'
import { connect } from "react-redux";
import { Col, Row } from 'react-bootstrap';
import 'bootstrap';

import './reset.css'
import './defaults.css'
import './range.css'
import './App.css'
import './players.css'
import ReactPlayer from '../../Player/ReactPlayer'


class Application extends Component {
    state = {
        url: null,
        pip: false,
        playing: true,
        controls: true,
        light: false,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false
    }
    load = url => {
        this.setState({
            url,
            played: 0,
            loaded: 0,
            pip: false
        })
    }
    playPause = () => {
        this.setState({ playing: !this.state.playing })
    }
    stop = () => {
        this.setState({ url: null, playing: false })
    }
    toggleControls = () => {
        const url = this.state.url
        this.setState({
            controls: !this.state.controls,
            url: null
        }, () => this.load(url))
    }
    toggleLight = () => {
        this.setState({ light: !this.state.light })
    }
    toggleLoop = () => {
        this.setState({ loop: !this.state.loop })
    }
    setVolume = e => {
        this.setState({ volume: parseFloat(e.target.value) })
    }
    toggleMuted = () => {
        this.setState({ muted: !this.state.muted })
    }
    setPlaybackRate = e => {
        this.setState({ playbackRate: parseFloat(e.target.value) })
    }
    togglePIP = () => {
        this.setState({ pip: !this.state.pip })
    }
    onPlay = () => {
        console.log('onPlay')
        this.setState({ playing: true })
    }
    onEnablePIP = () => {
        console.log('onEnablePIP')
        this.setState({ pip: true })
    }
    onDisablePIP = () => {
        console.log('onDisablePIP')
        this.setState({ pip: false })
    }
    onPause = () => {
        console.log('onPause')
        this.setState({ playing: false })
    }
    onSeekMouseDown = e => {
        this.setState({ seeking: true })
    }
    onSeekChange = e => {
        this.setState({ played: parseFloat(e.target.value) })
    }
    onSeekMouseUp = e => {
        this.setState({ seeking: false })
        this.player.seekTo(parseFloat(e.target.value))
    }
    onProgress = state => {
        console.log('onProgress', state)

        if (!this.state.seeking) {
            this.setState(state)
        }
    }
    onEnded = () => {
        console.log('onEnded')
        this.setState({ playing: this.state.loop })
    }
    onDuration = (duration) => {
        console.log('onDuration', duration)
        this.setState({ duration })
    }
    onClickFullscreen = () => {
        screenfull.request(findDOMNode(this.player))
    }
    renderLoadButton = (url, label) => {
        return (
            <button onClick={() => this.load(url)}>
                {label}
            </button>
        )
    }
    ref = player => {
        this.player = player
    }
      ///////для коментів/////
    state = {
        comments: [],
        form: {
            name: '',
            comment: ''
        }
    }

    componentDidMount() {

        if (localStorage.getItem('state')) {

            this.setState({ ...JSON.parse(localStorage.getItem('state')) })

        }

    }

    addComment = () => {
        this.setState({
            comments: [
                ...this.state.comments,
                {
                    id: this.state.comments.length ? this.state.comments.reduce((p, c) => p.id > c.id ? p : c).id + 1 : 1, // max id +1
                    name: this.state.form.name,
                    comment: this.state.form.comment,
                    date: new Date()
                }
            ],
            form: {
                name: '',
                comment: ''
            }
        }, () => localStorage.setItem('state', JSON.stringify(this.state)))
    }

    removeComment = (id) => {
        this.setState({
            comments: this.state.comments.filter(comment => comment.id !== id)
        }, () => localStorage.setItem('state', JSON.stringify(this.state)))
    }

    handleChange = (e) => {
        console.log(e.target.name)
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }
    render() {
        const { url, playing, controls, light, volume, muted, loop, playbackRate, pip } = this.state
        const { user } = this.props.auth;
        return (
            <section className='section'>
                <Row>
                    <h5 className="mt-0" id='filmtext'>Макс Стіл</h5>
                    <div className="media mt-5" id="photo">
                        <a className="pr-3" >
                            <p className="form_image" > </p>
                        </a>
                        <div className="media-body">
                        <h5 className="mt-0" id='text_g'>
                                Название:&nbsp;Max&nbsp;Steel
                                <br /><br />
                                Год&nbsp;выхода:&nbsp;2016
                                <br /><br />
                                Актеры:&nbsp;Бен&nbsp;Уинчелл,Джош&nbsp;Бренер,Мария&nbsp;Белло,
                                Энди&nbsp;Гарсиа,Ана&nbsp;Вийафанья
                                Режиссер:&nbsp;Стюарт&nbsp;Хендлер
                                <br /><br />
                                Страна:&nbsp;Великобритания,&nbsp;США
                                <br /><br />
                                Жанр:&nbsp;Фильмы,&nbsp;Боевики,&nbsp;Приключения,
                                Семейные,&nbsp;Фантастика,&nbsp;Фэнтези
                                </h5>
                            <br></br>
                            <h5 className="mt-0"id='text_g'>южет данной картины закручен вокруг необычного подростка по имени Макс МакГрат. Главный герой "Макса Стила" однажды обнаруживает за собой уникальную способность генерировать мощную энергию, которая является неповторимой в своем роде во всей Вселенной.
                                Подросток вынужден встретиться с единственным существом, способным совладать с такой мощной энергией — таинственным техноорганическим инопланетянином по имени Стил. Эта встреча кардинальным образом изменит жизнь не только нашего мальчика-подростка, но и возможно всего человечества.
                            </h5>
                        </div>
                        <div className="col-3 right">
                            <div className="aside">
                                <div className="embed-responsive embed-responsive-4by3">
                                    <iframe title="asd" className="embed-responsive-item" src="//www.youtube.com/embed/WGrRbrRB51c"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Row>
                    <Row>
                        <div className='player-wrapper'>
                            <div className="module-button-hide">
                                <input id="button" type="checkbox" />
                                <label className="center" onClick={() => this.setState({ url: 'https://www.youtube.com/watch?v=TqrgAM_8FvA' })} htmlFor="button">► Начать просмотр</label>
                            </div>
                            <ReactPlayer
                                ref={this.ref}
                                className='react-player'
                                width='100%'
                                height='100%'
                                url={url}
                                pip={pip}
                                playing={playing}
                                controls={controls}
                                light={light}
                                loop={loop}
                                playbackRate={playbackRate}
                                volume={volume}
                                muted={muted}
                                onReady={() => console.log('onReady')}
                                onStart={() => console.log('onStart')}
                                onPlay={this.onPlay}
                                onEnablePIP={this.onEnablePIP}
                                onDisablePIP={this.onDisablePIP}
                                onPause={this.onPause}
                                onBuffer={() => console.log('onBuffer')}
                                onSeek={e => console.log('onSeek', e)}
                                onEnded={this.onEnded}
                                onError={e => console.log('onError', e)}
                                onProgress={this.onProgress}
                                onDuration={this.onDuration}
                            />
                        </div>
                    </Row>
                    <Row>
                        <div>
                            <div className="App">
                                <textarea className="textarea"
                                    placeholder="Текст коментария"
                                    name="comment"
                                    value={this.state.form.comment}
                                    onChange={this.handleChange}>
                                </textarea>
                                <br/>
                                <button className="addComment" onClick={this.addComment}>Отправить</button>
                                {this.state.comments.map(comment => <div className="CommentPlace" key={comment.id}>
                                <span className="comment">{user.name}</span>
                                <br></br>
                                <span className="comment" style={{ fontStyle: 'Calibri' }}>{format(comment.date, 'DD/MMM/YYYY/HH:mm:ss')}</span>
                                <br></br>
                                <span className="comment">{comment.comment}</span>
                                </div>)}
                            </div>
                        </div>
                    </Row>
                <div>
                    <footer className="footer" >Новые сериалы на CiNeMa
                    Зарубежные сериалы,филмы становятся неотъемлемой частью жизни современного человека. Они являются культурным феноменом и отражены в шутках, мемах, фанатском творчестве, а их персонажей можно встретить на билбордах и в рекламе. Быть сериаломаном в наши дни не только интересно, но и полезно, ведь в таком случае ты всегда сможешь обсудить популярный сериал с друзьями и коллегами.
                    Именно поэтому наша команда ежедневно проверяет все русскоязычные ресурсы и добавляет свежие эпизоды по мере их выхода. Специально для вас мы следим за качеством контента, стараясь сделать ваше пребывание на сайте максимально комфортным. Для этого используется самый быстрый и удобный плеер, который позволяет просматривать сериалы в HD. Релизы отличаются от самых оперативных, одноголосых или двухголосых, до самых профессиональных. Некоторые сериалы имеют официальный многоголосый дубляж от студий. У нас вы найдете озвучки LostFilm, ColdFilm, BaibaKo.tv, NewStudio, Кубик в Кубе, AlexFilm, Jaskier, Амедиа, Кураж-Бамбей, Sunshine Studio, Netflix и множество других релиз-групп, а также сериалы в оригинале и субтитры на русском и английском языках.
                    А главное, вы можете не только посмотреть любимые сериалы онлайн.Все дороги ведут на CiNeMa— лучшие сериалы в жанре драма, комедия, ситком, детектив, романтика, криминал, триллер, ужасы, ромком, подростковые сериалы и многое другое. Смотрите новые сериалы 2019 года в свободном доступе без блокировок — только в хорошем качестве и с самой топовой озвучкой!</footer>
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => {
    return {
            auth: state.auth
        };
    }
export default connect(mapStateToProps)(Application)