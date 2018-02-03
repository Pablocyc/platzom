
const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function() {
	it('Si la palabra termina en "ar", se le quita esos dos caracteres.', function() {
		const translation = platzom("Programar")
		expect(translation).to.equal("Program")
	})

	it('Si la palabra inicia con Z, se le añade "pe" al final.', function() {
		const translation = platzom("Zorro")
		const translation2 = platzom("Zarpar")

		expect(translation).to.equal("Zorrope")
		expect(translation2).to.equal("Zarppe")

	})

	it('Si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y se debe unir con un guion del medio.', function() {
		const translation = platzom("abecedario")
		expect(translation).to.equal("abece-dario")
	})

	it('Si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas.', function() {
		const translation = platzom("sometemos")
		expect(translation).to.equal("SoMeTeMoS")
	})

})