import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import {DISHES} from '../Shared/dishes';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { COMMENTS } from '../Shared/comments';
import { PROMOTIONS } from '../Shared/promotions';
import { LEADERS } from '../Shared/leader';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './AboutComponent';

class  Main extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      comments:COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }
  

  render(){
    const HomePage = () => {
      return(
          <Home 
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
    return(    
      <div>
      <Header/>
      <Switch>
              <Route path='/home' component={HomePage} />
              <Route path='/aboutus' component={()=><About leaders={this.state.leaders}/>}/>
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route path='/contactus' component={Contact}/>
              <Redirect to="/home" />
          </Switch>
      <Footer/>
    </div>
   );
 }
}

export default Main;
