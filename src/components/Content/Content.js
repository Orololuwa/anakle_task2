import React from 'react';
import './Content.css';
import { CalendarClearOutline } from 'react-ionicons';
import CarouselCard from './carouselCard/CarouselCard';
import ScrollMenu from "react-horizontal-scrolling-menu";

const content = (props) => {

    let list = [
        {
          productDescription: "Tuna soup spinach with himalaya salt",
          foodCourse: "MAIN COURSE",
          review: "A very fine addition to the not over plentiful supply of good restaurants in this part of west London.",
          customerName: "Roberto Jr.",
          customerOccupation: "Head Marketing",
          ratingValue: "4.5"
        },
        {
          productDescription: "Chicken curry special with cucumbert",
          foodCourse: "MAIN COURSE",
          review: "Fast, professional and friendly service, we ordered the six course tasting menu and every dish was spectacular",
          customerName: "Jubaedah",
          customerOccupation: "Food Vlogger",
          ratingValue: "4.2"
        },
        {
          productDescription: "Watermelon juice with iceicken curry special with cucumbert",
          foodCourse: "MAIN COURSE",
          review: "This was not just great cooking but exceptional cooking using only the best ingredients.",
          customerName: "Steve Henry",
          customerOccupation: "Internship Students",
          ratingValue: "4.0"
        },
        {
          productDescription: "Meidum Spicy Spagethi Italiano",
          foodCourse: "MAIN COURSE",
          review: "The service was excellent; our waiter was knowledgeable and attentive without being intrusive. ",
          customerName: "Willy Wonca",
          customerOccupation: "Sales Marketing",
          ratingValue: "4.8"
        }
    ];

    const elements = list.map((el, i) => {
        return(
            <CarouselCard 
                productDescription={el.productDescription}
                foodCourse={el.foodCourse}
                review={el.review}
                customerName={el.customerName}
                customerOccupation={el.customerOccupation}
                ratingValue={el.ratingValue}
                key={i}
            />
        );
    })

    const Arrow = ({ text, className }) => {
        return <div className={className}>{text}</div>;
    };

    const ArrowLeft = Arrow({ text: "<", className: "arrowPrev" });
    const ArrowRight = Arrow({ text: ">", className: "arrowNext" });

    return (
        <div className={"Content"}>
            <div className={"titleContainer"}>
                <div className={"title"}>
                    <h2>Reviews</h2>
                    <h3><span>Dashboard/</span> <span>Customer Reviews</span></h3>
                </div>
                <div className={"filterPeriod"}>
                    <CalendarClearOutline
                        color={'#00000'} 
                        title={"filterPeriod"}
                        height="2rem"
                        width="2rem"
                    />
                    <div className={"periodTitle"}>
                        <h3>Filter Periods</h3>
                        <p>4th June 2020 - 4th July 2020</p>
                    </div>
                </div>
            </div>

            <div className={"carouselContainer"}>
                <ScrollMenu
                    alignCenter={false}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    clickWhenDrag={false}
                    data={elements}
                    dragging={true}
                    hideArrows={false}
                    hideSingleArrow={false}
                    scrollToSelected={false}
                    selected={elements[2]}
                    transition={+0.3}
                    translate={0}
                    wheel={true}

                />
            </div>

        </div>
    );
}

export default content;