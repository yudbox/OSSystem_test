const ADD_CATALOG_ITEM = 'GOODS/ADD-CATALOG-ITEM';
const REMOVE_CATALOG_ITEM = 'GOODS/REMOVE-CATALOG-ITEM';


let initialState = {
    catalog: [
        { id: 0, goodsName: "Meizu C9 Pro 3/32GB", goodsPhoto: "https://i2.rozetka.ua/goods/13957076/meizu_c9_pro_3_32gb_black_images_13957076818.jpg", goodsPrice: "5000", goodsDescr: "Экран (5.45)/ Spreadtrum SC9832E (1.3 ГГц)/ основная камера: 13 Мп, фронтальная камера: 13 Мп/ RAM 3 ГБ/ 32 ГБ встроенной памяти + microSD (до 128 ГБ)/ 3G/ LTE/ GPS/ поддержка 2х SIM-карт (Nano-SIM)/ Andro 8.0 (Oreo) / 3000 мА*ч", goodsQuantity: 7 },
        { id: 1, goodsName: "Huawei P30 Lite 4/64GB Mnight Black", goodsPhoto: "https://i2.rozetka.ua/goods/15585287/copy_huawei_p30_lite_4_128gb_black_5dea1d33858b8_images_15585287768.jpg", goodsPrice: "7000", goodsDescr: "Экран (6.15)/ HiSilicon Kirin 710 (4 x 2.2 ГГц + 4 x 1.7 ГГц)/ тройная основная камера: 24 Мп + 8 Мп + 2 Мп, фронтальная камера: 32 Мп/ RAM 4 ГБ/ 64 ГБ встроенной памяти + microSD (до 512 ГБ)/ 3G/ LTE/ GPS/ GLONASS/ BDS/ поддержка 2х SIM-карт (Nano-SIM)/ Andro 9.0 (EMUI 9.0.1)/ 3340 мА*ч", goodsQuantity: 14 },
        { id: 2, goodsName: "Blackview A80 Pro 4/64GB Black", goodsPhoto: "https://i8.rozetka.ua/goods/19359993/blackview_6931548306108_images_19359993151.jpg", goodsPrice: "3000", goodsDescr: "Экран (6.49, 1520x720) / MediaTek Helio P25 (2.6 ГГц) / основная квадро-камера: 13 Мп + 2 Мп + 0.3 Мп + 0.3 Мп, фронтальна камера: 8 Мп / RAM 4 ГБ / 64 ГБ встроенной памяти + microSD (до 256 ГБ) / 3G / LTE / GPS / поддержка 2х SIM-карт (Nano-SIM) / Andro 9.0 (Pie) / 4680 мА*ч", goodsQuantity: 7 },
        { id: 3, goodsName: "Meizu C9 2/16GB Blue", goodsPhoto: "https://i2.rozetka.ua/goods/13418894/meizu_c9_2_16gb_blue_97846_images_13418894108.jpg", goodsPrice: "9000", goodsDescr: "Экран (5.45, 1440x720)/ Spreadtrum SC9832E (1.3 ГГц)/ основная камера: 13 Мп, фронтальная камера: 8 Мп/ RAM 2 ГБ/ 16 ГБ встроенной памяти + microSD (до 128 ГБ)/ 3G/ LTE/ GPS/ ГЛОНАСС/ поддержка 2х SIM-карт (Nano-SIM)/ Andro 8.0 (Oreo) / 3000 мА*ч", goodsQuantity: 8},
        { id: 4, goodsName: "Huawei Y5 2019 Black Faux Leather", goodsPhoto: "https://i2.rozetka.ua/goods/17486158/huawei_y5_2019_black_faux_leather_images_17486158645.jpg", goodsPrice: "7000", goodsDescr: "Экран (6.15, 2312x1080)/ HiSilicon Kirin 710 (4 x 2.2 ГГц + 4 x 1.7 ГГц)/ тройная основная камера: 24 Мп + 8 Мп + 2 Мп, фронтальная камера: 32 Мп/ RAM 4 ГБ/ 64 ГБ встроенной памяти + microSD (до 512 ГБ)/ 3G/ LTE/ GPS/ GLONASS/ BDS/ поддержка 2х SIM-карт (Nano-SIM)/ Andro 9.0 (EMUI 9.0.1)/ 3340 мА*ч", goodsQuantity: 15 }
    ]

}


const goodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_CATALOG_ITEM:
            return {
                ...state,
                catalog: [...state.catalog.filter(item=> item.id !== action.id)]
            }

        case ADD_CATALOG_ITEM:
            return {
                ...state,
                catalog: [...state.catalog, action.data]
            }

        // case REMOVE_FAVORITE_PERSON_ID:
        //     return {
        //         ...state,
        //         favorites: [...state.favorites.filter(person=> person.id !== action.personId)]
        //     }


        default:
            return state;
    }
}


export const addCatalogItem = (data) => ({ type: ADD_CATALOG_ITEM, data })
export const removeCatalogItem = (id) => ({ type: REMOVE_CATALOG_ITEM, id })



export const getCharacters = () => {

    return (dispatch) => {


        
    }
}


export default goodsReducer;