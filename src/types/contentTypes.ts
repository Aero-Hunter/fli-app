
export interface ContentResponse {
  sys: Sys
  total: number
  skip: number
  limit: number
  items: Item[]
  includes: Includes
}

// new stuff testing for page type 1
export interface ContentResponsePageType1 {
  sys: Sys
  total: number
  skip: number
  limit: number
  items: Item[]
  includes: Includes
}

export interface FieldsNew {
  content: ContentNew;
  title: string;
}

export interface ContentNew{
  content: object[];
  data:object;
  nodeType:string;
}
// end of new stuff

export interface Sys {
  type: string
}

export interface Item {
  metadata: Metadata
  sys: Sys2
  fields: Fields
}

export interface Metadata {
  tags: unknown[]
  concepts: unknown[]
}

export interface Sys2 {
  space: Space
  type: string
  id: string
  contentType: ContentType
  revision: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  firstPublishedAt: string
  publishedVersion: number
  environment: Environment
  locale: string
}

export interface Space {
  sys: Sys3
}

export interface Sys3 {
  type: string
  linkType: string
  id: string
}

export interface ContentType {
  sys: Sys4
}

export interface Sys4 {
  type: string
  linkType: string
  id: string
}

export interface Environment {
  sys: Sys5
}

export interface Sys5 {
  id: string
  type: string
  linkType: string
}

export interface Fields {
  title: string
  body: Body
}

export interface Body {
  data: unknown
  content: Content3[]
  nodeType: string
}


export interface Content3 {
  data: Data2
  content: Content4[]
  nodeType: string
}

export interface Data2 {
  target?: Target
}

export interface Target {
  metadata: Metadata2
  sys: Sys6
  fields: Fields2
}

export interface Metadata2 {
  tags: unknown[]
  concepts: unknown[]
}

export interface Sys6 {
  space: Space2
  type: string
  id: string
  revision: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  firstPublishedAt: string
  publishedVersion: number
  environment: Environment2
  locale: string
}

export interface Space2 {
  sys: Sys7
}

export interface Sys7 {
  type: string
  linkType: string
  id: string
}

export interface Environment2 {
  sys: Sys8
}

export interface Sys8 {
  id: string
  type: string
  linkType: string
}

export interface Fields2 {
  title: string
  description: string
  file: File
}

export interface File {
  url: string
  details: Details
  fileName: string
  contentType: string
}

export interface Details {
  size: number
  image: Image
}

export interface Image {
  width: number
  height: number
}

export interface Content4 {
  data: unknown
  marks: Mark[]
  value: string
  nodeType: string
}


export interface Mark {
  type: string
}

export interface Includes {
  Asset: Asset[]
}

export interface Asset {
  metadata: Metadata3
  sys: Sys9
  fields: Fields3
}

export interface Metadata3 {
  tags: unknown[]
  concepts: unknown[]
}

export interface Sys9 {
  space: Space3
  type: string
  id: string
  revision: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  firstPublishedAt: string
  publishedVersion: number
  environment: Environment3
  locale: string
}

export interface Space3 {
  sys: Sys10
}

export interface Sys10 {
  type: string
  linkType: string
  id: string
}

export interface Environment3 {
  sys: Sys11
}

export interface Sys11 {
  id: string
  type: string
  linkType: string
}

export interface Fields3 {
  title: string
  description: string
  file: File2
}

export interface File2 {
  url: string
  details: Details2
  fileName: string
  contentType: string
}

export interface Details2 {
  size: number
  image: Image2
}

export interface Image2 {
  width: number
  height: number
}
