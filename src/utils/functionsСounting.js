

export const salePercentage = (price = 0, sale = 0) => {
    const result = price / 100 * sale;
    if (result === 0) {
        return ''
    }
    return price - result
}


export const daysForSaleEnd = (sale, date, today) => {
    if (sale) {
        let saleDate = new Date(date)
        let todayDate = new Date(today)
        const res = saleDate.getTime() - todayDate.getTime();
        return Math.floor(res / 1000 / 60 / 60 / 24) + " days left"
    } else {
        return ''
    }
}

// need decompose to utils
// const salePercentage = (price = 0, sale = 0) => {
//     const result = price / 100 * sale;
//     if (result === 0) {
//         return ''
//     }
//     return price - result
// }
//
//
// const daysForSaleEnd = (date, today) => {
//     if (sale) {
//         let saleDate = new Date(date)
//         let todayDate = new Date(today)
//         const res = saleDate.getTime() - todayDate.getTime();
//         return Math.floor(res / 1000 / 60 / 60 / 24) + " days left"
//     } else {
//         return ''
//     }
// }
//
