import React, { Component } from "react";
import PropTypes from "prop-types";
import ScrollMenu from "react-horizontal-scrolling-menu";
import CarouselCard from '../../components/Content/carouselCard/CarouselCard';
import './CarouselContainer.css';

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

const MenuItem = ({ comp, selected }) => {
  return <div className={`menu-item ${selected ? "active" : ""}`}>{comp}</div>;
};

export const Menu = (list, selected) =>
  list.map(el => {
    const { name } = el.customerName;

    return (
        <MenuItem 
            comp={
                <CarouselCard 
                    productDescription={el.productDescription}
                    foodCourse={el.foodCourse}
                    review={el.review}
                    customerName={el.customerName}
                    customerOccupation={el.customerOccupation}
                    ratingValue={el.ratingValue}
                />
            } 
            key={name} 
            selected={selected} 
        />
    );
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};
Arrow.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};

export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

class App extends Component {
  state = {
    alignCenter: true,
    clickWhenDrag: false,
    dragging: true,
    hideArrows: true,
    hideSingleArrow: true,
    itemsCount: list.length,
    scrollToSelected: false,
    selected: "item1",
    translate: 0,
    transition: 0.3,
    wheel: true
  };

  constructor(props) {
    super(props);
    this.menu = null;
    this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
  }

  onFirstItemVisible = () => {
    console.log("first item is visible");
  };

  onLastItemVisible = () => {
    console.log("last item is visible");

    const newItems = Array(5)
      .fill(1)
      .map((el, ind) => ({ name: `item${list.length + ind + 1}` }));
    list = list.concat(newItems);
    this.menuItems = Menu(list, list.slice(-1)[0].name);
    this.setState({
      itemsCount: list.length,
      selected: this.state.selected
    });
  };

  onUpdate = ({ translate }) => {
    console.log(`onUpdate: translate: ${translate}`);
    this.setState({ translate });
  };

  onSelect = key => {
    console.log(`onSelect: ${key}`);
    this.setState({ selected: key });
  };

  componentDidUpdate(prevProps, prevState) {
    const { alignCenter } = prevState;
    const { alignCenter: alignCenterNew } = this.state;
    if (alignCenter !== alignCenterNew) {
      this.menu.setInitial();
    }
  }

  setItemsCount = ev => {
    const { itemsCount = list.length, selected } = this.state;
    const val = +ev.target.value;
    const itemsCountNew =
      !isNaN(val) && val <= list.length && val >= 0
        ? +ev.target.value
        : list.length;
    const itemsCountChanged = itemsCount !== itemsCountNew;

    if (itemsCountChanged) {
      this.menuItems = Menu(list.slice(0, itemsCountNew), selected);
      this.setState({
        itemsCount: itemsCountNew
      });
    }
  };

  setSelected = ev => {
    const { value } = ev.target;
    this.setState({ selected: String(value) });
  };

  render() {
    const {
      alignCenter,
      clickWhenDrag,
      hideArrows,
      dragging,
      hideSingleArrow,
      itemsCount,
      scrollToSelected,
      selected,
      translate,
      transition,
      wheel
    } = this.state;

    const menu = this.menuItems;

    const checkboxStyle = {
      margin: "5px 10px"
    };
    const valueStyle = {
      margin: "5px 10px",
      display: "inline-block"
    };

    return (
      <div className="App">

        <ScrollMenu
          alignCenter={alignCenter}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          clickWhenDrag={clickWhenDrag}
          data={menu}
          dragging={dragging}
          hideArrows={hideArrows}
          hideSingleArrow={hideSingleArrow}
          onFirstItemVisible={this.onFirstItemVisible}
          onLastItemVisible={this.onLastItemVisible}
          onSelect={this.onSelect}
          onUpdate={this.onUpdate}
          ref={el => (this.menu = el)}
          scrollToSelected={scrollToSelected}
          selected={selected}
          transition={+transition}
          translate={translate}
          wheel={wheel}
        />


      </div>
    );
  }
}

export default App;
