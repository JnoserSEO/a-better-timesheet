const { saveLocalValue } =  require('./localStorage')

beforeEach(() => {
    // values stored in tests will also be available in other tests unless you run
    localStorage.clear();
});

test('should save to localStorage', () => {
    const KEY = 'foo'
    const VALUE = 'bar'
    saveLocalValue(KEY, VALUE);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
    expect(localStorage.__STORE__[KEY]).toBe(VALUE);
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
});