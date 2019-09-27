import React from "react";

import { Skeleton, List, Avatar, Icon, Card } from "antd";

const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: "http://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class DefaultPage extends React.Component {
  state = {
    loading: true
  };

  onChange = checked => {
    this.setState({ loading: !checked });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }
  render() {
    const { loading } = this.state;

    return (
      <Card>
        {/* <Switch checked={!loading} onChange={this.onChange} /> */}

        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={
                !loading && [
                  <IconText type="star-o" text="156" key="skeleton-star-o" />,
                  <IconText type="like-o" text="156" key="skeleton-like-o" />,
                  <IconText type="message" text="2" key="skeleton-message" />
                ]
              }
              extra={
                !loading && (
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                )
              }
            >
              <Skeleton loading={loading} active avatar>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </Skeleton>
            </List.Item>
          )}
        />
      </Card>
    );
  }
}

export default DefaultPage;
