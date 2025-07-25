export const ObjectivesSection = () => {
    const agencies = [
        {
            title: "Imo State Tourism Board",
            description: "Responsible for developing, promoting, and regulating tourism activities in Imo State. The Board works to harness the state's tourism potential, attract investment, and boost economic development through tourism initiatives and policy implementation."
        },
        {
            title: "Nekede Zoological Garden",
            description: "A conservation and recreational center dedicated to the preservation of wildlife, environmental education, and public awareness. The garden provides opportunities for research, tourism, and leisure, while supporting biodiversity and wildlife conservation in Imo State."
        },
        {
            title: "Mbari Cultural & Arts Centre",
            description: "A cultural institution that preserves, promotes, and showcases Igbo art, culture, and heritage. The Centre serves as a venue for exhibitions, performances, and festivals, fostering cultural education and supporting local artists and artisans."
        },
        {
            title: "Imo State Tourism Information Office",
            description: "Provides information and guidance to tourists and visitors about attractions, events, and services in Imo State. The office supports tourism development by facilitating access to resources and promoting the state's tourism assets."
        },
        {
            title: "Imo State Investment Promotion Agency (ISIPA)",
            description: "The agency is tasked with attracting, facilitating, and supporting investments in Imo State. ISIPA provides information, incentives, and support services to investors, promotes investment opportunities, and works to improve the state's business environment."
        }
    ];

    const coreValues = [
        "Enlightenment",
        "Engagement",
        "Empowerment",
        "Inclusiveness",
        "Integrity",
        "Excellence",
        "Social Responsibility"
    ];

    return (
        <section className="w-full bg-white py-10 md:py-20">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                {/* IMDEEG's Objectives */}
                <div className="mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-[43px] font-medium text-center mb-8 md:mb-12">
                        Our Strategic Objectives
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                        {agencies.map((agency, index) => (
                            <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200 text-center w-full">
                                <h3 className="font-medium text-xl md:text-[22px] mb-2 md:mb-3">
                                    {agency.title}
                                </h3>
                                <p className="text-dark-primary-body text-base md:text-[1rem]">
                                    {agency.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Core Values */}
                <div>
                    <h2 className="text-2xl md:text-[43px] font-medium text-center mb-8 md:mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
                        {coreValues.map((value, index) => (
                            <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200 text-center w-full">
                                <span className="font-medium text-base md:text-lg text-dark-primary-body">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}; 