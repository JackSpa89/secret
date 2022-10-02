type plusOne = {
    name: string;
}

export type Guest = {
    name: string;
    allergies: string;
    plusOne: plusOne[]
    willAttend: boolean;
}
