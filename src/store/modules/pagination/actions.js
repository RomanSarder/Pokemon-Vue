import request from "../../../helpers/client";

export async function loadPagination ({commit}) {
    let response = await request("/pokemon")
    
    commit('setPagination', response);
}