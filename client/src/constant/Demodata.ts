
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
        label: "+1-234-567-890",
        icon: PhoneCall,
        type: 'phone',
        value: '+1234567890',
    },
    {
        label: "Jalan simo gunung kramat timur no 10, surabaya",
        icon: LocationEdit,
        type: 'location',
        value: 'https://goo.gl/maps/xyz',
    },
    {
        label: "info@aoslandtc.com",
        icon: Mail,
        type: 'email',
        value: 'info@aoslandtc.com',
    },
]


export const headerSocialMenu: HeaderSocialMenu[] = [
    {
        href: 'https://www.facebook.com',
        icon: FaFacebookF
    },


    {
        href: 'https://www.linkedin.com',
        icon: FaLinkedinIn
    },
    {
        href: 'https://www.instagram.com',
        icon: IoLogoInstagram
    },
    {
        href: 'https://www.youtube.com',
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
    h1: "Global ocean cargo",
    h2: "Efficient on time",
    span: "and trusted",
  },
  {
    h1: "Export Products",
    h2: "Reliable shipment",
    span: "Export made easy",
  },
  {
    h1: "End-to-End Logistics",
    h2: "Doorstep delivery",
    span: "Seamless delivery",
  },
  {
    h1: "Ship & Chandler",
    h2: "Real-time updates",
    span: "Track with confidence",
  },
];


// compani logo slider 
export const companyLogos: companilogo[] = [
    { src: 'images/vendor-1.jpg', alt: "vendor-1" },
    { src: 'images/vendor-2.jpg', alt: "vendor-2" },
    { src: 'images/vendor-3.jpg', alt: "vendor-3" },
    { src: 'images/vendor-4.jpg', alt: "vendor-4" },
    { src: 'images/vendor-5.jpg', alt: "vendor-5" },
    { src: 'images/vendor-6.jpg', alt: "vendor-6" },
    { src: 'images/vendor-7.jpg', alt: "vendor-7" },
    { src: 'images/vendor-8.jpg', alt: "vendor-8" },
    { src: 'images/vendor-9.jpg', alt: "vendor-9" },
]


// services image
export const servicesimages: ServiceImage[] = [
    {
        id: 1,
        src: "/images/Ship.jpg",
        alt: "Ship at sea",
        overlay: "/images/29.jpg",
    },
    {
        id: 2,
        src: "/images/ggg.jpg",
        alt: "Container top",
        overlay: "/images/global.jpg",
    },
    {
        id: 3,
        src: "/images/505.jpg",
        alt: "Container ship bottom",
        overlay: "/images/importexport.jpg",
    },
];



// OUR SERVICES 




export const OurServicesData: BusinessItem[] = [
        {
        title: "Ship Chandler",
        description:
            "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
        icon: FaShip,
        Link: "/Ship-chandler"
    },
    {
        title: "Export",
        description:
            "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
        icon: FaExchangeAlt,
        Link: "/exports"
    },
    {
        title: "Import",
        description:
            "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
        icon: FaBoxOpen,
        Link: "/Import"
    },

    {
        title: " Suppliers",
        description:
            "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
        icon: FaStore,
        Link: "/Suppliers"
    },
    {
        title: "Others Services",
        description:
            "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
        icon: FaCogs,
        Link: "/Business"
    },

];


// OUR BUISNESS 
export const OurBuisnesssImage: BusinessImage[] =[
    {
        src: "/images/33.png",
        alt: "Business 1",
        title: "Business 1",
        des: "Description for Business 1",
        href:"/buisness1"
    },
    {
        src: "/images/port.jpg",
        alt: "Business 2",
        title: "Business 2",
        des: "Description for Business 1",
        href:"/buisness1"
    },
    {
        src: "/images/buisness1.jpg",
        alt: "Business 3",
        title: "Business 3",
        des: "Description for Business 1",
        href:"/buisness1"
    },
    {
        src: "/images/importexport.jpg",
        alt: "Business 4",
        title: "Business 4",
        des: "Description for Business 1",
        href:"/buisness1"
    },
    {
        src: "/images/port f.jpg",
        alt: "Business 5",
        title: "Business 5",
        des: "Description for Business 1",
        href:"/buisness1"
    },

]



// Owner Section Data
export const ownerData = {
  name: "John Doe",
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


export const segmentData:Segmentsuccess[] = [
        {
           
        title: "Ship Chandler",
            segments: [
                { label: "Spare Parts", value: 35, color: "#FACC15" },
                { label: "Food", value: 30, color: "#22C55E" },
                { label: "Spacy", value: 20, color: "#EF4444" },
                { label: "Others", value: 15, color: "#9CA3AF" },
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
                { label: "Spare Parts", value: 35, color: "#FACC15" },
                { label: "Food", value: 30, color: "#22C55E" },
                { label: "Spacy", value: 20, color: "#EF4444" },
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