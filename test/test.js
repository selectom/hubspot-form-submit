import { expect } from 'chai'
import hubspotSubmit from '../src'

describe('Default module', () => {
	it('Should have content', async function(){
		const res = await hubspotSubmit()
		expect(res).to.equal(false)
	})
})