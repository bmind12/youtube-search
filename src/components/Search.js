import React from 'react'
import { reduxForm, Field } from 'redux-form'

let Search = ({ handleSubmit, submitting }) =>
    <form>
        <Field component="input" name="search" />
        <button disabled={submitting} type="submit">Search</button>
    </form>

Search = reduxForm({
    form: 'search'
})(Search)

export default Search
