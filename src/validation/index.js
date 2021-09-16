export const validations = {
    email: {
        required: true,
        pattern: /^\S+@\S+$/i
    },
    password: {
        required: true,
        minLength: 3,
        maxLength: 20
    },
}