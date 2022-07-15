import React, {Component} from "react";
import {Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import Menu from "./MenuComponent";
class DishDetails extends Component
{
    constructor(props){
        super(props);
    }
    renderDish(){
        const ddish=this.props.sdish;
        if(ddish != null)
        {
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg object src={ddish.image} alt={ddish.name} />
                        <CardBody>
                            <CardTitle heading>{ddish.name}</CardTitle>
                            <CardText>{ddish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else
        {
            return (
            <div></div> );
        }
    }
    renderComments(){
        const commentList = this.props.scomments.map((comnt) => {
            return (
                <CardText key={comnt.id}>{comnt.author}<br/>{comnt.comment}<br />{comnt.date}<br/></CardText>
            );
        });
        if(commentList!=null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardBody>
                            <h4>Comments: </h4>
                                {commentList}
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else
        {
            return (
            <div></div> );
        }
    }
    render(){
        return(
            <div className="row">
                {this.renderDish()}
                {this.renderComments()}
            </div>
        );
    }
}

export default DishDetails;