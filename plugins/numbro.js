import numbro from "numbro"

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('numbro', numbro)
}
