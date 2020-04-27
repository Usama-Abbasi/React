import React,{Component} from 'react';
import {Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle,BreadcrumbItem,Breadcrumb, Row,Col} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {Button,Modal,ModalHeader,ModalBody,Form,FormGroup,Label ,Input} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../Shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
class CommentForm extends Component{
    constructor(props){
        super(props)
        this.state={
            isModalOpen:false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
          });
        }
        handleSubmit(values) {
            //console.log('Current State is: ' + JSON.stringify(values));
            //alert('Current State is: ' + JSON.stringify(values));
            this.props.postComment(this.props.dishId, values.rating, values.name, values.message);
            // event.preventDefault();
        }
       
    render(){
        
        return(
            <>
            <Button outline onClick={this.toggleModal}>
            <span className="fa fa-pencil fa-lg"></span>Submit Comment
           </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
       <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group ">
                <Label htmlFor="rating" md={2}>Rating</Label>
                <Col md={12}>
                <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </Control.select>
                                    </Col>
                </Row>
                <Row className="form-group ">
                    <Label htmlFor="name" md={6}>Your Name</Label>
                    <Col md={12}>
                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}/>
                                         <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                     </Col>
                </Row>
                <Row className="form-group ">
                <Label htmlFor="name" md={2}>Comment</Label>
                <Col md={12}>
                <Control.textarea model=".message" id="message" name="message"
                                        rows="10"
                                        className="form-control" />
                                        
                                        </Col>                     
                </Row>
                <Row className="form-group ">
                                <Col md={12}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                    </Col>   
                            </Row>
            </LocalForm>
       </ModalBody>
       </Modal>
    </>
        );
    }
}

    function RenderDish({dish}){
        let details;
        if(dish!=null){
            details=
            <div>
                <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                    <Card>
                    <CardImg width='100%' src={baseUrl+dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>

                </Card>
                </FadeTransform>
                </div>
        }
        else{
            details=    <div></div>
        }
        return details;
    }
        
    

    function RenderComment({comments,postComment,dishId}){
        if(comments!=null){
         
            const coms=comments.map((comment)=>{
                return (
                    <Fade in >
                    <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </li> 
                </Fade>  
                )
            });
            
    
            return (
                    <div>
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>{coms}</ul>
                    <CommentForm dishId={dishId} postComment={postComment}/>
                    </div>
                    
            )
            }
            else{
                return <div></div>;
            }
    }
        
    


    const DishDetail=(props)=>{
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if(props.dish!=null){ 
            
            return (<div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
            <div className='row'>  
                        <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                        </div>
                        
                        <div className="col-12 col-md-5 m-1">
                            <RenderComment comments={props.comments}
                            postComment={props.postComment}
                            dishId={props.dish.id}/>
                        </div>
                        </div>
                        </div>
                    );
    }
    else{
        return(<div></div>);
    }   
    }
       
    


export default DishDetail;
