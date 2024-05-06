import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import FormGenerator from "../components/formGenerator/formGenerator";
import MeteoApi from "../meteoAPI/meteoApi";
import CovidApi from "../animalAPI/animalApi";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/FormGenerator">
                <FormGenerator/>
            </ComponentPreview>
            <ComponentPreview path="/MeteoApi">
                <MeteoApi/>
            </ComponentPreview>
            <ComponentPreview path="/CovidApi">
                <CovidApi/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
