
const stateParent = "state";


export const getLocalState = function(type) {
    const localState = window.localStorage.getItem(stateParent);
    let localStateArray = [];
    if (localState !== null) {
        localStateArray = JSON.parse(localState)[type] || [];
    }
    return localStateArray;
};

export const addToLocalState = function(type, value) {
    let localState = JSON.parse(window.localStorage.getItem(stateParent)) || {};
    if (localState[type] === undefined) { localState[type] = []; }
    localState[type].push(value);
    const stateString = JSON.stringify(localState);
    window.localStorage.setItem(stateParent, stateString);
};

export const updateLocalState = function(type,index, value) {
    let localState = JSON.parse(window.localStorage.getItem(stateParent));
    let localStateArray = localState[type];
    console.info('local', localStateArray);
    localStateArray[index].text = value;
    localState[type] = localStateArray;
    window.localStorage.setItem(stateParent, JSON.stringify(localState));
};

export const deleteFromLocalState = function(type, index) {
    let localState = window.localStorage.getItem(stateParent);
    let typeArray = [], stateObject = {};
    if (localState !== null) {
        stateObject = JSON.parse(localState);
        typeArray = stateObject[type];
        typeArray.splice(index, 1);
        stateObject[type] = typeArray;
    }
    window.localStorage.setItem(stateParent, JSON.stringify(stateObject));
};