
declare interface CatalogItem {
  id: number
  name: string
  price: number
  image: string
}

declare interface HeaderNavItem {
  label: string
  to: string
}

declare function useDataHeaderNav(): {
  headerNavItems: HeaderNavItem[]
}
