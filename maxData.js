"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const textArea = {
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
const img = {
    id: 'id1',
    XStart: 200,
    YStart: 200,
    XEnd: 500,
    YEnd: 500,
    type: "Image",
    data: 'http://',
};
const art = {
    id: 'id3',
    XStart: 200,
    YStart: 200,
    XEnd: 500,
    YEnd: 500,
    type: "ArtObject",
};
const document = {
    items: [
        [textArea],
        [img, art],
    ],
};
//# sourceMappingURL=maxData.js.map