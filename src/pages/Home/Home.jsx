import Carousel, { CarouselItem } from "../../components/CarouselHome/Carousel";
import Herohome from "../../components/Herohome/Herohome";
import fullImage from "../../assets/images/home_full-width.jpeg";

function Home() {
  return (
    <>
      <Herohome />
      <Carousel>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel>
      <img src={fullImage} alt="pirinexus" />
    </>
  );
}

export default Home;
