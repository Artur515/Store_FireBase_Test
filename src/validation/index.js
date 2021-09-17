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
        required: false,
        pattern: /(^[1-8][0-9]$)|(^90$)/,
        maxLength: 2
    },
    saleData: {
        required: true,
        date: Date.now()
    }

}