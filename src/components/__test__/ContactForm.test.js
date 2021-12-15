import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from '../../sections/Contact'

test('renders contact form', () => {
  const onSubmit = jest.fn()
  render(<ContactForm onSubmit={onSubmit} />)
  const contactForm = screen.getByTestId('contactForm')
  // fill with valid items
  // submit contact form
  expect(contactForm).toBeInTheDocument()
  fireEvent.submit(contactForm)
  expect(onSubmit).toHaveBeenCalled()
  //   expect(element.innerHTML).toMatch('2')
})
