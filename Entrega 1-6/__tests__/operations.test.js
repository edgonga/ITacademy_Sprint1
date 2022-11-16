const pibMundial = require('..__tests__/pibMundial')
const salariFinalMes = require('..__tests__/salariFinalMes')
const distanciaRecorreguda = require('..__tests__/distanciaRecorreguda')
const rentaPerCapita = require('..__tests__/rentaPerCapita')

// Suma

test('la suma es correcta', () => {
    expect(pibMundial(4,2)).toBe(6)
 })

 test('la suma amb negatius també és correcta', () => {
    expect(pibMundial(4,-2)).toBe(2)
 })

 test('si li passem un string i un número ens retornarà False', () => {
    expect(pibMundial("string sense sentit", 4)).toBe(false)
 })

 test('si li passem dos strings ens retornarà un FALSE', () => {
    expect(pibMundial("el inglés se enseña mal", "yo no soy racista pero...")).toBe(False)
 })


// Resta

 test('la resta es correcta', () => {
    expect(salariFinalMes(4,2)).toBe(2)
 })

 test('la resta amb negatius també és correcta', () => {
    expect(salariFinalMes(4,-2)).toBe(6)
 })

 test('si li passem un string i un número ens retornarà False', () => {
    expect(salariFinalMes("string sense sentit", 4)).toBe(false)
 })

 test('si li passem dos strings ens retornarà un FALSE', () => {
    expect(salariFinalMes("el inglés se enseña mal", "yo no soy racista pero...")).toBe(False)
 })


 // Multiplicació

 test('la multiplicació és correcta', () => {
    expect(distanciaRecorreguda(4,2)).toBe(8)
 })

 test('la multiplicació amb ritme negatiu també és correcta', () => {
    expect(distanciaRecorreguda(4,-2)).toBe(-8)
 })

 test('la multiplicació amb 0 és 0', () => {
    expect(distanciaRecorreguda(0,2)).toBe(0)
 })

 test('la multiplicació sent el temps negatiu ens tornarà FALSE', () => {
    expect(distanciaRecorreguda(-7,2)).toBe(false)
 })

 test('si li passem un string i un número ens retornarà False', () => {
    expect(distanciaRecorreguda("string sense sentit", 4)).toBe(false)
 })

 test('si li passem dos strings ens retornarà un FALSE', () => {
    expect(distanciaRecorreguda("el inglés se enseña mal", "yo no soy racista pero...")).toBe(False)
 })



 // Divisió

 test('la divisió és correcta', () => {
    expect(rentaPerCapita(4,2)).toBe(2)
 })

 test('la divisió entre ciutadans negatius és false', () => {
    expect(rentaPerCapita(-4,2)).toBe(false)
 })

 test('la divisió entre ciutadans amb decimals és false', () => {
    expect(rentaPerCapita(7.1,2)).toBe(false)
 })

 test('si li passem un string i un número ens retornarà False', () => {
    expect(rentaPerCapita("string sense sentit", 4)).toBe(false)
 })

 test('si li passem dos strings ens retornarà un FALSE', () => {
    expect(rentaPerCapita("el inglés se enseña mal", "yo no soy racista pero...")).toBe(False)
 })