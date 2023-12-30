import { type } from "os";

export type Char = {
    value: string;
    fontSize: number;
    fontFamily: string;
    color: string;
    bold: boolean;
};
export type Location = {
    XStart: number;
    YStart: number;
    XEnd: number;
    YEnd: number;
};
export type Block = Location & {
    id: string;
};
export type TextBlock = Block & {
    type: "Text";
    chars: Array<Char>;
};
export type ImageBlock = Block & {
    type: "Image";
    data: string;
};
export type ArtObject = Block & {
    type: "ArtObject";
};
export type Item = Array<TextBlock | ImageBlock | ArtObject>;
export type Doc = {
    items: Array<Item>;
};
