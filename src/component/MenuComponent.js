import React from 'react';
import {Card,CardBody,CardImg,CardImgOverlay,CardText,CardTitle} from 'reactstrap';


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
            <Card onClick={()=>onClick(dish.id)}>
        <CardImg width="100%" src={dish.image} alt={dish.name}/>
        <CardImgOverlay>
           <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
    </Card>
        );
    }  

    const Menu=(props)=>{
        const menu=props.dishes.map(dish=>{
            return(
              <div key={dish.id} className="col-12 col-md-5 m-1">
                  <RenderMenuItem dish={dish} />
              </div>
            );
         });
         return(
             <div className="container">
                 <div className="row">
                     {menu}
                 </div>
                 
             </div>
         );
 
    }

           
export default Menu;

