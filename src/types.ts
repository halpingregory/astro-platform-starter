export type BlobParameterProps = {
    seed: number;
    size: number;
    edges: number;
    growth: number;
    name: string;
    colors: string[];
};

export type BlobProps = {
    svgPath: string;
    parameters: BlobParameterProps;
};

export type JobNote = {
    id: string;
    text: string;
    createdAt: string; // ISO string
};

export type JobAttachment = {
    id: string;
    fileName: string;
    contentType: string;
    dataUrl: string; // base64 data URL for simplicity
    annotations?: string[]; // data URLs of annotated images
};

export type Job = {
    id: string;
    title: string;
    workerName?: string;
    scheduledDate: string; // ISO date (yyyy-mm-dd)
    status: 'planned' | 'in_progress' | 'completed' | 'cancelled';
    notes: JobNote[];
    priceQuoteCents?: number;
    currency?: string; // e.g., USD
    attachments?: JobAttachment[];
    updatedAt: string; // ISO datetime
    createdAt: string; // ISO datetime
};

export type JobUpsertRequest = Omit<Job, 'createdAt' | 'updatedAt'> & { createdAt?: string; updatedAt?: string };

export type JobListResponse = {
    jobs: Pick<Job, 'id' | 'title' | 'scheduledDate' | 'status' | 'priceQuoteCents' | 'currency' | 'updatedAt'>[];
};
