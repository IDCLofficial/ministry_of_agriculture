export const ObjectivesSection = () => {
    const agencies: { title: string; description: string }[] = [
        {
            title: "Food Security",
            description: "Guarantee consistent access to sufficient, nutritious, and affordable food for all."
        },
        {
            title: "Farmer Empowerment",
            description: "Provide farmers with training, modern tools, inputs, and financial support."
        },
        {
            title: "Agribusiness Development",
            description: "Encourage investment in agro-processing and value chain development."
        },
        {
            title: "Youth and Women Inclusion",
            description: "Promote youth and women participation in agriculture through targeted programs."
        },
        {
            title: "Rural Infrastructure Development",
            description: "Improve roads, irrigation, storage, and market facilities in rural areas."
        },
        {
            title: "Climate-Smart Agriculture",
            description: "Support environmentally sustainable and resilient farming systems."
        },
        {
            title: "Research and Innovation",
            description: "Invest in agricultural research, technology adoption, and extension services for improved productivity."
        }
    ];

    const coreValues = [
        "Enlightenment",
        "Empowerment",
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