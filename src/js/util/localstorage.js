

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
    window.localStorage.setItem(item, localState + ',' + value);
};

export const updateLocalState = function (item, index, value) {
    let localState = window.localStorage.getItem(item).split(',');
    localState[index] = value;
    window.localStorage.setItem(item, localState.join(','));
    return localState;
};

export const deleteFromLocalState = function(item, index) {
    console.log('Deleting from localstorage');
    let localState = window.localStorage.getItem(item);
    let newLocalState = localState;
    if (!!localState) {
        newLocalState = localState.split(',').splice(index, 1).join(',');
    }
    window.localStorage.setItem(item, newLocalState);
    return localState;
};