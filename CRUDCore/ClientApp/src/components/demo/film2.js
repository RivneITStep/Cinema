import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { hot } from 'react-hot-loader'
import screenfull from 'screenfull'

import './reset.css'
import './defaults.css'
import './range.css'
import './App.css'
import './players.css'

import ReactPlayer from '../../ReactPlayer'


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
                                        <p className="filmtext" >Исходний код</p>
                                        <div className="form_image2" >
                                            <p className="text" >
                                                Год&nbsp;выпуска:&nbsp;2011
                                                Страна:&nbsp;США,&nbsp;Канада
                                                Жанр:&nbsp;фантастика,&nbsp;боевик,&nbsp;триллер,&nbsp;драма
                                                Качество:&nbsp;Full&nbsp;HD&nbsp;1080
                                                Перевод:&nbsp;Дублированный
                                                Продолжительность:&nbsp;01:33
                                                Режиссер:&nbsp;Дункан&nbsp;Джонс
                                                В&nbsp;ролях:&nbsp;Джейк&nbsp;Джилленхол,Мишель&nbsp;Монахэн
                                                Вера&nbsp;Фармига,&nbsp;Джеффри&nbsp;Райт,Майкл&nbsp;Арден
                                                Кэс&nbsp;Анвар,Расселл&nbsp;Питерс,Брент&nbsp;Скэгфорд
                                                Крэйг&nbsp;Томас,Гордон&nbsp;Мастен
                                      </p>
                                        </div>
                                        <p className="text_g">Капитан Колтер Стивенс оказывается в поезде, в теле другого человека – парня по имени Шон Фентресс. Однако прежде чем он понимает что происходит, взрыв бомбы, заложенной в поезде, уничтожает его.
Стивен приходит в себя внутри какой-то капсулы, где с помощью компьютера к нему обращается женщина в военной форме Коллин Гудвин. Она сообщает, что Колтер находится внутри программы «Исходный код», с помощью которой его вселяют в тело человека в последние восемь минут его жизни.
Стивенса раз за разом перемещают в тело другого человека, снова и снова он вынужден переживать чужую смерть, пока не найдет кто и где установил бомбу.</p>                                        {/*class="embed-responsive embed-responsive-4by3"  */}
                                        <div className="left">
                                            <div className="embed-responsive embed-responsive-4by3">
                                                <iframe title="asd" className="embed-responsive-item" src="//www.youtube.com/embed/uoXK_Ikezng"></iframe>
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
                            <label className="center" onClick={() => this.setState({ url: 'https://www.youtube.com/watch?v=V6gufyeSZyU' })} htmlFor="button">► Начать просмотр</label>
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
                    </div>\
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