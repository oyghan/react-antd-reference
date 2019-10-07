import React from "react";
import BaseLayout from "@components/layouts/base-layout";

function HomePage(props) {
  return (
    <BaseLayout>
      {/* 这里要填充内容 */}
      {props.children}
    </BaseLayout>
  );
}

export default HomePage;
