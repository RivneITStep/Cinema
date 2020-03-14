import React, { Component } from 'react';
import './Home.css';
import { Link } from "react-router-dom";
//import $ from "jquery";
import Add_film from '../Add_Films/Add_film';
// const menu = [
//     {
//       link: '',
//       label: ''
//     },
//     {
//       link: '',
//       label: ''
//     },
//     {
//       link: '',
//       label: ''
//     }
//   ];
class Home extends Component {
    state = {
        isShowModal: false,
    }
    redirectToAddUser = (e) => {
        const { history } = this.props;
        e.preventDefault();
        console.log('-----перехід на іншу сторінку------');
        history.push('/user/add');
    } 
    
    render() {
        var Film_names = ['Телохранитель', 'Макс Стіл', 'Исходний код'];
        return (
            <div className="main">
                 {/* < Add_film items={menu} /> */}
                <div id="container">
                    <div id="container2">
                        <div className="box">
                            <div>
                                <div className="small" id="web">
                                    <div>
                                        <p align="center">{Film_names[0]}</p>
                                    </div>
                                    <Link className="foto" to="/app_film"></Link>
                                    <div>
                                        <p align="center">Год:&nbsp;2010</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <div className="small" id="web">
                                    <div>
                                    <p align="center">{Film_names[1]}</p>
                                    </div>
                                    <Link className="foto1" to="/film" ></Link>
                                    <div>
                                        <p align="center"> Год:&nbsp;2016</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                            <div>
                                <div className="small" id="web">
                                    <div>
                                        <p align="center"> {Film_names[2]}</p>
                                    </div>
                                    <Link className="foto2" to="/film_asd" ></Link>
                                    <div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="box"><div>тест</div></div>
                        <div className="box"><div>1</div></div>
                        <div className="box"><div>2</div></div>
                        <div className="box"><div>3</div></div>
                        <div className="box"><div>4</div></div>
                        <div className="box"><div>5</div></div>
                        <div className="box"><div>6</div></div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Home;