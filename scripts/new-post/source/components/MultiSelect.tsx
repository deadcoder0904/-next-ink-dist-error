import React from 'react'
import { Box, Text } from 'ink'
import MultiSelectInput, { ListedItem } from 'ink-multi-select'

interface IMultiSelect {
	label: string
	options: ListedItem[]
	focus: boolean | undefined
	onSubmit: (items: ListedItem[]) => void
}

export const MultiSelect = ({ label, options, focus, onSubmit }: IMultiSelect) => {
	const handleSubmit = (items: ListedItem[]) => {
		onSubmit(items)
	}

	const CustomIndicator = () => <Text color="#6EE7B7">❯ </Text>

	return (
		<Box>
			<Text color="#6EE7B7">❯ {label}: </Text>
			<MultiSelectInput
				focus={focus}
				items={options}
				indicatorComponent={CustomIndicator}
				onSubmit={(items: ListedItem[]) => {
					handleSubmit(items)
				}}
			/>
		</Box>
	)
}
