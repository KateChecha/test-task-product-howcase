interface CatalogQueryParams {
    page?: number
    limit?: number
}

interface CatalogResponse {
    total: number
    totalPages: number
    currentPage: number
    limit: number
    products: CatalogItem[]
}

export const useDataCatalog = (endpoint = `https://test-task-api.tapir.ws/products`) => {
    const items = ref<CatalogItem[]>([])
    const page = ref(1)
    const limit = ref<number>()
    const pending = ref(false)
    const finished = ref(false)
    const total = ref(0)
    const totalPages = ref(0)
    const error = ref<Error | null>(null)

    const fetchData = async (pageNum: number) => {
        pending.value = true
        error.value = null

        try {
            const data = await $fetch<CatalogResponse>(endpoint, {
                params: { page: pageNum, ...(limit.value && { limit: limit.value }) }
            })

            total.value = data.total
            totalPages.value = data.totalPages

            page.value = data.currentPage
            items.value = pageNum === 1 ? data.products : [...items.value, ...data.products]

            finished.value = !data.products?.length || data.currentPage >= data.totalPages
        } catch (e) {
            error.value = e as Error
        } finally {
            pending.value = false
        }
    }

    return {
        items,
        page,
        limit,
        pending,
        finished,
        total,
        totalPages,
        error,
        init: (params?: CatalogQueryParams) => {
            page.value = params?.page ?? 1
            limit.value = params?.limit
            finished.value = false
            return fetchData(page.value)
        },
        loadMore: () => !pending.value && !finished.value && fetchData(page.value + 1)
    }
}
