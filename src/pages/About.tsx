
import { Users, TrendingUp, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">O nas</h1>
      
      <div className="prose max-w-none space-y-8">
        <p className="text-lg text-gray-600">
          K2 System to profesjonalna firma oferująca kompleksowe usługi ksero i druku. Od wielu lat zapewniamy najwyższą jakość usług dla naszych klientów w Warszawie.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Doświadczony Zespół</h3>
            <p className="text-gray-600">
              Nasz zespół składa się z wykwalifikowanych specjalistów z wieloletnim doświadczeniem.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Najwyższa Jakość</h3>
            <p className="text-gray-600">
              Korzystamy z najnowocześniejszego sprzętu, aby zapewnić najwyższą jakość wydruków.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Szybka Realizacja</h3>
            <p className="text-gray-600">
              Gwarantujemy szybką realizację zleceń i terminowość wykonania usług.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Nasza Misja</h2>
          <p className="text-gray-600">
            Naszą misją jest dostarczanie najwyższej jakości usług druku i ksero, spełniając oczekiwania nawet najbardziej wymagających klientów. Stawiamy na innowacyjność, profesjonalizm i zadowolenie klienta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
