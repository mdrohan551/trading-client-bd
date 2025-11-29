
import type { BusinessImage, BusinessItem, companilogo, ExtraInfoItem, FormField, HeaderContact, HeaderSocialMenu, MenuItem, Segmentsuccess, ServiceImage, SliderText, User } from "../AllTypes/AuthInterface";
import { Home, Info, PackageCheck, UploadCloud, DownloadCloud, Settings, Image, LocationEdit, PhoneCall, Mail } from "lucide-react";
import { IoLogoInstagram, IoLogoYoutube } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn, FaShip, FaExchangeAlt, FaStore, FaCogs, FaBoxOpen } from "react-icons/fa";


// ← Lucide icons import

export const demoUser: User[] = [
    {
        username: "admin",
        password: "admin123",
        role: "admin"
    },
    {
        username: "user",
        password: "user123",
        role: "user"
    },
    {
        username: "superAdmin",
        password: "superAdmin123",
        role: "superAdmin"
    }
]


export const headerContact: HeaderContact<'phone' | 'location' | 'email'>[] = [

    {
        label: " M.Q PLAZA, 1ST FLOOR, 36 NO. WARD, FAKIRHAT, BANDAR, CHATTOGRAM-4100, BANGLADESH.",
        icon: LocationEdit,
        type: 'location',
        value: 'https://maps.app.goo.gl/dJmhaM8J52bmtTJYA',
    },
    {
        label: "info@aoslandtc.com",
        icon: Mail,
        type: 'email',
        value: 'info@aoslandtc.com',
    },
    {
        label: "+880 1886-337477",
        icon: PhoneCall,
        type: 'phone',
        value: '+8801886337477',
    },
]


export const headerSocialMenu: HeaderSocialMenu[] = [
    {
        href: 'https://www.facebook.com/share/1AXWpYQNBs/',
        icon: FaFacebookF
    },


    {
        href: 'https://www.linkedin.com/company/aoslandtradingcompany5131/',
        icon: FaLinkedinIn
    },
    {
        href: 'https://www.instagram.com/sumanhossainbusinessman?igsh=MW50OHkyNHp0bmllYg==',
        icon: IoLogoInstagram
    },
    {
        href: 'https://www.youtube.com/@AOSLanDTradingCompany',
        icon: IoLogoYoutube
    },

]



// menubar item 
export const topMenu: MenuItem[] = [
    {
        title: "Home",
        icon: Home,
        href: "/",
        accordion: false,
    },
    {
        title: "About",
        icon: Info,
        href: "/about",
        accordion: false,
    },
    {
        title: "Ship Chandler",
        icon: PackageCheck, // changed from Info
        href: "/ship-chandler",
        accordion: true,
        pages: [
            {
                href: `/ship-chandler/domestic-electronics`,
                anchor: `Electronics`,
                accordion: true,
                resubmenu: [
                    {
                        href: `/ship-chandler/domestic-electronics/phones`,
                        anchor: `Phones`
                    },
                    {
                        href: `/ship-chandler/domestic-electronics/computers`,
                        anchor: `Computers`
                    }
                ]
            },
            {
                href: `/ship-chandler/domestic-furniture`,
                anchor: `Furniture`,
                accordion: true,
                resubmenu: [
                    {
                        href: `/ship-chandler/domestic-furniture/tables`,
                        anchor: `Tables`
                    },
                    {
                        href: `/ship-chandler/domestic-furniture/chairs`,
                        anchor: `Chairs`
                    },
                    {
                        href: `/ship-chandler/domestic-furniture/tables`,
                        anchor: `Tables`
                    },
                    {
                        href: `/ship-chandler/domestic-furniture/chairs`,
                        anchor: `Chairs`
                    },
                    {
                        href: `/ship-chandler/domestic-furniture/tables`,
                        anchor: `Tables`
                    },
                    {
                        href: `/ship-chandler/domestic-furniture/chairs`,
                        anchor: `Chairs`
                    },
                ]
            },
            {
                href: `/ship-chandler/domestic-tools`,
                anchor: `Tools`,
                accordion: true,
                resubmenu: [
                    {
                        href: `/ship-chandler/domestic-tools/power-tools`,
                        anchor: `Power Tools`
                    },
                    {
                        href: `/ship-chandler/domestic-tools/hand-tools`,
                        anchor: `Hand Tools`
                    }
                ]
            },
            {
                href: `/ship-chandler/domestic-kitchen`,
                anchor: `Kitchen`,
                accordion: true,
                resubmenu: [
                    {
                        href: `/ship-chandler/domestic-kitchen/appliances`,
                        anchor: `Appliances`
                    },
                    {
                        href: `/ship-chandler/domestic-kitchen/utensils`,
                        anchor: `Utensils`
                    }
                ]
            },
            {
                href: `/ship-chandler/domestic-cleaning`,
                anchor: `Cleaning`,
                accordion: true,
                resubmenu: [
                    {
                        href: `/ship-chandler/domestic-cleaning/chemicals`,
                        anchor: `Chemicals`
                    },
                    {
                        href: `/ship-chandler/domestic-cleaning/tools`,
                        anchor: `Tools`
                    }
                ]
            }
        ]
    },
    {
        title: "Exports",
        icon: UploadCloud, // changed
        href: "/exports",
        accordion: false,

    },
    {
        title: "Import",
        icon: DownloadCloud, // changed
        href: "/import",
        accordion: false,

    },
    {
        title: "Services",
        icon: Settings, // changed
        href: "/services",
        accordion: false,
    },
    {
        title: "Gallery",
        icon: Image, // changed
        href: "/gallery",
        accordion: false,
    },

];




