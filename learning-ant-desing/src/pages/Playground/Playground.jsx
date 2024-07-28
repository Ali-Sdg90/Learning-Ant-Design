import React, { useState } from "react";
import ADButton from "../../components/ADButton";
import ADFloatButton from "../../components/ADFloatButton";
import ADTypography from "../../components/ADTypography";
import ADDivider from "../../components/ADDivider";
import ADFlex from "../../components/ADFlex";
import ADGrid from "../../components/ADGrid";
import ADLayout from "../../components/ADLayout";
import ADLayout1 from "../../components/examples/ADLayout1";
import MyLayout1 from "../../components/examples/MyLayout1";
import MyLayout2 from "../../components/examples/MyLayout2";
import ADSpace from "../../components/ADSpace";
import ADTitle from "../../components/ADTitle";
import { ConfigProvider, theme } from "antd";

import Style from "./Playground.module.scss";
import ADDropdown from "../../components/ADDropdown";
import MyDropdown1 from "../../components/examples/MyDropdown1";

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
            </ConfigProvider>
        </div>
    );
};

export default Playground;
