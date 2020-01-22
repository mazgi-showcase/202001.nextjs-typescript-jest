import React from 'react'
import X from '.'
import { shallow } from 'enzyme'

describe('Component xxx', () => {
  it('render the X', () => {
    const result = shallow(<X />).contains(<p>X</p>)
    expect(result).toBeTruthy()
  })
})
