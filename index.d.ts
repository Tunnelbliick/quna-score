/**
 *
 * @param unranked Score to be stored in the database
 * @param {number} pp How much pp the score is worth
 * @returns {boolean} returns true if successfull
 */
declare const submit: (unranked: any, pp: number) => boolean;
/**
 *
 * @param {number} user_id osu! id of the user
 * @param {number} mapid id of the beatmap
 * @param {"osu"|"taiko"|"fruits"|"mania"} mode mode to look for
 * @returns {any[]} 
 */

declare const load: (user_id: number, mapid: number, mode: "osu"|"taiko"|"fruits"|"mania") => any[];

export { submit, load };
