
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Printer, Image, Book, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Printer className="w-6 h-6" />,
      title: "Ksero i Druk",
      description: "Profesjonalne usługi kserograficzne i druk w różnych formatach, czarno-białe oraz kolorowe."
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Skanowanie",
      description: "Skanowanie dokumentów w wysokiej rozdzielczości, możliwość zapisania w różnych formatach."
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Oprawa Dokumentów",
      description: "Profesjonalna oprawa prac dyplomowych, dokumentów i prezentacji."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Serwis Drukarek",
      description: "Naprawa i konserwacja drukarek różnych marek, wymiana materiałów eksploatacyjnych."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Usługi</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="transition-transform hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Cennik Usług</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <span>Ksero A4 czarno-białe</span>
            <span className="font-semibold">0,20 zł</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span>Ksero A4 kolor</span>
            <span className="font-semibold">1,00 zł</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span>Ksero A3 czarno-białe</span>
            <span className="font-semibold">0,40 zł</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span>Ksero A3 kolor</span>
            <span className="font-semibold">2,00 zł</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
