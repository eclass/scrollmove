type behavior = 'auto' | 'smooth'
type block = 'start' | 'center' | 'end' | 'nearest'
type inline = 'nearest' | 'start' | 'center' | 'end'

export type options = {
  behavior?: behavior
  block?: block
  inline?: inline
}
