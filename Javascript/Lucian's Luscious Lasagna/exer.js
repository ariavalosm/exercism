

// Good luck preparing some lasagna!


/**
34
 * The number of minutes it takes to prepare a single layer.
35
 */

export const EXPECTED_MINUTES_IN_OVEN = 40;

const PREPARATION_MINUTES_PER_LAYER = 2;

/**
40
 * Determines the number of minutes the lasagna still needs to remain in the
41
 * oven to be properly prepared.

 * @param {number} actualMinutesInOven

 * @returns {number} the number of minutes remaining
 */


export function remainingMinutesInOven(actualMinutesInOven) {
   return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

/**
51
 * Given a number of layers, determines the total preparation time.
52
 *
53
 * @param {number} numberOfLayers
54
 * @returns {number} the total preparation time
55
 */

export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}

/**
61
 * Calculates the total working time. That is, the time to prepare all the layers
62
 * of lasagna, and the time already spent in the oven.
63
 *
64
 * @param {number} numberOfLayers
65
 * @param {number} actualMinutesInOven
66
 * @returns {number} the total working time
67
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven; 
}

