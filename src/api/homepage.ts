import request from "../service"
import { HomeData } from "../types/page/homepage"

export const getHomePageData = async () => {
    return await request<HomeData>('/api/homepage')
}