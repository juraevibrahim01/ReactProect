import { RouterProvider } from "react-router"
import { routes } from "./router"

export const Provider = () => {
    return  <RouterProvider router={routes} />
    
}