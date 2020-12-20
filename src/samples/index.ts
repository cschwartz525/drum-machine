import claps from './claps';
import highhats from './highhats';
import kicks from './kicks';
import snares from './snares';

export const getFlattenedSamplesMap = (): Record<string, string> => {
    return [
        ...claps,
        ...highhats,
        ...kicks,
        ...snares
    ].reduce((result, item) => ({
        ...result,
        [item.key]: item.file
    }), {});
}

export default {
    claps,
    highhats,
    kicks,
    snares
};