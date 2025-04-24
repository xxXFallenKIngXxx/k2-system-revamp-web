
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Kontakt</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Dane Kontaktowe</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-900" />
                <span>+48 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-900" />
                <span>kontakt@ksero-k2system.pl</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-900" />
                <span>ul. Przykładowa 123, 00-001 Warszawa</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Godziny Otwarcia</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Poniedziałek - Piątek</span>
                <span>8:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sobota</span>
                <span>9:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span>Niedziela</span>
                <span>Zamknięte</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Formularz Kontaktowy</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Imię i Nazwisko
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Jan Kowalski"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="jan@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Wiadomość
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Twoja wiadomość..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors"
            >
              Wyślij Wiadomość
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Lokalizacja</h2>
        <div className="w-full h-[400px] bg-gray-200 rounded-lg">
          {/* Here you would add your Google Maps integration */}
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Mapa Google
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
