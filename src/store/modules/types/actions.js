import request from "@/helpers/client";

export async function loadTypes ({commit}) {
    let response = await request("/type", {})
    
    commit('setTypes', response, {root: true});
}