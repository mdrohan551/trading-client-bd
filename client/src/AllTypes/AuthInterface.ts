

export interface User {
  username: string;
  password: string;
  role: "admin" | "user" | "superAdmin";
}



// slice type 
export interface AuthType {
  role: string | null;
  isAuthenticated: boolean;
  error: string | null;
}


// protection router type 
export interface ProtectedRouteProps {
  allowedRoles: string[];
  element: React.ReactElement;
}


// menu types 
export interface Resubment {
  href: string;
  anchor: string;

}
export interface subMenuItem {
  href: string;
  anchor: string;
  accordion?: boolean;
  resubmenu?: Resubment[];
}
export interface MenuItem {
  title: string;
  icon: React.ElementType;
  href?: string;
  accordion?: boolean;
  pages?: subMenuItem[]

}

// header contact menu type 
export interface HeaderContact<a> {
  label: string
  icon: React.ElementType
  type: a
  value: string
}
export interface HeaderSocialMenu {
  href: string
  icon: React.ElementType
}

// slider interface slider 
export interface ImageSliderProps {
  images: string[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}
export interface SliderText {
  h1: string;
  h2: string;
  span?: string;
}



export interface companilogo {
  src: string;
  alt: string;
}


// services image type
export interface ServiceImage {
  id: number;
  src: string;
  alt: string;
  overlay: string
}

// OUR SERVICES
export interface BusinessItem {
  title: string;
  description: string;
  icon: React.ElementType;
  Link: string;
}

// OUR BUISNESS 
export interface BusinessImage {
  src: string;
  alt: string;
  title: string;
  des: string;
  href: string;
}

// Owner Section
export interface OwnerData {
  name: string;
  title: string;
  image: string;
  advice: string;
  status: "online" | "offline";
}

export interface FormField {
  label: string;
  name: string;
  type: "text" | "email" | "textarea" | "select";
  options?: { label: string; value: string }[]; // select type options
  placeholder: string;
}

// src/constant/ExtraInfoData.ts

export interface ExtraInfoItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  phone?: string;
  highlight?: boolean; // for last blue box
}


// our success 
// 🟢 Interface Definitions
export interface SegmentItem {
  label: string;
  value: number;
  color: string;
}

export interface Segmentsuccess {
  title: string;
  segments: SegmentItem[];
}
