import { menu } from "./TempAPI/MenuItemsAPI"

export const getMenu = async () => {
    try {
        const response = await menu //axios.get('menu')
        return response //response.data
    } catch (error){
        console.log(error)
    }
} 