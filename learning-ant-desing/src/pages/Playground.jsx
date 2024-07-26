import React from "react";
import ADButton from "../components/ADButton";
import ADFloatButton from "../components/ADFloatButton";
import ADTypography from "../components/ADTypography";
import ADDivider from "../components/ADDivider";
import ADFlex from "../components/ADFlex";
import ADGrid from "../components/ADGrid";
import ADLayout from "../components/ADLayout";
import ADLayout1 from "../components/examples/ADLayout1";
import MyLayout1 from "../components/examples/MyLayout1";
import MyLayout2 from "../components/examples/MyLayout2";

const Playground = () => {
    return (
        <div>
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
        </div>
    );
};

export default Playground;
