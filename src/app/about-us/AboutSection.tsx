import Image from "next/image";

interface AboutSectionProps {
    aboutText: string;
    imgSrc: string;
    altText: string;
}

export const AboutSection = ({ aboutText, imgSrc, altText }: AboutSectionProps) => {
    return (
        <section className="w-full py-10 md:py-20">
            <div className="mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-0">
                    {/* Left Section - Text Content */}
                    <div className="w-full lg:w-[50%] p-0 md:p-10 rounded-xl">
                        <h2 className="text-2xl md:text-[43px] font-medium text-black mb-4 md:mb-8">
                            About the Ministry
                        </h2>
                        <p className="text-dark-primary-body text-base md:text-[1rem] leading-7 md:leading-8">
                            {aboutText}
                        </p>
                    </div>
                    {/* Right Section - Image */}
                    <div className="relative w-full lg:w-[30%] h-[300px] md:h-[500px] bg-[#F1F1F1] flex items-center justify-center">
                        <Image 
                            src={imgSrc}
                            alt={altText}                       
                            className="object-fit md:-ml-80 w-full h-full md:h-[400px]"
                            width={400}
                            height={400}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}; 