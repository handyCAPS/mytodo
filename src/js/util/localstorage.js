

export const getLocalState = function(item) {
    const localState = window.localStorage.getItem(item).split(',');
    return [...localState];
};

export const setLocalState = function(item, value) {
    const localState = window.localStorage.getItem(item);
    window.localStorage.setItem(item, localState + ',' + value);
};

export const updateLocalState = function (item, index, value) {
    let localState = window.localStorage.getItem(item).split(',');
    localState[index] = value;
    window.localStorage.setItem(item, localState);
    return localState;
};

export const deleteFromLocalState = function(item, index) {
    let localState = window.localStorage.getItem(item).split(',');
    delete localState[index];
    window.localStorage.setItem(item, localState);
    return localState;
};