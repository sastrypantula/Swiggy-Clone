import { useSelector } from "react-redux";

export default function Checkout() {
    const items = useSelector(state => state.cartslice.items);

    return (
        <div className="min-h-screen bg-gray-100 p-8 flex justify-center">
            <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">🛒 Your Cart</h2>
                
                {items.map((value) => (
                    <div key={value.id} className="flex items-center justify-between border-b py-4">
                        <div className="flex items-center gap-4">
                            <img
                                className="w-28 h-20 object-cover rounded-xl"
                                src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.imageId}`}
                                alt={value.name}
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">{value.name}</h3>
                                <p className="text-gray-500">Quantity: {value.quantity}</p>
                            </div>
                        </div>
                        <div className="text-xl font-semibold text-gray-800">₹{(value.price/100)*value.quantity}</div>
                    </div>
                ))}

                <div className="mt-6">
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition duration-200">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}
