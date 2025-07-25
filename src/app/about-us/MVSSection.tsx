import { MVSCard } from "./MVSCard"

const mvs = [
    {
        title: "Our Mission",
        description: "To develop, promote, and sustain a vibrant tourism and cultural industry in Imo State."
    },
    {
        title: "Our Vision",
        description: "To establish Imo State as a premier tourism destination in Nigeria, renowned for its rich cultural heritage, dynamic creative sector, and world-class hospitality, thereby attracting both local and international visitors while enhancing the state’s global image."
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