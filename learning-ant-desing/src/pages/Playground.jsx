import React from "react";
import ADButton from "../components/ADButton";
import ADFloatButton from "../components/ADFloatButton";
import ADTypography from "../components/ADTypography";
import ADDivider from "../components/ADDivider";
import ADFlex from "../components/ADFlex";
import ADGrid from "../components/ADGrid";

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
        </div>
    );
};

export default Playground;
