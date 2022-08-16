import * as test from "tape";

import {convert, Options} from "../convert";

test("convert test", (t) => {
    const options = new Options(false, false, false);

    function assert(xml: string, protobuf: string) {
        t.equal(convert(xml, options).success, protobuf);
    }

    // primitives
    {
        // empty
        {
            const xml = "";

            assert(xml, "")
        }
    }

    t.end();
});