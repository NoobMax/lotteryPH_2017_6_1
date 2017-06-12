/**
 * Created by yccc on 2017/5/5.
 */

/**
 * 存储localStorage
 */
export const setStore = (name, content, type) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  if (!type) { //没传类型就默认sessionStorage
    window.sessionStorage.setItem(name, content);
  } else {
    window.localStorage.setItem(name, content);
  }
}

/**
 * 获取localStorage
 */
export const getStore = (name, type) => {
  if (!name) return;
  if (!type) {
    return window.sessionStorage.getItem(name);
  } else {
    return window.localStorage.getItem(name);
  }

}

/**
 * 删除localStorage
 */
export const removeStore = (name, type) => {
  if (!name) return;
  if (!type) {
    window.sessionStorage.removeItem(name);
  } else {
    window.localStorage.removeItem(name);
  }

}
