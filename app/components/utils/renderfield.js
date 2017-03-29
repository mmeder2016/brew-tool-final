/* ************************************************************************ */
/*
    This helper provides the the functions validate the email and password
    fields from a form.
*/
var React = require('react');

var renderField = {

    textInput: function(id, label) {
        var style={'width':'unset'}
        return this._field(id, label,
            <input style={style} size="8" maxLength="48" type="text" className="form-control" id={id} ref={id}/>
        )
    },

    // multiple label+input on a single line
    textInputs: function(ids, labels) {
        var istyle={'width':'unset'}
        var dstyle={'display':'unset'}
        var inputs = ids.map(function(id, index) {
// To Do: (nth) refactor <input> with _field()
            return (
                <span key={index}>
                    <label htmlFor={id}>{labels[index]}</label>
                    <input style={istyle} size="8" maxLength="48" type="text" className="form-control" key={id} id={id} ref={id}/>
                </span>
            )
        })
        return (
            <div className='form-group'>
                {inputs}
            </div>
        )
    },

    // 
    passInput: function(idtxt, labeltxt) {
        var istyle={'width':'unset'}
        var dstyle={'display':'unset'}

        return (
            <div className='form-group'>
                <span key={index}>
                    <label htmlFor={idtxt}>{labeltxt}</label>
                    <input style={istyle} size="8" maxLength="16" type="password" className="form-control" key={idtxt} id={idtxt} ref={idtxt}/>
                </span>
            </div>
        )
    },

    /*
        attribs{
            rows: ,
            cols: ,
            maxLength: (rows * cols),
            spellcheck: "true"
        }
    */
    textArea: function(id, label, attribs) {
        return this._field(id, label,
            <textarea type="text" className="form-control" id={id} ref={id}/>
        )
    },

    select: function(id, label, values) {
        var options = values.map(function(value) {
            return <option key={value} value={value}>{value}</option>
        })
        return this._field(id, label,
            <select className="form-control" id={id} ref={id}>
                {options}
            </select>
        )
    },

    // for internal use only...
    _field: function(id, label, field) {
        return (
            <div className='form-group'>
                <label htmlFor={id}>{label}</label>
                {field}
            </div>
        )
    }
};

module.exports = renderField;
