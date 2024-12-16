import { ADMIN_ROUTE, LOGIN_ROUTE, MAINPAGE_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, VACANCY_ROUTE } from "./utils/consts"
import Admin from "./pages/Admin"
import Profile from "./pages/Profile"
import MainPage from "./pages/MainPage"
import VacancyPage from "./pages/VacancyPage"
import Auth from "./pages/Auth"

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: PROFILE_ROUTE + '/:id',
    Component: Profile
  },
]

export const publicRoutes = [
  {
    path: MAINPAGE_ROUTE,
    Component: MainPage
  },
  {
    path: VACANCY_ROUTE + '/:id',
    Component: VacancyPage
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
]