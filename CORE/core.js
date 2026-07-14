// core.js – 698869 Stations-System (RAW, gültig)

export const STATION = {
    POS: 6,        // Position
    WECHSEL: 9,    // Wechsel
    T: 8,          // Zeit
    GO: 8,         // Aktivierung
    LE: 6,         // Abschluss
    Z: 9           // Ergebnis
};

export const PIPELINE = [
    "POS",
    "WECHSEL",
    "T",
    "GO",
    "LE",
    "Z"
];

export const CACHE = {
    pos: null,
    wechsel: null,
    t: null,
    go: null,
    le: null,
    z: null
};

export const BENCH = {
    POS: [],
    WECHSEL: [],
    T: [],
    Z: []
};
