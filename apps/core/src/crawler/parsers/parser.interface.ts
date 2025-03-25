export interface Parser<T = any> {
    parse(html: string): T;
}
