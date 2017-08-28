import Vue from "vue"

export const setData = (state, payload) => {
    Object.assign(state, payload);
}

export const clearDisplay = (state, payload) => {
    Object.keys(state).forEach(key => {
        if (key === "pokemon") {
            state[key] = []
        } else {
            state[key] = undefined;            
        }
    })
}