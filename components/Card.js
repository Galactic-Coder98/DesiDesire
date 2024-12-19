import Image from "next/image";

export default function Card({ cardInfo }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-glow transition-shadow w-64">
            <div className="h-40 bg-gray-200 flex items-center justify-center">
                <div className="w-full h-40 relative">
                    <Image
                        src={cardInfo.image_url}
                        alt={cardInfo.name}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-t-md"
                    />
                </div>
            </div>
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-1">{cardInfo.name}</h2>
                <p className="text-sm text-gray-600 mb-2">Seller: <span className="font-medium">{cardInfo.seller}</span></p>
                <p className="text-md font-semibold text-gray-700 mb-4">Price: ${cardInfo.price}</p>
                <button className="w-full py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-500 transition-colors">
                    View Item
                </button>
            </div>
        </div>
    );
}
