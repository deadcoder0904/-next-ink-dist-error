import { proxy } from 'valtio'

class State {
	title: string = 'Untitled'
	authors: string[] = []
}

export const state = proxy(new State())
