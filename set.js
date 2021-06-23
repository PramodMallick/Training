const s = new Set();
s.add('one')
s.add('two')
s.add('three')
s.add('four')

s.delete('one')
s.has('two')
console.log(s)
console.log(s.has('two'))