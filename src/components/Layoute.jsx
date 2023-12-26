import { Outlet } from "react-router-dom"
import AppNav from "./AppNav"

function Layoute() {
  return (
    <div>
        <AppNav/>
        <Outlet/>
        <footer style={{marginTop:"5rem"}}>This is Footer Page</footer>
    </div>
  )
}

export default Layoute



// نو بار همیشه هست،فوتر هم همیشه هست و فقط محتوای وسطشون تغییر میکند که برای نمایش محتوا از اوتلت استفاده میکنیم