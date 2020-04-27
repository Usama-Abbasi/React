import React from 'react';
import {Card,CardBody,CardImg,CardImgOverlay,CardText,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../Shared/baseUrl';
// class Menu extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             selectedDish:null
//             }
//     }
//     onDishSelected(dish){
//          this.setState({selectedDish:dish});
//     }
    
//     render(){
//         const menu=this.props.dishes.map((dish)=>{
//             return(
//                 <div key={dish.id} className="col-12 col-md-5 m-1">
//                     <Card onClick={()=>this.onDishSelected(dish)}>
                        
//                             <CardImg  width="100%" src={dish.image} alt={dish.name}/>
//                             <CardImgOverlay>
//                                 <CardTitle>{dish.name}</CardTitle>
//                             </CardImgOverlay>
                    
//                     </Card>
//                 </div>
//             );
//         });
//         return(
//             <div className="container">
//                 <div className="row">
//                     {menu}
//                 </div>
                
//                <DishDetail dish={this.state.selectedDish}/>
//             </div>

//         );
//     }
// }
// export default Menu;

    function RenderMenuItem({dish,onClick}){
        return(
            <Link to={`/menu/${dish.id}`}>
        <Card>
        <CardImg width="100%" src={baseUrl+dish.image} alt={dish.name}/>
        <CardImgOverlay>
           <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
    </Card>
    </Link>
        );
    }  

    const Menu=(props)=>{
        const menu=props.dishes.dishes.map(dish=>{
            return(
              <div key={dish.id} className="col-12 col-md-5 m-1">
                  <RenderMenuItem dish={dish} />
              </div>
            );
         });
         if (props.dishes.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.dishes.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.dishes.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else
         return(
             <div className="container">
                 <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
                 <div className="row">
                     {menu}
                 </div>
                 
             </div>
         );
        
 
    }

           
export default Menu;

