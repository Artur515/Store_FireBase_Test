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
    image: {
        required: true
    },
    title: {
        required: true,
        minLength: 20,
        maxLength: 60
    },
    description: {
        required: false,
        maxLength: 200
    },
    price: {
        required: true,
        // eslint-disable-next-line
        pattern: /^[1-9][0-9]{0,7}[\.]{0,1}[0-9]{0,1}[0-9]{0,1}$/,
        maxLength: 8
    },
    sale: {
        required: true,
        pattern: /(^[1-8][0-9]$)|(^90$)/,
    },
    saleDate: {
        required: true,
    },
    notRequired: {
        required: false
    }
}