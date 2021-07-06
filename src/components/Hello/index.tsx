import React from 'react';

export interface IHelloProps {
  /**
   * 属性描述
   * @description       类型Type
   * @description.zh-CN 中文描述
   * @default           必填
   */
  type: string; // 支持识别 TypeScript 可选类型为非必选属性
  /**
   * 可以这样写属性描述
   * @description       也可以显式加上描述名
   * @description.zh-CN 中文描述
   * @default           支持定义默认值
   */
  className?: string; // 支持识别 TypeScript 可选类型为非必选属性
}

const Hello: React.FC<IHelloProps> = () => <>Hello World!</>;

export default Hello;
