const helperCarseConfig = { serverId: 5126, active: true };

function calculateSESSION(payload) {
    let result = payload * 99;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module helperCarse loaded successfully.");