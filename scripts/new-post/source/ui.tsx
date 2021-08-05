import React from 'react'
import { Box, Newline, Text, useApp } from 'ink'

import { state } from './state'
import { Input, MultiSelect } from './components/index'

import { authors } from '../../../src/_data/authors'

const App = () => {
	const [fieldNo, setFieldNo] = React.useState(1)
	const { exit } = useApp()

	return (
		<Box flexDirection="column">
			<Newline count={1} />

			<Text color="magentaBright">Compose New Post</Text>

			<Input
				label="Title"
				placeholder=" default: Untitled"
				focus={fieldNo === 1}
				onSubmit={(title: string) => {
					if (title.trim() === '') {
						state.title = 'Untitled'
					} else {
						state.title = title
					}
					setFieldNo(2)
				}}
			/>

			{fieldNo >= 2 && (
				<MultiSelect
					label="Authors "
					// placeholder="default: Untitled"
					focus={fieldNo === 2}
					options={authors.map(({ name }) => ({ label: name, value: name }))}
					onSubmit={(authors) => {
						state.authors = authors.map(({ label }) => label)
						setFieldNo(3)
						exit()
					}}
				/>
			)}

			<Newline />

			{fieldNo === 3 && (
				<Text>
					Title is <Text color="yellow">{state.title}</Text> & Author is{' '}
					<Text color="yellow">{state.authors}</Text>
				</Text>
			)}
		</Box>
	)
}

module.exports = App
export default App
