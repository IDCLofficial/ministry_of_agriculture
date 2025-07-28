import { MVSCard } from "./MVSCard"

const mvs = [
    {
        title: "Our Mission",
        description: "To promote sustainable agricultural development through innovation, farmer empowerment, and agribusiness support, ensuring food security, economic growth, and improved livelihoods for all citizens of Imo State."
    },
    {
        title: "Our Vision",
        description: "To build a vibrant, modern, and sustainable agricultural sector that ensures food sufficiency, drives economic prosperity, and positions Imo State as a leading hub for agribusiness and rural development in Nigeria."
    }
]   

export const MVSSection = () => {
    return(
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-8 py-20 justify-center items-center w-full bg-[#F1F1F1]">
            {mvs.map((mvs, index) => (
                <MVSCard key={index} title={mvs.title} description={mvs.description} />
            ))}
        </div>
    )
}