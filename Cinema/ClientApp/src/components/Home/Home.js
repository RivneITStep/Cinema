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
                <div className="horizontal-scroll-wrapper squares">

                    <div class="small_first" id="web">
                        <div>
                            <p>{Film_names[0]}</p>
                        </div>
                        <Link className="foto" to="/Application" ></Link>
                        <div>
                            <p>Год:&nbsp;2010</p>
                        </div>
                    </div>

                    <div class="small" id="web">
                        <div>
                            <p>{Film_names[1]}</p>
                        </div>
                        <Link className="foto1" to="/film" ></Link>
                        <div>
                            <p>Год:&nbsp;2016</p>
                        </div>
                    </div>
                    <div class="small" id="web">
                        <div>
                            <p>{Film_names[2]}</p>
                        </div>
                        <Link className="foto2" to="/film" ></Link>
                        <div>
                        </div>
                    </div>
                    <div>item 4</div>
                    <div>item 6</div>
                    <div>item 7</div>
                    <div>item 8</div>
                </div>
                <span onclick="window.scroll(0,0);">^^^^</span>
            </div>
        );
    }
}



export default Home;