import Mock from "mockjs";
import { userLogin } from "@mocks/user";
import { projectList } from "@mocks/project";

class CustomizedMock {
  constructor(setupConfigs = {}) {
    Mock.setup(setupConfigs);
    this.mockList = {};

    this.logger = req => this.mockLogger(req);
  }

  genRequestKey(url, requestType) {
    return window.btoa(requestType + "#" + url);
  }

  mockLogger(req) {
    console.log("mockLogger -> req", req);
    let newKey = this.genRequestKey(
      req.url.replace(new RegExp("http://localhost"), ""),
      req.type
    );
    let resp = this.mockList[newKey](req);
    console.log("mockLogger -> resp", resp);

    return resp;
  }

  mock(url, requestType, template) {
    let key = this.genRequestKey(url, requestType.toLocaleUpperCase());
    this.mockList[key] = template;
    Mock.mock(new RegExp(url), requestType, this.logger);
  }
}

const customMock = new CustomizedMock({
  timeout: 1000
});

// 用户
customMock.mock("/api/user/login", "post", userLogin);
// 项目
customMock.mock("/api/project/list", "post", projectList);

export default Mock;
