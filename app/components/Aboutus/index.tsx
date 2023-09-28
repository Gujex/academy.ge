import Image from "next/image";
import Link from "next/link";
import {ChevronRightIcon} from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string | JSX.Element;
    link: string;
}
//
const Aboutdata: datatype[] = [
    {
        heading: "შესახებ.",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'ჩვენი მიზანია: ხელმისაწვდომი გავხადოთ\n' +
            'განათლება რეგიონებსა და სოფლებში მცხოვრებ ახალგაზრდებისთვის.',
        link: 'გაიგე მეტი'
    },
    {
        heading: "სერვისები",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: <span>ჩვენს აკადემიაში შეისწავლი პროგრამირებისა და 3D დიზაინის მიმართულებებს.<br/> <br/> <br/></span>,
        link: 'გაიგე მეტი'
    },
    {
        heading: "გამოცდილება",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'ჩვენი ყველა მენტორი ძალიან გამოცდილია საკუთარ სფეროში, ამიტომ მათ ზუსტად იციან რა გჭირდება შენ.',
        link: 'გაიგე მეტი',
    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-[#4034d2] rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image"
                       className="absolute bottom-1 -left-20"/>
                <h3 className='text-center text-white text-lg tracking-widest'>ჩვენს შესახებ</h3>
                <h4 className='text-center text-4xl text-white lg:text-65xl font-bold'>გაიგე მეტი, თუ ვინ ვართ.</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i}
                             className='hover:bg-navyblue hover:cursor-pointer bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5"/>
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                            <Link href="#"
                                  className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20}/>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;
