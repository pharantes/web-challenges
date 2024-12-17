let data;
data = "null"
function checkTypeofData() {
    if (data === null) {
        return console.log(null)
    }
    switch (typeof data) {
        case "string":
            console.log("string")
            break;
        case "number":
            console.log("number")
            break;
        case "object":
            console.log("object")
            break;
        case "array":
            console.log("object")
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

