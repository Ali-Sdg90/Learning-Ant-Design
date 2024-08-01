// import React from "react";
// import { DatePicker, ConfigProvider } from "antd";
// import {
//     DatePicker as DatePickerJalali,
//     JalaliLocaleListener,
// } from "antd-jalali-plus";
// import fa_IR from "antd/lib/locale/fa_IR";
// import dayjs from "dayjs";
// import jalaliday from "jalaliday";
// // import "antd/dist/antd.css";

// dayjs.extend(jalaliday);

// const MyDate = () => {
//     const date = dayjs().calendar("jalali");

//     return (
//         <ConfigProvider locale={fa_IR} direction="rtl">
//             <JalaliLocaleListener />
//             <div style={{ padding: "20px" }}>
//                 <h3>Gregorian DatePicker:</h3>
//                 <DatePicker />
//                 <br />
//                 <br />
//                 <h3>Jalali DatePicker:</h3>
//                 <DatePickerJalali defaultValue={date} />
//             </div>
//         </ConfigProvider>
//     );
// };

// export default MyDate;
