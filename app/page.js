import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const mockData = [
  {
    id: 1,
    name: "Embroidered Sherwani",
    seller: "Elegant Attire",
    price: 120,
    imageUrl: "https://via.placeholder.com/150",
    quantity: 10
  },
  {
    id: 2,
    name: "Silk Saree",
    seller: "Heritage Threads",
    price: 90,
    imageUrl: "https://via.placeholder.com/150",
    quantity: 25
  },
  {
    id: 3,
    name: "Casual Kurta Set",
    seller: "Daily Wear",
    price: 45,
    imageUrl: "https://via.placeholder.com/150",
    quantity: 50
  },
  {
    id: 4,
    name: "Anarkali Suit",
    seller: "Regal Designs",
    price: 110,
    imageUrl: "https://via.placeholder.com/150",
    quantity: 15
  },
  {
    id: 5,
    name: "Lehenga Choli",
    seller: "Festive Fashions",
    price: 150,
    imageUrl: "https://via.placeholder.com/150",
    quantity: 8
  },
  {
    id: 6,
    name: "Men's Pathani Suit",
    seller: "Classic Menswear",
    price: 70,
    imageUrl: "https://via.placeholder.com/150",
    quantity: 30
  }
];

export default function Home() {
    return(
    <div className = "flex flex-col min-h-screen" >
      <Navbar />
      <main className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {mockData.map((info) => (
            <Card cardInfo={info} key={info.id}/>
          ))}
        </div>
      </main>
      <Footer />
    </div >
  );
}
