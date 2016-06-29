

export default function getDefaultState() {
    let defaultState = [];
    const localState = window.localStorage.getItem("state.text").split(',');
    return defaultState.concat(localState);
}