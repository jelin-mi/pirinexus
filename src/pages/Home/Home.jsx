import Carousel, { CarouselItem } from "../../components/CarouselHome/Carousel";
import Herohome from "../../components/Herohome/Herohome";
import fullImage from "../../assets/images/home_full-width.jpeg";

function Home() {
  return (
    <>
      <Herohome />
      <Carousel>
        <CarouselItem>
          <div className="item">
            <h3>Ruta 1</h3>
            <img src={fullImage} alt='ruta' />
          </div>
          
        </CarouselItem>
        <CarouselItem>Ruta 2</CarouselItem>
        <CarouselItem>Ruta 3</CarouselItem>
      </Carousel>
      <img src={fullImage} alt="pirinexus" />
    </>
  );
}

export default Home;
