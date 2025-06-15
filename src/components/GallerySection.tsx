import React from 'react';
import Slider from 'react-slick';

const GallerySection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const photos = [
    { id: 1, src: 'https://via.placeholder.com/400x300', title: 'Evento 1' },
    { id: 2, src: 'https://via.placeholder.com/400x300', title: 'Evento 2' },
    { id: 3, src: 'https://via.placeholder.com/400x300', title: 'Evento 3' },
  ];

  return (
    <section id="gallery" className="bg-gray-100 py-12 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Galeria de Eventos</h2>
        <Slider {...settings}>
          {photos.map((photo) => (
            <div key={photo.id} className="px-2">
              <div className="relative">
                <img src={photo.src} alt={photo.title} className="w-full h-64 object-cover rounded-lg" />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white text-lg font-semibold">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default GallerySection;