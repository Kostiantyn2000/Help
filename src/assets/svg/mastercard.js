import * as React from "react";

const SvgComponent = ({ active }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 291.791 291.791"
    style={{
      enableBackground: "new 0 0 291.791 291.791",
      width: "50px",
      height: "50px",
    }}
    xmlSpace="preserve"
  >
    <path
      style={{
        fill: active === 1 ? "#e2574c" : "white",
      }}
      d="M182.298 145.895c0 50.366-40.801 91.176-91.149 91.176S0 196.252 0 145.895s40.811-91.176 91.149-91.176 91.149 40.819 91.149 91.176z"
    />
    <path
      style={{
        fill: active === 1 ? "#f4b459" : "white",
      }}
      d="M200.616 54.719c-20.442 0-39.261 6.811-54.469 18.181l.073.009c2.991 2.89 6.291 4.924 8.835 8.251l-18.965.301c-2.972 3-5.68 6.264-8.233 9.656H161.3c2.544 3.054 4.896 5.708 7.03 9.081h-46.536c-1.705 2.936-3.282 5.954-4.659 9.09h56.493c1.477 3.127 2.799 5.489 3.921 8.799h-63.76a87.809 87.809 0 0 0-2.535 9.646h68.966c.675 3.155 1.194 6.072 1.55 9.045h-71.884c-.301 3-.456 6.045-.456 9.118h72.859c0 3.228-.228 6.218-.556 9.118h-71.847c.31 3.091.766 6.127 1.368 9.118h68.856a107.579 107.579 0 0 1-2.562 9.008h-63.969c.966 3.118 2.143 6.145 3.428 9.099h56.621c-1.568 3.319-3.346 5.972-5.306 9.081h-46.691a88.709 88.709 0 0 0 6.081 9.154l33.589.501c-2.863 3.437-6.537 5.507-9.884 8.516.182.146-5.352-.018-16.248-.191 16.576 17.105 39.744 27.772 65.446 27.772 50.357 0 91.176-40.82 91.176-91.176s-40.81-91.177-91.175-91.177z"
    />
  </svg>
);

export default SvgComponent;
