import { body } from 'express-validator';

export const registerValidation = [
    body('password').isLength({ min: 5 }),
    body('fullName').isLength({ min: 5 }),
];
export const loginValidation = [
    body('fullName').isLength({ min: 5 }),
    body('password').isLength({ min: 5 }),
];