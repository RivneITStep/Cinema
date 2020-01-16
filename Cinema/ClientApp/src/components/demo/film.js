import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { hot } from 'react-hot-loader'
import screenfull from 'screenfull'

import './reset.css'
import './defaults.css'
import './range.css'
import './App.css'
import './players.css'
import '../Home/Home.css'
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

    render() {
        const { url, playing, controls, light, volume, muted, loop, playbackRate, pip } = this.state


        return (


            <div className='app'>

                <section className='section'>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <form>
                                        <p className="filmtext" >Макс Стіл</p>
                                        <div className="form_image" >
                                            <p className="text" >
                                                Название:&nbsp;Max&nbsp;Steel
                                                <br/><br/>
                                                Год&nbsp;выхода:&nbsp;2016
                                                <br/><br/>
                                                Актеры:&nbsp;Бен&nbsp;Уинчелл,Джош&nbsp;Бренер,Мария&nbsp;Белло,
                                                Энди&nbsp;Гарсиа,Ана&nbsp;Вийафанья
                                                Режиссер:&nbsp;Стюарт&nbsp;Хендлер
                                                <br/><br/>
                                                Страна:&nbsp;Великобритания,&nbsp;США
                                                <br/><br/>
                                                Жанр:&nbsp;Фильмы,&nbsp;Боевики,&nbsp;Приключения,
                                                Семейные,&nbsp;Фантастика,&nbsp;Фэнтези
                                                <br/><br/>
                                      </p>
                                        </div>
                                        <p className="text_g">Сюжет данной картины закручен вокруг необычного подростка по имени Макс МакГрат. Главный герой "Макса Стила" однажды обнаруживает за собой уникальную способность генерировать мощную энергию, которая является неповторимой в своем роде во всей Вселенной.
Подросток вынужден встретиться с единственным существом, способным совладать с такой мощной энергией — таинственным техноорганическим инопланетянином по имени Стил. Эта встреча кардинальным образом изменит жизнь не только нашего мальчика-подростка, но и возможно всего человечества.</p>
                                        {/*class="embed-responsive embed-responsive-4by3"  */}
                                        <div className="left">
                                            <div className="embed-responsive embed-responsive-4by3">
                                                <iframe title="asd" className="embed-responsive-item" src="//www.youtube.com/embed/kmX3c6hfDbI"></iframe>
                                            </div>
                                        </div>
                                        <br /><br /><br /><br />

                                    </form>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='player-wrapper'>
                         <div className="module-button-hide">
              <input id="button" type="checkbox" />
              <label className="center"  onClick={() => this.setState({ url: 'https://www.youtube.com/watch?v=TqrgAM_8FvA' })} htmlFor="button">► Начать просмотр</label>
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
                    <div>
                    <footer className="footer" >Новые сериалы на CiNeMa
                    Зарубежные сериалы,филмы становятся неотъемлемой частью жизни современного человека. Они являются культурным феноменом и отражены в шутках, мемах, фанатском творчестве, а их персонажей можно встретить на билбордах и в рекламе. Быть сериаломаном в наши дни не только интересно, но и полезно, ведь в таком случае ты всегда сможешь обсудить популярный сериал с друзьями и коллегами.

                    Именно поэтому наша команда ежедневно проверяет все русскоязычные ресурсы и добавляет свежие эпизоды по мере их выхода. Специально для вас мы следим за качеством контента, стараясь сделать ваше пребывание на сайте максимально комфортным. Для этого используется самый быстрый и удобный плеер, который позволяет просматривать сериалы в HD. Релизы отличаются от самых оперативных, одноголосых или двухголосых, до самых профессиональных. Некоторые сериалы имеют официальный многоголосый дубляж от студий. У нас вы найдете озвучки LostFilm, ColdFilm, BaibaKo.tv, NewStudio, Кубик в Кубе, AlexFilm, Jaskier, Амедиа, Кураж-Бамбей, Sunshine Studio, Netflix и множество других релиз-групп, а также сериалы в оригинале и субтитры на русском и английском языках.

                А главное, вы можете не только посмотреть любимые сериалы онлайн.Все дороги ведут на CiNeMa— лучшие сериалы в жанре драма, комедия, ситком, детектив, романтика, криминал, триллер, ужасы, ромком, подростковые сериалы и многое другое. Смотрите новые сериалы 2019 года в свободном доступе без блокировок — только в хорошем качестве и с самой топовой озвучкой!</footer>
                </div> 
        </section>
                <section className='section'>
                    <table>
                        <tbody>

                            <tr>

                                <td>
                                    {/* {this.renderLoadButton('https://www.youtube.com/watch?v=tInCbMNqRxo', 'start')} */}

                                </td>
                            </tr>
                            <tr>
                                {/* <th>Custom URL</th>
                                <td>
                                    <input ref={input => { this.urlInput = input }} type='text' placeholder='Enter URL' />
                                    <button onClick={() => this.setState({ url: 'https://www.youtube.com/watch?v=TqrgAM_8FvA' })}>Load</button>
                                </td> */}
                            </tr>
                        </tbody>
                    </table>

                </section>

            </div>
        )
    }
}

export default hot(module)(Application)