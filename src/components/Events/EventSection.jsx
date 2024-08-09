import React, { useRef } from 'react';

const EventCard = ({ image, title, date }) => {
    return (
            <div className="w-62.5 p-4 bg-gray-800 rounded-lg">
            <div className='w-62.5 h-62.5'>
                <img src={image} alt={title} className="w-full h-full object-cover rounded-md mb-2" />
            </div>
            <h3 className="text-sm font-bold text-white">{title}</h3>
            <p className="text-gray-400 text-sm font-normal">{date}</p>
        </div>
    );
};

const events = [
    {
        image: '/assets/EventImage/e1.jpeg',
        title: 'Mini Degree',
        date: '26-29 April 2024',
    },
    {
        image: '/assets/EventImage/e2.jpeg',
        title: 'Admission Talk',
        date: '19 April 2024',
    },
    {
        image: '/assets/EventImage/e3.jpeg',
        title: 'Open House',
        date: '23 Maret 2024',
    },
    {
        image: '/assets/EventImage/e4.jpeg',
        title: 'Career Launchpad: Empowering Vocational Future',
        date: '1 Maret 2024',
    },
    {
        image: '/assets/EventImage/e5.jpeg',
        title: 'Mini Degree 3.0',
        date: '26-29 April 2024',
    },
];

const repeatEvents = (events, times) => {
    let repeated = [];
    for (let i = 0; i < times; i++) {
        repeated = [...repeated, ...events];
    }
    return repeated;
};

const EventSection = () => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
    };


    const repeatedEvents = repeatEvents(events, 3);

    return (
        <section className="pt-[140px] lg:pt-[180px] min-h-[560px] bg-secondary px-5 pb-10 lg:px-20">
            <div className="flex justify-between items-center border-b-2 border-b-line1 pb-2.5">
                <div className="text-white w-72 md:w-full">
                    <h5 className="text-2xl font-semibold">Event Kami</h5>
                    <h5 className="text-base font-normal">Informasi terbaru tentang Event Universitas Sinergi</h5>
                </div>
                <div className="flex justify-center items-center gap-2.5">
                    <button onClick={scrollLeft}>
                        <i className='bx bx-left-arrow-circle text-white text-3xl'></i>
                    </button>
                    <button onClick={scrollRight}>
                        <i className='bx bx-right-arrow-circle text-white text-3xl'></i>
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto flex scrollbar-hide mt-5" ref={scrollContainerRef}>
                <div className="flex space-x-4">
                    {repeatedEvents.map((event, index) => (
                        <EventCard key={index} image={event.image} title={event.title} date={event.date} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventSection;
