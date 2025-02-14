export default JSX = {
    el: function (name, attrs, ...content) {
       let d = document.createElement(name)
       attrs && Object.keys(attrs).forEach(k => {
          if (k.startsWith('on'))
             d[k] = attrs[k]
          else
             d.setAttribute(k, attrs[k])
       })
       content.forEach(c => {
          if (Array.isArray(c))
             d.append(...c)
          else if (!(c === null || c === false))
             d.append(c)
       })
       return d
    }
 }
