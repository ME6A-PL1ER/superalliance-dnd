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


                <FormSection title="Meta">
                    <FormTextInput title="Name"/>
                    <FormTextInput title="Event"/>
                </FormSection>
                <FormSection title="Autonomous">
                    // stuff goes here
                </FormSection>
                <FormSection title="Teleop">
                    // stuff goes here
                </FormSection>

                <FormSection title="End game">
                    // stuff goes here
                </FormSection>
            </div>
        </MantineProvider>
    )
}