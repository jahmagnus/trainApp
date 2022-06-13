import React from 'react';

//component import
import Field from '../FormComponents/Field'

const GeneralSection = () => {
    return (
        <>
        <Field label="Date" type="date" name="date-time"/>
        <Field label="Time" type="time" name="time-date"/>
        <Field label="Location" type="text" name="location"/>
        </>
    )
}

export default GeneralSection