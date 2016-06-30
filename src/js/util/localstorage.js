

export const getLocalState = function(item) {
    const localState = window.localStorage.getItem(item);
    let localStateArray = [];
    if (!!localState) {
        localStateArray = localState.split(',');
    }
    return localStateArray;
};

export const setLocalState = function(item, value) {
    const localState = window.localStorage.getItem(item);
    let localStateArray = [];
    let newState = '';
    if (!!localState) {
        localStateArray = localState.split(',');
    }
    localStateArray.push(value);
    newState = localStateArray.join(',');
    window.localStorage.setItem(item, newState);
};

export const updateLocalState = function (item, index, value) {
    let localState = window.localStorage.getItem(item).split(',');
    localState[index] = value;
    window.localStorage.setItem(item, localState.join(','));
    return localState;
};

export const deleteFromLocalState = function(item, index) {
    let localState = window.localStorage.getItem(item);
    let newLocalState = localState;
    if (!!localState) {
        newLocalState = localState.split(',');
        newLocalState.splice(index, 1);
    }
    window.localStorage.setItem(item, newLocalState.join(','));
    return localState;
};