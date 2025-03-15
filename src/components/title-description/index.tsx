import { TitleDescriptionProps } from './type'

export function TitleDescription({ title, description }: TitleDescriptionProps) {
  return (
    <section className="py-[70px]">
      <div className="mx-auto px-4 sm:container">
        <div className="border-b border-stroke">
          <h2 className="mb-2 text-2xl font-semibold text-dark">{title}</h2>
          <p className="mb-6 text-sm font-medium text-body-color">{description}</p>
        </div>
      </div>
    </section>
  )
}
