//SEPERATOR
export type BasicPageType = {
    id: string
    title: string
    subtitle: string
    content: Content
}

export type BasicPage<T extends BasicPageType> = {
    sys: Sys
    metadata: Metadata
    fields: T
}

export interface PageTypeOne extends BasicPageType {
    image: Image
    titleColorHex: string
    subtitleColor:string
}

interface Image {
    metadata: Metadata
    sys: Sys
    fields: Fields
}

interface Sys {
    type: string
    id: string
    revision: number
    createdAt: string
    updatedAt: string
    publishedAt: string
    firstPublishedAt: string
    publishedVersion: number
    locale: string
}

interface Metadata {
    tags: unknown[]
    concepts: unknown[]
}

export interface Content {
    data: object
    content: Content[]
    nodeType: string
}
interface Fields {
    title: string
    description: string
    file: File
}

interface File {
    url: string
    details: Details
    fileName: string
    contentType: string
}

interface Details {
    size: number
    image: Image
}

interface Image {
    width: number
    height: number
}
