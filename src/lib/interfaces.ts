export interface ILink {
    name?: string;
    href?: string; 
}

export interface IComment {
    username?: string;
    position?: string;
    avatarHref?: string;
    rateValue?: number;
    comment?: string;
}

export interface IImage {
    name?: string;
    href?: string;
}

export interface IService {
    iconName?: string;
    title?: string;
    body?: string;
    innerText?: string;
    href?: string;
    imageHref?: string;
    detail?: DetailService[];
    tabName?: string;
}

interface DetailService {
    type: "text" | "image";
    body: string;
}
export interface IProject {
    imageHref?: string;
    title?: string;
    description?: string;
}

export interface IPrice {
    name?: string;
    price?: number;
    features?: string[];
    purchaseLink?: string; 
}

export interface IFaq {
    question?: string;
    answer?: string;
}

export interface IStat {
    title?: string;
    description?: string;
}

export interface ICollaborate {
    title?: string;
    body?: string;
    imageHref?: string;
    username?: string;
    position?: string;
    companySvgLogoName?: string;
    companyImageLogoHref?: string;    
}

export interface IContact {
    iconName?: string;
    value?: string;
}