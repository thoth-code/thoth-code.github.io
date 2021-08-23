export function errors(msg: string) {
    return (err: any) => {
        alert(msg);
        console.error(err);
    }
}

export function throwResponseError(res: Response) {
    throw new Error(res.status + " : " + res.statusText);
}