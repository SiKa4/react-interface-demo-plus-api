export type BodyData = {
    max_pages: number,
    data: {
        id: number,
        name: string,
        filial: {
            id: number,
            name: string,
        }
        tt: {
            id: number,
            name: string
        },
        active: boolean,
        export: string[]
    }[]
};

export type BodyParams = {
    limit: number,
    page: number,
    name: string,
    filial: string,
    tt: string,
    active: string
};