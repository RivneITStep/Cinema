import React, { Component } from 'react';
import './Home.css';
import { Link } from "react-router-dom";
//import Pagination from 'react-paginate';
class Home extends Component {
    state = {
        isShowModal: false,
    }
    componentDidMount() {
    }
    redirectToAddUser = (e) => {
        const { history } = this.props;
        e.preventDefault();
        console.log('-----перехід на іншу сторінку------');
        history.push('/user/add');
    } 
    render() {
        //console.log($"{u.Id}.{u.UserName} - {u.Email}");
        var Film_names = ['Телохранитель', 'Макс Стіл', 'Исходний код'];
        return (
            <div className="main">
                <div id="container">
                    <div id="container2">
                        <div className="box one">
                            <div>
                                <div className="small" id="web">
                                    <div>
                                        <p align="center">{Film_names[0]}</p>
                                    </div>
                                    <Link className="foto" to="/Application"></Link>
                                    <div>
                                        <p align="center">Год:&nbsp;2010</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box two">
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
                        <div className="box three">
                            <div>
                            <div>
                                <div className="small" id="web">
                                    <div>
                                        <p align="center"> {Film_names[2]}</p>
                                    </div>
                                    <Link className="foto2" to="/film" ></Link>
                                    <div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="box four"><div>тест</div></div>
                        <div className="box two"><div>1</div></div>
                        <div className="box three"><div>2</div></div>
                        <div className="box four"><div>3</div></div>
                        <div className="box two"><div>4</div></div>
                        <div className="box three"><div>5</div></div>
                        <div className="box four"><div>6</div></div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Home;