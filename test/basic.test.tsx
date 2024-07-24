import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import React from 'react'
import { expect, test } from 'vitest'
import TestLink from './test-link'

test('Link changes the state when hovered', async () => {
    render(<TestLink page='http://antfu.me'>Anthony Fu</TestLink>)

    const link = screen.getByText('Anthony Fu')

    expect(link).toHaveAccessibleName('Link is normal')

    await userEvent.hover(link)

    expect(link).toHaveAccessibleName('Link is hovered')

    await userEvent.unhover(link)

    expect(link).toHaveAccessibleName('Link is normal')
})
