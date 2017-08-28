import request from "@/helpers/client";

export async function loadData ({commit}, url) {
    let response = await request(url, {})
    
    commit('setData', response, {root: true});
}

export async function loadNextPagination ({commit}, url) {
    let response = await request(url, {});
    commit("setPagination", response, {root: true});
}

export async function clearDisplay ({commit}) {
    commit("clearDisplay", null, {root: true});
}