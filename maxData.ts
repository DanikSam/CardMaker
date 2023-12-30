import {
    Char,
    TextBlock,
    ImageBlock,
    ArtObject,
    Doc
}
    from "./typesOfData"
const textArea: TextBlock = {
    id: "id2",
    XStart: 200,
    YStart: 200,
    XEnd: 500,
    YEnd: 500,
    type: "Text",
    chars: [{
        value: "t",
        fontSize: 14,
        fontFamily: "Times New Roman",
        color: "#000000",
        bold: false,
    }, {
        value: "e",
        fontSize: 14,
        fontFamily: "Times New Roman",
        color: "#000000",
        bold: false,
    }]
};
const img: ImageBlock = {
    id: 'id1',
    XStart: 200,
    YStart: 200,
    XEnd: 500,
    YEnd: 500,
    type: "Image",
    data: 'http://',
};
const art: ArtObject = {
    id: 'id3',
    XStart: 200,
    YStart: 200,
    XEnd: 500,
    YEnd: 500,
    type: "ArtObject",
};
const document: Doc = {
    items: [
        [textArea],
        [img, art],
    ],
};