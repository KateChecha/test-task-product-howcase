export interface HeaderNavItem {
  label: string
  to: string
}

const headerNavItems: HeaderNavItem[] = [
  { label: 'Мужчинам', to: '#' },
  { label: 'Женщинам', to: '#' },
  { label: 'Каталог', to: '#' },
  { label: 'Доставка', to: '#' },
  { label: 'Блог', to: '#' },
  { label: 'О нас', to: '#' }
]

export const useDataHeaderNav = (): { headerNavItems: HeaderNavItem[] } => {
  return {
    headerNavItems
  }
}
