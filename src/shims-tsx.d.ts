import Vue, { VNode } from 'vue';
import { LoDashStatic } from 'lodash';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
  const _: LoDashStatic;
  interface HTMLElement {
    // 进入全屏
    webkitRequestFullscreen(options?: FullscreenOptions): Promise<void>;
    webkitRequestFullScreen(options?: FullscreenOptions): Promise<void>;
    msRequestFullscreen(options?: FullscreenOptions): Promise<void>;
    mozRequestFullScreen(options?: FullscreenOptions): Promise<void>;
  }
  interface Document {
    // 当前全屏的元素
    readonly webkitFullscreenElement: Element | null;
    readonly msFullscreenElement: Element | null;
    readonly mozFullScreenElement: Element | null;
    readonly msFullScreenElement: Element | null;

    // 退出全屏
    webkitExitFullscreen(): Promise<void>;
    msExitFullscreen(): Promise<void>;
    mozCancelFullScreen(): Promise<void>;
  }
  interface Window {
      fullScreen: boolean;
  }
  interface InfoType {
      total: number;
      pageSize: number;
      pageNo: number;
  }
}

declare module 'element-ui';