// slider images 
export const images: string[] = [

    'images/13.jpg',
    'images/17.jpg',
    'images/29.jpg',
    'images/19.jpg',
]

export const sliderTexts: SliderText[] = [
    {
        h1: "The Largest Global ",
        h2: "Ship Chandler ",
        span: "Network",
    },
    {
        h1: "Your Trusted Global",
        h2: " Export Partner ",
        span: " for Every Industry",
    },
    {
        h1: "Smart Supply",
        h2: "Chain Solutions",
        span: "Delivered Fast",
    },

    {
        h1: "Your World-wide",
        h2: "Marine Support &",
        span: "Logistics Solutions",
    },
];



// compani logo slider 
export const companyLogos: companilogo[] = [
    { src: 'images/Akij.png', alt: "vendor-1" },
    { src: 'images/Anglo-Eastern.png', alt: "vendor-2" },
    { src: 'images/Bahri.png', alt: "vendor-3" },
    { src: 'images/BlueWave.png', alt: "vendor-4" },
    { src: 'images/BSM.png', alt: "vendor-5" },
    { src: 'images/CSM.png', alt: "vendor-6" },
    { src: 'images/EagleBulkc.png', alt: "vendor-7" },
    { src: 'images/eagle_navigation_trading.png', alt: "vendor-8" },
    { src: 'images/eagle_shipping_ltd.png', alt: "vendor-9" },
    { src: 'images/Eagle-Shipping-.png', alt: "vendor-10" },
    { src: 'images/FM.png', alt: "vendor-11" },
    { src: 'images/HMM.png', alt: "vendor-12" },
    { src: 'images/images.png', alt: "vendor-13" },
    { src: 'images/logo-sms-new.png', alt: "vendor-14" },
    { src: 'images/Mideast.png', alt: "vendor-15" },
    { src: 'images/Seaspan-.png', alt: "vendor-16" },
    { src: 'images/ss.png', alt: "vendor-17" },
    { src: 'images/TheGESL.png', alt: "vendor-18" },
    { src: 'images/Vanguard.png', alt: "vendor-19" },
    { src: 'images/vasileiadis_group.png', alt: "vendor-20" },
    { src: 'images/Wilhelmsen.png', alt: "vendor-21" },
]



// ডেটার কোনো পরিবর্তন দরকার নেই, আপনার দেওয়া ডেটা ব্যবহার হবে:
export const servicesimages: ServiceImage[] = [
    {
        id: 1,
        src: "/images/Ship.jpg",
        alt: "Main Ship at sea",
        overlay: "/images/29.jpg",
        video: "https://res.cloudinary.com/dtsnbnrwf/video/upload/v1764418928/main_ibzjau.mp4",
    },
    {
        id: 2,
        src: "/images/ggg.jpg",
        alt: "Container top",
        overlay: "/images/global.jpg",
        video: "https://res.cloudinary.com/dtsnbnrwf/video/upload/v1764418471/Exportmall_limzhp.mp4 ",
    },
    {
        id: 3,
        src: "/images/505.jpg",
        alt: "Container ship bottom",
        overlay: "/images/importexport.jpg",
        video: "https://res.cloudinary.com/dtsnbnrwf/video/upload/v1764419274/Ship_Chandler_2_rl3fdc.mp4",
    },
];




