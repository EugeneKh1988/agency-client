import { Dispatch, SetStateAction } from "react";

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
    id: number;
    imageHref?: string;
    title?: string;
    description?: string;
    client?: string;
    duration?: string;
    projectHref?: string;
    details?: IProjectDetail[];
}

interface IProjectDetail {
    type: "text" | "image" | "title",
    value: string;
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
    group?: string;
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

export interface IPosition {
    iconName?: string;
    name: string;
    description?: string;
}

export interface IBlock {
    type: "text" | "title" | "subtitle" | "list";
    value: string | string[];
}

export interface ILoginError {
    name?: string[];
    email?: string[];
    password?: string[];
    password_confirmation?: string[];
    current_password?: string[];
}

export interface IUser {
    id?: number;
    name?: string;
    email?: string;
    email_verified_at?: string;
}

export interface ITeamItem {
    id?: number;
    name?: string;
    imageHref?: string;
    position?: string;
}

export interface ITeam {
    workers: ITeamItem[];
    count: number;
}

export interface ITeamError {
    id?: string[];
    name?: string[];
    position?: string[];
    photo?: string[];
    count?: string[];
    skip?: string[];
}

export interface ICreateWorker {
    setErrors: Dispatch<SetStateAction<ITeamError>>;
    setStatus: Dispatch<SetStateAction<string | null>>;
    name: string;
    position: string;
    photo: File | null;
}

export interface IUpdateWorker {
    setErrors: Dispatch<SetStateAction<ITeamError>>;
    setStatus: (status: string | null) => void;
    id: number;
    name: string;
    position: string;
    photo: File | null;
}

export interface IDeleteWorker {
    setErrors: Dispatch<SetStateAction<ITeamError>>;
    setStatus: (status: string | null) => void;
    id: number;
}

// messages api
export interface IMessageItem {
    id?: number;
    name?: string;
    email?: string;
    phone?: string;
    question?: string;
    answer?: string;
    was_answered?: boolean;
    user_id?: number;
    created_at?: string;
}

export interface IMessage {
    messages: IMessageItem[];
    count: number;
}

export interface IMessageError {
    id?: string[];
    name?: string[];
    email?: string[];
    phone?: string[];
    question?: string[];
    create_sort?: string[];
    answered?: string[];
    count?: string[];
    skip?: string[];
    captcha?: string[];
}

export interface ICreateMessage {
    setErrors: Dispatch<SetStateAction<IMessageError>>;
    setStatus: Dispatch<SetStateAction<string | null>>;
    name: string;
    email: string;
    phone?: string;
    question: string;
    captcha?: string;
}

export interface IUpdateMessage {
    setErrors: Dispatch<SetStateAction<IMessageError>>;
    setStatus: (status: string | null) => void;
    id: number;
    name?: string;
    email?: string;
    phone?: string;
    question?: string;
    answer?: string;
    was_answered?: boolean;
}

export interface IDeleteMessage {
    setErrors: Dispatch<SetStateAction<IMessageError>>;
    setStatus: (status: string | null) => void;
    id: number;
}

// subscription api types

export interface ISubscriptionError {
    email?: string[];
    verify?: string[];
}

export interface ISubscriptionRequest {
    setErrors: Dispatch<SetStateAction<ISubscriptionError>>;
    setStatus: Dispatch<SetStateAction<string | null>>;
    email: string;
}