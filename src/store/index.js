import { createStore } from 'vuex'

import Journal from '../modules/daybook/store/journal'

const journalModule = createStore({
	modules: {
		Journal
	}
})

export default journalModule