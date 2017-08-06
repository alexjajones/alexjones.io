export interface Post {
    fields: PostFields,
    sys: any
}

interface PostFields {
    content: string,
    opening: string,
    overview: string,
    tags: PostTag[]
}

export type PostTag = string