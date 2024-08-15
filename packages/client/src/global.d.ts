declare interface IHttpError {
    statusCode: number | string;
    message: string;
}

declare interface IClassName {
    className?: string;
}

declare interface IPageProps<P = Record<string, string>, S = { [key: string]: string | string[] | undefined }> {
    params: P;
    searchParams: S;
}
