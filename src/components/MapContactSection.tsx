import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Corrige os ícones padrão do Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Componente interno para acessar a instância do mapa
const MapController: React.FC = () => {
  const map = useMap();

  useEffect(() => {
    // Força o redimensionamento do mapa após o carregamento
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map]);

  return null;
};

const MapContactSection: React.FC = () => {
  // Coordenadas para R. João Batista Ortiz Monteiro, 1075, Taubaté, SP
  const position: [number, number] = [-23.036813, -45.602873];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula o carregamento para esconder o indicador após o mapa renderizar
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Função para abrir o WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = '+5512991427856'; // Substitua pelo número real
    const message = encodeURIComponent('Olá, gostaria de mais informações sobre a Escola Capoeira!');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="bg-white py-12 relative z-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Mapa */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Nossa Localização</h2>
          <div className="w-full h-64 rounded-lg overflow-hidden relative z-0">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-10">
                <p className="text-gray-700">Carregando mapa...</p>
              </div>
            )}
            <MapContainer
              center={position}
              zoom={15}
              style={{ height: '100%', width: '100%', zIndex: 0 }}
              className="z-0"
            >
              <MapController />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                maxZoom={19}
                tileSize={256}
              />
              <Marker position={position}>
                <Popup>
                  Escola Capoeira<br />
                  R. João Batista Ortiz Monteiro, 1075<br />
                  Parque Senhor do Bonfim, Taubaté - SP
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        {/* Contato via WhatsApp */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
          <div className="flex flex-col space-y-4">
            <p className="text-gray-700">
              Fale conosco diretamente pelo WhatsApp para mais informações sobre aulas, horários ou eventos!
            </p>
            <button
              onClick={openWhatsApp}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition flex items-center justify-center"
            >
              <i className="fab fa-whatsapp mr-2 text-xl"></i> Entrar em Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapContactSection;