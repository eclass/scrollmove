type behavior = 'auto' | 'smooth'
type block = 'start' | 'center' | 'end' | 'nearest'
type inline = 'nearest' | 'start' | 'center' | 'end'

export type optionsType = {
  behavior?: behavior
  block?: block
  inline?: inline
}
