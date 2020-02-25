import React, { Component } from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import $ from "jquery";
import { ReactBootstrap } from 'bootstrap';
//import Pagination from 'react-paginate';
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
        //Pagination
//         const Pagination = ReactBootstrap.Pagination;
// const options = {
//   apiURL: "https://pogoda.ngs.ru/api/v1/cities/",
//   numPerPages: 10
// }

// Object.defineProperty(Array.prototype, 'chunk', {
//     value: function(chunkSize) {
//         var R = [];
//         for (var i=0; i<this.length; i+=chunkSize)
//             R.push(this.slice(i,i+chunkSize));
//         return R;
//     }
// });

// const CitiesItem = React.createClass({
//   render: function() {    
//     return (<li className="list-group-item">{this.props.citiesName} - {this.props.id}</li>)
//   }
// });

// const CitiesList = React.createClass({  
//   render: function() {    
//     let citiesNodes = this.props.data[this.props.activePage-1].map(function(city) {      
//       return (
//         <CitiesItem citiesName={city.title} key={city.id} id={city.id}>   
//         </CitiesItem>        
//         );      
//     });
//     return (      
//         <ul className="list-group">{citiesNodes}</ul>    
//     );
//   }
// });

// const CitiesPagination = React.createClass({
//     getInitialState() {
//       return {
//         activePage: 1
//       };
//     },
//     handleSelect(event, selectedEvent) {
//       this.setState({activePage:selectedEvent.eventKey});  
//     },  
//     handlePress(isArrowLeft) {     
//       let page = this.state.activePage;
//       if (isArrowLeft) {
//         page = page == 1 ? 1 : --page;       
//       } else {
//         page = page == this.props.itemsCount ? this.props.itemsCount : ++page;        
//       }
//       this.setState({activePage:page});
//     },
//     componentWillMount(){
//       let that = this;
//       key('⌘+left, ctrl+left', function(event, handler){      
//         that.handlePress(true);
//       });
//       key('⌘+right, ctrl+right', function(event, handler){ 
//         that.handlePress(false);      
//        }); 
//     },  
//     render() {    
//       return (
//         <div>
//           <CitiesList data={this.props.data} activePage={this.state.activePage}/>
//           <Pagination
//             prev
//             next        
//             items={this.props.itemsCount}
//             maxButtons={5}
//             activePage={this.state.activePage}
//             onSelect={this.handleSelect} />
//         </div>
//       );
//     }
// });

// const CitiesBox = React.createClass({  
//   getInitialState: function() {
//     return {data: [[]], itemsCount: 0};
//   },
//   componentDidMount: function() {
//     this.serverRequest = $.get(this.props.options.apiURL, function (data) {
//       let res = data.cities.sort((a,b) => {     
//         return a.title > b.title ? 1: -1
//       });  
//       res = res.chunk(this.props.options.numPerPages) 
//       let itemsCount = Math.ceil(data.cities.length/this.props.options.numPerPages);      
//       this.setState({
//         data: res,
//         itemsCount: itemsCount       
//       });    
//     }.bind(this));
//   }, 
//   render: function() {    
//     return (      
//       <div className="container">       
//         <CitiesPagination itemsCount={this.state.itemsCount} data={this.state.data}/>
//       </div>)
//   }
// });
        var Film_names = ['Телохранитель', 'Макс Стіл', 'Исходний код'];
        return (
            <div className="main">
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