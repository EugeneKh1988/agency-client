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
    href?: string;
}
export interface IProject {
    imageHref?: string;
    title?: string;
    description?: string;
}