import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import FormGenerator from "../components/formGenerator/formGenerator";
import MeteoApi from "../meteoAPI/meteoApi";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/FormGenerator">
                <FormGenerator/>
            </ComponentPreview>
            <ComponentPreview path="/MeteoApi">
                <MeteoApi/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
