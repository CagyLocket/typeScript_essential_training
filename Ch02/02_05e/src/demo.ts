interface Contact {
    id: number;
    name: string;
    clone(name: string, id: number): Contact;
}

function clone(source: { name: string; id: number }): Contact {
    return Object.apply({}, source);
}

const a: { name: string; id: number } = { id: 123, name: "Homer Simpson"};
const b = clone(a);

