function Person(name, foods) {
  this.name = name;
  this.foods = foods;
}

Person.prototype.fetchFavFoods = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(this.foods), 2000);
  });
}

describe('mocking learning', () => {
  it('mocks a reg function', () => {
    const fetchDogs = jest.fn();
    fetchDogs('juno');
    fetchDogs('juno');
    expect(fetchDogs).toHaveBeenCalled();
    expect(fetchDogs).toHaveBeenCalledWith('juno');
    expect(fetchDogs).toHaveBeenCalledTimes(2);
  });

  it('can create a person', () => {
    const me = new Person('Zach', ['pizza', 'burgers']);
    expect(me.name).toBe('Zach');
  });
  
  it('can fetch foods', async () => {
    const me = new Person('Zach', ['pizza', 'burgers']);
    // mock the favFoods function
    me.fetchFavFoods = jest.fn().mockResolvedValue(['sushi', 'ramen']);
    const favFoods = await me.fetchFavFoods();
    expect(favFoods).toContain('sushi');
  });
});