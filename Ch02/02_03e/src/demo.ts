interface Contact extends Address {
    id: number;
    name: ContactName;
    birthDate?: Date; // ? -> makes it optional
}

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}


let primaryContact: Contact = {
    // birthDate: new Date("01-01-1980"),
    id: 12345,
    name: "John Doe",
    line1: "John St.",
    line2: " ",
    province: "John's province",
    region: "John's region",
    postalCode: "John's postal code"
}

type ContactName = string
