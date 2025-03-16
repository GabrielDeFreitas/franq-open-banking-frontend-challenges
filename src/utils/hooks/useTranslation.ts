import { useTranslation } from 'react-i18next'

export const useTranslate = (namespace: string) => {
  const { t } = useTranslation()

  return new Proxy(
    {},
    {
      get: (_, key: string) => t(`${namespace}.${key}`)
    }
  ) as Record<string, string>
}
