export const products = async () => {

    const response = await fetch('./prod.json')
    const data = await response.json()

    return data
}
