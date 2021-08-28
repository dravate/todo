export default {
    TODO ({commit}, todopayload) {
        commit("SAVE_TODO", todopayload)
    },
    REMOVE({commit}, todopayload) {
        commit("REMOVE_TODO", todopayload)
    },
    COMPLETE({commit}, todopayload) {
        commit("COMPLETE_TODO", todopayload)
    }
}