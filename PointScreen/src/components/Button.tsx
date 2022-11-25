import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export interface ButtonProps
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  text: string
  onClick: () => void
}

export function Button({ text, ...rest }: ButtonProps) {
  return (
    <button
      className="bg-sky-900 py-2 px-4 rounded text-slate-300 hover:bg-sky-700 z-100"
      {...rest}
    >
      {text}
    </button>
  )
}
