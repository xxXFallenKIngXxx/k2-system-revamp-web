
import { Truck, Clock, TrendingUp } from 'lucide-react';

const Delivery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Dostawa</h1>
      
      <div className="prose max-w-none space-y-8">
        <p className="text-lg text-gray-600">
          Oferujemy różne opcje dostawy, aby sprostać potrzebom naszych klientów. Realizujemy zamówienia na terenie całej Warszawy i okolic.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Truck className="w-6 h-6 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Dostawa do Klienta</h3>
            <p className="text-gray-600">
              Dostarczamy zamówienia pod wskazany adres na terenie Warszawy.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Szybka Realizacja</h3>
            <p className="text-gray-600">
              Standardowy czas realizacji zamówienia to 24-48 godzin.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Odbiór Osobisty</h3>
            <p className="text-gray-600">
              Możliwość odbioru osobistego w naszym punkcie.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Informacje o Dostawie</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Dostawa na terenie Warszawy - od 20 zł</li>
            <li>Darmowa dostawa dla zamówień powyżej 200 zł</li>
            <li>Możliwość ekspresowej dostawy w ciągu 4 godzin</li>
            <li>Odbiór osobisty w naszym punkcie - 0 zł</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
