import React, { useState, useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';
import EventSection from '../../components/EventSection';
import GallerySection from '../../components/GallerySection';
import MapContactSection from '../../components/MapContactSection';
import AboutSection from '../../components/AboutSection/AboutSection';

import instrutor from "../../assets/images/instructors/matheusNaresi.jpeg"

interface Event {
  id: number;
  src: string;
  title: string;
  description: string;
  location: string;
  date: string;
}

const instructors = [
  {
    id: 2,
    name: 'Contra Mestre Matheus Naresi',
    photo: instrutor,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const schedule = [
  { time: '10:00 - 11:00', Segunda: 'Adolescentes e Adultos', Terça: '', Quarta: 'Adolescentes e Adultos', Quinta: '', Sexta: '' },
  { time: '17:00 - 18:00', Segunda: '', Terça: 'Crianças (5-10 anos)', Quarta: '', Quinta: 'Crianças (5-10 anos)', Sexta: '' },
  { time: '19:00 - 20:00', Segunda: '', Terça: 'Adolescentes (11-16 anos)', Quarta: '', Quinta: 'Adolescentes (11-16 anos)', Sexta: '' },
  { time: '20:00 - 21:30', Segunda: '', Terça: 'Adultos', Quarta: '', Quinta: 'Adultos', Sexta: '' },
];

const graduationSystem = [
  { cord: 'Verde', level: 'Iniciante', color: '#4CAF50' },
  { cord: 'Verde/Amarelo', level: 'Intermediário', color: 'linear-gradient(45deg, #4CAF50 50%, #FFC107 50%)' },
  { cord: 'Amarelo', level: 'Intermediário', color: '#FFC107' },
  { cord: 'Amarelo/Azul', level: 'Intermediário', color: 'linear-gradient(45deg, #FFC107 50%, #2196F3 50%)' },
  { cord: 'Azul', level: 'Avançado', color: '#2196F3' },
  { cord: 'Verde/Amarelo/Azul', level: 'Professor', color: 'linear-gradient(45deg, #4CAF50 33%, #FFC107 33%, #FFC107 66%, #2196F3 66%)' },
  { cord: 'Verde/Amarelo/Azul/Branco', level: 'Contra Mestre', color: 'linear-gradient(45deg, #4CAF50 25%, #FFC107 25%, #FFC107 50%, #2196F3 50%, #2196F3 75%, #F5F5F5 75%)' },
  { cord: 'Branco/Verde', level: 'Mestre de Primeiro Grau', color: 'linear-gradient(45deg, #F5F5F5 50%, #4CAF50 50%)' },
  { cord: 'Branco/Amarelo', level: 'Mestre de Segundo Grau', color: 'linear-gradient(45deg, #F5F5F5 50%, #FFC107 50%)' },
  { cord: 'Branco/Azul', level: 'Mestre de Terceiro Grau', color: 'linear-gradient(45deg, #F5F5F5 50%, #2196F3 50%)' },
  { cord: 'Branco', level: 'Mestre', color: '#F5F5F5' },
];

const pricing = [
  { plan: 'Crianças', price: 'R$ 129,90/mês', description: 'Aulas para crianças de 5 a 10 anos' },
  { plan: 'Adolescentes', price: 'R$ 129,90/mês', description: 'Aulas para adolescentes de 11 a 16 anos' },
  { plan: 'Adultos', price: 'R$ 129,90/mês', description: 'Aulas para adultos' },
];

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scheduleRef = useRef<HTMLElement>(null);
  const graduationRef = useRef<HTMLElement>(null);
  const instructorsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLElement>(null);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === scheduleRef.current || entry.target === graduationRef.current || entry.target === pricingRef.current) {
            if (entry.isIntersecting) {
              entry.target.classList.add('schedule-slide-in');
              entry.target.classList.remove('schedule-slide-out');
            } else {
              entry.target.classList.add('schedule-slide-out');
              entry.target.classList.remove('schedule-slide-in');
            }
          } else if (entry.target === instructorsRef.current) {
            if (entry.isIntersecting) {
              entry.target.classList.add('instructors-slide-in');
              entry.target.classList.remove('instructors-slide-out');
            } else {
              entry.target.classList.add('instructors-slide-out');
              entry.target.classList.remove('instructors-slide-in');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (scheduleRef.current) observer.observe(scheduleRef.current);
    if (graduationRef.current) observer.observe(graduationRef.current);
    if (instructorsRef.current) observer.observe(instructorsRef.current);
    if (pricingRef.current) observer.observe(pricingRef.current);

    return () => {
      if (scheduleRef.current) observer.unobserve(scheduleRef.current);
      if (graduationRef.current) observer.unobserve(graduationRef.current);
      if (instructorsRef.current) observer.unobserve(instructorsRef.current);
      if (pricingRef.current) observer.unobserve(pricingRef.current);
    };
  }, []);

  return (
    <div className="home-container">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Redes Sociais (Esquerda) */}
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-2xl hover:text-yellow-400 transition"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube text-2xl hover:text-yellow-400 transition"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook text-2xl hover:text-yellow-400 transition"></i>
            </a>
          </div>

          {/* Navegação Desktop (Oculto em Mobile) */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-yellow-400 transition">Home</a>
            <a href="#about" className="hover:text-yellow-400 transition">Quem Somos</a>
            <a href="#gallery" className="hover:text-yellow-400 transition">Galeria</a>
            <a href="#events" className="hover:text-yellow-400 transition">Eventos</a>
            <a href="#schedule" className="hover:text-yellow-400 transition">Horários</a>
            <a href="#graduation" className="hover:text-yellow-400 transition">Graduação</a>
            <a href="#instructors" className="hover:text-yellow-400 transition">Instrutores</a>
            <a href="#pricing" className="hover:text-yellow-400 transition">Valores</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contato</a>
          </nav>

          {/* Botões Login/Cadastro (Oculto em Mobile) */}
          <div className="hidden md:flex space-x-4">
            <a href="/login" className="hover:text-yellow-400 pt-2 transition">Login</a>
            <a href="/signup" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded hover:bg-yellow-500 transition">Cadastro</a>
          </div>

          {/* Ícone do Menu Hambúrguer (Visível em Mobile) */}
          <button className="md:hidden text-2xl" onClick={toggleMenu}>
            <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
        </div>

        {/* Menu Lateral (Mobile) */}
        <div
          className={`fixed top-0 right-0 h-full w-64 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 shadow-lg`}
        >
          {/* Cabeçalho do Menu */}
          <div className="bg-gray-900 text-white flex justify-end p-4">
            <button onClick={toggleMenu} className="text-2xl text-gray-100">
              <i className="fas fa-times"></i>
            </button>
          </div>
          {/* Corpo do Menu */}
          <div className="bg-gray-50 h-full pt-1">
            <nav className="flex flex-col space-y-4 p-0">
              <a href="#home" className="menu-item" onClick={closeMenu}>Home</a>
              <a href="#about" className="menu-item" onClick={closeMenu}>Quem Somos</a>
              <a href="#gallery" className="menu-item" onClick={closeMenu}>Galeria</a>
              <a href="#events" className="menu-item" onClick={closeMenu}>Eventos</a>
              <a href="#schedule" className="menu-item" onClick={closeMenu}>Horários</a>
              <a href="#graduation" className="menu-item" onClick={closeMenu}>Graduação</a>
              <a href="#instructors" className="menu-item" onClick={closeMenu}>Instrutores</a>
              <a href="#pricing" className="menu-item" onClick={closeMenu}>Valores</a>
              <a href="#contact" className="menu-item" onClick={closeMenu}>Contato</a>
              <a href="/login" className="menu-item" onClick={closeMenu}>Login</a>
              <a href="/signup" className="menu-item bg-yellow-400 text-gray-900 px-4 py-2 rounded" onClick={closeMenu}>Cadastro</a>
            </nav>
          </div>
        </div>

        {/* Overlay Escuro */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMenu}
          ></div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <section id="home" className="min-h-screen bg-gray-100 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-gray-900">Bem-vindo à Escola de Capoeira Orísun</h1>
        </section>

        <AboutSection />
        <GallerySection />
        <EventSection onEventClick={handleEventClick} />

        {/* Horários de Treinamento */}
        <section id="schedule" className="bg-white py-12 animated-section" ref={scheduleRef}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Horários de Treinamento</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg schedule-table">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-3 px-4 border-b text-left">Horário</th>
                    <th className="py-3 px-4 border-b text-left">Segunda</th>
                    <th className="py-3 px-4 border-b text-left">Terça</th>
                    <th className="py-3 px-4 border-b text-left">Quarta</th>
                    <th className="py-3 px-4 border-b text-left">Quinta</th>
                    <th className="py-3 px-4 border-b text-left">Sexta</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((item, index) => (
                    <tr key={index}>
                      <td className="py-3 px-4 border-b">{item.time}</td>
                      <td className="py-3 px-4 border-b" style={{ backgroundColor: item.Segunda === 'Adolescentes e Adultos' ? '#A5D6A7' : '' }}>
                        {item.Segunda}
                      </td>
                      <td className="py-3 px-4 border-b" style={{
                        backgroundColor: item.Terça === 'Crianças (5-10 anos)' ? '#FFECB3' :
                          item.Terça === 'Adolescentes (11-16 anos)' ? '#BBDEFB' :
                          item.Terça === 'Adultos' ? '#CFD8DC' : ''
                      }}>
                        {item.Terça}
                      </td>
                      <td className="py-3 px-4 border-b" style={{ backgroundColor: item.Quarta === 'Adolescentes e Adultos' ? '#A5D6A7' : '' }}>
                        {item.Quarta}
                      </td>
                      <td className="py-3 px-4 border-b" style={{
                        backgroundColor: item.Quinta === 'Crianças (5-10 anos)' ? '#FFECB3' :
                          item.Quinta === 'Adolescentes (11-16 anos)' ? '#BBDEFB' :
                          item.Quinta === 'Adultos' ? '#CFD8DC' : ''
                      }}>
                        {item.Quinta}
                      </td>
                      <td className="py-3 px-4 border-b">{item.Sexta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Sistema de Graduação */}
        <section id="graduation" className="bg-gray-100 py-12 animated-section" ref={graduationRef}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Sistema de Graduação</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-3 px-4 border-b text-left">Cordão</th>
                    <th className="py-3 px-4 border-b text-left">Nível</th>
                  </tr>
                </thead>
                <tbody>
                  {graduationSystem.map((item, index) => (
                    <tr key={index}>
                      <td className="py-3 px-4 border-b">
                        <div className="cord-display" style={{ background: item.color }}></div>
                        {item.cord}
                      </td>
                      <td className="py-3 px-4 border-b">{item.level}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Instrutores */}
        <section id="instructors" className="bg-white py-12 instructors-section">
          <div className="container mx-auto px-4 instructors-container">
            <h2 className="text-3xl font-bold text-center mb-8">Nossos Instrutores</h2>
            <div className="instructors-grid max-w-4xl mx-auto" ref={instructorsRef}>
              {instructors.map((instructor) => (
                <div
                  key={instructor.id}
                  className="bg-gray-100 p-6 rounded-lg shadow-md"
                >
                  <img
                    src={instructor.photo}
                    alt={instructor.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-center mb-2">{instructor.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tabela de Valores */}
        <section id="pricing" className="bg-gray-100 py-12 animated-section" ref={pricingRef}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Tabela de Valores</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-3 px-4 border-b text-left">Turma</th>
                    <th className="py-3 px-4 border-b text-left">Preço</th>
                    <th className="py-3 px-4 border-b text-left">Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.map((item, index) => (
                    <tr key={index}>
                      <td className="py-3 px-4 border-b">{item.plan}</td>
                      <td className="py-3 px-4 border-b">{item.price}</td>
                      <td className="py-3 px-4 border-b">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-gray-700 mt-4">
              Entre em contato pelo WhatsApp para mais detalhes ou para se inscrever!
            </p>
          </div>
        </section>

        <MapContactSection />
      </main>

      {/* Modal for Event Details */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white p-6 rounded-lg max-w-md">
            <h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</h2>
            <p className="mb-2"><strong>Descrição:</strong> {selectedEvent.description}</p>
            <p className="mb-2"><strong>Local:</strong> {selectedEvent.location}</p>
            <p className="mb-4"><strong>Data e Hora:</strong> {selectedEvent.date}</p>
            <button
              onClick={closeModal}
              className="bg-yellow-400 text-gray-900 px-4 py-2 rounded hover:bg-yellow-500 transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-2xl hover:text-yellow-400 transition"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube text-2xl hover:text-yellow-400 transition"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook text-2xl hover:text-yellow-400 transition"></i>
            </a>
          </div>
          <p>© 2025 Escola de Capoeira Orísun. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;