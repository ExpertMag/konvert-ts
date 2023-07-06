"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
function isResponseSuccess(res) {
    return res.status === PaymentStatus.Success;
}
function dataCode(res) {
    if (isResponseSuccess(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error('XEQ');
    }
}
