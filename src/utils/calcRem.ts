interface IWindowObj extends Window {
  calcRem?: (width: number) => void;
}

/**
 * 计算页面rem
 * @param windowObj
 * @param htmlDom
 */
export const initRem = (windowObj: IWindowObj, htmlDom: HTMLElement) => {
  let designWidth = 1080;

  function reCalc() {
    const windowWidth =
      htmlDom.clientWidth < designWidth ? htmlDom.clientWidth : designWidth;
    const fontSize = (windowWidth / designWidth) * 100;

    setFontSize(fontSize);

    const completedFontSize = getFontSize();

    /**
     * 如果实际 fontSize 与设置的 fontSize 不等，则根据比例，重新计算
     */
    if (Math.abs(completedFontSize - fontSize) > 0.1) {
      setFontSize((fontSize * fontSize) / completedFontSize);
    }
  }

  function setFontSize(fontSize: number) {
    htmlDom.style.fontSize = `${fontSize}px`;
  }

  function getFontSize() {
    // @ts-ignore
    return parseFloat(windowObj.getComputedStyle(htmlDom)['font-size']);
  }

  windowObj.calcRem = function (width) {
    designWidth = width;
    reCalc();
    windowObj.addEventListener('resize', reCalc);
  };
};
