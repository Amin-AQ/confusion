import React, {Component} from "react";
import {Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Menu extends Component
{
    constructor(props)
    {
        super(props);
    }
    
   
    render()
    {
         // "col-12 mt-5" 
        const menu=this.props.dishes.map((dish) => {   
                return (
                     <div key={dish.id} className="col-12 col-md-5 m-1">   
                        <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
                            <CardImg object src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle heading>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                );
            });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>

        );
    }
}

export default Menu;