import { HtmlHTMLAttributes, SVGProps } from "react"

// Generic
////

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
}

export type QuerySearchArgs = {
  term: Scalars["String"]
}

export type Node = {
  id: Scalars["ID"]
}

// AsyncStatus
/////

export const async_status = {
  idle: "idle",
  pending: "pending",
  success: "success",
  error: "error"
}

/**
 *
 */
export type AsyncStatus = typeof app_theme[keyof typeof app_theme]

// ColorScheme
////

export const app_theme = {
  Light: "light",
  Dark: "dark"
}

/**
 *
 */
export type AppTheme = typeof app_theme[keyof typeof app_theme]

// UserRole
////

export const user_role = {
  Admin: "admin",
  Member: "member",
  Guest: "guest"
}

/**
 *
 */
export type UserRole = typeof user_role[keyof typeof user_role]

export interface User {
  id: string
  role: UserRole
  email: string
  username?: string
}

// CMS Entities
////

export interface ResponsiveImageType {
  /** The aspect ratio (width/height) of the image */
  aspectRatio: number;
  /** A base64-encoded thumbnail to offer during image loading */
  base64?: string;
  /** The height of the image */
  height?: number;
  /** The width of the image */
  width: number;
  /** The HTML5 `sizes` attribute for the image */
  sizes?: string;
  /** The fallback `src` attribute for the image */
  src?: string;
  /** The HTML5 `srcSet` attribute for the image */
  srcSet?: string;
  /** The HTML5 `srcSet` attribute for the image in WebP format, for browsers that support the format */
  webpSrcSet?: string;
  /** The background color for the image placeholder */
  bgColor?: string;
  /** Alternate text (`alt`) for the image */
  alt?: string;
  /** Title attribute (`title`) for the image */
  title?: string;
};

export type Image = {
  alt?: string;
  format?: string;
  height?: number;
  width?: number;
  url?: string;
  responsiveImage?: ResponsiveImageType;
  focalPoint?: FocalPoint;
};

export type Author = {
  id?: string | number
  name?: string
  avatar?: Image
}

export interface Post {
  id?: string | number
  updatedAt?: string
  createdAt?: string
  firstPublishedAt?: string
  content?: string
  photos?: Image[]
  author?: Author
}


export type FocalPoint = {
  y?: number;
  x?: number;
};




/**
 * @deprecated
 */
export type NavigationContext = {
  navigation: {
    user: Route[]
    primary: Route[]
    social: Route[]
  }
}

/**
 * @deprecated
 */
export interface Route {
  name: string
  href: string
  icon?: string
  children?: Route[]
}

/**
 *@deprecated
 */
export interface IAction {
  id: number | string
  name: string
  href: string
}

/**
 * @deprecated
 */
export interface Listing extends IAction {
  icon?: any
  description?: string
  imageUrl?: string
}

export interface Stat {
  label: string
  value: string | number
}

export interface Profile {
  id: string
  avatar_url: string
  username: string
  website: string
  updated_at: string
}

export interface Feature {
  id?: string | number
  name: string
  description: string
  icon?: any
}

// export interface BlogPost {
//   id: number | string
//   title: string
//   href: string
//   date: string
//   datetime: string
//   category: { name: string; href: string; color?: number | string }
//   imageUrl?: string
//   description: string
//   author: {
//     name: string
//     imageUrl?: string
//     href?: string
//   }
//   readingTime: string
// }
