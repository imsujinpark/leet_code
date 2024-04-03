function checkIfInstanceOf(obj: any, classFunction: any): boolean {
    if (obj === null || obj === undefined) return false;
    if (typeof(classFunction) !== 'function') return false;
    if (classFunction === Object) return true;

    switch (typeof obj) {
        // check the classFunction seperately for primitive data types
        case 'number': 
            return classFunction === Number;
        case 'string':
            return classFunction === String;
        case 'boolean':
            return classFunction === Boolean;
        case 'bigint':
            return classFunction === BigInt;
        case 'symbol':
            return classFunction === Symbol;
        case 'undefined':
            return classFunction === undefined;
        case 'object':
            return obj instanceof classFunction;
        default:
            return false;
    }
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */