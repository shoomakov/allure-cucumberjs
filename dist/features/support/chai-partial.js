export const ChaiPartial = (_chai, utils) => {
    const isType = (type, target) => {
        return utils.type(target).toUpperCase() === type.toUpperCase();
    };
    const partial = (object, expected) => {
        if (object === expected) {
            return true;
        }
        if (isType("object", expected) && isType("object", object)) {
            for (const key of Object.keys(expected)) {
                if (!(key in object)) {
                    return false;
                }
                if (!partial(object[key], expected[key])) {
                    return false;
                }
            }
            return true;
        }
        if (isType("array", expected) && isType("array", object)) {
            if (object.length < expected.length) {
                return false;
            }
            return expected.every((exp) => object.some((obj) => partial(obj, exp)));
        }
        if (isType("RegExp", object) && isType("RegExp", expected)) {
            return object.toString() === expected.toString();
        }
        if (isType("Date", object) && isType("Date", expected)) {
            return object.getTime() === expected.getTime();
        }
        if ((isType("string", object) && isType("string", expected)) ||
            (isType("number", object) && isType("number", expected)) ||
            (isType("boolean", object) && isType("boolean", expected))) {
            return object === expected;
        }
        return false;
    };
    _chai.Assertion.addMethod("partial", function (expected) {
        const object = utils.flag(this, "object");
        this.assert(partial(object, expected), "expected #{this} to be like #{exp}", "expected #{this} to not like #{exp}", expected, object, _chai.config.showDiff);
    });
};
//# sourceMappingURL=chai-partial.js.map