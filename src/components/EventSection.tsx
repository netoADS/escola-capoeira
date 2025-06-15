import React from 'react';
import Slider from 'react-slick';

interface Event {
  id: number;
  src: string;
  title: string;
  description: string;
  location: string;
  date: string;
}

interface EventSectionProps {
  onEventClick: (event: Event) => void;
}

const EventSection: React.FC<EventSectionProps> = ({ onEventClick }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const events: Event[] = [
    {
      id: 1,
      src: 'https://via.placeholder.com/400x300',
      title: 'Roda de Capoeira 2025',
      description: 'Uma roda aberta para todos os capoeiristas.',
      location: 'Praça Central, São Paulo',
      date: '10/06/2025, 15:00',
    },
    {
      id: 2,
      src: 'https://via.placeholder.com/400x300',
      title: 'Workshop de Movimentos',
      description: 'Aprenda novos movimentos com mestres renomados.',
      location: 'Academia Capoeira, São Paulo',
      date: '15/06/2025, 10:00',
    },
  ];

  return (
    <section id="events" className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Eventos Futuros</h2>
        <Slider {...settings}>
          {events.map((event) => (
            <div key={event.id} className="px-2">
              <div
                className="relative cursor-pointer"
                onClick={() => onEventClick(event)}
              >
                <img src={event.src} alt={event.title} className="w-full h-64 object-cover rounded-lg" />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white text-lg font-semibold">{event.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default EventSection;