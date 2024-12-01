import React from "react";
import { Layout} from "@consta/uikit/Layout"

const Header = () => {
    return(
        <Layout>
        <div>
            <Menu />
            <hr />
                <Outlet/>
        </div>
        </Layout>
    )
}