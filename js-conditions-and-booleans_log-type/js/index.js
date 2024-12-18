let data;
data = [{ a: "null" }, "abc"]
// data = { a: "null" };
// data = null;

function checkTypeofData() {
    if (data === null) {
        return console.log("null")
    }
    if (Array.isArray(data) === true) {
        return console.log("array");
    }
    switch (typeof data) {
        case "object":
            console.log('object');
            break;
        case "string":
            console.log("string")
            break;
        case "number":
            console.log("number")
            break;
        case "undefined":
            console.log("undefined")
            break;
        case "boolean":
            console.log("boolean")
            break;

        case "bigint":
            console.log("bigint")
            break;
        case "symbol":
            console.log("symbol")
            break;
    }
}
checkTypeofData(data)

