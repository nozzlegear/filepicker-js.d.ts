
// Documentation: https://www.filestack.com/docs/file-ingestion/javascript-api/pick
export interface PickOptions
{
    mimetype?: string | string[];
    extension?: string | string[];
    /**
     * Limit uploads to be at most maxSize, specified in bytes. By default file size is not limited. For example, to make sure files are all less than 10MB, use "10485760" (10*1024*1024).
     */
    maxSize?: number;
    container?: "modal" | "window" | string;
    language?: string;

}

export interface FileBlob
{
    url: string;
    filename: string;
    mimetype: string;
    size: number;
    isWriteable: boolean;
}

export interface ProgressData
{
    progress: number;
    filename: string;
    mimetype: string;
    size: number;
}

export function pick(options: PickOptions, onSuccess: (blob: FileBlob) => void, onError: (error: Error) => void, onProgress: (data: ProgressData) => void): void;