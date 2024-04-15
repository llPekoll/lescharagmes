import Link from "next/link";

export default function HomePage() {

  const mocks = [
    'https://mhcibtcjhobsbydm.public.blob.vercel-storage.com/1604392475636-um9zickrm1A48SZmY3XuvnAml698Jd.jpeg',
    'https://mhcibtcjhobsbydm.public.blob.vercel-storage.com/WhatsApp%20Image%202024-04-11%20at%2013.20.24-AMynBg7n8A9KRJjL6nm8RFHcrVI0n9.jpeg',
    'https://mhcibtcjhobsbydm.public.blob.vercel-storage.com/peakpx-8k35q06rI5SVg3SKj55Pd6mVY3udkD.jpg'
  ];

  const mockImages = mocks.map((mock, index) => (
    <div key={index} className="w-48">
      <img src={mock} alt="mock" className="w-full" />
    </div>
  ));

  return (
    <main className="text-white h-screen main">
      <div className="flex flex-wrap w-full gap-4">{mockImages}</div>
    </main>
  );
}
