
import { Printer, Clock, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Profesjonalne Usługi Ksero
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Najwyższa jakość druku i obsługi klienta
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Skontaktuj się z nami
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Printer className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Najnowszy Sprzęt</h3>
              <p className="text-gray-600">
                Korzystamy z nowoczesnych drukarek i kserokopiarek
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Szybka Realizacja</h3>
              <p className="text-gray-600">
                Gwarantujemy szybką realizację zleceń
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Najwyższa Jakość</h3>
              <p className="text-gray-600">
                Dbamy o najwyższą jakość każdego wydruku
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Potrzebujesz profesjonalnych usług ksero?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Skontaktuj się z nami już dziś i przekonaj się o jakości naszych usług
          </p>
          <a
            href="/services"
            className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
          >
            Zobacz nasze usługi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
