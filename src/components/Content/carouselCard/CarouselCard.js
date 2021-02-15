import React from 'react';
import classes from './CarouselCard.module.scss';
import { Star } from 'react-ionicons'

const carouselCard = props => (
    <div className={classes.CarouselCard}>
        <div className={classes.Product}>
            <div className={classes.ProductImage}></div>
            <div className={classes.ProductName}>
                <h3>{props.productDescription}</h3>
                <p>{props.foodCourse}</p>
            </div>
        </div>
        <div className={classes.Review}>
            <p>{props.review}</p>
        </div>
        <div className={classes.Customer}>
            <div className={classes.CustomerImage}></div>
            <div className={classes.CustomerDetails}>
                <h3>{props.customerName}</h3>
                <p>{props.customerOccupation}</p>
            </div>
            <div className={classes.Ratings}>
                <Star
                    color={'#FF7A00'} 
                    title={"ratingIcon"}
                    height="2.5rem"
                    width="2.8rem"
                />
                <p>{props.ratingValue}</p>
            </div>
        </div>
    </div>
);

export default carouselCard;