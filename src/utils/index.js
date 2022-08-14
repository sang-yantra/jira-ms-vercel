import { parse } from 'uuid';

/**
 * Function to convert string to Buffer Array
 * @param {String} val 
 * @returns Buffer Array
 */
export const uuidStringToBuffer = (val) => {
    return Buffer.from(parse(val))
}