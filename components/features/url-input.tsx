"use client"

import { Field } from "@/components/ui/field"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import { ArrowRight } from "lucide-react"

export function InputInputGroup() {
    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText()
            const input = document.getElementById("input-group-url") as HTMLInputElement
            if (input) {
                input.value = text
                input.focus()
            }
        } catch (err) {
            console.error("Failed to read clipboard:", err)
        }
    }

    return (
        <div className="w-full max-w-xl mx-auto space-y-3">
            <Field>
                <InputGroup className="h-14 rounded-xl border border-gray-300 bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100 transition-all overflow-hidden">

                    <InputGroupInput
                        id="input-group-url"
                        placeholder="Paste your video link..."
                        className="text-base text-gray-900 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:outline-none px-4"
                    />


                    <InputGroupAddon align="inline-end" className="gap-1 pr-1.5">
                        <button
                            type="button"
                            onClick={handlePaste}
                            className="px-4 h-10 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                            Paste
                        </button>

                        <button
                            type="submit"
                            className="flex items-center gap-2 px-4 h-10 bg-black hover:bg-gray-900 text-white text-sm font-medium rounded-lg transition-colors">
                            Download
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </InputGroupAddon>

                </InputGroup>
            </Field>
        </div>
    )
}