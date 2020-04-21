import React, {Component} from 'react';
import {Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';


class DishDetail extends Component{

    constructor(props){
        super(props);

    }

    renderDish(dish){
        let details;
        if(dish!=null){
            details=
            <div>
                    <Card>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>

                </Card>
                </div>
        }
        else{
            details=    <div></div>
        }
        return details;
    }

    renderComment(comments){
        if(comments!=null){
        const coms=comments.map((comment)=>{
            return (
                
                <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>-- {comment.author}, {comment.date}</p>
            </li>   
            )
        });

        return (
                <div>
                <h4>Comments</h4>
                <ul className='list-unstyled'>{coms}</ul>
                </div>
        )
        }
        else{
            return <div></div>;
        }
    }


    render(){
        if(this.props.dish!=null)
    {        return (<div className='row'>  
                        <div className="col-12 col-md-5 m-1">
                            { this.renderDish(this.props.dish)}
                        </div>
                        
                        <div className="col-12 col-md-5 m-1">
                            { this.renderComment(this.props.dish.comments) }
                        </div>
                        </div>
                    );
    }
    else{
        return(<div></div>);
    }   
    }
}

export default DishDetail;
