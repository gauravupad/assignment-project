import React from 'react';
import Header from './homeHeader';
import homeBanner from '../images/zomato-home.png';

export default class Home extends React.PureComponent {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Header/>
                <img src={homeBanner} />
            </div>
        );
    }
}
