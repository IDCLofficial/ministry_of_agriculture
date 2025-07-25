import Image from "next/image";

interface StructuresSectionProps {
    imgSrc: string;
}

export const StructuresSection = ({imgSrc}: StructuresSectionProps) => {
    const departments = [
        {
            title: "Department of Tourism Development",
            description: "Identifies, develops, and promotes tourist sites across Imo State, coordinates tourism investment initiatives and eco-tourism projects and oversees tourism promotion and branding."
        },
        {
            title: "Department of Culture and Heritage",
            description: "Preserves and promotes traditional arts, language, festivals, and heritage sites and organizes cultural festivals, and coordinates with local cultural institutions."
        },
        {
            title: "Department of Creative Arts",
            description: "Supports local artists, performers, and creative industries, and develops cultural entrepreneurship programs and promotes Nollywood-related activities."
        },
        {
            title: "Department of Planning, Research & Statistics (PRS)",
            description: "Develops tourism and cultural sector policies and strategic plans, also conducts surveys, data analysis, and performance evaluation."
        },
        {
            title: "Department of Finance & Accounts",
            description: "Manages budgeting, revenue, and financial reporting for the ministry, and oversees expenditure, audits, and compliance."
        }
        
    ]
    

    return (
        <section className="w-full bg-[#1D1D1D] py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8 text-center flex flex-col items-center">
                {/* Header */}
                <h2 className="text-2xl md:text-[43px] font-medium text-white">
                    Our Structure
                </h2>
                <p className="text-white text-base md:text-[1rem] mb-8 md:mb-16 w-full md:w-[60%] mx-auto">
                    The Ministry is divided into specialized departments that work collectively to achieve the ministry&apos;s objectives.
                </p>
                {/* Main Image */}
                <div className="relative w-full h-[180px] md:h-[500px] rounded-xl overflow-hidden shadow-lg mb-8 md:mb-20">
                    <Image
                        src={imgSrc}
                        alt="Ministry Building"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                {/* Department Cards Grid */}
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-col md:flex-row gap-2 w-full justify-between">
                        {departments.slice(0,3).map((department, index) => (
                            <div key={index} className="flex-1 bg-white p-4 md:p-8 shadow-md border border-gray-200 mb-2 md:mb-0">
                                <h3 className="font-bold text-xl md:text-[22px] text-dark-primary mb-2 md:mb-3">
                                    {department?.title}
                                </h3>
                                <p className="text-dark-secondary-body text-base md:text-[16px]">
                                    {department?.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 w-full justify-between">
                        {departments.slice(3,5).map((department, index) => (
                            <div key={index} className="flex-1 bg-white p-4 md:p-8 shadow-md border border-gray-200 mb-2 md:mb-0">
                                <h3 className="font-bold text-xl md:text-[22px] text-dark-primary mb-2 md:mb-3">
                                    {department?.title}
                                </h3>
                                <p className="text-dark-secondary-body text-base md:text-[16px]">
                                    {department?.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    {/* <div className="flex flex-col md:flex-row w-full gap-2">
                        {departments.row2.map((department, index) => (
                            <div key={index} className="flex-1 bg-white p-4 md:p-8 shadow-md border border-gray-200 mb-2 md:mb-0">
                                <h3 className="font-bold text-base md:text-[22px] text-dark-primary mb-2 md:mb-3">
                                    {department?.title}
                                </h3>
                                <p className="text-dark-secondary-body text-sm md:text-[16px]">
                                    {department?.description}
                                </p>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    );
}; 