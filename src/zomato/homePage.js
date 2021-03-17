import React from 'react';
import Header from './homeHeader';
import homeBanner from '../images/zomato.jpg';

export default class Home extends React.PureComponent {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Header/>
                <h6 style={{fontSize:"40px", fontFamily: "Times New Roman", color: "GrayText"}}>Discover the best food and drinks</h6>
                <img src={homeBanner} style={{width: "60%"}}/>
            </div>
        );
    }
}
