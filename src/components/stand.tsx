// Created 1/31/25 5:00PM CST
// Author(s): math-rad
// To use dynamic generation in the future

import '@/aesthetics.css'
import {FormTitle, FormSection, FormTextInput, FormIncrementable, FormIncrementTable, CoreFormTheme} from '@/lib/FunctionalElement'
import {Minus, Plus} from 'lucide-react'
import {getForm} from '@/form-schemes/Stand.ts'

import {useState} from "react";
import {TextSelection} from "lucide-react";
import {Container, MantineProvider, NumberInput, TextInput, Checkbox} from '@mantine/core'


const criticals = [
    "died",
    "tipped",
    "red card",
    "mechanism broke",
    "bumper malfunction"
]

// Define functional templates

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function StandForm() {
    // @ts-ignore
    const form = getForm()

    return (
        <MantineProvider theme={CoreFormTheme}>
            <div className="formContainer">
                <FormTitle title="Stand Scouting Form"/>
                <FormSection title="testing">
                    <FormIncrementTable title="increment title" fields={
                        ["I", "II", "III", "IV"]
                    }></FormIncrementTable>
                </FormSection>




                <FormSection title="Meta">
                    <FormTextInput title="Name"/>
                    <FormTextInput title="Event"/>
                </FormSection>
                <FormSection title="Autonomous">
                    <FormIncrementTable title="Algae" fields={
                       ["I", "II"]
                    }/>
                    <FormIncrementable title="algae/processor"/>
                    <FormTextInput title="algae/net"/>
                    <FormTextInput title="coral/level1"/>
                    <FormTextInput title="coral/level2"/>
                    <FormTextInput title="coral/level3"/>
                    <FormTextInput title="coral/level4"/>
                </FormSection>
                <FormSection title="Teleop">
                    <FormTextInput title="algae/processor"/>
                    <FormTextInput title="algae/net"/>
                    <FormTextInput title="coral/level1"/>
                    <FormTextInput title="coral/level2"/>
                    <FormTextInput title="coral/level3"/>
                    <FormTextInput title="coral/level4"/>
                </FormSection>

                <FormSection title="End game">
                    <Checkbox title="does park"/>
                    <TextInput title="type"/>
                    <Checkbox title="successed"/>
                    <TextInput title="performance"/>
                </FormSection>

                <FormSection title="Section">
                    <FormTextInput title="Name"/>

                    <Container className="massIncrementContainer">
                        <FormIncrementable title="Coral" description="Level 1"/>
                        <FormIncrementable title="Coral" description="Level 2"/>
                        <FormIncrementable title="Coral" description="Level 3"/>
                        <FormIncrementable title="Coral" description="Level 4"/>
                    </Container>

                </FormSection>
            </div>
        </MantineProvider>
    )
}