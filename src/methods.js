import crypto from 'crypto'

/** md5加密
 * @param  {string} password
 */
export const md5 = (password) => {
  const md5 = crypto.createHash('md5')
  md5.update(password)
  return md5.digest('hex')
}
/** 清除信息
 * @param  {event} e
 */
export const clearMsg = (e) => {
  if (e.target.value.replace(/\s/g, '').length === 0) {
    e.target.parentNode.nextElementSibling.style.display = 'none'
  } else {
    e.target.parentNode.nextElementSibling.style.display = 'block'
  }
}
/** sessionStonre
 * @param  {string} value
 */
export const setStore = (value) => {
  window.sessionStorage.setItem('user', value)
}
/** sessionStonre
 * @param  {string} name
 */
export const getStore = (name) => {
  return window.sessionStorage.getItem(name)
}
