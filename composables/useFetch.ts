import { paths } from "~/api/endpoints";

const replaceResources = (path: string, params: Record<string, string>): string => {
    let newPath = path;
    for (const [key, value] of Object.entries(params)) {
        newPath = path.replace(`{${key}}`, value);
    }

    return newPath;
}

export const apiRequest = async <P extends keyof paths, M extends keyof paths[P]>(
    path: P,
    method: M,
    resources?: paths[P][M] extends { parameters: { path: infer R } } ? R : {},
    parameters?: paths[P][M] extends { parameters: { query?: infer Q } } ? Q : {},
    body?: paths[P][M] extends { requestBody?: { content: { "application/json": infer B } } } ? B : {},
): Promise<any> => {
    const fullPath = useRuntimeConfig().public.api.url + (resources ? replaceResources(path, resources) : path);
    return useFetch(fullPath, {
        method: method,
        params: parameters,
        body: body,
        credentials: "include"
    })
}
