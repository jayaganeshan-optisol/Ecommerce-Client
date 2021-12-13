export type SignUpInputs = {
        name: string;
        email: string;
        password: string;
        role: string;
};

export type LoginInputs = {
        email: string;
        password: string;
};

export interface Iemail {
        email: string;
}