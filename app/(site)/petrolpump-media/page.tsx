import { db } from "@/lib/db"
import CartFooter from "@/components/CartFooter"
import Image from "next/image"

export default async function PetrolPumpMediaPage() {
    const caseStudies = [
        {
            title: "PUNJAB NATIONAL BANK",
            image: "/images/case-studies/pnb.jpg"
        },
        {
            title: "FIAT CAR",
            image: "/images/case-studies/fiat.jpg"
        },
        {
            title: "BAJAJ ALLIANZ GENERAL INSURANCE",
            image: "/images/case-studies/bajaj.jpg"
        },
        {
            title: "CANARA BANK",
            image: "/images/case-studies/canara.jpg"
        },
        {
            title: "TATA FOUR WHEELER",
            image: "/images/case-studies/tata-four.jpg"
        },
        {
            title: "OKAYA BATTARIES",
            image: "/images/case-studies/okaya.jpg"
        },
        {
            title: "TATA EV",
            image: "/images/case-studies/tata-ev.jpg"
        },
        {
            title: "UTTARAKHAND GRAMIN BANK",
            image: "/images/case-studies/uttarakhand.jpg"
        },
        {
            title: "COVID-19 AWARENESS",
            image: "/images/case-studies/covid.jpg"
        }
    ]

    // Fetch Inventory Data
    const inventory = await db.inventoryHoarding.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });

    return (
        <main className="min-h-screen bg-white py-20 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">

                {/* Campaigns / Case Studies Section */}
                <h2 className="text-3xl font-bold text-[#002147] mb-8 text-center uppercase tracking-wide">
                    Our Campaigns
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-20 max-w-6xl mx-auto">
                    {caseStudies.map((study, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <h3 className="text-sm font-bold text-[#002147] mb-4 text-center tracking-wide uppercase">
                                {study.title}
                            </h3>
                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Inventory List Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-[#002147] mb-8 text-center uppercase tracking-wide">
                        Available Inventory
                    </h2>

                    {inventory.length > 0 ? (
                        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-100">
                            <table className="min-w-full bg-white text-sm text-left text-gray-600">
                                <thead className="bg-[#002147] text-white uppercase font-bold text-xs">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 rounded-tl-lg">Outlet Name</th>
                                        <th scope="col" className="px-6 py-4">Location</th>
                                        <th scope="col" className="px-6 py-4">District / State</th>
                                        <th scope="col" className="px-6 py-4">Dimensions</th>
                                        <th scope="col" className="px-6 py-4 rounded-tr-lg">Rate (Sq.Ft)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                                    {inventory.map((item: any) => (
                                        <tr key={item.id} className="hover:bg-blue-50/50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-gray-900 border-l-4 border-transparent hover:border-[#002147]">
                                                {item.outletName}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.locationName || item.location || "N/A"}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                    {item.district}, {item.state}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                {(item.widthFt && item.heightFt)
                                                    ? `${item.widthFt}WA x ${item.heightFt}HA`
                                                    : (item.width && item.height)
                                                        ? `${item.width}WA x ${item.height}HA`
                                                        : "N/A"
                                                }
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-700">
                                                {item.ratePerSqft ? `₹${item.ratePerSqft}` : item.rate ? `₹${item.rate}` : "N/A"}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                            <p className="text-gray-500 text-lg">No inventory currently listed.</p>
                        </div>
                    )}
                </div>

            </div>
            <CartFooter />
        </main>
    )
}
