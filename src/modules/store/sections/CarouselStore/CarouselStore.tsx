import './CarouselStore.scss';
// import imagen1 from '@/assets/images/image1.jpg'
// import imagen2 from '@/assets/images/image2.jpg'
// import imagen3 from '@/assets/images/image3.jpg'
// import imagen4 from '@/assets/images/image4.jpg'
import nueva_imagen1 from '@/assets/images/nueva_imagen1.jpg'
import nueva_imagen2 from '@/assets/images/nueva_imagen2.jpg'
import nueva_imagen3 from '@/assets/images/nueva_imagen3.jpg'
import { Swiper,SwiperSlide } from 'swiper/react';
import { Navigation,Pagination,Autoplay} from "swiper/modules";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export const CarouselStore = () => {


  // const [images, setImages] = useState([
  //   imagen1,imagen2,imagen3,imagen4
  // ]);
 
  const img= [
    nueva_imagen1,nueva_imagen2,nueva_imagen3
  ]
  return (
    <Swiper
      modules={[Navigation,Pagination,Autoplay]}
      navigation
      pagination={{clickable:true}}
      slidesPerView={1}
      autoplay={true}
    >
      {
        img.map((image,index)=>(
          <SwiperSlide key={index}>
            <img src={image} className='slider-img' />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};
