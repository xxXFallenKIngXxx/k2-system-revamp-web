
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Store } from 'lucide-react';

const Shop = () => {
  const printers = [
    {
      name: "HP LaserJet Pro M15w",
      price: "599 zł",
      description: "Kompaktowa drukarka laserowa idealna do małego biura",
      image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Canon PIXMA G3411",
      price: "849 zł",
      description: "Ekonomiczna drukarka atramentowa z systemem stałego zasilania",
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Epson EcoTank L3150",
      price: "999 zł",
      description: "Wielofunkcyjna drukarka z wydajnym systemem zasilania w tusz",
      image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "Brother DCP-L3550CDW",
      price: "1499 zł",
      description: "Profesjonalna kolorowa drukarka laserowa dla firm",
      image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=400&h=300"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-4 mb-8">
        <Store className="w-8 h-8 text-blue-900" />
        <h1 className="text-4xl font-bold">Sklep</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {printers.map((printer, index) => (
          <Card key={index} className="transition-transform hover:scale-105">
            <CardHeader>
              <img
                src={printer.image}
                alt={printer.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardTitle className="mt-4">{printer.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{printer.description}</p>
              <p className="text-2xl font-bold text-blue-900">{printer.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Informacje o Zakupach</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Wszystkie drukarki objęte są 24-miesięczną gwarancją</li>
          <li>Oferujemy profesjonalne doradztwo przy wyborze sprzętu</li>
          <li>Zapewniamy pełne wsparcie techniczne</li>
          <li>Możliwość zakupu na raty</li>
        </ul>
      </div>
    </div>
  );
};

export default Shop;
