import Link from "next/link";
import Image from "next/image";


interface Props {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}
const EventCard = ({ title, image, slug, location, date, time}: Props) => {
  return (
    <>
     <Link href={`/events/${slug}`} id="event-card ">
     <Image src={image} alt={title} width={410} height={300} className="poster"/>
    
      <div className="flex flex-row gap-2 mt-4" >
        <Image src="/icons/pin.svg" alt="location" width={14} height={14} />
             
             <p className="text-[12px]">{location}</p>
      </div>

       <p className="text-[20px] font-semibold line-clamp-1 mt-1 mb-1">{title}</p>


        <div className="text-light-200 flex flex-col sm:flex-row items-start sm:items-center sm:gap-4">
      <div className="flex items-center gap-2 text-center">
        <Image src="/icons/calendar.svg" alt="date" width={14} height={14} />
        <p className="text-sm text-[12px]">{date}</p>
      </div>

      <div className="flex items-center gap-2">
        <Image src="/icons/clock.svg" alt="time" width={14} height={14} />
        <p className="text-sm text-[12px]">{time}</p>
      </div>
    </div>

     </Link>
    </>
  );
};

export default EventCard;