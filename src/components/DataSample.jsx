import { JsonViewer } from "@textea/json-viewer";

export default function DataSample() {
    return (
        <section>
            <h3>Data structure</h3>
            <p>The basic data object served by the API is a coffee object with the following structure:</p>
            <JsonViewer value={{
                "_id": "640f13592a89b508ef1c2d30",
                "brand": "Costa Rica Monte Bello",
                "price": 12,
                "img_url": "https://res.cloudinary.com/dalssoks9/image/upload/v1666638763/cafe_de_altura/coffee_bag_costa_rica_monte_bello_v1oscf.png",
                "available": true,
                "__v": 0
            }} />
        </section>
    )
}
