export const addProduct = (product) => {
    return {
        type: "ADD_PRODUCT",
        payload: product,
    }
};

export const editProduct = (product) => {
    return {
        type: "EDIT_PRODUCT",
        payload: product,
    }
};

export const deleteProduct = (product) => {
    return {
        type: "DELETE_PRODUCT",
        payload: product,
    }
};