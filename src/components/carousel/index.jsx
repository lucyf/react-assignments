import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


const CarouselComponent = ()=>{
    const [index, setIndex] = useState(0);
      
    const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
    }

    return(
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.imgur.com/VgtSZ3A.png"
                alt="Planners"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.imgur.com/iPtn482.png"
                alt="Articulos de oficina"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.imgur.com/kKhPkxY.png"
                alt="Decoracion"
                />
            </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselComponent;
