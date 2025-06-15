import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AboutSection.css';

import turma1 from '../../assets/images/gallery/turma1.jpg';
import turma2 from '../../assets/images/gallery/turma2.jpg';
import turma3 from '../../assets/images/gallery/turma3.jpg';
import turma4 from '../../assets/images/gallery/turma4.jpg';
import instrumental from '../../assets/images/gallery/instrumental.jpg';
import movimento from '../../assets/images/gallery/movimento.jpg';
import movimento2 from '../../assets/images/gallery/movimento2.jpg';
import jogoContinua from '../../assets/images/gallery/jogoContinua.jpg';

const AboutSection: React.FC = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const trainingImages = [
    { id: 1, src: turma1, alt: 'Turma em Treino 1', caption: 'Treino em grupo' },
    { id: 2, src: turma2, alt: 'Turma em Treino 2', caption: 'Treino em grupo com crianças' },
    { id: 3, src: turma3, alt: 'Turma em Treino 3', caption: 'Treino em grupo com crianças' },
    { id: 4, src: turma4, alt: 'Turma em Treino 4', caption: 'Treino em grupo com crianças' },
  ];

  const movementImages = [
    { id: 1, src: instrumental, alt: 'Ginga', caption: 'Instrumental, o toque dos instrumentos em jogo' },
    { id: 2, src: movimento, alt: 'Au', caption: 'Movimento acrobático' },
    { id: 3, src: movimento2, alt: 'Rasteira', caption: 'Movimento acrobático' },
  ];

  const structureImages = [
    { id: 1, src: 'https://via.placeholder.com/400x300', alt: 'Salão de Treinamento', caption: 'Salão de treinamento coletivo' },
    { id: 2, src: 'https://via.placeholder.com/400x300', alt: 'Estúdio Musical', caption: 'Estúdio para prática musical' },
    { id: 3, src: 'https://via.placeholder.com/400x300', alt: 'Centro Cultural', caption: 'Espaço para eventos culturais' },
  ];

  const originRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const fundamentalsRef = useRef<HTMLDivElement>(null);
  const structureRef = useRef<HTMLDivElement>(null);
  const commitmentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (originRef.current) observer.observe(originRef.current);
    if (benefitsRef.current) observer.observe(benefitsRef.current);
    if (fundamentalsRef.current) observer.observe(fundamentalsRef.current);
    if (structureRef.current) observer.observe(structureRef.current);
    if (commitmentRef.current) observer.observe(commitmentRef.current);

    return () => {
      if (originRef.current) observer.unobserve(originRef.current);
      if (benefitsRef.current) observer.unobserve(benefitsRef.current);
      if (fundamentalsRef.current) observer.unobserve(fundamentalsRef.current);
      if (structureRef.current) observer.unobserve(structureRef.current);
      if (commitmentRef.current) observer.unobserve(commitmentRef.current);
    };
  }, []);

  return (
    <section id="about" className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center pb-9 mb-8">Sobre a Escola de Capoeira Orísun</h2>

        {/* Origem */}
        <div className="flex flex-col md:flex-row gap-8 mb-12 origin-section" ref={originRef}>
          <div className="md:w-1/2 intro-topic">
            <h4 className="text-lg font-semibold flex items-center mb-2">
              <i className="fas fa-seedling mr-2 text-gray-800"></i> Origem
            </h4>
            <p className="text-gray-700">
              Orísun, que significa "fonte" em iorubá, é um centro cultural, artístico e formativo que une tradição e inovação. Representa a conexão com a ancestralidade, a origem da capoeira e o nascimento de uma nova geração de capoeiristas comprometidos com a transformação social.
            </p>
          </div>
          <div className="md:w-1/2 origin-image">
            <img
              src={jogoContinua}
              alt="Origem da Capoeira"
              className="w-full object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Benefícios da Capoeira */}
        <div className="flex flex-col md:flex-row gap-8 mb-12 commitment-section" ref={benefitsRef}>
          <div className="md:w-1/2 origin-image">
            <Slider {...carouselSettings}>
              {trainingImages.map((image) => (
                <div key={image.id} className="relative">
                  <img src={image.src} alt={image.alt} className="w-full carousel-image rounded-lg" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4 rounded-b-lg">
                    <p className="text-sm">{image.caption}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="md:w-1/2 commitment-content">
            <h4 className="text-lg font-semibold flex items-center mb-2">
              <i className="fas fa-heart mr-2 text-gray-800"></i> Benefícios da Capoeira
            </h4>
            <p className="text-gray-700">
              Na Escola de Capoeira Orísun, a capoeira vai além do esporte. Ela promove saúde física, fortalecendo o corpo com movimentos que desenvolvem coordenação, flexibilidade e resistência. Mentalmente, estimula disciplina, confiança e inteligência emocional. Socialmente, cria laços de pertencimento, conectando alunos à cultura afro-brasileira e à ancestralidade. Nossos programas incluem aulas inclusivas e projetos sociais, garantindo que a capoeira seja uma ferramenta de transformação para todos.
            </p>
          </div>
        </div>

        {/* Fundamentos, Missão, Visão e Valores */}
        <div className="flex flex-col md:flex-row gap-8 mb-12 origin-section" ref={fundamentalsRef}>
          <div className="md:w-1/2 intro-topic">
            <h4 className="text-lg font-semibold flex items-center mb-2">
              <i className="fas fa-shoe-prints mr-2 text-gray-800"></i> Fundamentos
            </h4>
            <p className="text-gray-700 mb-4">
              A capoeira na Orísun é uma manifestação cultural completa, enraizada na ancestralidade africana. Ensinamos a ginga, movimentos acrobáticos e técnicas de luta, além da musicalidade com berimbau, canto e percussão. Nossos alunos aprendem a história da capoeira, seus valores éticos e sua conexão com a luta por liberdade, promovendo uma educação integral.
              Ensinar a capoeira como ferramenta de transformação, promovendo valores éticos, fortalecendo comunidades e conectando alunos à ancestralidade afro-brasileira para um futuro mais justo.
              Ser um polo global de capoeira, reconhecido pela formação cultural, impacto social e preservação da ancestralidade africana por meio da arte e educação.
              Respeito à ancestralidade, compromisso com a educação, expressão cultural, pertencimento comunitário e busca pela excelência com identidade.
            </p>
          </div>
          <div className="md:w-1/2 origin-image">
            <Slider {...carouselSettings}>
              {movementImages.map((image) => (
                <div key={image.id} className="relative">
                  <img src={image.src} alt={image.alt} className="w-full carousel-image rounded-lg" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4 rounded-b-lg">
                    <p className="text-sm">{image.caption}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Estrutura */}
        <div className="flex flex-col md:flex-row gap-8 mb-12 commitment-section" ref={structureRef}>
          <div className="md:w-1/2 origin-image">
            <Slider {...carouselSettings}>
              {structureImages.map((image) => (
                <div key={image.id} className="relative">
                  <img src={image.src} alt={image.alt} className="w-full carousel-image rounded-lg" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4 rounded-b-lg">
                    <p className="text-sm">{image.caption}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="md:w-1/2 commitment-content">
            <h4 className="text-lg font-semibold flex items-center mb-2">
              <i className="fas fa-building mr-2 text-gray-800"></i> Estrutura
            </h4>
            <p className="text-gray-700">
              A Escola de Capoeira Orísun oferece uma estrutura completa em cinco andares. No térreo, há estacionamento exclusivo. O 1º andar conta com recepção, loja de acessórios e sala de leitura. O 2º e 3º andares têm salões de treinamento, estúdio musical e vestiários. O 4º andar é um centro cultural para rodas abertas e eventos. No 5º andar, estão escritórios e salas de produção de conteúdo, apoiando a formação de professores e franqueados.
            </p>
          </div>
        </div>

        {/* Compromisso Social */}
        {/* <div className="flex flex-col md:flex-row gap-8 mb-12 origin-section" ref={commitmentRef}>
          <div className="md:w-1/2 intro-topic">
            <h4 className="text-lg font-semibold flex items-center mb-2">
              <i className="fas fa-hands-helping mr-2 text-gray-800"></i> Compromisso Social
            </h4>
            <p className="text-gray-700">
              Oferecemos aulas gratuitas para crianças de baixa renda, oficinas culturais em comunidades e parcerias com escolas públicas, usando a capoeira como ferramenta de inclusão e transformação.
            </p>
          </div>
          <div className="md:w-1/2 origin-image">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Compromisso Social"
              className="w-full object-contain rounded-lg"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;