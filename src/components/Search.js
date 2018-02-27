import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

let Search = () => 
    <form>
        <input type="text"/>
    </form>

Search = reduxForm({
    form: 'search'
})(Search)

export default Search