const { Itinerary } = require ('../src/ship');

describe ('itinerary constructor', () => {
  it ('returns an itinerary object', () => {
    const itinerary = new Itinerary('name');
        
    expect(itinerary).toBeInstanceOf(Object);
  });
  it ('has ports', () => {
    const amsterdam = jest.fn();
    const lochness = jest.fn();
    const itinerary = new Itinerary([amsterdam, lochness]);
        
    expect(itinerary.ports).toEqual([amsterdam, lochness]);
  });
});

