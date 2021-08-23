import { render, screen } from '@testing-library/react'

import { Main } from '.'

describe('<Main />', () => {
  it('should render heading with "NextJS Boilerplate" text', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /nextjs boilerplate/i })
    ).toBeInTheDocument()
  })

  it('should render correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toMatchSnapshot()
  })
})