import React from 'react'
import { Text } from 'ink'
import { UncontrolledTextInput } from 'ink-text-input'

interface IInput {
	placeholder?: string
	label: string
	focus: boolean | undefined
	onSubmit: (q: string) => void
}

export const Input = ({ placeholder, label, focus, onSubmit }: IInput) => {
	const handleSubmit = (q: string) => {
		onSubmit(q)
	}

	return (
		<Text>
			<Text color="#6EE7B7">❯ {label}: </Text>
			<UncontrolledTextInput placeholder={placeholder} focus={focus} onSubmit={handleSubmit} />
		</Text>
	)
}
