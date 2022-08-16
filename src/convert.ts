class Result {
    constructor(
        public readonly success: string,
        public readonly error: string,
    ) {
    }
}

export class Options {
    constructor(
        public inline: boolean,
        public googleProtobufTimestamp: boolean,
        public mergeSimilarObjects: boolean,
    ) {
    }
}

export function convert(source: string, options: Options): Result {
    return new Result("", "");
}