// OUR SERVICES 




export const OurBusinesssData: BusinessItem[] = [
    {
        id: 1,
        title: "Ship Chandler",
        description: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
        icon: FaShip,
        Link: "/business-details/1",
    },
    {
        id: 2,
        title: "Export",
        description: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
        icon: FaExchangeAlt,
        Link: "/business-details/2",
    },
    {
        id: 3,
        title: "Import",
        description: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
        icon: FaBoxOpen,
        Link: "/business-details/3",
    },
    {
        id: 4,
        title: "Suppliers",
        description: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
        icon: FaStore,
        Link: "/business-details/4",
    },
    {
        id: 5,
        title: "Other Services",
        description: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
        icon: FaCogs,
        Link: "/business-details/5",
    },
];




// Owner Section Data
export const ownerData = {
    name: "Mr. Suman Hossain",
    title: "Founder & CEO",
    image: "/images/Suman.jpg",
    advice:
        "Our mission is to make global trade simpler, faster, and more reliable through technology and innovation. Transparency and trust are at the core of every shipment we manage.",
    status: "online",
};

export const formFields: FormField[] = [
    {
        label: "Full Name",
        name: "name",
        type: "text",
        placeholder: "Enter your full name",
    },
    {
        label: "Email",
        name: "email",
        type: "email",
        placeholder: "Enter your email address",
    },
    {
        label: "Service Type",
        name: "serviceType",
        type: "select",
        placeholder: "Select Service Type",
        options: [
            { label: "Import", value: "import" },
            { label: "Export", value: "export" },
            { label: "Ship Chandler", value: "ship-chandler" },
            { label: "other", value: "other" },
        ],
    },
    {
        label: "Message",
        name: "message",
        type: "textarea",
        placeholder: "Describe your shipping needs...",
    },
];



export const ExtraInfoData: ExtraInfoItem[] = [
    {
        id: 1,
        icon: "↩",
        title: "Reply within 24 hours",
        description: "Get your quotation processed faster and easier.",
    },
    {
        id: 2,
        icon: "📞",
        title: "24/7 Phone Support",
        description: "Call us anytime for inquiries or support.",
    },
    {
        id: 3,
        icon: "📞",
        title: "Call to ask any question",
        description: "+880-1886337477",
        phone: "+880-1886337477",
        highlight: true,
    },
];


// our success map component
export const MapData = {
    locationName: "Fakirhat MQ Plaza",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.123456789!2d91.8052902!3d22.3160123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acdf3109109833%3A0x81e87d5a9230dcd6!2sFakirhat%20MQ%20Plaza!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd",
};


export const segmentData: Segmentsuccess[] = [
    {

        title: "Ship Chandler",
        segments: [
            { label: "Tanker", value: 20, color: "#FACC15" },
            { label: "Bulker", value: 40, color: "#22C55E" },
            { label: "Container", value: 30, color: "#EF4444" },
            { label: "Others", value: 10, color: "#9CA3AF" },
        ],
    },
    {
        title: "Export",
        segments: [
            { label: "Germants", value: 55, color: "#FACC15" },
            { label: "Jute", value: 30, color: "#22C55E" },
            { label: "Others", value: 15, color: "#EF4444" },
        ],
    },
    {
        title: "Import",
        segments: [
            { label: "Jute", value: 25, color: "#FACC15" },
            { label: "Garments", value: 35, color: "#22C55E" },
            { label: "Vegetable", value: 25, color: "#EF4444" },
            { label: "Others", value: 15, color: "#9CA3AF" },
        ],
    },
    {
        title: "Others",
        segments: [
            { label: "Suppliers", value: 30, color: "#FACC15" },
            { label: "C & F Services", value: 15, color: "#22C55E" },
            { label: "Logistics", value: 15, color: "#EF4444" },
            { label: "Freight Forwarder", value: 20, color: "#3B82F6" },
            { label: "First Class Contractor", value: 20, color: "#9CA3AF" },
        ],
    },
];