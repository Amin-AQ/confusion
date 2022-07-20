import React, {Component} from "react";
import {Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import DishDetails from "./DishDetalComponent";
class Menu extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            selectedDish: null
        }
    }
    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }
    renderDish(dish){
        if(this.state.selectedDish!=null){
            return (
                <DishDetails sdish={dish} scomments={dish.comments} />
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
    render()
    {
         // "col-12 mt-5" 
        const menu=this.props.dishes.map((dish) => {   
                return (
                     <div key={dish.id} className="col-12 col-md-5 m-1">   
                        <Card onClick={() => this.onDishSelect(dish)}>
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
                {this.renderDish(this.state.selectedDish)}
            </div>

        );
    }
}

export default Menu;