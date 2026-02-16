export interface FooterLinkItem {
  label: string
  href: string
}

export interface FooterColumn {
  title: string
  items: FooterLinkItem[]
}

const footerColumns: FooterColumn[] = [
  {
    title: 'Каталог',
    items: [
      { label: 'Все бренды', href: '#' },
      { label: 'Nike', href: '#' },
      { label: 'Adidas', href: '#' },
      { label: 'Puma', href: '#' },
      { label: 'New Balance', href: '#' }
    ]
  },
  {
    title: 'Помощь',
    items: [
      { label: 'Доставка', href: '#' },
      { label: 'Заказ и оплата', href: '#' },
      { label: 'Обмен и возврат', href: '#' },
      { label: 'F. A. Q.', href: '#' }
    ]
  },
  {
    title: 'Информация',
    items: [
      { label: 'Преимущества', href: '#' },
      { label: 'Гарантия и безопасность', href: '#' },
      { label: 'Индивидуальный заказ', href: '#' },
      { label: 'Акции', href: '#' }
    ]
  },
  {
    title: 'Компания',
    items: [
      { label: 'О нас', href: '#' },
      { label: 'Блог', href: '#' },
      { label: 'Отзывы', href: '#' },
      { label: 'Контакты', href: '#' }
    ]
  }
]

export const useDataFooter = (): { footerColumns: FooterColumn[] } => {
  return {
    footerColumns
  }
}
