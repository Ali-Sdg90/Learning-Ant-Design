import React, { useState } from "react";
import ADButton from "../../components/Playground/ADButton";
import ADFloatButton from "../../components/Playground/ADFloatButton";
import ADTypography from "../../components/Playground/ADTypography";
import ADDivider from "../../components/Playground/ADDivider";
import ADFlex from "../../components/Playground/ADFlex";
import ADGrid from "../../components/Playground/ADGrid";
import ADLayout from "../../components/Playground/ADLayout";
import ADLayout1 from "../../components/Playground/examples/ADLayout1";
import MyLayout1 from "../../components/Playground/examples/MyLayout1";
import MyLayout2 from "../../components/Playground/examples/MyLayout2";
import ADSpace from "../../components/Playground/ADSpace";
import ADTitle from "../../components/Playground/ADTitle";
import { ConfigProvider, theme } from "antd";

import Style from "./Playground.module.scss";
import ADDropdown from "../../components/Playground/ADDropdown";
import MyDropdown1 from "../../components/Playground/examples/MyDropdown1";
import ADMenu from "../../components/Playground/ADMenu";
import ADGotoHomepage from "../../components/Playground/ADGotoHomepage";
import ADEditableTable from "../../components/Playground/examples/ADEditableTable";
import MyDate from "../../components/Playground/examples/MyDate";

const Playground = () => {
    const { defaultAlgorithm, darkAlgorithm } = theme;
    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <div className={Style.container}>
            <ConfigProvider
                theme={{
                    algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
                }}
            >
                <ADTitle
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                />
                <ADGotoHomepage />
                <ADButton />
                <ADFloatButton />
                <ADTypography />
                <ADDivider />
                <ADFlex />
                <ADDivider />
                <ADGrid />
                <ADLayout />
                <ADLayout1 />
                <MyLayout1 />
                <MyLayout2 />
                <ADSpace />
                <ADDropdown />
                <MyDropdown1 />
                <ADMenu />
                <ADGotoHomepage />
                <ADEditableTable />
                {/* <MyDate /> */}
            </ConfigProvider>
        </div>
    );
};

export default Playground;
