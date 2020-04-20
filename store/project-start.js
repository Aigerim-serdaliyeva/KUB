export const PLAY_PROJECT_START = 'PLAY_PROJECT_START';

export const state = () => ({
    isPlayed: false
});

export const getters = {
    isPlayed: ({ isPlayed }) => isPlayed
};

export const mutations = {
    [PLAY_PROJECT_START](state) {
        state.isPlayed = true;
    }
};
