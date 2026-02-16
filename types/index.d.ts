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

declare interface FooterLinkItem {
  label: string
  href: string
}

declare interface FooterColumn {
  title: string
  items: FooterLinkItem[]
}

declare function useDataHeaderNav(): {
  headerNavItems: HeaderNavItem[]
}

declare function useDataFooter(): {
  footerColumns: FooterColumn[]
}

declare function useDataCatalog(endpoint?: string): {
  items: Ref<CatalogItem[]>
  page: Ref<number>
  limit: Ref<number | undefined>
  pending: Ref<boolean>
  finished: Ref<boolean>
  total: Ref<number>
  totalPages: Ref<number>
  error: Ref<Error | null>
  init: (params?: { page?: number; limit?: number }) => Promise<void>
  loadMore: () => void
}
