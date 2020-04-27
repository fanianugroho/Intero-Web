import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NowShowingPage from './components/views/NowShowing';
import UpcomingPage from './components/views/Upcoming';
import BuyNowPage from './components/views/BuyNow';
import AboutUsPage from './components/views/AboutUs';

const Router = () => {
        return (
            <Switch>
                <Route exact path="/" component={NowShowingPage}/>
                 <Route path="/upcoming" component={UpcomingPage}/> 
                <Route path="/buyNow" component={BuyNowPage}/>
                {/* <Route path="/aboutUs" component={AboutUsPage}/> */}
            </Switch>
        )
    }


export default Router;