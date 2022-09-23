import React, {Component} from "react";
import {Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

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
        var commentList = this.props.sdish.comments.map((comnt) => {
            return (
                <CardText key={comnt.id}>
                    {comnt.author}<br />
                    {comnt.comment}<br /> 
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comnt.date)))} 
                    <br />
                </CardText>
            );
        });
        if(commentList!=null) {
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
            <div></div> 
            );
        }
    }
    render(){
        return(
            <div class='container'>
                <div className="row">
                    {this.renderDish()}
                    {this.renderComments()}
                </div>
            </div>
        );
    }
}

export default DishDetails;