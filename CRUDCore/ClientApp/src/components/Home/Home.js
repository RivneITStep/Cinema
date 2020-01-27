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
                        <div class="box one">
                            <div>
                                <div class="small" id="web">
                                    <div>
                                        <p align="center">{Film_names[0]}</p>
                                    </div>
                                    <Link className="foto" to="/Application" ></Link>
                                    <div>
                                        <p align="center">Год:&nbsp;2010</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box two">
                            <div>
                                <div class="small" id="web">
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
                        <div class="box three">
                            <div>
                            <div>
                                <div class="small" id="web">
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
                        <div class="box four"><div>тест</div></div>
                        <div class="box two"><div>1</div></div>
                        <div class="box three"><div>2</div></div>
                        <div class="box four"><div>3</div></div>
                        <div class="box two"><div>4</div></div>
                        <div class="box three"><div>5</div></div>
                        <div class="box four"><div>6</div></div>
                    </div>
                </div>
            </div>
            // <div className="main">

            //     <div className="horizontal-scroll-wrapper squares">

            //         <div class="small" id="web">
            //             <div>
            //                 <p>{Film_names[0]}</p>
            //             </div>
            //             <Link className="foto" to="/Application" ></Link>
            //             <div>
            //                 <p>Год:&nbsp;2010</p>
            //             </div>
            //         </div>

            //         <div class="small" id="web">
            //             <div>
            //                 <p>{Film_names[1]}</p>
            //             </div>
            //             <Link className="foto1" to="/film" ></Link>
            //             <div>
            //                 <p>Год:&nbsp;2016</p>
            //             </div>
            //         </div>
            //         <div class="small" id="web">
            //             <div>
            //                 <p>{Film_names[2]}</p>
            //             </div>
            //             <Link className="foto2" to="/film" ></Link>
            //             <div>
            //             </div>
            //         </div>
            //         <div>item 4</div>
            //         <div>item 6</div>
            //         <div>item 7</div>
            //         <div>item 8</div>



            //     <span onclick="window.scroll(0,0);">^^^^</span>
            //     </div>
            // </div>
        );
    }
}



export default Home;