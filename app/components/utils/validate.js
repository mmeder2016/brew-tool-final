/* ************************************************************************ */
/*
    This helper provides the the functions validate the email and password
    fields from a form.
*/
var valBypass = true;

var validate = {

    checkEmail: function(email) {
        if(!valBypass) return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
        return true;
    },

    checkPassw: function(passw, cpassw) {
        var bRet = false;

        if(!valBypass) {
            if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(passw)) {
                if(passw === cpassw)
                    bRet = true;
            }
        } else bRet = true;
        return bRet;
    }
};

// We export the API helper
module.exports = validate;
