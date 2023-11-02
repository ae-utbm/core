/* istanbul ignore file */

export const USER_GENDER = ['OTHER', 'MALE', 'FEMALE'] as const;
export type genders = (typeof USER_GENDER)[number];
