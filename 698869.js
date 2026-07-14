// 698869.js – Engine-Formel

import { CACHE, BENCH } from "./core.js";

export function ENGINE698869(pos, wechsel, t, go, le) {

    const z = pos * wechsel * t * go * le;

    CACHE.pos = pos;
    CACHE.wechsel = wechsel;
    CACHE.t = t;
    CACHE.go = go;
    CACHE.le = le;
    CACHE.z = z;

    BENCH.POS.push(pos);
    BENCH.WECHSEL.push(wechsel);
    BENCH.T.push(t);
    BENCH.Z.push(z);

    return { pos, wechsel, t, go, le, z };
}
